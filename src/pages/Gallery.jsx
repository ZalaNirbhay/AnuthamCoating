import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { galleryImages, WHATSAPP_URL } from '../data/products';
import SectionHeading from '../components/SectionHeading';

const categories = ['All', 'Epoxy Coating', 'PU Coating', 'Waterproofing'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === filter));
    }
  }, [filter]);

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Project Gallery" subtitle="Our Work" />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-accent/50 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.src} // using src as unique key for animation
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Want Similar Results?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Our experts are ready to analyze your site and recommend the perfect coating system for your specific needs.
          </p>
          
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg relative z-10"
          >
            <MessageCircle size={20} /> Contact Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
