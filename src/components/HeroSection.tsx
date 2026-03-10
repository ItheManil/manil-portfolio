import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';

const useTypingEffect = (text: string, speed = 80, startDelay = 400) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const prevText = useRef(text);

  useEffect(() => {
    if (text !== prevText.current) {
      prevText.current = text;
      setDisplayed('');
      setDone(false);
    }

    const timeout = setTimeout(() => {
      if (displayed.length < text.length) {
        setDisplayed(text.slice(0, displayed.length + 1));
      } else {
        setDone(true);
      }
    }, displayed.length === 0 ? startDelay : speed);

    return () => clearTimeout(timeout);
  }, [text, displayed, speed, startDelay]);

  return { displayed, done };
};

const HeroSection = () => {
  const { t } = useLanguage();

  const { displayed: typedTitle, done: typingDone } = useTypingEffect(t.hero.title, 60, 600);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Spotlight */}
      <div className="spotlight top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4"
          >
            <span className="gradient-text">{t.hero.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 min-h-[1.75em]"
          >
            {typedTitle}
            {!typingDone && (
              <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              {t.hero.cta1}
              <ArrowDown className="w-4 h-4" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
              <MessageCircle className="w-4 h-4" />
              {t.hero.cta2}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
