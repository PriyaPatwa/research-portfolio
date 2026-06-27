'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // Offset to center of glow (w-128 is 512px, half is 250px)
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Generate scientific coordinates for particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * -20,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none select-none">
      {/* Dynamic Cursor Glow (only tracking mouse) */}
      <motion.div
        className="absolute w-128 h-128 bg-radial from-primary/10 via-secondary/5 to-transparent rounded-full filter blur-3xl pointer-events-none opacity-60 hidden md:block"
        style={{
          left: glowX,
          top: glowY,
        }}
      />

      {/* Blueprint Grid Structure */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-40" />

      {/* Radial Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/40 to-background" />

      {/* Floating Molecular Particles */}
      <div className="absolute inset-0 z-10 opacity-40">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-secondary/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: particle.size > 2 ? '0 0 8px rgba(6, 182, 212, 0.4)' : 'none',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
