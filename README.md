# Belkessam Manil – Portfolio

> A responsive full‑stack developer portfolio built with **React 18**, **TypeScript**, and **Vite**. This site showcases my skills in front‑end and back‑end development, my education, featured projects and professional experience. It features a modern 2026 aesthetic with aurora gradients, glassmorphism and smooth micro‑interactions. The portfolio supports English, French and Arabic (RTL) and is optimised for mobile and desktop devices.

## Features

- **Multi‑language support** – toggle between English, French and Arabic. All copy lives in `src/lib/i18n.ts`, and the `LanguageProvider` automatically updates the document `lang` and `dir` attributes.
- **Modern design** – aurora gradient backgrounds, spotlight effects, glass‑like cards and polished animations using Framer Motion.
- **Responsive layout** – adapts seamlessly across mobile, tablet and desktop viewports.
- **Hero section** – animated introduction with call‑to‑action buttons that scroll to the Projects and Contact sections.
- **About section** – short biography with location, experience, languages spoken and skill focus areas.
- **Skills section** – highlights front‑end, back‑end and full‑stack competencies with clear descriptions.
- **Education section** – showcases academic qualifications with a timeline and details.
- **Projects section** – features notable academic and personal projects; each card lists the year, name, description and technologies used.
- **Experience section** – summarises professional freelancing work, duties and future goals.
- **Contact section** – includes a contact form built with React Hook Form and Zod validation, plus a download CV button. Notifications use Sonner/Toaster.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS with class‑variance‑authority & Tailwind Merge
- **UI components:** shadcn/ui (built on Radix UI primitives)
- **State management & data fetching:** @tanstack/react‑query
- **Routing:** React Router 6
- **Animations:** framer‑motion
- **Form handling:** react‑hook‑form with zod validation
- **Carousel:** embla‑carousel‑react
- **Utilities:** clsx, date‑fns, lucide‑react icons, Sonner/Toaster notifications and more
- **Testing:** Vitest, @testing‑library/react and Playwright for end‑to‑end tests

## Folder Structure

```
├── src
│   ├── components        # Reusable UI components (Navbar, HeroSection, AboutSection,
│   │                     # SkillsSection, EducationSection, ProjectsSection,
│   │                     # ExperienceSection, ContactSection, AuroraBackground, etc.)
│   ├── hooks             # Custom hooks (e.g. useLanguage)
│   ├── lib               # Utility modules (i18n translations, helper functions)
│   ├── pages             # Route components (`Index.tsx` for the home page,
│   │                     # `NotFound.tsx` for 404)
│   ├── assets            # Static assets (images, icons)
│   ├── index.tsx         # Entry point
│   └── App.tsx           # Main application component with React Query provider,
│                         # router and global providers
├── public                # Static public files
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── package.json
├── tsconfig.json
└── README.md             # Project documentation (this file)
```

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/ItheManil/manil-portfolio.git
   cd manil-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` by default.

4. **Run tests**

   ```bash
   # Unit tests
   npm test

   # End‑to‑end tests (Playwright)
   npx playwright test
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

   This generates an optimised production build in the `dist` folder.

## Localization

Translations are defined in `src/lib/i18n.ts`. To add a new language:

1. Add the language code to the `Lang` union type.
2. Provide translations for each section under a new key in the `translations` object.
3. Update any components where necessary to include the new language in selectors or toggles.

The `LanguageProvider` sets the document `lang` and text direction (`dir`) automatically based on the selected language. Arabic uses RTL (`dir="rtl"`).

## Deployment

Because this project uses Vite, deployment is straightforward. You can host the static `dist` folder on any modern hosting platform (e.g. Vercel, Netlify, GitHub Pages). A typical deployment workflow looks like this:

```bash
npm run build
# Deploy the contents of the dist directory to your hosting provider
```

If you’re using Lovable to edit and publish the project, you can simply click **Share → Publish** in the Lovable dashboard.

## Contributing

This portfolio is primarily a personal project. However, feel free to fork the repository and adapt it to build your own portfolio. If you find bugs or have suggestions, you’re welcome to open issues or pull requests.

## Acknowledgements

- **[shadcn/ui](https://ui.shadcn.com)** – a beautiful collection of accessible React components built on Radix UI.
- **[Tailwind CSS](https://tailwindcss.com)** – utility‑first CSS framework for rapid UI development.
- **[TanStack Query](https://tanstack.com/query/latest)** – powerful asynchronous state management.
- **[Framer Motion](https://www.framer.com/motion/)** – production‑ready animation library for React.
- **[Embla Carousel](https://www.embla-carousel.com/)** – library for responsive carousels.
- **[Lucide](https://lucide.dev)** – open‑source icon library.
