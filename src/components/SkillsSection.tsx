import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';

const allSkills = [
  'React.js', 'Node.js', 'Express.js', 'JavaScript', 'TypeScript',
  'HTML5', 'CSS3', 'Tailwind CSS', 'PHP', 'MySQL', 'PostgreSQL', 'Git', 'GitHub',
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

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
          <motion.p variants={fadeUp} className="section-subheading text-center mx-auto mb-12">{s.subtitle}</motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-14 max-w-3xl mx-auto">
            {allSkills.map((skill) => (
              <span key={skill} className="tech-pill">{skill}</span>
            ))}
          </motion.div>

          {/* Category cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeUp} className="glass-card-hover p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
