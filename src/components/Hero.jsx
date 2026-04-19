import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../data/products';
import { gsap } from 'gsap';

const Hero = () => {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 30, clipPath: 'inset(100% 0% 0% 0%)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8 }
    )
      .fromTo(
        headingRef.current?.children || [],
        { opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
        { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, stagger: 0.15 },
        '-=0.3'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background — industrial factory image */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay — ensures text readability on ALL screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/60 to-[#0A2540]/85 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/80 via-[#0A2540]/40 to-transparent z-10"></div>

        {/* Desktop image — high-res landscape */}
        <img
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2670&auto=format&fit=crop"
          alt="Industrial Factory"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 relative z-20 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          <div ref={taglineRef} style={{ opacity: 0 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/15 text-accent border border-accent/25 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 backdrop-blur-sm tracking-wide">
              High Performance Industrial Coating Solutions
            </span>
          </div>

          <div ref={headingRef}>
            <h1 className="text-[1.75rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white sm:leading-[1.1] mb-1.5 sm:mb-3" style={{ opacity: 0 }}>
              Advanced Protection for
            </h1>
            <h1 className="text-[1.75rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-[1.1] mb-5 sm:mb-8" style={{ opacity: 0 }}>
              <span className="text-accent">Critical Infrastructure</span>
            </h1>
          </div>

          <p
            ref={descRef}
            className="text-sm sm:text-lg md:text-xl text-white/85 mb-7 sm:mb-10 max-w-2xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            We deliver high-performance coating solutions for petrochemical, manufacturing,
            and industrial sectors. Ensuring durability, safety, and operational excellence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 sm:px-10 sm:py-5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base sm:text-lg rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300"
              >
                <MessageCircle size={20} /> Get a Free Quote
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/gallery"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 sm:px-10 sm:py-5 bg-white/10 border-2 border-white/25 hover:border-white/60 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowRight size={20} /> Explore Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20 hidden sm:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase opacity-70">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
