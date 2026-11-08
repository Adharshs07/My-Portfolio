'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { cn } from '@/utils/cn';

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  const height = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className={cn('relative w-full max-w-5xl mx-auto', className)}>
      {/* Vertical beam line */}
      <div className="absolute -left-2 sm:left-4 md:left-6 top-3 bottom-3 w-[2px] bg-slate-300/80 dark:bg-slate-800 rounded-full transition-colors duration-300">
        {/* Luminous Animated Fill */}
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
        />

        {/* Glow point */}
        <motion.div
          style={{ top: height }}
          className="absolute -left-[5px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 dark:bg-cyan-300 shadow-[0_0_15px_3px_rgba(6,182,212,0.9)] border-2 border-[#f8fafc] dark:border-[#050816] transition-colors duration-300"
        />
      </div>

      <div className="pl-6 sm:pl-12 md:pl-16">{children}</div>
    </div>
  );
}
