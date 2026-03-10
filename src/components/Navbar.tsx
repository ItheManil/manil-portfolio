import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { Lang } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import profilePhoto from '@/assets/profile-photo.jpeg';
import flagUK from '@/assets/flag-uk.png';
import flagFrance from '@/assets/flag-france.png';
import flagAlgeria from '@/assets/flag-algeria.png';

const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'] as const;
const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: flagUK },
  { code: 'fr', label: 'FR', flag: flagFrance },
  { code: 'ar', label: 'AR', flag: flagAlgeria },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el?.offsetTop ?? 0 };
      });
      const scrollPos = window.scrollY + 120;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPos >= offsets[i].top) {
          setActive(offsets[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLabels = t.nav;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar-glass transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center">
          <img src={profilePhoto} alt="Belkessam Manil" className="w-8 h-8 rounded-full object-cover border-2 border-primary/30" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                active === s ? 'nav-active text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {navLabels[s as keyof typeof navLabels]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-lg border border-border p-1">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
                  lang === l.code ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-4 py-3 text-sm font-medium rounded-lg text-start transition-colors ${
                  active === s ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                }`}
              >
                {navLabels[s as keyof typeof navLabels]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
