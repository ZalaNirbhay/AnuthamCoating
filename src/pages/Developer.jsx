import { motion } from 'framer-motion';
import { Mail, Phone, Code2, Palette, Smartphone, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Developer = () => {
  const services = [
    { icon: Code2, title: 'Custom Website Development', desc: 'React, Next.js, and modern web technologies' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Modern, premium, and user-friendly interfaces' },
    { icon: Smartphone, title: 'Mobile-First Design', desc: 'Perfect experience on every device size' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Lightning-fast loading and SEO optimization' },
    { icon: Globe, title: 'SEO & Digital Presence', desc: 'Rank higher and attract more customers' },
  ];

  const features = [
    'Modern & Responsive Design',
    'Fast Loading Speed',
    'SEO Optimized',
    'Mobile-First Approach',
    'Clean & Scalable Code',
    'Affordable Pricing',
    'Quick Turnaround',
    'Post-Launch Support',
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-primary via-[#0d3a5c] to-primary rounded-2xl p-8 md:p-14 text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent/15 text-accent border border-accent/25 font-semibold text-xs mb-6 tracking-wide uppercase">
                Website Developer
              </span>

              <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                Zala Nirbhay
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Full-Stack Web Developer specializing in building fast, modern, and
                business-focused websites that convert visitors into customers.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="mailto:zalanirbhay21@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">zalanirbhay21@gmail.com</span>
                </a>
                <a
                  href="tel:+916354182389"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">+91 63541 82389</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* This Website Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="This Website Was Built By Me"
            subtitle="Live Portfolio"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-secondary text-lg max-w-3xl mx-auto leading-relaxed mb-6"
          >
            The <strong className="text-primary">Anutham Coating</strong> website you&apos;re browsing right now is a live
            example of my work. From the animated hero section to the responsive gallery,
            every pixel is crafted with precision. If you want a website that looks this good
            for your business, let&apos;s talk.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <SectionHeading
            title="What I Can Build for You"
            subtitle="Services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Why Choose Me?
            </h2>
            <p className="text-secondary mb-8 text-lg leading-relaxed">
              I build websites that don&apos;t just look good — they drive real business results. 
              My focus is on creating fast, responsive, and SEO-optimized websites at 
              <strong className="text-accent"> pocket-friendly pricing</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="text-primary font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-2xl border border-accent/15 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              Whether you need a business website, landing page, or e-commerce platform — 
              I deliver professional results at affordable rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/916354182389?text=Hi%20Nirbhay%2C%20I%20saw%20the%20Anutham%20Coating%20website%20and%20I%27m%20interested%20in%20getting%20a%20website%20built."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Let&apos;s Chat on WhatsApp
              </a>
              <a
                href="mailto:zalanirbhay21@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-primary font-bold rounded-xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Mail size={18} /> Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developer;
