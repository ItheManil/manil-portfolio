import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } };
const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } } };

const ExperienceSection = () => {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <section id="experience" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.1 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-8 md:mb-12">{ex.title}</motion.h2>

          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Experience card */}
            <motion.div variants={slideRight} className="relative ps-8">
              <div className="timeline-line start-0" />
              <div className="timeline-dot absolute start-0 top-1 -translate-x-1/2" />

              <div className="glass-card p-5 md:p-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{ex.role}</h3>
                    </div>
                    <p className="text-sm text-primary font-medium">{ex.company}</p>
                  </div>
                  <span className="category-pill">{ex.period}</span>
                </div>
                <ul className="space-y-2">
                  {ex.duties.map((d, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
