import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-fist-dark-card/90 dark:bg-fist-dark-card/90 text-white border border-fist-purple-500/40 shadow-xl backdrop-blur-md hover:bg-fist-purple-600 hover:border-fist-purple-400 hover:shadow-fist-purple-500/30 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-fist-cyan-400"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 text-fist-cyan-400 group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
