import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { techIconMap } from '@/lib/techIcons';

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

const TechLogo = ({ name, index }: { name: string; index: number }) => {
  const tech = techIconMap[name];
  if (!tech) return <span className="tech-pill">{name}</span>;

  const { icon, color, invert } = tech;

  return (
    <motion.div
      className="group relative flex flex-col items-center gap-1.5"
      whileHover={{ y: -4, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <motion.div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          background: `hsl(${color} / 0.12)`,
          border: `1px solid hsl(${color} / 0.2)`,
        }}
        whileHover={{
          boxShadow: `0 0 16px hsl(${color} / 0.3)`,
        }}
      >
        <motion.img
          src={icon}
          alt={name}
          className={`w-5 h-5 object-contain ${invert ? 'dark:[filter:invert(1)_brightness(1.2)]' : ''}`}
          initial={{ scale: 0, rotate: -15 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06, type: 'spring', stiffness: 220 }}
        />
      </motion.div>
      <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.1 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-8 md:mb-12">{p.title}</motion.h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {p.items.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card-hover p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="category-pill">{proj.category}</span>
                  <span className="text-xs text-muted-foreground">{proj.year}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5">{proj.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {proj.tech.map((tech, idx) => (
                    <TechLogo key={tech} name={tech} index={idx} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
