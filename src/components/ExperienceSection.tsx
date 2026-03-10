import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Briefcase, Target, Users } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

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
            <motion.div variants={fadeUp} className="relative ps-8">
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

            {/* Goals */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">{ex.goalsTitle}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {ex.goals.map((g, i) => (
                  <div key={i} className="glass-card-hover p-5 text-center">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      {i === 0 ? <Users className="w-4 h-4 text-primary" /> : <Target className="w-4 h-4 text-primary" />}
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{g.title}</h4>
                    <p className="text-xs text-muted-foreground">{g.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
