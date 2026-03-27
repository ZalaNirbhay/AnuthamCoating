import { motion } from 'framer-motion';
import { Ruler, Beaker, ClipboardCheck, Layers, Settings, FileCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const capabilities = [
  {
    icon: Ruler,
    title: 'Coating Thickness',
    items: ['DFT Range: 50–5000 microns', 'Precision spray & brush application', 'Multi-layer build-up capability'],
  },
  {
    icon: Beaker,
    title: 'Materials',
    items: ['Epoxy, Polyurethane, FBE', 'Ceramic & Intumescent systems', 'Zinc-rich primers & silicone coatings'],
  },
  {
    icon: ClipboardCheck,
    title: 'Standards & Compliance',
    items: ['ISO 9001:2015 Certified', 'NACE / SSPC Standards', 'ASTM Testing Protocols'],
  },
  {
    icon: Layers,
    title: 'Surface Preparation',
    items: ['Sa 2.5 / Sa 3 blast cleaning', 'UHP water jetting', 'Mechanical & chemical preparation'],
  },
  {
    icon: Settings,
    title: 'Application Methods',
    items: ['Airless spray systems', 'Electrostatic application', 'Fluidized bed & dip coating'],
  },
  {
    icon: FileCheck,
    title: 'Quality Control',
    items: ['Holiday / pinhole detection', 'Adhesion pull-off testing', 'DFT measurement & documentation'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const TechnicalSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Technical Capability"
          subtitle="Our Specifications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-background rounded-xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                  <cap.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-primary">{cap.title}</h3>
              </div>
              <ul className="space-y-3">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;
