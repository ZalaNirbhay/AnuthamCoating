import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search } from 'lucide-react';
import { WHATSAPP_URL } from '../data/products';
import { works, workCategories } from '../data/works';
import SectionHeading from '../components/SectionHeading';
import WorkCard from '../components/WorkCard';
import ImageLightbox from '../components/ImageLightbox';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtered + searched works
  const filteredWorks = useMemo(() => {
    let result = works;

    if (filter !== 'All') {
      result = result.filter((w) => w.category === filter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (w) =>
          w.title.toLowerCase().includes(query) ||
          w.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [filter, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: works.length };
    works.forEach((w) => {
      counts[w.category] = (counts[w.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleImageClick = (work) => {
    setCurrentWork(work);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    setTimeout(() => setCurrentWork(null), 300);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <SectionHeading
          title="Our Work Gallery"
          subtitle="Real Projects, Real Results"
        />
        <p className="text-center text-gray-500 -mt-6 mb-10 max-w-2xl mx-auto text-lg">
          Browse through our portfolio of industrial coating projects — from factory floors to pipelines, every project is a testament to our quality.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 shadow-sm"
              id="gallery-search"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {workCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-accent/50 hover:text-accent hover:shadow-md'
              }`}
            >
              {category}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  filter === category
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {categoryCounts[category] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            Showing <span className="font-bold text-primary">{filteredWorks.length}</span>{' '}
            {filteredWorks.length === 1 ? 'project' : 'projects'}
            {filter !== 'All' && (
              <> in <span className="font-semibold text-accent">{filter}</span></>
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <WorkCard
                key={work.id}
                work={work}
                index={index}
                onImageClick={handleImageClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">
              Try changing your search or filter to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
              id="reset-filters"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
            Want Similar Results?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Our experts are ready to analyze your site and recommend the perfect
            coating system for your specific needs.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg relative z-10"
            id="gallery-whatsapp-cta"
          >
            <MessageCircle size={20} /> Contact Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        currentWork={currentWork}
        works={filteredWorks}
        onClose={handleLightboxClose}
        onNavigate={(work) => setCurrentWork(work)}
      />
    </div>
  );
};

export default Gallery;
