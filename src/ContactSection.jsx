// === File: src/ContactSection.jsx ===
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" className="relative bg-darkBlue text-offWhite py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-burntYellow mb-4"
        >
          Let’s Talk
        </motion.h2>
        <p className="text-offWhite/80 max-w-2xl mx-auto text-sm sm:text-base">
          Have a question or want to book a table? We’d love to hear from you. Our team usually responds within a few hours.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 inline-block bg-burntYellow text-darkBlue font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-yellow-300"
        >
          Send a Message
        </button>
      </div>

      <AnimatePresence>
        {showModal && <ContactModal close={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
