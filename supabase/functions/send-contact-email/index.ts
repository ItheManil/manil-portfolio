import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT_MAX = 5; // max submissions per IP per hour

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("contact_rate_limit")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", oneHourAgo);

    if (countError) {
      console.error("Rate limit check error:", countError);
    }

    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, message, honeypot } = await req.json();

    // Honeypot check - bots fill hidden fields
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate inputs
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return new Response(JSON.stringify({ error: "Invalid message" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // HTML escape to prevent injection
    function escapeHtml(s: string): string {
      return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["manil.belkessam1@gmail.com"],
        subject: `Portfolio Contact: ${safeName}`,
        reply_to: email.trim(),
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Portfolio Message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <pre style="white-space: pre-wrap; font-family: sans-serif;">${safeMessage}</pre>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Record this submission for rate limiting
    await supabaseAdmin
      .from("contact_rate_limit")
      .insert({ ip_address: ip });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
