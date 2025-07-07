// === File: src/components/Loader.jsx ===
import Logo from './assets/logo.svg';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-darkBlue text-burntYellow"
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* OG Size Logo — Zoom effect only */}
            <motion.img
              src={Logo}
              alt="Curry & Hops Logo"
              className="h-24 w-auto drop-shadow-md"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Clean glowing loading bar */}
            <div className="w-24 h-1 rounded-full bg-burntYellow/80 animate-pulse" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
