import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './assets/logo.svg';

export default function MobileNav({ links, close }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (link) => {
    const id = link.toLowerCase();

    if (id === 'menu') {
      close();
      navigate('/menu');
    } else {
      close();

      if (location.pathname !== '/') {
        localStorage.setItem('scrollTo', id);
        navigate('/');
      } else {
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  };

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
          <button
            key={link}
            onClick={() => handleClick(link)}
            className="text-base font-semibold text-offWhite hover:text-burntYellow transition"
          >
            {link}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
