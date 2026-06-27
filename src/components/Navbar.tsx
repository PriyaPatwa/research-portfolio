'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import useActiveSection from '@/hooks/useActiveSection';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Publications', id: 'publications' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-card/40 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => handleScrollTo('home')}
          className="flex items-center space-x-2 text-xl font-display font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span>Priya Patwa</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="relative text-sm font-sans font-medium transition-colors duration-200 py-1 hover:text-foreground text-text-secondary"
            >
              <span className={activeSection === item.id ? 'text-foreground font-semibold' : ''}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CV / Actions */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact');
            }}
            className="inline-flex items-center space-x-1 text-xs font-mono px-4 py-2 border border-primary/30 rounded-full text-primary hover:bg-primary/10 transition-colors duration-200"
          >
            <span>Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground focus:outline-none p-1 border border-card rounded-md hover:bg-card/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-card"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left text-base font-medium py-1 transition-colors ${
                    activeSection === item.id
                      ? 'text-primary border-l-2 border-primary pl-2'
                      : 'text-text-secondary pl-2 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-card">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('contact');
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-sm font-sans font-medium px-4 py-2.5 bg-primary text-foreground rounded-lg hover:bg-primary/95 transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
