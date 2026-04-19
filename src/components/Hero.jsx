import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// WhatsApp SVG icon
const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
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
        <div className="absolute inset-0   z-10"></div>
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
                <WhatsAppIcon size={20} /> Chat on WhatsApp
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
