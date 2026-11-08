'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { PORTFOLIO_METRICS } from '@/data/portfolioData';
import { Activity, Gauge, Cpu, CheckCircle2 } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function CounterNumber({ target, suffix = '', duration = 1.8 }: CounterProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums font-display font-extrabold tracking-tight">
      {current}
      {suffix}
    </span>
  );
}

const METRIC_ICONS = [
  Gauge,
  Activity,
  Cpu,
  CheckCircle2,
];

export default function SpeedCounter() {
  return (
    <div className="w-full relative my-10 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl glass-panel-glow overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

      {/* Header bar / Speedometer HUD */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/15 text-xs font-mono text-cyan-300">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="tracking-wider uppercase font-semibold text-slate-200">
            System Telemetry & Authentic Metrics
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-400">
          <span>VELOCITY: 60 FPS</span>
          <span>•</span>
          <span className="text-cyan-400">STATUS: OPERATIONAL</span>
        </div>
      </div>

      {/* Grid of 4 Speed Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PORTFOLIO_METRICS.map((metric, idx) => {
          const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
          const isCyan = metric.accent === 'cyan';
          const isBlue = metric.accent === 'blue';

          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-4 sm:p-5 rounded-xl bg-[#0b1220]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)]"
            >
              {/* Top Row: Icon & Mini Ticks */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isCyan
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20'
                      : isBlue
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20'
                      : 'bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {/* Visual HUD speed bars */}
                <div className="flex items-center gap-0.5 opacity-60">
                  <span className="w-1 h-2 rounded-xs bg-cyan-400/30" />
                  <span className="w-1 h-3 rounded-xs bg-cyan-400/50" />
                  <span className="w-1 h-4 rounded-xs bg-cyan-400" />
                </div>
              </div>

              {/* Number with Rolling Speed Counter */}
              <div
                className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-1 text-slate-100 ${
                  isCyan
                    ? 'group-hover:text-cyan-300 transition-colors'
                    : isBlue
                    ? 'group-hover:text-blue-300 transition-colors'
                    : 'group-hover:text-violet-300 transition-colors'
                }`}
              >
                <CounterNumber target={metric.value} suffix={metric.suffix} />
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-bold text-slate-200 tracking-tight mb-1">
                {metric.label}
              </div>

              {/* Micro description */}
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

