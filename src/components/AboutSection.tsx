import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Languages } from 'lucide-react';

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } };
const slideLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } } };
const slideRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } } };

const AboutSection = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.1 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-3">{a.title}</motion.h2>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto space-y-3 mb-8 md:mb-12">
            <p className="section-subheading mx-auto text-center">{a.p1}</p>
            <p className="section-subheading mx-auto text-center">{a.p2}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Expertise cards */}
            <motion.div variants={fadeUp} className="glass-card p-5 md:p-6">
              <h3 className="text-sm font-semibold text-primary mb-1">{a.frontend}</h3>
              <p className="text-sm text-muted-foreground">{a.frontendDesc}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card p-5 md:p-6">
              <h3 className="text-sm font-semibold text-primary mb-1">{a.backend}</h3>
              <p className="text-sm text-muted-foreground">{a.backendDesc}</p>
            </motion.div>

            {/* Quick facts */}
            <motion.div variants={fadeUp} className="glass-card p-5 md:p-6 space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{a.location}</p>
                  <p className="text-sm font-medium text-foreground">{a.locationVal}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{a.experience}</p>
                  <p className="text-sm font-medium text-foreground">{a.experienceVal}</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp} className="glass-card p-5 md:p-6 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Languages className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">{a.languages}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {a.langList.map((l) => (
                  <div key={l.lang} className="text-center">
                    <p className="text-sm font-medium text-foreground">{l.lang}</p>
                    <p className="text-xs text-muted-foreground">{l.level}</p>
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

export default AboutSection;
