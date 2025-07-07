// === File: src/components/ReserveSection.jsx ===
import { useState } from 'react';
import ReserveModal from './ReserveModal';
import { motion } from 'framer-motion';

export default function ReserveSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="reserve"
      className="relative text-center py-24 sm:py-28 px-6 md:px-12 lg:px-32 bg-[#0F1927] text-offWhite overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(15, 25, 39, 0.9), rgba(15, 25, 39, 0.95))",
      }}
    >
      <div className="border-t border-offWhite/10 w-full absolute top-0 left-0" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl font-extrabold text-burntYellow drop-shadow-md mb-4 z-10 relative"
      >
        Make a Reservation
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="max-w-xl mx-auto mb-10 text-gray-300 text-base sm:text-lg z-10 relative"
      >
        Planning a special evening or just craving your favorite dish? Secure your table now and let us serve you something unforgettable.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        onClick={() => setModalOpen(true)}
        className="bg-burntYellow text-darkBlue font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-lg hover:scale-105 focus:outline-none z-10 relative"
      >
        Reserve a Table
      </motion.button>

      {modalOpen && <ReserveModal close={() => setModalOpen(false)} />}

      <div className="border-t border-offWhite/10 w-full absolute bottom-0 left-0" />
    </section>
  );
}
