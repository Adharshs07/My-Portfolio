'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MapPin, FileText, ArrowUpRight, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PhoneIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ProfileIdentityCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D tilt coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="relative w-full max-w-[420px] mx-auto rounded-3xl p-6 sm:p-7 glass-panel-glow border border-slate-200/90 dark:border-cyan-500/25 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(34,211,238,0.12)] group transition-all duration-300"
    >
      {/* Dynamic Cursor Spotlight Glint */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.15), transparent 70%)`,
        }}
      />

      {/* Top Status Strip */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-cyan-500/15">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-300 font-semibold">
            Identity Card
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100/70 dark:bg-cyan-950/60 border border-cyan-300/60 dark:border-cyan-500/30 text-[10px] font-mono text-cyan-800 dark:text-cyan-300 font-medium">
          <Sparkles className="w-2.5 h-2.5" />
          <span>Active</span>
        </div>
      </div>

      {/* Avatar Image + Hologram Ring */}
      <div className="relative flex items-center gap-4 sm:gap-5 mb-5">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_25px_rgba(34,211,238,0.35)] shrink-0 group-hover:scale-105 transition-transform duration-500">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-[#0b1220]">
            <Image
              src="/portrait-cutout.png"
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover object-top filter brightness-105 contrast-105"
              sizes="96px"
              priority
            />
          </div>
        </div>

        {/* Name and Designation */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-display flex items-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400 tracking-tight mt-0.5">
            {PERSONAL_INFO.role}
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      {/* Short Bio Statement */}
      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4 bg-slate-50/90 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800/80">
        {PERSONAL_INFO.bioShort}
      </p>

      {/* Current Focus Pills */}
      <div className="mb-5">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5 font-medium">
          <Code2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          <span>WHAT I BUILD</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Full-Stack Applications', 'Scalable REST APIs', 'Real-Time Applications', 'AI-Integrated Solutions'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-500/20 text-[10px] font-mono text-cyan-800 dark:text-cyan-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons (Resume & Contact) */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 pt-3 border-t border-slate-200/80 dark:border-slate-800">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
        >
          <span>Connect</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <a
          href="/Adharsh-removebg-preview.png"
          download="Adharsh_S_Profile"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-cyan-500/20 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all hover:border-cyan-400/40 active:scale-95 shadow-xs"
          title="Download Developer Profile"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Resume CV</span>
        </a>
      </div>

      {/* Bottom Profile Links (GitHub, LinkedIn, LeetCode, Phone) */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400">
        <div className="text-[11px] font-mono">PROFILES</div>
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
            aria-label="Phone"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
