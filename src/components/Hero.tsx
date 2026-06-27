'use client';

import { motion } from 'framer-motion';
import { FileText, Compass, Sparkles, Activity } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Text and Actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Tags */}
          <motion.div className="flex flex-wrap gap-2 mb-6" variants={itemVariants}>
            {['Biomedical Engineer', 'Researcher', 'AI in Healthcare', 'Medical Imaging', 'Nanotechnology'].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono bg-card border border-card/60 text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span>{tag}</span>
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            variants={itemVariants}
          >
            Building{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
              intelligent healthcare
            </span>{' '}
            technologies.
          </motion.h1>

          <motion.p
            className="text-lg text-text-secondary font-sans leading-relaxed mb-4 max-w-xl"
            variants={itemVariants}
          >
            Developing solutions through the intersection of Artificial Intelligence, Medical Imaging, and Biomedical Engineering. Focused on improving clinical diagnostic accuracy and designing next-generation drug delivery vehicles.
          </motion.p>

          <motion.p
            className="text-sm font-mono text-secondary mb-8 flex items-center space-x-2"
            variants={itemVariants}
          >
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span>Currently: Research Intern @ IIT Madras | CGPA: 9.88</span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-foreground font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group"
            >
              <span>Explore Research</span>
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200" />
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-card border border-card-foreground/10 hover:border-card-foreground/20 text-foreground font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-transparent border border-primary/30 text-primary hover:bg-primary/10 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Get Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Custom Biomedical SVG Illustration */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl border border-card/40 bg-card/20 backdrop-blur-sm p-6 overflow-hidden flex items-center justify-center">
            {/* Interactive Grid backdrop */}
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
            
            {/* Premium Biomedical SVG Illustration */}
            <svg
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full relative z-10"
            >
              {/* Definitions for gradients and shadows */}
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Glows */}
              <circle cx="250" cy="220" r="140" fill="url(#blueGradient)" opacity="0.1" filter="blur(30px)" />
              
              {/* Outer ECG/Grid overlay */}
              <path
                d="M 20 400 L 100 400 L 120 370 L 130 430 L 145 390 L 155 405 L 165 400 L 480 400"
                stroke="#1E293B"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              {/* Animated ECG Pulse */}
              <motion.path
                d="M 20 400 L 100 400 L 120 370 L 130 430 L 145 390 L 155 405 L 165 400 L 480 400"
                stroke="url(#cyanGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* 1. MRI Monitor Display */}
              <g transform="translate(60, 240)">
                {/* Monitor frame */}
                <rect x="0" y="0" width="160" height="110" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="1.5" />
                <rect x="5" y="5" width="150" height="85" rx="6" fill="#0F172A" />
                {/* Stand */}
                <path d="M 60 95 L 45 125 L 115 125 L 100 95 Z" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" />
                
                {/* Brain Outline Contour */}
                <g transform="translate(75, 45)">
                  {/* Left Hemisphere */}
                  <path
                    d="M 0 -30 C -20 -30 -35 -20 -35 0 C -35 15 -25 20 -20 25 C -15 30 -5 32 0 32"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Right Hemisphere */}
                  <path
                    d="M 0 -30 C 20 -30 35 -20 35 0 C 35 15 25 20 20 25 C 15 30 5 32 0 32"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Brain Inner folds (Cerebellum & Frontal details) */}
                  <path d="M -15 -10 C -25 -10 -25 10 -15 15" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.6" fill="none" />
                  <path d="M 15 -10 C 25 -10 25 10 15 15" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.6" fill="none" />
                  <path d="M -5 -20 C -15 -20 -15 0 -5 5" stroke="#06B6D4" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
                  <path d="M 5 -20 C 15 -20 15 0 5 5" stroke="#06B6D4" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />

                  {/* Scan overlay target (bounding box box) */}
                  <rect x="-30" y="-15" width="22" height="25" rx="3" stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" fill="#10B981" fillOpacity="0.05" />
                  <line x1="-30" y1="-2" x2="-8" y2="-2" stroke="#10B981" strokeWidth="1.5" opacity="0.8">
                    <animate attributeName="y1" values="-15;10;-15" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="-15;10;-15" dur="3s" repeatCount="indefinite" />
                  </line>
                  
                  {/* AI target label */}
                  <text x="-25" y="24" fill="#10B981" fontSize="6" fontFamily="monospace">AI DETECT: 98%</text>
                </g>
              </g>

              {/* 2. Laboratory Microscope / Spectrograph */}
              <g transform="translate(300, 260)">
                <path d="M 40 80 L 120 80 M 80 80 L 80 20 M 80 20 L 50 20 M 60 20 L 60 50 M 50 50 L 70 50" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="52" y="55" width="16" height="6" rx="1" fill="#3B82F6" />
                <circle cx="60" cy="72" r="3" fill="#06B6D4" />
                
                {/* Microscope Stage / Slide */}
                <line x1="30" y1="62" x2="90" y2="62" stroke="#1E293B" strokeWidth="2" />
                
                {/* Light Ray */}
                <line x1="60" y1="72" x2="60" y2="62" stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" />
              </g>

              {/* 3. DNA Double Helix (Center Right, animated) */}
              <g transform="translate(330, 70)">
                {/* DNA strand curves */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const y = i * 22;
                  const leftX = 15 * Math.sin(i + Math.PI);
                  const rightX = 15 * Math.sin(i);
                  return (
                    <g key={i}>
                      {/* Connecting Base Pair bar */}
                      <line
                        x1={leftX}
                        y1={y}
                        x2={rightX}
                        y2={y}
                        stroke={i % 2 === 0 ? '#3B82F6' : '#06B6D4'}
                        strokeWidth="1.5"
                        opacity="0.6"
                      />
                      {/* Left Node */}
                      <circle cx={leftX} cy={y} r="3.5" fill="#3B82F6">
                        <animate attributeName="r" values="3.5;4.5;3.5" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                      </circle>
                      {/* Right Node */}
                      <circle cx={rightX} cy={y} r="3.5" fill="#06B6D4">
                        <animate attributeName="r" values="3.5;4.5;3.5" dur="2s" begin={`${(i + 4) * 0.25}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}
                {/* Outer spine connection overlay */}
                <path d="M 0 0 Q -15 22 0 44 Q 15 66 0 88 Q -15 110 0 132 Q 15 154 0 176" fill="none" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.4" />
                <path d="M 0 0 Q 15 22 0 44 Q -15 66 0 88 Q 15 110 0 132 Q -15 154 0 176" fill="none" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.4" />
              </g>

              {/* 4. Neural Network AI Connection Graph (Upper Left) */}
              <g transform="translate(100, 60)">
                {/* Connections */}
                <line x1="30" y1="30" x2="80" y2="10" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="30" y1="30" x2="60" y2="70" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="80" y1="10" x2="130" y2="40" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="60" y1="70" x2="130" y2="40" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="80" y1="10" x2="60" y2="70" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.3" />
                <line x1="30" y1="30" x2="130" y2="40" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.3" />

                {/* Nodes with pulsing animations */}
                <circle cx="30" cy="30" r="5" fill="#3B82F6" />
                <circle cx="30" cy="30" r="10" fill="url(#nodeGlow)" opacity="0.5" />

                <circle cx="80" cy="10" r="4" fill="#06B6D4" />
                <circle cx="60" cy="70" r="4.5" fill="#06B6D4" />
                
                <circle cx="130" cy="40" r="6" fill="#10B981" />
                <circle cx="130" cy="40" r="12" fill="url(#nodeGlow)" opacity="0.6" />

                <text x="140" y="44" fill="#10B981" fontSize="7" fontFamily="monospace">NEURAL NET</text>
              </g>

              {/* 5. Nanoparticles (Floating spheres around helix/workspace) */}
              <g>
                <circle cx="280" cy="120" r="4" fill="#06B6D4" opacity="0.7">
                  <animate attributeName="cy" values="120;105;120" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="cx" values="280;290;280" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="150" r="2.5" fill="#3B82F6" opacity="0.6">
                  <animate attributeName="cy" values="150;162;150" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="390" cy="270" r="3.5" fill="#10B981" opacity="0.8">
                  <animate attributeName="cy" values="270;260;270" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="cx" values="390;382;390" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="270" cy="20" r="5" fill="#06B6D4" opacity="0.4">
                  <animate attributeName="cy" values="20;30;20" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* 6. Microscope Focus View / Cell Structure Overlay */}
              <g transform="translate(200, 100)" opacity="0.85">
                {/* Circular lens border */}
                <circle cx="50" cy="50" r="35" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" fill="#0F172A" fillOpacity="0.3" />
                <circle cx="50" cy="50" r="32" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.4" />
                
                {/* Cell Nucleus */}
                <path d="M 45 42 Q 52 38 56 45 Q 60 52 50 58 Q 40 54 45 42 Z" fill="#06B6D4" fillOpacity="0.3" stroke="#06B6D4" strokeWidth="1.2" />
                {/* Floating nanoparticles inside cell area */}
                <circle cx="48" cy="46" r="1.5" fill="#10B981" />
                <circle cx="53" cy="50" r="1" fill="#10B981" />
                <circle cx="45" cy="52" r="1.2" fill="#3B82F6" />

                {/* Reticle grid */}
                <line x1="50" y1="10" x2="50" y2="90" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="1,4" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="1,4" />
                
                {/* Text identifier */}
                <text x="25" y="93" fill="#94A3B8" fontSize="6" fontFamily="monospace">MAG: 12000X</text>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
