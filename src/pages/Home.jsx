import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplet, Shield, Activity, Anchor, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Epoxy Floor Coating',
      description: 'High-performance epoxy solutions for industrial floors, offering superior durability, chemical resistance, and ease of maintenance.',
      icon: Layers,
      link: '/services/epoxy-floor',
    },
    {
      title: 'Pipe Internal Coating',
      description: 'Specialized internal coating for pipelines to prevent corrosion, improve flow efficiency, and extend infrastructure lifespan.',
      icon: Droplet,
      link: '/services/pipe-coating',
    },
    {
      title: 'Anti-Corrosion Coating',
      description: 'Advanced protection systems designed to safeguard steel structures and equipment from harsh industrial environments.',
      icon: Shield,
      link: '/services/anti-corrosion',
    },
    {
      title: 'Chemical Resistant Flooring',
      description: 'Heavy-duty flooring systems engineered to withstand aggressive chemicals, acids, and solvents in processing plants.',
      icon: Activity,
      link: '/services/chemical-resistant',
    },
    {
      title: 'Industrial Flooring',
      description: 'Comprehensive flooring solutions tailored for warehouses, factories, and assembly lines to handle heavy loads.',
      icon: Anchor, // Using Anchor as a placeholder for strong/heavy duty
      link: '/services/industrial-flooring',
    },
  ];

  const features = [
    '15+ Years Experience',
    'ISO Certified Processes',
    'Advanced Technology',
    'Expert Team',
    'On-Time Delivery',
    'Safety Compliant',
  ];

  const projects = [
    {
      id: 1,
      name: 'Adani Power Plant Flooring',
      category: 'Industrial Flooring',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Reliance Pipeline Protection',
      category: 'Pipe Coating',
      image: 'https://images.unsplash.com/photo-1535581652167-3d6b9324a6e8?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'L&T Manufacturing Unit',
      category: 'Epoxy Coating',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-background overflow-x-hidden">
      <Hero />

      {/* Trust Section / Clients */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-8 uppercase tracking-widest text-sm">Trusted By Leading Industries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text Placeholders for Logos tailored to be visual */}
             <span className="text-2xl font-bold text-gray-700">adani</span>
             <span className="text-2xl font-bold text-gray-700">RELIANCE</span>
             <span className="text-2xl font-bold text-gray-700">L&T</span>
             <span className="text-2xl font-bold text-gray-700">TATA</span>
             <span className="text-2xl font-bold text-gray-700">ONGC</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
            
            {/* Call to Action Card for View All */}
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
                to="/services"
                className="px-6 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <SectionHeading 
               title="Recent Projects" 
               subtitle="Portfolio" 
               center={false} 
             />
             <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mb-12">
               View All Projects <ArrowRight size={20} />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold">{project.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
               View All Projects <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative Circles */}
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
                    <CheckCircle className="text-accent flex-shrink-0" size={24} />
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
              className="relative"
            >
              <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 translate-x-4 translate-y-4 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
                alt="Industrial Professional" 
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
              
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                   <div className="flex">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={16} className="text-yellow-400 fill-current" />
                     ))}
                   </div>
                   <span className="font-bold text-primary">5.0/5</span>
                </div>
                <p className="text-gray-600 text-sm italic">"Exceptional quality and timely delivery. Anutham is our go-to for all coating needs."</p>
                <p className="text-gray-900 font-bold text-sm mt-3">- Project Manager, Adani</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-orange-600 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Protect Your Assets?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 mb-10 max-w-2xl mx-auto"
          >
            Get in touch with our experts for a free consultation and quote for your next industrial project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact"
              className="px-10 py-5 bg-white text-accent font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:-translate-y-1 inline-block"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
