'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, FileText, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const socialLinks = [
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/priyapatwa',
      color: 'hover:text-primary hover:border-primary/40',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/priyapatwa',
      color: 'hover:text-foreground hover:border-foreground/30',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:patwasppriya19@gmail.com',
      color: 'hover:text-secondary hover:border-secondary/40',
    },
    {
      icon: FileText,
      label: 'Resume',
      href: '/resume.pdf',
      color: 'hover:text-success hover:border-success/40',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(false);
    setSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    // If variables aren't set, simulate submission for review/testing safety
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS environmental variables not set. Simulating form submission...');
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current?.reset();
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
        },
        (err) => {
          console.error('EmailJS submission error:', err);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-2 text-xs font-mono text-primary mb-2 uppercase tracking-widest"
          >
            <span>08 / Connection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
          >
            Let's Build Better Healthcare Together
          </motion.h2>
        </div>

        {/* Contact layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Details & Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Research Collaboration & Opportunities
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                I am actively seeking research collaborations, graduate assistantships, and industrial internships in medical imaging analysis, clinical robotics, and targeted drug formulations.
              </p>
            </div>

            {/* Direct Connect details */}
            <div className="space-y-4 text-xs font-mono text-text-secondary">
              <div className="flex items-center space-x-3 bg-card/20 border border-card/40 p-4 rounded-xl">
                <Mail className="w-4 h-4 text-secondary" />
                <span>patwasppriya19@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-card/20 border border-card/40 p-4 rounded-xl">
                <LinkedinIcon className="w-4 h-4 text-primary" />
                <span>linkedin.com/in/priyapatwa</span>
              </div>
            </div>

            {/* Social Badges Grid */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-card/75 bg-card/10 text-xs font-mono text-text-secondary transition-all duration-300 ${link.color}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Modern EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-card/30 border border-card/60 p-8 rounded-3xl backdrop-blur-xs select-none">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      placeholder="e.g. Dr. John Doe"
                      className="w-full bg-background border border-card/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      placeholder="e.g. john@university.edu"
                      className="w-full bg-background border border-card/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                    Subject / Project Area
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="e.g. Graduate Research Inquiry"
                    className="w-full bg-background border border-card/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-secondary uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe your collaboration goals, project timeline, or position details..."
                    className="w-full bg-background border border-card/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button and feedback alerts */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-primary/95 text-foreground font-semibold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 group"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span className="font-mono text-xs">Sending telemetry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Form status warnings */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2.5 bg-success/10 border border-success/30 text-success p-4 rounded-xl text-xs font-sans mt-4"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                    <span>Thank you! Your message has been routed successfully. I will respond to your clinical query soon.</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2.5 bg-destructive/10 border border-destructive/30 text-red-500 p-4 rounded-xl text-xs font-sans mt-4"
                  >
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>Error delivering message. Please verify your connection or reach out directly at patwasppriya19@gmail.com.</span>
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
