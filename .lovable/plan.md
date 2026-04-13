

## Plan: Add "Ma Clé à Alger" to Professional Projects

**What**: Add the "Ma Clé à Alger" webinar landing page as a second professional project in all three languages (EN, FR, AR).

**Project details** (based on the live site):
- **Name**: Ma Clé à Alger
- **Category**: Freelance Project
- **Year**: 2026
- **Description**: Webinar landing page for a real estate company targeting the Algerian diaspora. Features a registration form, countdown timer, speaker profiles, FAQ section, and multilingual support (EN/FR/AR).
- **Tech stack**: React.js, TypeScript, Tailwind CSS
- **Site URL**: https://maclealger.lovable.app
- **GitHub URL**: https://github.com/ItheManil/maclealger (note: currently returns 404 — may need to be made public)

**Changes**:

1. **`src/lib/i18n.ts`** — Add a second entry to the `professional` array in all 3 language blocks (EN, FR, AR):
   - EN: "Webinar landing page for a real estate company targeting the Algerian diaspora abroad. Features registration form, countdown timer, speaker profiles, FAQ, and trilingual support."
   - FR: "Landing page de webinaire pour une entreprise immobilière ciblant la diaspora algérienne. Formulaire d'inscription, compte à rebours, profils intervenants, FAQ et support trilingue."
   - AR: "صفحة هبوط لندوة عبر الإنترنت لشركة عقارية تستهدف الجالية الجزائرية في الخارج. نموذج تسجيل، عد تنازلي، ملفات المتحدثين، أسئلة شائعة ودعم ثلاثي اللغات."

No component changes needed — the existing `ProjectsSection.tsx` already maps over `p.professional` dynamically.

