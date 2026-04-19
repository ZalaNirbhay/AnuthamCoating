import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS } from '../data/products';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Build the mailto body
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = encodeURIComponent(
      `Inquiry from ${name}${formData.service ? ` — ${formData.service}` : ''}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service || 'Not selected'}\n\nProject Details:\n${formData.message}`
    );

    // Small delay for UX feel, then open mailto
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 600);
  };

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
                     <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide uppercase">{ADDRESS.label}</p>
                     <p className="text-sm font-medium leading-relaxed">
                       {ADDRESS.line1}<br />
                       {ADDRESS.line2}<br />
                       {ADDRESS.line3}<br />
                       {ADDRESS.line4}<br />
                       {ADDRESS.line5}
                     </p>
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

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Message Sent Successfully!</h4>
                <p className="text-secondary mb-6 max-w-sm">
                  Your email client should have opened with the inquiry details. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.firstName ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-200'} focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.email ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-200'} focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all text-gray-600"
                  >
                    <option value="">Select a Service</option>
                    <option value="Epoxy Floor Coating">Epoxy Floor Coating</option>
                    <option value="PU Coating">PU Coating</option>
                    <option value="Pipe Internal Coating">Pipe Internal Coating</option>
                    <option value="Anti-Corrosion Coating">Anti-Corrosion Coating</option>
                    <option value="Chemical Resistant Flooring">Chemical Resistant Flooring</option>
                    <option value="Waterproofing">Waterproofing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.message ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-200'} focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none`}
                    placeholder="Tell us about your project requirements, area size, and location..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
