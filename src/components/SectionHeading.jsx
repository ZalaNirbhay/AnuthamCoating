import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold tracking-wider text-sm uppercase block mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-primary'} relative inline-block`}
      >
        {title}
        {/* Underline Decoration */}
        <span className={`block w-20 h-1 mt-4 bg-accent rounded-full ${center ? 'mx-auto' : ''}`}></span>
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
