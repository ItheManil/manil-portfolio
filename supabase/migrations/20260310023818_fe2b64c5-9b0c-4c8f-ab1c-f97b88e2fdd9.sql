CREATE TABLE public.contact_rate_limit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for fast lookups by IP and time
CREATE INDEX idx_contact_rate_limit_ip_time ON public.contact_rate_limit (ip_address, created_at);

-- Auto-cleanup old entries (older than 1 hour)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.contact_rate_limit WHERE created_at < now() - interval '1 hour';
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_cleanup_rate_limits
AFTER INSERT ON public.contact_rate_limit
FOR EACH STATEMENT
EXECUTE FUNCTION public.cleanup_old_rate_limits();

-- RLS: no public access, only service role can read/write
ALTER TABLE public.contact_rate_limit ENABLE ROW LEVEL SECURITY;