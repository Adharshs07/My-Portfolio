'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { MAIN_PROJECTS, MINI_PROJECTS } from '@/data/portfolioData';
import { ArrowUpRight, Layers, Sparkles, Server, Eye } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types/portfolio';

function ProjectItemCard({ project, isFeatured = true }: { project: Project; isFeatured?: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -7, y: x * 7 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-3xl glass-panel-glow border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
        isFeatured ? 'p-6 sm:p-8 lg:p-9' : 'p-6 sm:p-7'
      }`}
    >
      {/* Top Banner & Badge */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-cyan-500/15">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
              {isFeatured ? 'Major Architecture' : 'Production Utility'}
            </span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
            {project.technologies[0]} + {project.technologies[1]}
          </span>
        </div>

        {/* Project Name */}
        <h3
          className={`font-display font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors tracking-tight ${
            isFeatured ? 'text-2xl sm:text-3xl mb-3' : 'text-xl sm:text-2xl mb-2.5'
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 mb-6 bg-slate-50/90 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
              <Layers className="w-3 h-3" />
              <span>Architectural Highlights</span>
            </div>
            {project.highlights.slice(0, isFeatured ? 4 : 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <span className="text-cyan-600 dark:text-cyan-400 font-mono select-none mt-0.5">▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Technologies Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-500/15 text-slate-700 dark:text-slate-300 group-hover:border-cyan-400/50 dark:group-hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
            >
              <span>Live System</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 text-xs font-medium cursor-not-allowed">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>Live Demo Ready</span>
            </span>
          )}

          {project.githubUrl && project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-cyan-500/40 transition-all active:scale-95 shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono">
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>Repository Active</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'major' | 'mini'>('all');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="04"
        category="Featured Work"
        title="Production Platforms & Systems Architecture"
        subtitle="Full-stack platforms engineered with Clean Architecture, microservices, secure authentication, real-time communications, and cloud automation."
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shadow-xs ${
            filter === 'all'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
          }`}
        >
          All Applications ({MAIN_PROJECTS.length + MINI_PROJECTS.length})
        </button>
        <button
          onClick={() => setFilter('major')}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shadow-xs ${
            filter === 'major'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
          }`}
        >
          Major Architectures ({MAIN_PROJECTS.length})
        </button>
        <button
          onClick={() => setFilter('mini')}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shadow-xs ${
            filter === 'mini'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
          }`}
        >
          Mini & Utility Apps ({MINI_PROJECTS.length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {/* Major Projects Showcase */}
        {(filter === 'all' || filter === 'major') && (
          <div>
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-cyan-800 dark:text-cyan-400 font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Flagship Full-Stack Deployments</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {MAIN_PROJECTS.map((project) => (
                <ProjectItemCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Mini Projects Showcase */}
        {(filter === 'all' || filter === 'mini') && (
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-6 text-xs font-mono text-cyan-800 dark:text-cyan-400 font-semibold tracking-wider uppercase">
              <Server className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Focused Architectures & Micro-Utilities</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MINI_PROJECTS.map((project) => (
                <ProjectItemCard key={project.id} project={project} isFeatured={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
