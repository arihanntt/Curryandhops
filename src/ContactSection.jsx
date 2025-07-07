import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import ContactModal from './ContactModal';

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-28 px-6 sm:px-12 lg:px-32 text-offWhite overflow-hidden bg-darkBlue"
    >
      {/* 🖼️ Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1770&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1927]/90 via-[#0F1927]/95 to-[#0B141F] z-0 backdrop-blur-sm" />

      {/* 🌟 Scroll-Reveal Shapes */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute top-[15%] left-[5%] w-32 h-32 rounded-full bg-burntYellow blur-2xl z-0"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-[10%] right-[10%] w-40 h-40 rounded-full bg-yellow-400 blur-2xl z-0"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.07 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-[50%] left-[45%] w-64 h-64 rounded-full bg-burntYellow blur-[100px] z-0"
      />

      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <FiMessageCircle className="text-burntYellow text-5xl mx-auto mb-5 animate-pulse-slow drop-shadow" />

          <h2 className="text-4xl sm:text-5xl font-bold text-burntYellow drop-shadow-lg mb-5 tracking-wide">
            Let’s Talk
          </h2>

          <p className="text-offWhite/80 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Got a question, feedback, or just want to say hello? We’d love to hear from you.
            Expect a response within a few hours.
          </p>

          {/* ✨ CTA Button */}
          <motion.button
            onClick={() => setShowModal(true)}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 bg-burntYellow text-darkBlue font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-2xl"
          >
            <FiMessageCircle className="text-lg transition-transform group-hover:rotate-[8deg]" />
            Send a Message

            {/* 🟡 Glow Ring */}
            <span className="absolute -inset-1 rounded-full border-2 border-burntYellow animate-ping-slow opacity-10 z-0"></span>
          </motion.button>
        </motion.div>
      </div>

      {/* 💫 Light Glow Bottom */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-burntYellow/20 blur-3xl rounded-full z-0" />

      {/* 💬 Modal */}
      <AnimatePresence>
        {showModal && <ContactModal close={() => setShowModal(false)} />}
      </AnimatePresence>

      {/* Divider Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 z-10" />
    </section>
  );
};

export default ContactSection;
