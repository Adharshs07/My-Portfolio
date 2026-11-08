'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-[#050816]/90 border-t border-cyan-500/15 py-10 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-slate-100 font-display">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </span>
          </div>

          {/* Local IST Time Clock */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/20 text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-400">TRIVANDRUM, IN:</span>
            <span className="font-bold text-cyan-300">{time || '00:00:00'} IST</span>
          </div>

          {/* Stack info & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-cyan-500/80" />
              <span>CLEAN ARCHITECTURE • NEXT.JS • TYPESCRIPT</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-semibold uppercase tracking-wider active:scale-95"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
