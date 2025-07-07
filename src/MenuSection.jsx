// === File: src/components/FullMenuSection.jsx ===
import { motion } from 'framer-motion';

const featuredItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    type: 'non-veg',
    category: 'food',
    price: '$14.99',
    image: '/images/butter-chicken.jpg',
    desc: 'Creamy tomato chicken curry with buttery richness and spices.'
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    type: 'veg',
    category: 'food',
    price: '$12.49',
    image: '/images/paneer-tikka.jpg',
    desc: 'Grilled paneer with smoky marination and minty zing.'
  },
  {
    id: 3,
    name: 'Sweet Lassi',
    type: 'veg',
    category: 'drinks',
    price: '$4.99',
    image: '/images/lassi.jpg',
    desc: 'Chilled yogurt drink with rose essence and cardamom.'
  }
];

const FullMenuSection = () => {
  return (
    <section id="fullmenu" className="bg-[#0F1927] py-24 px-6 sm:px-12 lg:px-24 text-offWhite overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-burntYellow text-sm tracking-widest uppercase mb-2">Signature Picks</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Curated Flavors to Tempt Your Tastebuds
          </h3>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500 group"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-darkBlue/30 group-hover:bg-darkBlue/10 transition-all duration-500"></div>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-burntYellow mb-2">{item.name}</h4>
                <p className="text-offWhite/80 text-sm mb-3">{item.desc}</p>
                <p className="text-offWhite font-semibold text-sm">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenuSection;
