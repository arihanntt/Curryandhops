import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import aboutImg from './assets/about-image.jpg';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.1;

  return (
    <section
      id="about"
      className="relative text-white py-28 px-6 sm:px-10 lg:px-20 overflow-hidden bg-[#0B131F]"
    >
      {/* Parallax Gradient Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm group-hover:bg-black/10 transition-all duration-500 z-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-burntYellow text-sm tracking-widest uppercase font-semibold mb-3">
            ✨ Since 2021
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Where Culinary Heritage<br />Meets Modern Craft
          </h2>
          <p className="text-offWhite/80 text-base sm:text-lg leading-relaxed mb-5">
            At <span className="text-burntYellow font-semibold">Curry & Hops</span>, we redefine indulgence. Fusing age-old North Indian flavors with the crisp clarity of small-batch brews, every visit is a story — bold, balanced, unforgettable.
          </p>
          <p className="text-offWhite/60 text-base sm:text-lg leading-relaxed">
            From hand-ground spices to chef-led collaborations, our mission is to ignite your senses with every plate and pour.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {['Slow-Cooked Legacy', 'Award-Winning Brews', 'Chef Partnerships'].map((item, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-xs sm:text-sm border border-burntYellow rounded-full text-burntYellow uppercase tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-lg group h-[300px] sm:h-[400px] lg:h-[480px] w-full"
        >
          <img
            src={aboutImg}
            alt="Culinary ambiance"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm group-hover:bg-black/10 transition-all duration-500 z-10" />

          <div className="absolute bottom-4 right-4 z-20 bg-burntYellow text-darkBlue px-3 py-1.5 text-xs font-semibold rounded shadow uppercase tracking-wide">
            Est. 2021
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
