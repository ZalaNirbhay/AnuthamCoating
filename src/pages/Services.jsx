import { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { products } from '../data/products';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Services" 
          subtitle="What We Do" 
          center={true}
        />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-secondary leading-relaxed">
            Anutham Coating provides end-to-end industrial protection services. From surface preparation to multi-layer coating application and strict quality control, we ensure every project meets international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((service, index) => (
            <ServiceCard 
              key={service.slug}
              title={service.name}
              description={service.shortDescription}
              icon={service.icon}
              link={`/products/${service.slug}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
