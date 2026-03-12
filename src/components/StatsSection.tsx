import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { Briefcase, Users, Code, Award } from 'lucide-react';

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } };

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, suffix = '+', delay = 0 }: StatCardProps) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      className="glass-card p-6 md:p-8 text-center group"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div ref={ref} className="text-4xl md:text-5xl font-bold font-display gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();
  const s = t.stats;

  const stats = [
    { icon: <Code className="w-6 h-6" />, value: 8, label: s.projects, suffix: '+', delay: 0 },
    { icon: <Users className="w-6 h-6" />, value: 5, label: s.clients, suffix: '+', delay: 0.1 },
    { icon: <Briefcase className="w-6 h-6" />, value: 2, label: s.experience, suffix: '+', delay: 0.2 },
    { icon: <Award className="w-6 h-6" />, value: 4, label: s.technologies, suffix: '', delay: 0.3 },
  ];

  return (
    <section id="stats" className="py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-3">
            {s.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-center mb-10 md:mb-12">
            {s.subtitle}
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
