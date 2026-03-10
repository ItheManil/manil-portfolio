import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '190 90% 50%' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '120 40% 45%' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '0 0% 70%', invert: true },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '50 90% 50%' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '15 80% 55%' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '210 80% 55%' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '190 80% 50%' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '240 30% 55%' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '200 60% 45%' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '210 50% 50%' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '210 70% 50%' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '10 80% 50%' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '0 0% 70%', invert: true },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SkillCard = ({ name, icon, color, invert, index }: { name: string; icon: string; color: string; invert?: boolean; index: number }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default overflow-hidden"
      style={{
        background: `linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)`,
        border: `1px solid hsl(var(--border))`,
      }}
    >
      {/* Animated dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ background: `hsl(${color})` }}
        animate={{
          x: [0, 12, -8, 5, 0],
          y: [0, -10, 6, -4, 0],
          opacity: [0.6, 1, 0.4, 0.8, 0.6],
        }}
        transition={{
          duration: 6 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ left: `${20 + (index * 17) % 60}%`, top: `${30 + (index * 13) % 40}%` }}
      />

      {/* Icon container with colored background */}
      <motion.div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background: `hsl(${color} / 0.12)`,
          border: `1px solid hsl(${color} / 0.2)`,
        }}
        whileHover={{
          boxShadow: `0 0 20px hsl(${color} / 0.3)`,
        }}
      >
        <motion.img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
          style={invert ? { filter: 'invert(1) brightness(1.2)' } : undefined}
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.04, type: 'spring', stiffness: 200 }}
        />
      </motion.div>

      {/* Label */}
      <span className="text-sm font-medium text-foreground">{name}</span>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, hsl(${color} / 0.08) 0%, transparent 70%)`,
        }}
      />
    </motion.div>
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

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20,
    color: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--accent)' : 'var(--aurora-3)',
  }));

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: `hsl(${p.color})`,
              opacity: 0,
            }}
            animate={{
              y: [0, -40, 10, -20, 0],
              x: [0, 15, -10, 5, 0],
              opacity: [0, 0.4, 0.15, 0.35, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.06 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-3">{s.title}</motion.h2>
          <motion.p variants={fadeUp} className="section-subheading text-center mx-auto mb-14">{s.subtitle}</motion.p>

          {/* Skill logo grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mb-14">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} invert={skill.invert} index={i} />
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
