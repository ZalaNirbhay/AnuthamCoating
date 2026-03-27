import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, FlaskConical, Lightbulb, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const innovations = [
  {
    icon: Microscope,
    title: 'Material Research',
    description: 'Continuous development of nano-composite and hybrid coatings for next-generation protection.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Testing',
    description: 'In-house salt spray, adhesion, impact, and chemical immersion testing per international standards.',
  },
  {
    icon: Lightbulb,
    title: 'Custom Formulations',
    description: 'Tailored coating solutions engineered to meet unique client specifications and environmental conditions.',
  },
  {
    icon: Cpu,
    title: 'Smart Coatings',
    description: 'Exploring self-healing and sensor-integrated coatings for predictive infrastructure maintenance.',
  },
];

const InnovationSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div ref={contentRef} style={{ opacity: 0 }}>
            <span className="text-accent font-semibold tracking-wider text-sm uppercase block mb-2">
              R&D / Innovation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pioneering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Industrial Protection
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our dedicated R&D division invests in cutting-edge material science and application technologies. We collaborate with leading research institutions to develop coatings that outperform conventional solutions — setting new benchmarks for the industry.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>NACE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>SSPC Standards</span>
              </div>
            </div>
          </div>

          {/* Right — Innovation Cards */}
          <div ref={cardsRef} className="space-y-5">
            {innovations.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
