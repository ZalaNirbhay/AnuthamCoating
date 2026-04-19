import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { products, WHATSAPP_URL } from '../data/products';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-wider text-sm uppercase block mb-3">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industrial Coating Solutions</h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Explore our range of high-performance coating systems designed to protect, preserve, and enhance your industrial infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div key={product.slug} variants={cardVariants}>
                <Link
                  to={`/products/${product.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={product.coverImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <product.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-5 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">We also offer custom coating solutions tailored to your specific industrial requirements.</p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Products;
