import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
                <FileText size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-secondary leading-relaxed">
                By accessing and using the Anutham Coating PVT. LTD. website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services Description</h2>
              <p className="text-secondary leading-relaxed">
                Anutham Coating PVT. LTD. provides industrial coating services including but not limited to epoxy floor coating, pipe internal coating, anti-corrosion coating, chemical resistant flooring, and waterproofing solutions. The specific terms, pricing, and scope of each project are agreed upon separately through formal quotations and contracts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Quotations & Pricing</h2>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-secondary">
                <li>All quotations are valid for 30 days unless stated otherwise</li>
                <li>Pricing may vary based on site conditions, area, and material requirements</li>
                <li>Final pricing is confirmed only after site inspection</li>
                <li>Payment terms are specified in individual project contracts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Project Execution</h2>
              <p className="text-secondary leading-relaxed">
                All projects are executed as per the agreed-upon specifications and timelines. Any changes in scope must be communicated and agreed upon in writing. We reserve the right to modify timelines if site conditions differ from the initial assessment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Warranty</h2>
              <p className="text-secondary leading-relaxed">
                Warranty terms vary by product and service type. Specific warranty details are provided in the project contract. Warranty does not cover damage caused by misuse, neglect, or unauthorized modifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Intellectual Property</h2>
              <p className="text-secondary leading-relaxed">
                All content on this website, including images, text, logos, and design elements, is the property of Anutham Coating PVT. LTD. and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-secondary leading-relaxed">
                The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up-to-date, we make no warranties about the completeness or accuracy of information. Anutham Coating PVT. LTD. shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
              <p className="text-secondary leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Vadodara, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact</h2>
              <p className="text-secondary leading-relaxed">
                For questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService;
