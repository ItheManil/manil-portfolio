import { useLanguage } from '@/hooks/useLanguage';
import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';

const skillsWithLevel = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 82 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'PHP', level: 78 },
  { name: 'MySQL', level: 85 },
  { name: 'PostgreSQL', level: 83 },
  { name: 'Git', level: 87 },
  { name: 'GitHub', level: 85 },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const { count, ref } = useCountUp(level, 1200 + delay * 100);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-primary tabular-nums">{count}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'hsl(var(--muted))' }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, delay: delay * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useLanguage();
  const s = t.skills;

  const categories = [
    { icon: Code2, title: s.categories.frontend, desc: s.categories.frontendDesc },
    { icon: Database, title: s.categories.backend, desc: s.categories.backendDesc },
    { icon: Layers, title: s.categories.fullstack, desc: s.categories.fullstackDesc },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.08 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-3">{s.title}</motion.h2>
          <motion.p variants={fadeUp} className="section-subheading text-center mx-auto mb-14">{s.subtitle}</motion.p>

          {/* Skill bars grid */}
          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto mb-14">
            {skillsWithLevel.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i} />
            ))}
          </motion.div>

          {/* Category cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="glass-card-hover p-6 text-center"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{cat.title}</h3>
                <p className="text-xs text-muted-foreground">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
