import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto px-6"
      >
        <div className="text-8xl font-bold text-primary/10 mb-4 select-none">404</div>
        <h1 className="text-3xl font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
          >
            <Home size={18} /> Go Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-primary font-bold rounded-xl hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={18} /> View Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
