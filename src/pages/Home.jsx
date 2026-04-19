import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplet, Shield, Activity, Anchor, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import AboutSection from '../components/AboutSection';
import IndustriesSection from '../components/IndustriesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import BenefitsSection from '../components/BenefitsSection';
import InnovationSection from '../components/InnovationSection';
import TechnicalSection from '../components/TechnicalSection';
import { featuredProjects } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  // FIXED: Service card links now match actual product slugs
  const services = [
    {
      title: 'Epoxy Floor Coating',
      description: 'High-performance epoxy solutions for industrial floors, offering superior durability, chemical resistance, and ease of maintenance.',
      icon: Layers,
      link: '/products/epoxy-floor-coating',
    },
    {
      title: 'Pipe Internal Coating',
      description: 'Specialized internal coating for pipelines to prevent corrosion, improve flow efficiency, and extend infrastructure lifespan.',
      icon: Droplet,
      link: '/products/pipe-internal-coating',
    },
    {
      title: 'Anti-Corrosion Coating',
      description: 'Advanced protection systems designed to safeguard steel structures and equipment from harsh industrial environments.',
      icon: Shield,
      link: '/products/anti-corrosion-coating',
    },
    {
      title: 'Chemical Resistant Flooring',
      description: 'Heavy-duty flooring systems engineered to withstand aggressive chemicals, acids, and solvents in processing plants.',
      icon: Activity,
      link: '/products/chemical-resistant-flooring',
    },
    {
      title: 'Waterproofing Solutions',
      description: 'Advanced membrane and liquid-applied waterproofing that protects buildings from leaks, seepage, and dampness.',
      icon: Anchor,
      link: '/products/waterproofing',
    },
  ];

  const features = [
    '5+ Years Experience',
    'ISO Certified Processes',
    'Advanced Technology',
    'Expert Team',
    'On-Time Delivery',
    'Safety Compliant',
  ];

  return (
    <div className="bg-background overflow-x-hidden">
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST LOGOS BAR */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 font-medium mb-8 uppercase tracking-widest text-xs">
            Trusted By Leading Industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['adani', 'RELIANCE', 'L&T', 'TATA', 'ONGC'].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors duration-300 cursor-default select-none"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT COMPANY */}
      <AboutSection />

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Our Industrial Implementations"
            subtitle="Expert Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-primary rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-8">We offer tailored coating services for unique industrial requirements.</p>
              <Link
                to="/products"
                className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View All Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* 6. COATING TECHNOLOGIES */}
      <TechnologiesSection />

      {/* 7. FEATURED PROJECTS */}
      <section ref={projectsRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionHeading
              title="Recent Projects"
              subtitle="Portfolio"
              center={false}
            />
            <Link to="/gallery" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mb-12">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer"
                style={{ opacity: 0 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Always-visible bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-semibold mb-1 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                {/* Default label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white text-lg font-bold mt-1">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BENEFITS */}
      <BenefitsSection />

      {/* 9. WHY CHOOSE US */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Why Choose Anutham Coating?"
                subtitle="The Anutham Advantage"
                center={false}
                light={true}
              />
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We combine technical expertise with industry-leading materials to deliver coating solutions that stand the test of time. Our commitment to quality and safety makes us the preferred partner for major industrial players.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={22} />
                    <span className="font-medium text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-lg mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 translate-x-3 translate-y-3 opacity-50"></div>
              <img
                src="https://lh3.googleusercontent.com/d/1GZeW4TbXUnDYNIe2kiS2OUbpX1sWk0DP=w800"
                alt="Anutham Coating Industrial Operations"
                className="w-full rounded-2xl shadow-2xl relative z-10 aspect-[4/3] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-10 bg-white p-5 sm:p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-[260px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-primary">5.0/5</span>
                </div>
                <p className="text-gray-600 text-sm italic">&quot;Exceptional quality and timely delivery. Anutham is our go-to for all coating needs.&quot;</p>
                <p className="text-gray-900 font-bold text-sm mt-3">- Project Manager, Adani</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. INNOVATION / R&D */}
      <InnovationSection />

      {/* 11. TECHNICAL CAPABILITY */}
      <TechnicalSection />

      {/* TEAM SECTION REMOVED per business request */}

      {/* 12. CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-primary via-[#0d3a5c] to-primary text-white text-center relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider text-sm uppercase block mb-4"
          >
            Get Started Today
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
          >
            Protect Your Critical Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Get in touch with our experts for a free consultation and quote for your next industrial project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-10 py-5 bg-accent hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all duration-300 inline-block"
              >
                Get a Free Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/gallery"
                className="px-10 py-5 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 inline-block"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
