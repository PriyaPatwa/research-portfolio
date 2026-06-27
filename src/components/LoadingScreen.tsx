'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for initial render plus animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center space-y-6"
        >
          {/* Animated loader graphic */}
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-primary p-4 border border-card rounded-full bg-card/10 relative"
            >
              <Activity className="w-8 h-8 text-secondary" />
              {/* Spinning outline ring */}
              <div className="absolute inset-0 rounded-full border-t-2 border-secondary animate-spin" />
            </motion.div>
          </div>

          <div className="text-center space-y-1.5 select-none">
            <h2 className="font-display font-bold text-foreground text-sm tracking-widest uppercase">
              Priya Patwa
            </h2>
            <p className="font-mono text-[9px] text-secondary tracking-widest animate-pulse uppercase">
              Initiating Biomedical Telemetry...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
