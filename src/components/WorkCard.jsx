import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const WorkCard = ({ work, index, onImageClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
      onClick={() => onImageClick?.(work)}
      id={`work-card-${work.id}`}
    >
      {/* Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">Image unavailable</span>
        </div>
      )}

      {/* Image */}
      <img
        src={work.image}
        alt={work.title}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        referrerPolicy="no-referrer"
      />

      {/* Default Gradient + Title (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
        <span className="inline-block px-2.5 py-1 bg-accent/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">
          {work.category}
        </span>
        <h3 className="text-white text-lg font-bold leading-snug drop-shadow-md">
          {work.title}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100"
        >
          <ZoomIn className="text-accent" size={24} />
        </motion.div>
        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
          {work.category}
        </span>
        <h3 className="text-white text-lg font-bold text-center px-4">
          {work.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default WorkCard;
