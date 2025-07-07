import { motion } from 'framer-motion';

const AboutSection = () => {
  const bgImage =
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1740&q=80';

  return (
    <section
      id="about"
      className="relative text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden bg-[#0B131F]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Darker Blur Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-[6px] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] relative before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:opacity-20 before:blur-xl before:pointer-events-none"
        >
          <p className="text-burntYellow text-sm tracking-widest uppercase font-semibold mb-3">
            ✨ Since 2021
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
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
                className="px-4 py-1.5 text-xs sm:text-sm border border-burntYellow rounded-full text-burntYellow uppercase tracking-wide bg-white/5 backdrop-blur-sm shadow-inner"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 3D Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="hidden lg:block relative"
        >
          <div className="w-[320px] h-[320px] mx-auto rounded-full bg-gradient-to-br from-burntYellow via-yellow-100 to-white/20 shadow-[0_0_80px_rgba(255,255,255,0.15)] p-[3px] animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center justify-center w-full h-full bg-[#0F1927]/70 text-burntYellow font-extrabold text-3xl rounded-full border border-burntYellow/30 tracking-widest shadow-inner backdrop-blur-md">
              Est. 2021
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;