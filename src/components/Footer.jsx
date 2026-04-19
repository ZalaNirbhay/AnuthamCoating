import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ChevronRight, Clock, FileText } from 'lucide-react';
import { WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS } from '../data/products';

const INSTAGRAM_URL = 'https://www.instagram.com/anutham_cotings_pvt_ltd?igsh=MW1mczhkNXp5azFxeA==';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Epoxy Floor Coating', path: '/products/epoxy-floor-coating' },
      { name: 'Polyurethane (PU) Coating', path: '/products/pu-coating' },
      { name: 'Anti-Corrosion Coating', path: '/products/anti-corrosion-coating' },
      { name: 'Pipe Internal Coating', path: '/products/pipe-internal-coating' },
      { name: 'Waterproofing', path: '/products/waterproofing' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-[#051525] text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Anutham <span className="text-accent">Coating</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Leading provider of industrial coating solutions. Protecting your infrastructure with advanced technology and expert craftsmanship.
            </p>

            {/* Working Hours */}
            <div className="flex items-start gap-3 text-sm">
              <Clock size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 font-medium">Mon – Sat: 9:00 AM – 6:00 PM</p>
                <p className="text-gray-500">Sunday: Closed</p>
              </div>
            </div>

            {/* Social — Instagram Only */}
            <div className="flex gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all duration-300 text-gray-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-accent transition-colors group text-sm"
                  >
                    <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-accent transition-colors group text-sm"
                  >
                    <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{ADDRESS.label}</h4>
                  <p className="text-sm mt-1 text-gray-400 leading-relaxed">
                    {ADDRESS.line1}<br />
                    {ADDRESS.line4}<br />
                    {ADDRESS.line5}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center text-accent shrink-0 hover:bg-accent hover:text-white transition-colors">
                  <Phone size={20} />
                </a>
                <div>
                  <h4 className="text-white font-medium text-sm">Phone</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-sm mt-1 text-gray-400 hover:text-accent transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <a href={`mailto:${EMAIL}`} className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center text-accent shrink-0 hover:bg-accent hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <div>
                  <h4 className="text-white font-medium text-sm">Email</h4>
                  <a href={`mailto:${EMAIL}`} className="text-sm mt-1 text-gray-400 hover:text-accent transition-colors">{EMAIL}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Anutham Coating PVT. LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <FileText size={14} />
                <span>GST: 24XXXXX1234X1Z5</span>
              </div>
              <span className="hidden md:inline text-gray-700">|</span>
              <span>CIN: U28999GJ2010PTC012345</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end gap-6 text-sm text-gray-500 mt-4 md:-mt-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
