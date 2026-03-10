import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SkillCard = ({ name, icon, invert, delay }: { name: string; icon: string; invert?: boolean; delay: number }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ scale: 1.08, y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="glass-card flex flex-col items-center justify-center gap-3 p-5 cursor-default"
  >
    <motion.img
      src={icon}
      alt={name}
      className="w-10 h-10 object-contain"
      style={invert ? { filter: 'invert(1)' } : undefined}
      initial={{ scale: 0, rotate: -30 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.05, type: 'spring', stiffness: 200 }}
    />
    <span className="text-xs font-medium text-muted-foreground">{name}</span>
  </motion.div>
);

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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.06 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-3">{s.title}</motion.h2>
          <motion.p variants={fadeUp} className="section-subheading text-center mx-auto mb-14">{s.subtitle}</motion.p>

          {/* Skill logo grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-4xl mx-auto mb-14">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} invert={skill.invert} delay={i} />
            ))}
          </motion.div>

          {/* Category cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((cat) => (
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
