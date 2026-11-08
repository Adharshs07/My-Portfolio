'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface MovingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorderButton({
  as: Component = 'button',
  children,
  className,
  containerClassName,
  borderClassName,
  ...props
}: MovingBorderButtonProps) {
  return (
    <Component
      className={cn(
        'relative p-[1.5px] overflow-hidden rounded-full inline-flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm',
        containerClassName
      )}
      {...props}
    >
      {/* Moving gradient border layer */}
      <span
        className={cn(
          'absolute inset-[-1000%] animate-moving-border bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#8b5cf6_100%)] opacity-80 group-hover:opacity-100 transition-opacity',
          borderClassName
        )}
      />

      {/* Button content */}
      <span
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-full h-full px-6 py-2.5 rounded-full bg-white dark:bg-[#0b1220] text-sm font-semibold text-slate-800 dark:text-slate-100 backdrop-blur-3xl group-hover:bg-slate-50 dark:group-hover:bg-[#101827] transition-colors',
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
}
