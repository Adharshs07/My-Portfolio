'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LampContainer({ children, className }: LampContainerProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-[580px] sm:min-h-[640px] md:min-h-[720px] flex-col items-center justify-center overflow-hidden w-full rounded-3xl z-0 pt-16 sm:pt-20 pb-12',
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-110 sm:scale-y-125 items-center justify-center isolate z-0">
        {/* Left Conic Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-[#f8fafc] dark:bg-[#050816] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-40 h-[100%] left-0 bg-[#f8fafc] dark:bg-[#050816] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Right Conic Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-[#f8fafc] dark:bg-[#050816] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-[100%] right-0 bg-[#f8fafc] dark:bg-[#050816] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Lamp Soft Glow Center Orbs */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#f8fafc] dark:bg-[#050816] blur-2xl transition-colors duration-300" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-400 opacity-25 dark:opacity-35 blur-3xl" />
        
        {/* Core Light Beam */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          viewport={{ once: true }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-300 blur-2xl opacity-30 dark:opacity-40"
        />

        {/* Horizontal Laser Line */}
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '32rem' }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          viewport={{ once: true }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[7rem] bg-gradient-to-r from-transparent via-cyan-400 dark:via-cyan-300 to-transparent shadow-[0_0_20px_2px_rgba(34,211,238,0.7)]"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#f8fafc] dark:bg-[#050816] transition-colors duration-300" />
      </div>

      {/* Children Content placed directly under the lamp beam */}
      <div className="relative z-50 flex -translate-y-20 sm:-translate-y-24 flex-col items-center px-4 sm:px-6 w-full max-w-5xl text-center">
        {children}
      </div>
    </div>
  );
}
