'use client';

import Background from '@/components/Background';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Interests from '@/components/Interests';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import CurrentFocus from '@/components/CurrentFocus';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Telemetry Loader Screen */}
      <LoadingScreen />

      {/* Dynamic Animated Canvas Grid Background */}
      <Background />

      {/* Navigation Layer */}
      <Navbar />

      {/* Page Content Structure */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Hero Area */}
        <Hero />

        {/* Professional About Details */}
        <About />

        {/* Research Core Focus Areas */}
        <Interests />

        {/* Selected Academic Project Case Studies */}
        <Projects />

        {/* Journey & Experience Timeline */}
        <Timeline />

        {/* Scientific Literature & Publication Cards */}
        <Publications />

        {/* Skills Competencies & Honors */}
        <Skills />

        {/* What I'm Exploring Dashboard */}
        <CurrentFocus />

        {/* Connection Form & External Anchors */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Quick Access Top Scroll */}
      <BackToTop />
    </>
  );
}
