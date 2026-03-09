import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ProjectsSection = () => {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: 0.1 }}>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-12">{p.title}</motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {p.items.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card-hover p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="category-pill">{proj.category}</span>
                  <span className="text-xs text-muted-foreground">{proj.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{proj.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
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
