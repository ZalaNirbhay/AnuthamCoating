import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Target, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '99%', label: 'Client Retention' },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div ref={textRef} style={{ opacity: 0 }}>
            <SectionHeading
              title="About Anutham Coating"
              subtitle="Who We Are"
              center={false}
            />
            <p className="text-secondary text-lg leading-relaxed mb-6">
              <strong className="text-primary">Anutham Coating PVT. LTD.</strong> is a trusted name in industrial coating solutions, delivering superior protection for critical infrastructure across India. With 5+ years of dedicated expertise, we have earned the confidence of leading industrial players through consistent quality, technical excellence, and on-time project delivery.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-10">
              We specialize in epoxy flooring, pipe internal coating, anti-corrosion systems, and waterproofing — serving petrochemical, power, manufacturing, and infrastructure sectors. Our ISO-certified processes and skilled coating engineers ensure every project meets international standards of durability, safety, and performance.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-secondary mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3 translate-x-3 translate-y-3"></div>
            <img
              src="https://lh3.googleusercontent.com/d/1lDXHltPuioKkvbtcBAM-Nn0bE2e6WWRC=w800"
              alt="Anutham Coating Industrial Operations"
              className="w-full h-auto rounded-2xl shadow-xl relative z-10 aspect-[4/3] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg z-20 hidden md:block">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
