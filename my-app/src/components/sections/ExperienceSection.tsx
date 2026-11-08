'use client';

import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCE_DATA, EDUCATION } from '@/data/portfolioData';
import { TracingBeam } from '@/components/ui/TracingBeam';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="05"
        category="Chronology"
        title="Engineering Experience & Academic Foundations"
        subtitle="Intensive production-grade full-stack simulation, independent client contracts, and academic roots in critical analysis."
      />

      {/* Tracing Beam Timeline */}
      <TracingBeam>
        <div className="space-y-12">
          {/* 1. PROFESSIONAL & SIMULATION EXPERIENCE */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Full Stack & Industry Experience</span>
            </div>

            {EXPERIENCE_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                {/* Header: Period, Company, Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-cyan-500/15">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-100 font-display group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {item.company} • <span className="text-slate-400 font-normal">{item.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. ACADEMIC CREDENTIALS */}
          <div className="space-y-8 pt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-blue-300">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Credentials</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.filter((e) => e.title.includes('Arts')).map((edu, idx) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono">
                      <span className="text-blue-400 font-semibold">{edu.period}</span>
                      <span className="text-slate-400">{edu.location}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-100 font-display mb-1.5">
                      {edu.title}
                    </h4>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-3">
                      {edu.institution}
                    </div>

                    {edu.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                    KERALA UNIVERSITY ACCREDITED
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}

