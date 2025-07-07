// === File: src/components/Header.jsx ===
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MobileNav from './MobileNav';
import Logo from './assets/logo.svg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll or navigate logic
  const scrollOrNavigate = (id) => {
    if (location.pathname !== '/') {
      localStorage.setItem('scrollTo', id);
      navigate('/');
    } else {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  const navLinkClass =
    'relative text-offWhite text-lg font-semibold group px-4 py-1';
  const underline = (
    <>
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-burntYellow transition-all group-hover:w-full" />
      <span className="absolute left-0 top-[-2px] w-0 h-[2px] bg-burntYellow transition-all group-hover:w-full" />
    </>
  );

  return (
    <header className="fixed w-full z-50 bg-[#0F1927]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-8 px-4 lg:px-12 relative">
        {/* Left Nav */}
        <nav className="hidden md:flex gap-16 items-center">
          <Link to="/menu" className={navLinkClass}>
            Menu
            {underline}
          </Link>
          <button
            onClick={() => scrollOrNavigate('about')}
            className={navLinkClass}
          >
            About
            {underline}
          </button>
        </nav>

        {/* Center Logo */}
        <button
  onClick={() => scrollOrNavigate('top')}
  className="absolute left-1/2 transform -translate-x-1/2 z-50"
>
  <img src={Logo} alt="Curry & Hops" className="h-11 w-auto md:h-20" />
</button>



        {/* Right Nav */}
        <nav className="hidden md:flex gap-16 items-center">
          {['reserve', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollOrNavigate(id)}
              className={navLinkClass}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {underline}
            </button>
          ))}
        </nav>

        {/* Burger Button */}
        <button
          className="md:hidden text-offWhite z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className="block w-6 h-0.5 bg-offWhite mb-1 transition-transform transform"
            style={{
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 bg-offWhite mb-1 opacity-50"
            style={{ opacity: open ? 0 : 0.5 }}
          />
          <span
            className="block w-6 h-0.5 bg-offWhite transition-transform transform"
            style={{
              transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <MobileNav
            links={['Menu', 'About', 'Reserve', 'Contact']}
            close={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
