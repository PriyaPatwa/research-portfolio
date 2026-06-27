'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, GraduationCap, HeartPulse, Compass } from 'lucide-react';

interface TimelineEvent {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: any;
  type: 'work' | 'research' | 'publication' | 'future';
  highlights: string[];
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    role: 'Healthcare Analyst & Operations Intern',
    organization: 'Vision Rescue (The Movement India)',
    period: 'Sep 2023 - Dec 2023',
    description: 'Contributed to humanitarian healthcare outreach and community welfare analytics.',
    icon: HeartPulse,
    type: 'work',
    highlights: [
      'Assisted in setting up community health check-up drives for underserved populations.',
      'Promoted childhood vaccination awareness campaigns in high-risk zones.',
      'Managed and analyzed regional healthcare dataset distributions using Microsoft Excel.'
    ],
  },
  {
    id: 2,
    role: 'Biomedical & Clinical Engineering Intern',
    organization: 'Fortis Hospital',
    period: 'Dec 2023 - May 2024',
    description: 'Completed comprehensive hospital observation rotations and clinical equipment training.',
    icon: Briefcase,
    type: 'work',
    highlights: [
      'Observed advanced medical diagnostic instrumentation (MRI, CT, Ultrasound) in active clinical runs.',
      'Assisted with routine clinical calibration, safety reviews, and quality validation processes.',
      'Acquired domain knowledge of healthcare tech operations and patient safety standards.'
    ],
  },
  {
    id: 3,
    role: 'Springer Book Chapter Co-Author',
    organization: 'Springer Publications',
    period: 'Soon Published',
    description: 'Co-authored a book chapter focused on quality standards and control metrics in healthcare systems.',
    icon: BookOpen,
    type: 'publication',
    highlights: [
      'Title: "Current and Future Trends in Healthcare Quality Control and Improvement".',
      'Conducted a thorough review of medical device validation protocols under Dr. Gajanan Nagare (VIT Mumbai).',
      'Explored emerging techniques in digital health systems and machine learning quality controls.'
    ],
  },
  {
    id: 4,
    role: 'Biomaterials Research Intern',
    organization: 'Indian Institute of Technology, Madras (IIT Madras)',
    period: 'June 2025 - July 2025',
    description: 'Designed and characterized nanoparticles for targeted drug delivery platforms.',
    icon: GraduationCap,
    type: 'research',
    highlights: [
      'Synthesized and surface-modified gold/polymeric nanoparticles in laboratory scale.',
      'Conducted particle characterization metrics (DLS, Zeta Potential) to study size and stability.',
      'Analyzed experimental nanoparticle-cell interaction curves in OriginPro to study binding kinetics.'
    ],
  },
  {
    id: 5,
    role: 'Future Milestones & Graduate Research',
    organization: 'Academic & Industrial Ambitions',
    period: '2026 and Beyond',
    description: 'Advancing research in clinical AI and next-generation medical imaging frameworks.',
    icon: Compass,
    type: 'future',
    highlights: [
      'Applying for PhD / Research Master programs in Biomedical AI and Nano-Medicine.',
      'Seeking collaborations with research labs and device companies for clinical trials validation.',
      'Aiming to bridge the gap between computational deep learning architectures and molecular medicine.'
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-card/5">
      {/* Background element */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-20 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-2 text-xs font-mono text-primary mb-2 uppercase tracking-widest"
          >
            <span>04 / Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Professional & Academic Timeline
          </motion.h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-card/80 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          {timelineData.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Bullet Indicator */}
                <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-card bg-background text-primary shadow-lg ring-4 ring-background z-10 transition-transform hover:scale-115">
                  <Icon className="w-4 h-4 text-secondary" />
                </span>

                {/* Period on Left side for Desktop */}
                <div className="hidden md:block absolute -left-[180px] top-2 text-right w-[120px]">
                  <span className="text-xs font-mono text-secondary font-semibold">
                    {event.period}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="bg-card/40 border border-card/60 rounded-2xl p-6 md:p-8 hover:border-primary/25 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground leading-tight">
                        {event.role}
                      </h3>
                      <p className="text-sm text-primary font-sans font-medium mt-0.5">
                        {event.organization}
                      </p>
                    </div>
                    {/* Period tag for Mobile */}
                    <span className="md:hidden text-[10px] font-mono text-secondary bg-card px-2.5 py-1 rounded border border-card/85 w-fit">
                      {event.period}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-xs text-text-secondary font-sans leading-relaxed">
                        <span className="text-primary mr-2.5 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
