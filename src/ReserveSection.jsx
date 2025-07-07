// === File: src/components/ReserveSection.jsx ===
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReserveModal from './ReserveModal';

export default function ReserveSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="reserve"
      className="relative text-center py-32 px-6 md:px-12 lg:px-32 text-offWhite overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(15, 25, 39, 0.95), rgba(15, 25, 39, 0.97)),
          url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')
        `,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Sparkles overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[200%] h-[200%] animate-pulseSlow bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:30px_30px] opacity-10" />
      </div>

      {/* Border lines */}
      <div className="border-t border-white/10 w-full absolute top-0 left-0" />
      <div className="border-t border-white/10 w-full absolute bottom-0 left-0" />

   
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto shadow-xl"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-burntYellow drop-shadow-md mb-6">
          Reserve Your Experience
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-300 text-base sm:text-lg">
          Whether you're planning a romantic dinner or a lively celebration, we’ll make it unforgettable.
        </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setModalOpen(true)}
          className="bg-burntYellow text-darkBlue font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:bg-yellow-400 focus:outline-none"
        >
          Reserve a Table
        </motion.button>
      </motion.div>

      {/* Modal */}
      {modalOpen && <ReserveModal close={() => setModalOpen(false)} />}
    </section>
  );
}
