import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ChevronRight, Clock, ExternalLink } from 'lucide-react';
import { WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS } from '../data/products';

const INSTAGRAM_URL = 'https://www.instagram.com/anutham_cotings_pvt_ltd?igsh=MW1mczhkNXp5azFxeA==';

// WhatsApp SVG icon component
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-[#051525] text-gray-300 relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-1 bg-gradient-to-r from-accent via-[#25D366] to-accent"></div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-accent/20">
                AC
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Anutham <span className="text-accent">Coating</span>
              </h2>
            </div>
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

            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all duration-300 text-gray-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 text-gray-400"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Products Column */}
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

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left — Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Anutham Coating PVT. LTD. All Rights Reserved.
          </p>

          {/* Center — GST */}
          <p className="text-xs text-gray-600 font-mono tracking-wide">
            GSTN: 24AAZCA6812E1ZJ
          </p>

          {/* Right — Legal Links */}
          <div className="flex gap-5 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-gray-800/40 mt-5 pt-4">
          <p className="text-center text-[11px] text-gray-600 tracking-wide">
            Developed by{' '}
            <Link
              to="/developer"
              className="text-gray-500 font-medium hover:text-accent transition-colors duration-300"
            >
              Zala Nirbhay
            </Link>
            <span className="mx-2 text-gray-700">·</span>
            <a
              href="mailto:zalanirbhay21@gmail.com"
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              zalanirbhay21@gmail.com
            </a>
            <span className="mx-2 text-gray-700">·</span>
            <a
              href="tel:+916354182389"
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              +91 63541 82389
            </a>
          </p>
        </div>
      </div>

      {/* Decorative subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
