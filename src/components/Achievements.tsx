'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: GraduationCap,
    title: 'Class Topper (CGPA 9.88)',
    category: 'Academic Excellence',
    detail: 'Ranked 1st in the Biomedical Engineering program, obtaining specialized Honours in Medical Imaging Tech.',
  },
  {
    icon: Trophy,
    title: 'IIT Madras Research Fellowship',
    category: 'Research Selection',
    detail: 'Selected for the competitive summer research program at IIT Madras to work on surface-charge engineering of nanoparticles.',
  },
  {
    icon: BookOpen,
    title: 'Springer Book Chapter — Soon Published',
    category: 'Literature Success',
    detail: 'Co-authored a peer-reviewed Springer book chapter on quality control trends in healthcare systems. Currently in final review stage, soon to be officially published.',
  },
  {
    icon: Award,
    title: 'Biomedical Innovation Finalist',
    category: 'Hackathons & Competitions',
    detail: 'Affordable Haptic Therapy for Stroke Recovery using Haptic sensor and ESP32 for realtime data transmission.',
  },
];

export default function Achievements() {
  return (
    <div className="space-y-8 select-none">
      <div>
        <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Milestones</span>
        <h3 className="text-2xl font-display font-bold text-foreground mt-1">Achievements & Honours</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className="bg-card/30 border border-card/60 p-6 rounded-2xl flex flex-col justify-between transition-colors duration-300 hover:border-success/35"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-text-secondary bg-card/70 px-2 py-0.5 rounded border border-card/80">
                  {item.category}
                </span>
                <Icon className="w-5 h-5 text-success" />
              </div>
              
              <div>
                <h4 className="text-base font-display font-bold text-foreground mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
