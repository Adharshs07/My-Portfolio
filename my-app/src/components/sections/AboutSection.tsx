'use client';

import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Code2, Cpu, CheckCircle, Terminal, HeartHandshake, Brain, MessageCircle, Computer, GraphStar, ArrowUp, ArrowUp01, ArrowUpFromLine, LucideArrowDownUp, LucideWavesArrowDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { ArrowUpAzIcon } from 'lucide-react/dist/lucide-react.suffixed.js';

interface AboutSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="02"
        category="Profile"
        title="Driven by Curiosity, Built Through Code"
        subtitle="A self-driven Full Stack Developer passionate about building scalable web applications, exploring modern technologies, and transforming ideas into practical digital solutions through continuous learning and hands-on development."
      />

      {/* Main Grid: Narrative Story + Interactive Philosophy Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Narrative Story & Career Transition */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel-glow relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/70 dark:bg-cyan-950/60 border border-cyan-300/60 dark:border-cyan-500/30 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-4 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-display mb-4">
              From Communicative Analysis to Software Architecture
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                My background began in <span className="text-cyan-700 dark:text-cyan-400 font-semibold">English Language and Literature (M.A. & B.A.)</span>, where I honed high-order critical reasoning, structural deconstruction, and precision in expression. In literature, meaning emerges from intricate grammatical rules and syntax; in software, reliability emerges from clean patterns, strict contracts, and robust architecture.
              </p>
              <p>
                Driven by a deep passion for digital systems, I made a dedicated leap into software engineering at <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Brototype</span>. Through intensive, practical production simulation, I spent years building production-grade full-stack architectures, scaling Node.js backends, mastering SQL & NoSQL data pipelines, and writing Clean Architecture from scratch.
              </p>
              <p>
                Today, I engineer full-stack platforms using Next.js, TypeScript, Node.js, Express, MongoDB, and PostgreSQL, focusing on low-latency real-time communication (Socket.IO & WebRTC) and deployment automation on AWS.
              </p>
            </div>
          </motion.div>

          {/* Core Values List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#0b1220]/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-xs">
              <Brain className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Clean Analytical & Problem-Solving</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Critical Thinking, Logical Reasoning, Decision Making, Debugging, Root Cause Analysis, Attention to Detail.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#0b1220]/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-xs">
              <HeartHandshake className="w-5 h-5 text-violet-600 dark:text-violet-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Communication & Collaboration</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Verbal Communication, Active Listening, Teamwork, Knowledge Sharing, Technical Documentation, Interpersonal Skills.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#0b1220]/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-xs">
              <Computer className="w-5 h-5 text-violet-600 dark:text-violet-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Professional Effectiveness</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Time Management, Task Prioritization, Accountability, Ownership, Independent Working, Work Ethic.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#0b1220]/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-xs">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Learning & Adaptability</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Continuous Learning, Self-Motivation, Adaptability, Curiosity, Creative Thinking, Openness to Feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Highlights, Cutout Portrait & Education Milestones */}
        <div className="lg:col-span-5 space-y-6">
          {/* Visual Showcase Card with Cutout Portrait */}
          <div className="relative rounded-3xl overflow-hidden glass-panel-glow p-6 text-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 p-1 mb-4 shadow-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.3)] bg-gradient-to-b from-cyan-500/20 to-transparent">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-[#0b1220]">
                <Image
                  src="/portrait-cutout.png"
                  alt="Adharsh S"
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">{PERSONAL_INFO.name}</h4>
            <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 mt-0.5 font-medium">{PERSONAL_INFO.role}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 max-w-xs mx-auto">
              Open to full-time opportunities, remote positions, and relocation. Eager to contribute to impactful projects, collaborate with engineering teams, and build scalable digital solutions.
            </p>
          </div>

          {/* Education & Training Quick Timeline */}

          <div className="p-7 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-200 dark:border-slate-800 text-sm font-mono text-cyan-800 dark:text-cyan-300">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-semibold uppercase tracking-wider">
                EDUCATION & TRAINING
              </span>
            </div>

            <div className="space-y-6 text-sm">
              <div className="pl-5 border-l-2 border-cyan-500 py-1">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                  2024 — 2026
                </span>
                <h5 className="text-base font-bold text-slate-900 dark:text-slate-200 mt-1">
                  Professional Training – Full Stack Development (MERN)
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Brototype
                </p>
              </div>

              <div className="pl-5 border-l-2 border-blue-500 py-1">
                <span className="text-xs font-mono text-blue-700 dark:text-blue-300 font-semibold">
                  2022 — 2024
                </span>
                <h5 className="text-base font-bold text-slate-900 dark:text-slate-200 mt-1">
                  Master of Arts (M.A.) – English Language and Literature
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  AJ College of Science and Technology • Kerala University
                </p>
              </div>

              <div className="pl-5 border-l-2 border-violet-500 py-1">
                <span className="text-xs font-mono text-violet-700 dark:text-violet-300 font-semibold">
                  2019 — 2022
                </span>
                <h5 className="text-base font-bold text-slate-900 dark:text-slate-200 mt-1">
                  Bachelor of Arts (B.A.) – English Communicative
                </h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  AJ College of Science and Technology • Kerala University
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
