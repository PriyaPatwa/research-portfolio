'use client';

import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds: string[], threshold = 0.25) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // focused in the upper half of screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
