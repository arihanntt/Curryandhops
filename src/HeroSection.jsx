import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

// ✅ Your chosen static image
import heroImage from './assets/hero-bg-1.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  // Scroll to #about if redirected
  useEffect(() => {
    const section = localStorage.getItem('scrollTo');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          localStorage.removeItem('scrollTo');
        }, 300);
      }
    }
  }, []);

  const handleScrollToAbout = () => {
    if (window.location.pathname !== '/') {
      localStorage.setItem('scrollTo', 'about');
      navigate('/');
    } else {
      const about = document.getElementById('about');
      if (about) {
        about.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
  className="relative h-screen w-full text-white overflow-hidden flex items-center justify-center scroll-smooth bg-no-repeat bg-cover bg-center md:bg-fixed"
  style={{ backgroundImage: `url(${heroImage})` }}
>

      {/* Gradient & Glass Overlays */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 z-10" />
      <div className="absolute inset-0 backdrop-blur-sm z-10" />

      {/* Hero Text */}
      <div className="relative z-30 text-center max-w-4xl px-6 animate-fade-up animate-delay-500">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-burntYellow mb-3 drop-shadow-md">
          A Flavor Revolution
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-xl">
          Where <span className="text-burntYellow glow-text">Spice</span> Meets{' '}
          <span className="text-burntYellow shimmer">Craft</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/80 font-light max-w-xl mx-auto">
          Indian classics, reimagined. Gourmet plates and craft pours — all in one unforgettable setting.
        </p>
        <Link
          to="/menu"
          className="mt-8 inline-flex items-center gap-3 bg-burntYellow text-darkBlue font-semibold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <FaUtensils className="text-lg" />
          Explore Our Menu
        </Link>
      </div>

      {/* Feature Tags */}
      <div className="absolute bottom-24 w-full z-30 hidden md:flex flex-wrap justify-center gap-4 px-4 text-sm max-w-6xl mx-auto">
        {[
          { icon: '🍸', label: 'Signature Cocktails' },
          { icon: '🍢', label: 'Modern Tandoori Tapas' },
          { icon: '🎧', label: 'Live Evenings' },
        ].map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 hover:scale-105 transition duration-300 shadow-md"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-6 w-full flex justify-center z-30">
        <button
          onClick={handleScrollToAbout}
          className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-burntYellow text-burntYellow text-2xl animate-bounce hover:bg-burntYellow hover:text-darkBlue transition"
        >
          ↓
          <span className="absolute w-14 h-14 border-2 border-burntYellow rounded-full animate-ping opacity-30"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
