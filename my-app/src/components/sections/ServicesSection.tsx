'use client';

import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES_DATA } from '@/data/portfolioData';
import { Code, Server, Database, Cloud, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
};

interface ServicesSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="06"
        category="Offerings"
        title="Full-Stack Engineering & Architectural Services"
        subtitle="End-to-end full-stack consulting, custom platform development, scalable API engineering, and cloud deployment pipelines."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = SERVICE_ICONS[service.icon] || Code;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header: Icon + Titles */}
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-200/80 dark:border-cyan-500/15">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100/70 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-display group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 mt-0.5 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 bg-slate-50/90 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-400 font-semibold mb-2">
                    Key Deliverables
                  </div>
                  {service.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 mb-5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200 dark:border-slate-800 hover:border-cyan-500 active:scale-98 cursor-pointer shadow-xs"
                >
                  <span>Inquire for Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-100/70 via-white to-blue-100/70 dark:from-cyan-950/60 dark:via-[#0b1220] dark:to-blue-950/60 border border-cyan-300/60 dark:border-cyan-500/30 text-center relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 font-display mb-2">
            Have a project or architectural challenge in mind?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            From greenfield MVP development to enterprise backend scaling and code reviews, let&apos;s build software that excels under pressure.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
