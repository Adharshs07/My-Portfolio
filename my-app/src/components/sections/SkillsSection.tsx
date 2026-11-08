'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Layout, Server, Database, Cloud, BrainCircuit, Network, CheckCircle2 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Frontend Development': Layout,
  'Backend & APIs': Server,
  'Databases & ORM': Database,
  'Cloud, DevOps & Tools': Cloud,
  'AI & Machine Learning': BrainCircuit,
  'Architecture & Concepts': Network,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    activeTab === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="03"
        category="Technical Stack"
        title="Engineering Competencies & Tech Ecosystem"
        subtitle="A verified breakdown of production frameworks, distributed backend patterns, cloud tools, and architectural principles."
      />

      {/* Filter Tabs for Quick Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer shadow-xs ${
              activeTab === tab
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.title] || Layout;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl glass-panel-glow border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-cyan-500/15">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-100/70 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-display group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Badges (No percentage bars!) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-900/90 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/30 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-800 dark:hover:text-cyan-300 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer line */}
              <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>PRODUCTION-VERIFIED</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">100% PROFICIENT</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
