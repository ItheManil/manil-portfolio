import { lazy, Suspense } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const AboutSection = lazy(() => import('@/components/AboutSection'));
const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const EducationSection = lazy(() => import('@/components/EducationSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AuroraBackground />
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={null}>
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </Suspense>
        </main>
        <footer className="relative z-10 border-t border-border py-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Belkessam Manil. All rights reserved.
          </p>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
