'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Home, RefreshCw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Blueprint Grid backdrop */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 text-center max-w-md space-y-8 flex flex-col items-center">
        
        {/* Flatline ECG graphic */}
        <div className="relative flex items-center justify-center p-6 border border-red-500/20 bg-red-500/5 rounded-full text-red-500">
          <Activity className="w-10 h-10 animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping opacity-20" />
        </div>

        {/* Status codes */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest">
            Alert: Signal Loss [404]
          </span>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Telemetry Node Offline
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed font-sans max-w-xs mx-auto">
            The medical diagnostic address you requested could not be resolved. The sensor stream has flatlined or the URL is invalid.
          </p>
        </div>

        {/* Warning ECG Waveform */}
        <svg viewBox="0 0 300 60" className="w-full h-12 stroke-red-500/50" fill="none" strokeWidth="2">
          <path d="M 0 30 L 80 30 L 100 30 L 110 30 L 120 30 L 130 30 M 130 30 L 300 30" strokeDasharray="4,4" />
          <line x1="124" y1="30" x2="180" y2="30" stroke="#EF4444" strokeWidth="2.5" />
        </svg>

        {/* Navigation Return Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-card-foreground/10 hover:border-red-500/30 text-foreground font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4 text-red-400" />
            <span className="text-xs font-mono">Reconnect Telemetry</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
