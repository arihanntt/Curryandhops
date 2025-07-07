// === File: src/Footer.jsx ===
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-darkBlue text-offWhite px-6 sm:px-12 pt-20 pb-10 border-t border-offWhite/10 overflow-hidden">
      {/* Radial Accent Background */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-burntYellow/5 blur-3xl opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-burntYellow mb-3 tracking-wide relative">
            Curry & Hops
            <span className="block w-12 h-1 bg-burntYellow mt-2 rounded"></span>
          </h3>
          <p className="text-sm text-offWhite/70 leading-relaxed max-w-xs">
            A modern Indian kitchen & craft beer lounge. Crafted flavors. Curated pours. Unforgettable experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-offWhite/80 mb-4 font-semibold">
            Explore
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-sm hover:text-burntYellow transition-all">About</a>
            </li>
            <li>
              <a href="#fullmenu" className="text-sm hover:text-burntYellow transition-all">Menu</a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-burntYellow transition-all">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-offWhite/80 mb-4 font-semibold">
            Connect
          </h4>
          <ul className="space-y-1 text-sm text-offWhite/80">
            <li>Mohali, Punjab, India</li>
            <li>+91 98765 43210</li>
            <li>hello@curryhops.com</li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl text-offWhite/70">
            <a href="#" className="hover:text-burntYellow transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-burntYellow transition"><FaInstagram /></a>
            <a href="#" className="hover:text-burntYellow transition"><FaTwitter /></a>
          </div>
        </div>
      </motion.div>

      {/* Divider + Copyright */}
      <div className="mt-12 pt-6 border-t border-offWhite/10 text-center text-xs text-offWhite/50">
        © {new Date().getFullYear()} <span className="text-burntYellow">Curry & Hops</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
