// === File: src/pages/MenuPageSplitLayout.jsx ===
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuData from '../data/menuData';
import Header from '../Header';

export default function MenuPageSplitLayout() {
  const [mealTime, setMealTime] = useState('All');
  const [dietType, setDietType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterItems = (items) =>
    items.filter(
      (item) =>
        (dietType === 'All' || item.type === dietType) &&
        (mealTime === 'All' || item.meal === mealTime) &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div
      className="min-h-screen text-offWhite bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(15, 25, 39, 0.88), rgba(15, 25, 39, 0.95)), url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundColor: '#0F1927',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="fixed top-0 left-0 w-full z-[60] bg-darkBlue/80 backdrop-blur shadow-md">
        <Header />
      </div>

      <div className="h-24"></div>

      <div className="px-4 sm:px-6 py-12 md:px-12 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10"
        >
          <Link
            to="/"
            className="text-sm sm:text-base text-burntYellow hover:underline hover:opacity-90 transition"
          >
            ← Back to Home
          </Link>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search dishes..."
            className="bg-darkBlue/50 border border-offWhite/20 text-sm px-4 py-2 rounded-full placeholder-gray-400 text-offWhite focus:outline-none focus:border-burntYellow w-full sm:w-64 shadow-inner"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {['All', 'Veg', 'Non-Veg'].map((type) => (
            <button
              key={type}
              onClick={() => setDietType(type)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition backdrop-blur-md shadow-md ${
                dietType === type
                  ? 'bg-burntYellow text-darkBlue shadow-lg scale-105'
                  : 'text-offWhite border-offWhite/20 hover:border-burntYellow hover:scale-105'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {['All', 'Breakfast', 'Lunch', 'Dinner'].map((meal) => (
            <button
              key={meal}
              onClick={() => setMealTime(meal)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition backdrop-blur-md shadow-md ${
                mealTime === meal
                  ? 'bg-burntYellow text-darkBlue shadow-lg scale-105'
                  : 'text-offWhite border-offWhite/20 hover:border-burntYellow hover:scale-105'
              }`}
            >
              {meal}
            </button>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-burntYellow text-center mb-16"
        >
          Explore Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(menuData).map(([category, items], index) => {
            const filtered = filterItems(items);
            if (!filtered.length) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-darkBlue/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 border border-white/10"
              >
                <h2 className="text-2xl font-semibold text-burntYellow border-b border-burntYellow pb-2 mb-6">
                  {category}
                </h2>
                <ul className="space-y-5">
                  {filtered.map((item, idx) => (
                    <li
                      key={idx}
                      className="group transition-all duration-300 border-b border-white/5 pb-3 hover:bg-darkBlue/40 rounded-md px-3"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-base sm:text-lg font-medium text-offWhite group-hover:text-burntYellow transition">
                          {item.name}
                        </span>
                        <span className="text-burntYellow font-semibold text-sm group-hover:glow-price transition-all duration-300">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}