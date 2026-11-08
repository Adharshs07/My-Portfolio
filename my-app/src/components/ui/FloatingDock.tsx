'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Home, User, Cpu, Briefcase, Award, Layers, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface NavItem {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const DOCK_ITEMS: NavItem[] = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'about', name: 'About', icon: User },
  { id: 'skills', name: 'Skills', icon: Cpu },
  { id: 'projects', name: 'Projects', icon: Briefcase },
  { id: 'experience', name: 'Experience', icon: Award },
  { id: 'services', name: 'Services', icon: Layers },
  { id: 'contact', name: 'Contact', icon: Mail },
];

interface FloatingDockProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  className?: string;
}

function DockIcon({
  item,
  isActive,
  mouseX,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  mouseX: any;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Smooth magnification effect based on mouse distance
  const widthSync = useTransform(distance, [-120, 0, 120], [42, 58, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={item.name}
      className={cn(
        'relative rounded-full flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group cursor-pointer',
        isActive
          ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.7)]'
          : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
      )}
    >
      {/* Active Glowing Ring */}
      {isActive && (
        <motion.span
          layoutId="activeDockGlow"
          className="absolute -inset-1 rounded-full border border-cyan-400/60 pointer-events-none"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
        />
      )}

      <Icon className={cn('w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110')} />

      {/* Floating Tooltip Label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/95 border border-cyan-500/30 text-[11px] font-mono font-medium text-cyan-300 shadow-xl whitespace-nowrap pointer-events-none z-50 backdrop-blur-sm"
          >
            {item.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function FloatingDock({
  activeSection,
  onSelectSection,
  className,
}: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className={cn(
        'fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto',
        className
      )}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-dock flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full"
      >
        {DOCK_ITEMS.map((item) => (
          <DockIcon
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            mouseX={mouseX}
            onClick={() => onSelectSection(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

