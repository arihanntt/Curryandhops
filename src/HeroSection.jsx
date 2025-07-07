// === HeroSection.jsx ===
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import bg1 from './assets/hero-bg-1.jpg';
import bg2 from './assets/hero-bg-2.jpg';

const backgrounds = [bg1, bg2];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, 200);
    }, 10000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${backgrounds[index]})`,
    transform: `translateY(${scrollY * 0.15}px)`,
    filter: `blur(${Math.min(scrollY * 0.015, 8)}px)`
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden flex items-center justify-center scroll-smooth">
      {/* Parallax Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out will-change-transform ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={parallaxStyle}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 z-10" />

      {/* Arrows (only desktop) */}
      <div className="hidden md:block absolute z-20 left-6 top-1/2 -translate-y-1/2">
        <button
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
              setFade(true);
            }, 200);
          }}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition"
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>
      <div className="hidden md:block absolute z-20 right-6 top-1/2 -translate-y-1/2">
        <button
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setIndex((prev) => (prev + 1) % backgrounds.length);
              setFade(true);
            }, 200);
          }}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-30 text-center max-w-4xl px-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-burntYellow mb-3">
          A Flavor Revolution
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-xl">
          Where <span className="text-burntYellow glow-text">Spice</span> Meets <span className="text-burntYellow shimmer">Craft</span>
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

      {/* Feature Tags (no clash, wrapped) */}
      <div className="absolute bottom-24 w-full z-30 hidden md:flex flex-wrap justify-center gap-4 px-4 text-sm max-w-6xl mx-auto">
        {[
          { icon: '🍸', label: 'Signature Cocktails' },
          { icon: '🍢', label: 'Modern Tandoori Tapas' },
          { icon: '🎧', label: 'Live Evenings' },
        ].map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 hover:scale-105 transition duration-300"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 w-full flex justify-center z-30">
        <a
          href="#about"
          className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-burntYellow text-burntYellow text-2xl animate-bounce hover:bg-burntYellow hover:text-darkBlue transition"
        >
          ↓
          <span className="absolute w-14 h-14 border-2 border-burntYellow rounded-full animate-ping opacity-30"></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;