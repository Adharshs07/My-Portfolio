'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        isCenter ? 'text-center' : 'text-left',
        className
      )}
    >
      {/* Category Pill with number and cyan laser line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          'inline-flex items-center gap-3 mb-4',
          isCenter ? 'justify-center' : ''
        )}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
          {number}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 font-mono">
          {category}
        </span>
        <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
      </motion.div>

      {/* Main Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]"
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-3.5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed',
            isCenter ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
