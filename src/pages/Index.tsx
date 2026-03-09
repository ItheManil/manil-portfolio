import { LanguageProvider } from '@/hooks/useLanguage';
import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AuroraBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
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
