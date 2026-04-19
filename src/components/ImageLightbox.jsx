import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ isOpen, currentWork, works, onClose, onNavigate }) => {
  const currentIndex = works.findIndex((w) => w.id === currentWork?.id);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(works[currentIndex - 1]);
  }, [currentIndex, works, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < works.length - 1) onNavigate(works[currentIndex + 1]);
  }, [currentIndex, works, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={onClose}
          id="lightbox-overlay"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200"
            id="lightbox-close"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200"
              id="lightbox-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {currentIndex < works.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200"
              id="lightbox-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={currentWork.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative z-40 max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentWork.image}
              alt={currentWork.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">
                {currentWork.category}
              </span>
              <h3 className="text-white text-xl font-bold mt-1">
                {currentWork.title}
              </h3>
              <span className="text-gray-400 text-sm">
                {currentIndex + 1} / {works.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
