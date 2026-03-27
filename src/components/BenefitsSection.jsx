import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Timer, Leaf, BadgeDollarSign, Wrench, BarChart3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Superior Corrosion Protection',
    description: 'Multi-layer coating systems providing decades of reliable protection against the harshest industrial environments.',
  },
  {
    icon: Timer,
    title: 'Extended Asset Lifespan',
    description: 'Reduce maintenance cycles and extend the operational life of critical infrastructure by up to 3x.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solutions',
    description: 'Low-VOC and solvent-free coating options that meet stringent environmental regulations.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Cost Efficiency',
    description: 'Reduce long-term maintenance costs by up to 60% with our high-performance coating systems.',
  },
  {
    icon: Wrench,
    title: 'Minimal Downtime',
    description: 'Rapid curing formulations and expert application techniques ensure minimal operational disruption.',
  },
  {
    icon: BarChart3,
    title: 'Performance Guarantee',
    description: 'Backed by comprehensive warranties and rigorous quality testing at every stage.',
  },
];

const BenefitsSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards[0]?.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Why Our Coatings?"
          subtitle="Key Benefits"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex items-start gap-5 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              style={{ opacity: 0 }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <benefit.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1.5">{benefit.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
