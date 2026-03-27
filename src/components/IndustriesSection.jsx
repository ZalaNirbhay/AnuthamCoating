import { motion } from 'framer-motion';
import { Flame, Zap, Factory, Droplets, Building2, Anchor } from 'lucide-react';
import SectionHeading from './SectionHeading';

const industries = [
  {
    icon: Flame,
    title: 'Oil & Gas',
    description: 'Pipeline protection, storage tanks, and offshore platforms.',
  },
  {
    icon: Zap,
    title: 'Power Plants',
    description: 'Thermal, nuclear, and renewable energy infrastructure.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Production floors, assembly lines, and warehouses.',
  },
  {
    icon: Droplets,
    title: 'Petrochemical',
    description: 'Chemical processing units, reactors, and storage facilities.',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    description: 'Bridges, flyovers, water treatment plants, and public works.',
  },
  {
    icon: Anchor,
    title: 'Marine',
    description: 'Ship hulls, port structures, and offshore installations.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Sector Expertise"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <industry.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
