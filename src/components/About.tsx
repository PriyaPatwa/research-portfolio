'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, MapPin, GraduationCap, Microscope, ShieldCheck } from 'lucide-react';

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech - Biomedical Engineering',
    sub: 'Honours in Medical Imaging Tech',
  },
  {
    icon: Award,
    label: 'Academic Standing',
    value: 'CGPA 9.88 / 10.0',
    sub: 'Vidyalankar Institute (VIT Mumbai)',
  },
  {
    icon: Microscope,
    label: 'Research Internship',
    value: 'IIT Madras (2025)',
    sub: 'Nanoparticles & Drug Delivery',
  },
  {
    icon: BookOpen,
    label: 'Publications',
    value: 'Springer Book Chapter',
    sub: 'Healthcare Quality Control & Improvement',
  },
  {
    icon: ShieldCheck,
    label: 'Clinical Experience',
    value: 'Fortis Hospital Intern',
    sub: 'Medical Devices & Workflows',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    sub: 'Active in Research Communities',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <span>01 / Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Developing Tomorrow's Healthcare Solutions
          </motion.h2>
        </div>

        {/* Narrative & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-text-secondary leading-relaxed space-y-6"
          >
            <p className="text-lg text-foreground font-sans">
              I am an early-career Biomedical Engineer and Researcher dedicated to developing advanced engineering technologies to address complex clinical challenges. My primary interests span **Medical Imaging Analysis**, **Healthcare Artificial Intelligence**, and **Targeted Nanoparticle Drug Delivery**.
            </p>
            <p>
              With a solid theoretical foundation and hands-on laboratory experience from **IIT Madras**, I design and study modified surface-charge nanoparticles. My clinical internship at **Fortis Hospital** provided practical experience with diagnostic instrumentation and hospital engineering, matching clinical workflows to engineering execution.
            </p>
            <p>
              I believe that the future of medicine lies at the intersection of computational AI model layers and physical biomedical interfaces. I seek to leverage deep learning architectures to improve diagnostic image accuracy and accelerate research in precision medicine.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  className="bg-card/45 border border-card/65 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-xs select-none"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-text-secondary tracking-tight">
                      {fact.label}
                    </span>
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold text-foreground mb-1 leading-snug">
                      {fact.value}
                    </h3>
                    <p className="text-xs text-text-secondary font-mono">
                      {fact.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
