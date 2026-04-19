import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                <Shield size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
            <p className="text-gray-400 mt-2">Last updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-secondary leading-relaxed">
                At Anutham Coating PVT. LTD., we respect your privacy and are committed to protecting your personal data. When you contact us through our website, WhatsApp, phone, or email, we may collect:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-secondary">
                <li>Your name and contact information (phone number, email address)</li>
                <li>Company name and project details you share with us</li>
                <li>Location or site information relevant to your coating project</li>
                <li>Any other information you voluntarily provide during inquiries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-secondary leading-relaxed">We use the information you provide solely for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-secondary">
                <li>Responding to your inquiries and providing quotations</li>
                <li>Communicating about ongoing or upcoming projects</li>
                <li>Sending relevant updates about our coating services (only if requested)</li>
                <li>Improving our services and customer experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Data Sharing</h2>
              <p className="text-secondary leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. Your data may be shared only with our internal team members who need it to serve your project requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-secondary leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
              <p className="text-secondary leading-relaxed">
                This website is a static information website and does not use cookies or tracking technologies for advertising purposes. Basic analytics may be used to improve the website experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
              <p className="text-secondary leading-relaxed">
                If you have questions about this Privacy Policy or want to request removal of your data, please contact us at{' '}
                <a href="mailto:anuthamcoatings@gmail.com" className="text-accent hover:underline font-medium">anuthamcoatings@gmail.com</a>{' '}
                or call us at <a href="tel:+917359226006" className="text-accent hover:underline font-medium">+91 73592 26006</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
