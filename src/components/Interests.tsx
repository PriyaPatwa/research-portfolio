'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const interests = [
  {
    title: 'Medical Imaging',
    description: 'Computer-aided diagnosis, image segmentation (MRI, CT), and classification of pathological tissues using deep learning networks.',
    motif: 'mri',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Leveraging neural networks, CNNs, and predictive models to improve clinical diagnostic accuracy and patient outcome predictions.',
    motif: 'ai',
  },
  {
    title: 'Biomedical Signal Processing',
    description: 'Analyzing biosignals (ECG, EEG, EMG) to detect anomalies, filter noise, and extract biomarkers for real-time patient monitoring.',
    motif: 'signal',
  },
  {
    title: 'Nanotechnology & Drug Delivery',
    description: 'Surface charge engineering of nanoparticles to cross biological barriers and deliver therapeutic payloads to target cancer cells.',
    motif: 'nano',
  },
  {
    title: 'Clinical Engineering',
    description: 'Ensuring patient safety through the optimization of medical equipment, quality controls, and compliance with global regulatory standards.',
    motif: 'clinical',
  },
  {
    title: 'Healthcare Robotics & Devices',
    description: 'Design and validation of diagnostic sensors, hardware prototypes (Arduino-based), and robotic assistive technologies.',
    motif: 'robotics',
  },
];

export default function Interests() {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-card/10 border-y border-card/30">
      {/* Background visual detail */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none" />
      
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
            <span>02 / Research Interests</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Key Domains of Scientific Inquiry
          </motion.h2>
        </div>

        {/* Grid of Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(6, 182, 212, 0.4)' }}
              className="bg-card/30 border border-card/50 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group h-80 relative overflow-hidden"
            >
              {/* Overlay Motif SVG Background on Hover */}
              <div className="absolute right-4 bottom-4 w-32 h-32 opacity-10 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none">
                {interest.motif === 'mri' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-primary" strokeWidth="1.5">
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="50" cy="50" r="30" />
                    <path d="M 15 50 L 85 50 M 50 15 L 50 85" strokeDasharray="2,2" />
                    <path d="M 30 35 C 38 28 62 28 70 35 C 70 65 30 65 30 35 Z" />
                  </svg>
                )}
                {interest.motif === 'ai' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-secondary" strokeWidth="1.5">
                    <circle cx="30" cy="30" r="4" fill="currentColor" />
                    <circle cx="70" cy="20" r="4" fill="currentColor" />
                    <circle cx="50" cy="70" r="4" fill="currentColor" />
                    <line x1="30" y1="30" x2="70" y2="20" />
                    <line x1="30" y1="30" x2="50" y2="70" />
                    <line x1="70" y1="20" x2="50" y2="70" />
                    <circle cx="50" cy="35" r="15" strokeDasharray="3,3" />
                  </svg>
                )}
                {interest.motif === 'signal' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-success" strokeWidth="2">
                    <path d="M 0 50 L 30 50 L 40 20 L 50 80 L 60 45 L 70 55 L 80 50 L 100 50" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {interest.motif === 'nano' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-primary" strokeWidth="1.5">
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    <circle cx="50" cy="50" r="28" strokeDasharray="4,4" />
                    <circle cx="28" cy="32" r="3" fill="currentColor" />
                    <circle cx="72" cy="68" r="4" fill="currentColor" />
                    <circle cx="68" cy="28" r="2" fill="currentColor" />
                    <circle cx="30" cy="70" r="3.5" fill="currentColor" />
                  </svg>
                )}
                {interest.motif === 'clinical' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-secondary" strokeWidth="1.5">
                    <rect x="25" y="20" width="50" height="60" rx="5" />
                    <line x1="35" y1="35" x2="65" y2="35" />
                    <line x1="35" y1="45" x2="65" y2="45" />
                    <line x1="35" y1="55" x2="55" y2="55" />
                    <circle cx="62" cy="65" r="4" fill="currentColor" />
                  </svg>
                )}
                {interest.motif === 'robotics' && (
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-success" strokeWidth="1.5">
                    <path d="M 20 80 L 40 40 L 70 30 L 80 40" strokeLinecap="round" />
                    <circle cx="40" cy="40" r="4" fill="currentColor" />
                    <circle cx="70" cy="30" r="4" fill="currentColor" />
                    <path d="M 75 45 L 85 45 M 80 40 L 80 50" />
                  </svg>
                )}
              </div>

              <div>
                {/* Visual Label Indicator */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-primary transition-colors" />
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">Research Domain</span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {interest.title}
                </h3>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed font-sans relative z-10">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
