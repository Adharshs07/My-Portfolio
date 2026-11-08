'use client';

import React, { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

function subscribe(callback: () => void) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        callback();
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true });
  return () => observer.disconnect();
}

function getSnapshot() {
  return typeof document !== 'undefined'
    ? document.documentElement.classList.contains('dark')
    : true;
}

function getServerSnapshot() {
  return true;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-slate-300/80 dark:border-cyan-500/30 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-cyan-300 hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-200 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-95"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
