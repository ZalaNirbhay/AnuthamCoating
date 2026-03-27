import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-secondary mb-6 leading-relaxed line-clamp-3 text-[0.95rem]">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300 text-sm"
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </motion.div>
  );
};

export default ServiceCard;
