'use client';

import React from 'react';
import { motion } from 'motion/react';
import { LampContainer } from '@/components/ui/LampEffect';
import ProfileIdentityCard from '@/components/ProfileIdentityCard';
import SpeedCounter from '@/components/ui/SpeedCounter';
import { MovingBorderButton } from '@/components/ui/MovingBorder';
import { ArrowUpRight, Code, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO CENTERPIECE: ACETERNITY LAMP EFFECT */}
      <LampContainer className="w-full">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1220]/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span>Available for Opportunities</span>
        </motion.div>

        {/* Hero Name with Monumental Typography & Cyber Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-hero-rounded text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.02em] hero-title-cyan-gradient drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-cyan-400 font-display flex items-center justify-center gap-2"
        >
          <span>{PERSONAL_INFO.role}</span>
        </motion.div>

        {/* Concise Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
        >
          Engineering scalable web platforms, resilient distributed backend architectures, and high-performance digital experiences with strict Clean Architecture and modern TypeScript.
        </motion.p>

        {/* CTA Buttons (View Projects & Contact Me) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Moving Border View Projects Button */}
          <MovingBorderButton
            onClick={() => onNavigate('projects')}
            className="gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </MovingBorderButton>

          {/* Magnetic Glass Contact Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400 text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95 cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>
      </LampContainer>

      {/* 2. PROFILE IDENTITY CARD + CORE HIGHLIGHTS SECTION */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-10 sm:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Profile Card (Sreenurj inspired) */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileIdentityCard />
          </div>

          {/* Right: Architectural Competencies & Quick Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300 w-fit">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Engineering Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 font-display tracking-tight leading-tight">
              Production-Grade Reliability with <span className="hero-accent-gradient">Clean Architecture</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I build enterprise-grade applications where domain business logic remains isolated and resilient to framework changes. From geospatial service dispatching to WebSockets and WebRTC, every layer is planned for scalability, testability, and zero runtime compromise.
            </p>

            {/* Quick 3 Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-[#0b1220]/70 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <Code className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">SOLID & DTOs</h4>
                <p className="text-[11px] text-slate-400 mt-1">Decoupled domain models and type safety.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b1220]/70 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <Zap className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Real-Time Core</h4>
                <p className="text-[11px] text-slate-400 mt-1">Socket.IO WebSockets and WebRTC audio/video.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b1220]/70 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <ShieldCheck className="w-5 h-5 text-violet-400 mb-2" />
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">Cloud & DevOps</h4>
                <p className="text-[11px] text-slate-400 mt-1">AWS EC2, S3, Nginx proxy & PM2 orchestration.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
              >
                <span>Read Full Biography & Career Journey</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SPEED COUNTER: AUTHENTIC METRICS SECTION */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <SpeedCounter />
      </div>
    </div>
  );
}

