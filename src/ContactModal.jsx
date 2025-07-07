// === File: src/ContactModal.jsx ===
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactModal = ({ close }) => {
  const [submitting, setSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState('email');
  const [customCode, setCustomCode] = useState('');
  const [useCustomCode, setUseCustomCode] = useState(false);

  const floatingLabelStyle =
    'peer bg-darkBlue border border-offWhite/20 rounded px-4 pt-5 pb-2 text-sm text-offWhite placeholder-transparent focus:outline-none focus:border-burntYellow w-full';

  const labelStyle =
    'absolute left-4 top-2.5 text-xs text-offWhite/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-offWhite/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-burntYellow';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.7, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-darkBlue rounded-2xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative border border-burntYellow/20"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-offWhite hover:text-burntYellow text-xl"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold text-burntYellow mb-6 text-center tracking-wide">Contact Us</h3>

        <form
          action="https://submit-form.com/g5gBQQYs6"
          method="POST"
          target="invisible"
          onSubmit={(e) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              toast.success('✅ Message sent successfully!');
              close();
            }, 1500);
          }}
          className="flex flex-col gap-5 relative"
        >
          <input type="hidden" name="_redirect" value="https://your-site.com/#contact" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Floating Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
              className={`${floatingLabelStyle} peer`}
            />
            <label htmlFor="name" className={labelStyle}>Your Name</label>
          </div>

          {/* Method Selector with Icons */}
          <div className="flex items-center gap-3">
            <FaEnvelope className={`text-lg ${contactMethod === 'email' ? 'text-burntYellow' : 'text-offWhite/50'}`} />
            <FaPhone className={`text-lg ${contactMethod === 'phone' ? 'text-burntYellow' : 'text-offWhite/50'}`} />
            <select
              onChange={(e) => setContactMethod(e.target.value)}
              value={contactMethod}
              className="bg-darkBlue border border-offWhite/20 text-sm text-offWhite/70 rounded px-4 py-2 focus:outline-none focus:border-burntYellow w-full"
            >
              <option value="email">Contact via Email</option>
              <option value="phone">Contact via Phone</option>
            </select>
          </div>

          {/* Dynamic Email or Phone */}
          {contactMethod === 'email' ? (
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                className={`${floatingLabelStyle} peer`}
              />
              <label htmlFor="email" className={labelStyle}>Your Email</label>
            </div>
          ) : (
            <div className="flex gap-2 items-start">
              {useCustomCode ? (
                <input
                  type="text"
                  name="countryCode"
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  placeholder="+XX"
                  className="bg-darkBlue border border-offWhite/20 text-sm text-offWhite/70 rounded px-3 py-2 w-20 focus:outline-none focus:border-burntYellow"
                />
              ) : (
                <select
                  onChange={(e) => setCustomCode(e.target.value)}
                  value={customCode || '+91'}
                  className="bg-darkBlue border border-offWhite/20 text-sm text-offWhite/70 rounded px-3 py-2 w-24 focus:outline-none focus:border-burntYellow"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
              )}
              <button
                type="button"
                onClick={() => setUseCustomCode(!useCustomCode)}
                className="text-xs text-offWhite/60 hover:text-burntYellow mt-2"
              >
                {useCustomCode ? 'Use dropdown' : 'Enter manually'}
              </button>
              <div className="relative w-full">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone Number"
                  className={`${floatingLabelStyle} peer`}
                />
                <label htmlFor="phone" className={labelStyle}>Phone Number</label>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              placeholder="Your Message"
              className={`${floatingLabelStyle} peer resize-none`}
            ></textarea>
            <label htmlFor="message" className={labelStyle}>Your Message</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-burntYellow text-darkBlue font-bold py-2 rounded hover:bg-yellow-400 transition text-sm tracking-wide"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-sm text-green-400 hover:text-green-300 transition"
          >
            <FaWhatsapp className="text-lg" /> Or contact us on WhatsApp
          </a>

          <iframe name="invisible" style={{ display: 'none' }}></iframe>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
