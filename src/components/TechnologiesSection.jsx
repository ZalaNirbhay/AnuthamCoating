import { motion } from 'framer-motion';
import { Layers, Paintbrush, ShieldCheck, Atom, Gauge, Thermometer } from 'lucide-react';
import SectionHeading from './SectionHeading';

const technologies = [
  {
    icon: Layers,
    title: 'Epoxy Coatings',
    description: 'High-build epoxy systems for floors, tanks, and structural steel with excellent adhesion and chemical resistance.',
  },
  {
    icon: Paintbrush,
    title: 'Polyurethane Coatings',
    description: 'UV-stable topcoats providing superior gloss retention and weathering resistance for exterior applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Fusion Bonded Epoxy (FBE)',
    description: 'Thermosetting powder coatings for pipeline protection delivering outstanding corrosion defense.',
  },
  {
    icon: Atom,
    title: 'Ceramic Coatings',
    description: 'Ultra-thin ceramic composites offering extreme heat resistance and thermal barrier properties.',
  },
  {
    icon: Gauge,
    title: 'Intumescent Coatings',
    description: 'Fire-protective coatings that expand when exposed to heat, insulating structural steelwork.',
  },
  {
    icon: Thermometer,
    title: 'High-Temperature Coatings',
    description: 'Specialized systems rated for service temperatures up to 1000°C for exhaust and furnace applications.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechnologiesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Coating Technologies"
          subtitle="Our Expertise"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-background rounded-xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-accent shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <tech.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{tech.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
