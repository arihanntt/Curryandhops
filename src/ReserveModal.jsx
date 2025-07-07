// === File: src/components/ReserveModal.jsx ===
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const ReserveModal = ({ close }) => {
  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', timeSlot: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!form.name || !form.email || !form.phone || !form.guests || !form.timeSlot) {
      e.preventDefault();
      toast.error('Please fill out all required fields');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success('✅ Reservation sent successfully!');
      close();
    }, 1500);
  };

  const timeSlots = [
    '9:00 AM – 10:00 AM', '10:00 AM – 11:00 AM', '11:00 AM – 12:00 PM',
    '12:00 PM – 1:00 PM', '1:00 PM – 2:00 PM', '2:00 PM – 3:00 PM',
    '3:00 PM – 4:00 PM', '4:00 PM – 5:00 PM', '5:00 PM – 6:00 PM',
    '6:00 PM – 7:00 PM', '7:00 PM – 8:00 PM', '8:00 PM – 9:00 PM',
    '9:00 PM – 10:00 PM', '10:00 PM – 11:00 PM', '11:00 PM – 12:00 AM',
    '12:00 AM – 1:00 AM', '1:00 AM – 2:00 AM'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-2 py-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="bg-darkBlue w-full max-w-sm sm:max-w-md rounded-xl p-4 sm:p-6 shadow-xl relative border border-burntYellow/20 overflow-y-auto max-h-[95vh]"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-offWhite hover:text-burntYellow text-xl"
        >
          ✕
        </button>

        <div className="border-b border-offWhite/10 pb-4 mb-4 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-burntYellow">
            Reserve a Table
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Select your slot or contact us directly.
          </p>
        </div>

        <form
          action="https://submit-form.com/4Hf5ZjW9E"
          method="POST"
          target="invisible"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="_redirect" value="https://your-site.com/#reserve" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-white/5 border border-offWhite/10 rounded px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-burntYellow"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="bg-white/5 border border-offWhite/10 rounded px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-burntYellow"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="bg-white/5 border border-offWhite/10 rounded px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-burntYellow"
          />

          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              name="date"
              dateFormat="dd MMM yyyy"
              minDate={new Date()}
              className="bg-white/5 border border-offWhite/10 rounded px-3 py-2 w-full text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-burntYellow"
            />
            <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-burntYellow" />
          </div>

          <select
            name="timeSlot"
            value={form.timeSlot}
            onChange={handleChange}
            required
            className="bg-darkBlue text-white border border-offWhite/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burntYellow appearance-none"
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>

          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            required
            className="bg-darkBlue text-white border border-offWhite/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burntYellow appearance-none"
          >
            <option value="">Number of Guests</option>
            {[1, 2, 3, 4, '5+'].map((num, i) => (
              <option key={i} value={num}>{num}</option>
            ))}
          </select>

          <textarea
            name="notes"
            placeholder="Additional Notes (Optional)"
            rows="3"
            className="bg-white/5 border border-offWhite/10 rounded px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-burntYellow"
          ></textarea>

          <button
            type="submit"
            className="bg-burntYellow text-darkBlue font-semibold py-2 rounded hover:bg-yellow-400 transition text-sm"
          >
            {submitting ? 'Sending...' : 'Submit Reservation'}
          </button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 text-burntYellow border border-burntYellow px-4 py-2 rounded-lg hover:bg-burntYellow hover:text-darkBlue transition text-sm"
          >
            <FaWhatsapp className="text-lg" /> Or reserve on WhatsApp
          </a>

          <iframe name="invisible" style={{ display: 'none' }}></iframe>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReserveModal;
