'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-card/45 py-12 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-text-secondary">
        <div className="flex items-center space-x-2">
          <span>© {currentYear} Priya Patwa.</span>
          <span className="text-card-foreground/20">|</span>
          <span>Biomedical Research Portfolio.</span>
        </div>
        
        <div className="text-center md:text-right text-[10px] text-text-secondary/80 leading-relaxed max-w-sm">
          Designed with Space Grotesk & Inter. Programmed in Next.js 15, React 19, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
