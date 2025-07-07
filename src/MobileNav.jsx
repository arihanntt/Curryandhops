// === File: src/components/MobileNav.jsx ===
import { motion } from 'framer-motion';
import Logo from '/images/logo.svg';

export default function MobileNav({ links, close }) {
  return (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="overflow-hidden absolute top-full left-0 right-0 bg-[#0F1927]/95 backdrop-blur-md z-40 px-8 shadow-md rounded-b-xl"
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={close}
            className="text-base font-semibold text-offWhite hover:text-burntYellow transition"
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
