'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-card/85 backdrop-blur-sm border border-card-foreground/10 text-foreground rounded-full hover:border-primary/45 transition-colors shadow-2xl focus:outline-none select-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-secondary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
