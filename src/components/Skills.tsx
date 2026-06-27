'use client';

import { motion } from 'framer-motion';
import { Terminal, HeartPulse, Brain, Cpu, Search, CheckCircle } from 'lucide-react';
import Achievements from './Achievements';

const skillCategories = [
  {
    title: 'Programming & Analysis',
    icon: Terminal,
    color: 'text-primary',
    skills: ['Python', 'MATLAB', 'Java', 'ImageJ', 'AutoCAD'],
  },
  {
    title: 'Biomedical Engineering',
    icon: HeartPulse,
    color: 'text-secondary',
    skills: ['Medical Imaging', 'Biomedical Signal Processing', 'Drug Delivery Systems', 'Clinical Engineering'],
  },
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    color: 'text-primary',
    skills: ['Computer Vision', 'Deep Learning (CNNs)', 'Healthcare AI', 'Medical Diagnostics Models'],
  },
  {
    title: 'Laboratory Research',
    icon: Search,
    color: 'text-success',
    skills: ['OriginPro', 'Dynamic Light Scattering (DLS)', 'Zeta Potential Analysis', 'Scientific Writing'],
  },
  {
    title: 'Hardware & Embedded',
    icon: Cpu,
    color: 'text-secondary',
    skills: ['Arduino', 'Embedded Systems', 'Biomedical Sensors', 'Analog Instrumentation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-card/5">
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
            <span>06 / Technical Skillset</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Competencies & Research Methodologies
          </motion.h2>
        </div>

        {/* Layout split: Skills on Left (7 cols), Achievements on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Skill Cards Grid */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card/30 border border-card/60 p-6 rounded-2xl hover:border-card/90 transition-all duration-300 select-none"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 bg-card rounded-xl border border-card/80 ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-card border border-card/60 text-text-secondary hover:text-foreground hover:border-primary/20 transition-all"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary opacity-60" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements Grid */}
          <div className="lg:col-span-5 w-full">
            <Achievements />
          </div>

        </div>

      </div>
    </section>
  );
}
