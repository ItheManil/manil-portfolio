import { lazy, Suspense } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LanguageTransition from '@/components/LanguageTransition';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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
        <FloatingWhatsApp />
        <Navbar />
        <LanguageTransition>
          <main>
            <HeroSection />
            <Suspense fallback={null}>
              <StatsSection />
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
        </LanguageTransition>
      </div>
    </LanguageProvider>
  );
};

export default Index;
