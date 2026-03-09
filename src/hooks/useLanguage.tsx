import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Lang, translations, Translations } from '@/lib/i18n';

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
