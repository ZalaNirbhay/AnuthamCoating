import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, MessageCircle, Phone, AlertTriangle, Lightbulb, BadgeCheck, MapPin, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { products, WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
  }, [slug]);

  // Proper "Not Found" UI
  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="text-red-500" size={36} />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-3">Product Not Found</h1>
          <p className="text-secondary mb-8 leading-relaxed">
            The product you&apos;re looking for doesn&apos;t exist or may have been moved. Please check the URL or browse our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft size={18} /> View All Products
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-primary font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Home size={18} /> Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.gallery.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev < product.gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                <product.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-accent font-semibold mt-3">{product.tagline}</p>
            <p className="text-gray-300 text-lg mt-4 max-w-3xl">{product.shortDescription}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </motion.a>
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors border border-white/20"
              >
                <Phone size={20} /> Call {PHONE_DISPLAY}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Image Gallery — Cover + Thumbnails */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Main Preview Image */}
            <div className="lg:col-span-3 relative group">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-gray-100"
              >
                <img
                  src={product.gallery[selectedImage]}
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Navigation Arrows */}
              {product.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm shadow-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm shadow-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm font-medium">
                {selectedImage + 1} / {product.gallery.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-2 gap-3">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-3 ring-accent ring-offset-2 shadow-lg scale-[0.97]'
                      : 'opacity-70 hover:opacity-100 hover:shadow-md'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-red-100 rounded-lg flex items-center justify-center text-red-500">
                  <AlertTriangle size={22} />
                </div>
                <h2 className="text-xl font-bold text-red-700">The Problem</h2>
              </div>
              <p className="text-red-900/80 leading-relaxed text-[0.95rem]">{product.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 border border-green-100 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Lightbulb size={22} />
                </div>
                <h2 className="text-xl font-bold text-green-700">Our Solution</h2>
              </div>
              <p className="text-green-900/80 leading-relaxed text-[0.95rem]">{product.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
              <BadgeCheck size={22} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100"
              >
                <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                <span className="text-secondary text-[0.95rem] leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <MapPin size={22} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Where It&apos;s Used</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-primary/5 rounded-xl p-5 text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-default group"
              >
                <span className="text-sm font-semibold text-primary group-hover:text-white transition-colors">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Interested in {product.name}?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get a free consultation and quote. We typically respond within 5 minutes on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </motion.a>
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors border border-white/20"
            >
              <Phone size={20} /> Call Now
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
