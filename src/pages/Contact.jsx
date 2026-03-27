import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY, EMAIL } from '../data/products';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Ready to start your project? We typically respond within <strong className="text-green-600">5 minutes on WhatsApp</strong>. 
            Our technical experts are available to discuss your industrial coating requirements and provide immediate assistance.
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-200"
          >
            <MessageCircle size={22} /> Chat with us on WhatsApp
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
          {/* Contact Info */}
          <div className="bg-primary text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-5 hover:bg-white/5 p-3 -ml-3 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide uppercase">Call Us Directly</p>
                     <p className="text-xl font-bold">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-5 hover:bg-white/5 p-3 -ml-3 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide uppercase">Email Address</p>
                     <p className="text-lg font-semibold">{EMAIL}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-5 p-3 -ml-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                     <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide uppercase">Head Office</p>
                     <p className="text-lg font-semibold leading-relaxed">123 Industrial Estate, Phase 3,<br />GIDC, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 z-0"></div>
          </div>

          {/* Contact Form */}
          <div className="p-10 md:p-14">
            <h3 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="+91 90000 00000" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all text-gray-600">
                  <option value="">Select a Service</option>
                  <option value="epoxy">Epoxy Floor Coating</option>
                  <option value="pu">PU Coating</option>
                  <option value="pipe">Pipe Internal Coating</option>
                  <option value="anti-corrosion">Anti-Corrosion Coating</option>
                  <option value="waterproofing">Waterproofing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="Tell us about your project requirements, area size, and location..."></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                Submit Inquiry <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
