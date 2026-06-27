'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, FileText, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  brief: string;
  problem: string;
  objective: string;
  methodology: string;
  tools: string[];
  results: string;
  futureScope: string;
  keyLearnings: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Surface Charge Engineering of Nanoparticles for Drug Delivery',
    category: 'Nanotechnology & Drug Delivery',
    brief: 'Synthesized and modified surface-charges of nanoparticles to optimize cellular uptake efficiency for cancer therapeutics.',
    problem: 'Conventional chemotherapy suffers from poor cellular specificity, destroying healthy tissues and causing systemic toxicity.',
    objective: 'Design and characterize surface-modified nanoparticles with optimal zeta potential and particle size to maximize target cell absorption and payload release.',
    methodology: 'Synthesized gold and polymeric nanoparticles through chemical reduction. Grafted amine groups (to positive charges) and PEG chains (for stealth characteristics). Characterized sizes and surface charge states using Dynamic Light Scattering (DLS) and Zeta Potential analysis. Utilized OriginPro to fit binding kinetics and statistical variations.',
    tools: ['OriginPro', 'DLS', 'Zeta Potential Analyzer', 'Chemical Synthesis', 'UV-Vis Spectroscopy'],
    results: 'Modified nanoparticles successfully demonstrated stable positive zeta potentials (+15mV to +25mV) and highly narrow polydispersity indices (PDI < 0.15). Preliminary in-vitro studies showed a 3.2x increase in cellular uptake compared to unmodified carrier control.',
    futureScope: 'Integrating active targeting ligands (like folic acid) on the PEG-terminal shell to selectively bind receptors overexpressed in breast cancer models.',
    keyLearnings: 'Gained expertise in nanomaterial synthesis, surface characterization techniques, and the critical influence of particle electrostatics on cell membrane interactions.',
    github: 'https://github.com/priyapatwa',
  },
  {
    id: 2,
    title: 'AI-based Prostate Cancer Risk Assessment using MRI Imaging',
    category: 'Medical Imaging & AI',
    brief: 'Developed a deep learning diagnostic system to segment prostate zones and assess tumor aggressiveness from MRI slices.',
    problem: 'Gleason score grading from physical biopsies is highly invasive, painful, and prone to subjective diagnostic errors between pathologists.',
    objective: 'Create a non-invasive computer-aided system to analyze T2w MRI slices, segment prostate transition/peripheral zones, and predict tumor severity.',
    methodology: 'Pre-processed prostate MRI data (DICOM format) utilizing ImageJ for intensity normalization. Constructed deep convolutional neural networks (U-Net/ResNet variants) for anatomical segmentation and region-of-interest (ROI) classification. Analyzed Gleason patterns and scores to validate model classification outputs.',
    tools: ['Python', 'PyTorch', 'ImageJ', 'MATLAB', 'Deep Learning (CNNs)', 'DICOM Toolkits'],
    results: 'The segmentation network achieved a Dice Similarity Coefficient of 0.89 in locating critical prostate zones. The classification model achieved an area under the ROC curve (AUC) of 0.86 in distinguishing clinically significant (Gleason >= 7) from low-risk tumors.',
    futureScope: 'Leveraging multi-parametric MRI (combining T2w with Diffusion-Weighted Imaging - DWI) to incorporate tissue diffusion parameters for enhanced sensitivity.',
    keyLearnings: 'Deepened understanding of clinical MRI datasets, advanced digital image processing methods, and the application of segmentation metrics to evaluate model robustness.',
    github: 'https://github.com/priyapatwa',
  },
  {
    id: 3,
    title: 'Clinical Symptoms Diagnosis & Triaging Chatbot',
    category: 'Digital Health & NLP',
    brief: 'Built a symptoms-based diagnostic chatbot to assist primary healthcare practitioners with rapid triaging in rural communities.',
    problem: 'Rural clinics experience low doctor-to-patient ratios, resulting in long waiting queues and delays in addressing emergency conditions.',
    objective: 'Implement a rule-based and predictive diagnostic text interface that maps symptom sets to likely conditions, guiding practitioners on immediate triage steps.',
    methodology: 'Structured medical symptom maps based on disease classifications. Programmed decision-tree logic and NLP rule-matching steps to parse free-text patient descriptions. Constructed a lightweight dashboard to output primary assessments, key contraindications, and emergency warning flags.',
    tools: ['Python', 'Natural Language Processing', 'Decision Trees', 'Tkinter Interface'],
    results: 'Correctly mapped symptom checklists to primary diagnoses across a 15-category validation set with 88% alignment. Reduced clinical triage intake screening duration from 10 minutes to under 2 minutes.',
    futureScope: 'Connecting the diagnostic pipeline to a larger clinical database (e.g., SNOMED CT) to increase diagnostic width and retrieve drug interaction profiles.',
    keyLearnings: 'Understood clinical data representation, primary care triage logic, and user-interface considerations for clinical medical tools.',
    github: 'https://github.com/priyapatwa',
  },
  {
    id: 4,
    title: 'Arduino-based Real-Time Temperature Monitor',
    category: 'Biomedical Hardware & Sensors',
    brief: 'Designed a real-time warning and logging temperature monitor to safeguard medical incubator inventories.',
    problem: 'Temperature fluctuations in hospital incubators or vaccine storage units are fatal to sensitive biomaterials, but continuous logging is rarely automated in resource-limited clinics.',
    objective: 'Develop a low-cost, high-precision thermal monitoring unit that records real-time storage temperatures and triggers audible/visual warnings upon threshold violations.',
    methodology: 'Wired LM35 linear analog temperature sensors to an Arduino Uno board. Programmed signal conditioning filters to smooth voltage fluctuations. Established continuous serial data streaming to a local log, and designed LED/buzzer indicator circuits.',
    tools: ['Arduino Uno', 'LM35 Temperature Sensor', 'Signal Conditioning', 'C++', 'Circuit Prototyping'],
    results: 'Achieved continuous temperature readings accurate to within ±0.2°C in a controlled testing environment. System successfully triggered immediate alarms within 500ms of detecting thermal deviations.',
    futureScope: 'Upgrading the processor to an ESP32 board to transmit real-time telemetry over Wi-Fi, allowing clinicians to receive mobile push notifications.',
    keyLearnings: 'Gained hands-on experience in analog sensor calibration, embedded hardware programming, and breadboard signal troubleshooting.',
    github: 'https://github.com/priyapatwa',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <span>03 / Research Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Selected Investigations & Case Studies
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-card/45 border border-card/65 rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:border-primary/30"
            >
              <div>
                {/* Category & Icons */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-secondary px-2.5 py-1 bg-card rounded-md border border-card/80">
                    {project.category}
                  </span>
                  <FileText className="w-5 h-5 text-text-secondary opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                  {project.brief}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <span key={index} className="text-[10px] font-mono text-text-secondary bg-card/60 px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[10px] font-mono text-text-secondary bg-card/60 px-2 py-0.5 rounded">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-card/50">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1 text-xs font-mono text-primary hover:text-secondary transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-foreground transition-colors p-1"
                      aria-label="View Codebase"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Project Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-card border border-card-foreground/15 rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-card border-b border-card-foreground/10 px-8 py-5 flex items-center justify-between z-10">
                  <div>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
                      Case Study / {selectedProject.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-0.5 leading-snug">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 border border-card-foreground/10 hover:border-card-foreground/20 rounded-lg hover:bg-card-foreground/5 text-text-secondary hover:text-foreground transition-colors focus:outline-none"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="px-8 py-8 space-y-6 text-sm font-sans leading-relaxed">
                  
                  {/* Problem Description */}
                  <div>
                    <h4 className="text-xs font-mono text-secondary mb-1.5 uppercase tracking-wider">Problem Statement</h4>
                    <p className="text-text-secondary bg-background/30 p-4 border border-card-foreground/5 rounded-xl">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Scientific Objective */}
                  <div>
                    <h4 className="text-xs font-mono text-primary mb-1.5 uppercase tracking-wider">Research Objective</h4>
                    <p className="text-foreground font-medium">
                      {selectedProject.objective}
                    </p>
                  </div>

                  {/* Research Methodology */}
                  <div>
                    <h4 className="text-xs font-mono text-secondary mb-1.5 uppercase tracking-wider">Methodology & Experimental Protocol</h4>
                    <p className="text-text-secondary">
                      {selectedProject.methodology}
                    </p>
                  </div>

                  {/* Results and Outcomes */}
                  <div>
                    <h4 className="text-xs font-mono text-success mb-1.5 uppercase tracking-wider">Quantifiable Results</h4>
                    <p className="text-foreground font-medium bg-success/5 border border-success/20 p-4 rounded-xl">
                      {selectedProject.results}
                    </p>
                  </div>

                  {/* Tools / Equipment */}
                  <div>
                    <h4 className="text-xs font-mono text-secondary mb-2 uppercase tracking-wider">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span key={index} className="text-xs font-mono text-foreground bg-card-foreground/5 border border-card-foreground/10 px-3 py-1 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Future Scope & Learnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-card-foreground/10">
                    <div>
                      <h4 className="text-xs font-mono text-secondary mb-1.5 uppercase tracking-wider">Future Scope</h4>
                      <p className="text-xs text-text-secondary">
                        {selectedProject.futureScope}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-secondary mb-1.5 uppercase tracking-wider">Key Learnings</h4>
                      <p className="text-xs text-text-secondary">
                        {selectedProject.keyLearnings}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="bg-background/40 border-t border-card-foreground/5 px-8 py-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-secondary">
                    Priya Patwa — Portfolio
                  </span>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono px-3.5 py-1.5 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
