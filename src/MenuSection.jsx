import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featuredItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    type: 'non-veg',
    price: '₹299',
    image: 'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg',
    desc: 'Tender chicken in buttery tomato curry, spiced to perfection.'
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    type: 'veg',
    price: '₹249',
    image: 'https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg',
    desc: 'Grilled paneer marinated in smoky tandoori masala.'
  },
  {
    id: 3,
    name: 'Sweet Lassi',
    type: 'veg',
    price: '₹99',
    image: 'https://rasekhoon.net/_files/images/lifestyle/dogh.jpg',
    desc: 'Refreshing chilled yogurt drink with rose & cardamom.'
  }
];

const FullMenuSection = () => (
  <section
    id="fullmenu"
    className="relative py-24 px-6 sm:px-12 lg:px-24 text-offWhite overflow-hidden bg-[#0F1927]"
  >
    {/* 🖼️ Subtle Texture Background */}
    <div
      className="absolute inset-0 opacity-30 bg-center bg-cover z-0"
      style={{
        backgroundImage:
          'url(https://as2.ftcdn.net/v2/jpg/01/45/27/61/1000_F_145276130_VYpZOfUHx3oUauasi9hW7vni5TE5wk8H.jpg)'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0F1927]/90 via-[#0F1927]/95 to-[#0B141F] z-0" />

    <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-burntYellow text-sm tracking-widest uppercase mb-2">
          Signature Picks
        </h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-3">
          Curated Flavors to Tempt Your Tastebuds
        </h3>
        <p className="text-offWhite/70 text-base sm:text-lg max-w-xl mx-auto">
          Hand-selected dishes that our guests absolutely love.
        </p>
      </motion.div>
    </div>

    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 relative z-10">
      {featuredItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden group transition-transform duration-500"
        >
          <div className="relative w-full h-52 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBlue/30 group-hover:bg-darkBlue/10 transition-all duration-500" />
          </div>
          <div className="p-5">
            <h4 className="text-xl font-bold text-burntYellow mb-1">{item.name}</h4>
            <p className="text-offWhite/70 text-sm mb-2">{item.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-offWhite font-semibold">{item.price}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}>
                {item.type === 'veg' ? 'Veg' : 'Non‑veg'}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-16 z-10 relative">
      <Link to="/Menu">
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.05 }}
          className="bg-burntYellow text-darkBlue font-bold py-3 px-8 rounded-full shadow-lg transition hover:bg-yellow-400"
        >
          Explore Full Menu
        </motion.button>
      </Link>
    </div>
  </section>
);

export default FullMenuSection;
