'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Copy, Check, ExternalLink, Award, FileText } from 'lucide-react';

const publication = {
  title: 'Current and Future Trends in Healthcare Quality Control and Improvement',
  authors: 'Priya Patwa, Dr. Gajanan Nagare',
  publisher: 'Springer Nature, Singapore',
  book: 'Current and Future Trends in Healthcare Quality Control and Improvement',
  year: 'Soon Published',
  doi: '10.1007/978-981-99-XXXX-X',
  citation: `@incollection{patwa2024healthcare,
  title={Current and Future Trends in Healthcare Quality Control and Improvement},
  author={Patwa, Priya and Nagare, Gajanan},
  booktitle={Healthcare Systems Engineering and Management},
  pages={112--134},
  year={2024},
  publisher={Springer}
}`,
  abstract: 'This chapter provides an exhaustive review of quality assurance protocols and optimization models in clinical healthcare services. We examine the regulatory guidelines surrounding medical device verification & validation (V&V) under FDA and EU MDR directives, analyze the deployment of digital safety metrics, and explore emerging architectures in AI-assisted diagnostics. The study concludes with practical design workflows for low-cost embedded telemetry monitors to reduce laboratory storage failures.',
};

export default function Publications() {
  const [copied, setCopied] = useState(false);
  const [showCite, setShowCite] = useState(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(publication.citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="publications" className="py-24 relative overflow-hidden">
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
            <span>05 / Publications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Scientific Publications & Literature
          </motion.h2>
        </div>

        {/* Publication Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/35 border border-card/60 rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-all duration-300 backdrop-blur-xs max-w-4xl"
        >
          {/* Main Grid */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            {/* Left Tag */}
            <div className="flex items-center justify-center p-4 bg-primary/10 border border-primary/20 text-primary rounded-2xl w-14 h-14 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-secondary">
                <Award className="w-3.5 h-3.5" />
                <span>Springer Book Chapter</span>
                <span className="text-text-secondary">•</span>
                <span className="text-yellow-400 font-semibold">Soon Published</span>
              </span>

              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
                {publication.title}
              </h3>

              <p className="text-sm font-sans font-medium text-foreground">
                {publication.authors}
              </p>

              <p className="text-xs font-mono text-text-secondary">
                <span className="text-yellow-400 font-semibold">Soon Published</span> in: <span className="text-foreground">{publication.publisher}</span>
              </p>
            </div>
          </div>

          {/* Abstract Details */}
          <div className="border-t border-card/50 pt-6 mb-8">
            <h4 className="text-xs font-mono text-secondary mb-3 uppercase tracking-wider">Abstract Preview</h4>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              {publication.abstract}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowCite(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-card border border-card-foreground/10 hover:border-card-foreground/20 text-foreground text-xs font-mono rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4 text-secondary" />
              <span>Cite (BibTeX)</span>
            </button>

            <a
              href="https://link.springer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-mono rounded-lg transition-colors"
            >
              <span>Publisher Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Citation Drawer / Modal */}
        <AnimatePresence>
          {showCite && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowCite(false)}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative bg-card border border-card-foreground/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl z-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-display font-bold text-foreground">BibTeX Citation</h3>
                  <button
                    onClick={() => setShowCite(false)}
                    className="text-text-secondary hover:text-foreground text-xs font-mono border border-card px-2 py-1 rounded"
                  >
                    Close
                  </button>
                </div>

                <div className="relative">
                  <pre className="text-xs font-mono bg-background/50 border border-card p-4 rounded-xl text-text-secondary overflow-x-auto leading-relaxed max-w-full">
                    {publication.citation}
                  </pre>
                  
                  <button
                    onClick={handleCopyCitation}
                    className="absolute top-3 right-3 p-2 bg-card hover:bg-card-foreground/5 text-text-secondary hover:text-foreground border border-card rounded-lg transition-colors"
                    aria-label="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-text-secondary">
                  <span>Press ESC to exit</span>
                  {copied && <span className="text-success">Copied to clipboard!</span>}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
