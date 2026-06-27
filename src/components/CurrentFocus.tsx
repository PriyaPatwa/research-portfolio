'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ArrowRight, Dna, Brain, Heart, Radio, Network } from 'lucide-react';

const focusAreas = [
  {
    id: 'ai',
    title: 'Medical AI',
    icon: Brain,
    description: 'Investigating deep neural networks to automate clinical predictions and classify medical scans, minimizing subjective diagnostic errors.',
    progress: '85%',
  },
  {
    id: 'imaging',
    title: 'Medical Imaging',
    icon: Network,
    description: 'Working on anatomical zone segmentation using PyTorch and ImageJ, focusing on multi-parametric MRI enhancement algorithms.',
    progress: '78%',
  },
  {
    id: 'delivery',
    title: 'Drug Delivery',
    icon: Dna,
    description: 'Synthesizing surface-modified silica particles to cross cell membranes, analyzing molecular zeta potentials for optimal carrier charge state stability.',
    progress: '65%',
  },
  {
    id: 'health',
    title: 'Digital Health',
    icon: Radio,
    description: 'Studying rapid symptoms-triage chatbots and serial data telemetry loggers to optimize patient management in underserved clinics.',
    progress: '70%',
  },
];

export default function CurrentFocus() {
  const [activeArea, setActiveArea] = useState(focusAreas[0]);

  return (
    <section className="py-24 relative overflow-hidden bg-card/10 border-y border-card/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-xs font-mono text-primary mb-2 uppercase tracking-widest"
          >
            <span>07 / Current Direction</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            What I'm Exploring
          </motion.h2>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interdisciplinary Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
              Solving complex healthcare challenges through interdisciplinary engineering.
            </h3>
            
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              Modern clinical problems cannot be resolved within a single engineering silo. True medical innovation requires bridging chemical synthesis (nanoparticles), computational modeling (deep learning), and embedded hardware design (biomedical sensors).
            </p>
            
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              I enjoy translating physical biological concepts into computational models, and validating digital sensor designs with analog instrumentation. My aim is to build medical technologies that are accessible, reliable, and clinically verified.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-secondary pt-2">
              <Target className="w-4 h-4 text-primary animate-pulse" />
              <span>Current Objective: Graduate Research Applications</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tabs Widget */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 w-full">
            {/* Tab buttons (sm:4 cols) */}
            <div className="sm:col-span-5 flex flex-col space-y-2.5">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-300 font-sans ${
                      activeArea.id === area.id
                        ? 'bg-card border-primary/45 text-foreground shadow-lg shadow-primary/5'
                        : 'bg-transparent border-card/45 text-text-secondary hover:text-foreground hover:bg-card/25'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeArea.id === area.id ? 'text-primary' : 'text-text-secondary'}`} />
                    <span className="text-sm font-medium">{area.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Details View (sm:7 cols) */}
            <div className="sm:col-span-7 bg-card/30 border border-card/60 p-8 rounded-2xl flex flex-col justify-between h-64 relative overflow-hidden backdrop-blur-xs select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 flex flex-col justify-between h-full"
                >
                  <div>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-wider">
                      Active Investigation
                    </span>
                    <h4 className="text-lg font-display font-bold text-foreground mt-0.5">
                      {activeArea.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans mt-3">
                      {activeArea.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary mb-1">
                      <span>Research Progression</span>
                      <span>{activeArea.progress}</span>
                    </div>
                    <div className="w-full bg-card h-1.5 rounded-full overflow-hidden border border-card">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: activeArea.progress }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
