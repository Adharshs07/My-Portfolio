'use client';

import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export default function CubesGridBackground() {
  // Generate a matrix of grid nodes for the subtle illuminated cube effect
  const cubes = useMemo(() => {
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      x: (i % 8) * 12.5,
      y: Math.floor(i / 8) * 16.6,
      size: 44,
      delay: (i * 0.17) % 3.5,
      duration: 3 + (i % 4),
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#050816]"
    >
      {/* 1. Deep Radial Ambient Glows (Midnight Navy / Electric Cyan / Deep Violet) */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-cyan-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[65%] -right-[10%] w-[650px] h-[650px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-[10%] left-1/3 w-[800px] h-[500px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

      {/* 2. SVG 3D Isometric / Matrix Cubes Grid (Aceternity inspired) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle grid pattern */}
          <pattern
            id="cubes-grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(34, 211, 238, 0.07)"
              strokeWidth="1"
            />
            {/* Small corner diamond */}
            <rect
              x="58"
              y="58"
              width="4"
              height="4"
              fill="rgba(34, 211, 238, 0.22)"
              transform="rotate(45 60 60)"
            />
          </pattern>

          {/* Isometric Cube Symbol */}
          <g id="iso-cube">
            {/* Top face */}
            <polygon
              points="20,5 35,13 20,21 5,13"
              fill="rgba(34, 211, 238, 0.08)"
              stroke="rgba(34, 211, 238, 0.25)"
              strokeWidth="0.8"
            />
            {/* Left face */}
            <polygon
              points="5,13 20,21 20,38 5,30"
              fill="rgba(11, 18, 32, 0.75)"
              stroke="rgba(59, 130, 246, 0.18)"
              strokeWidth="0.8"
            />
            {/* Right face */}
            <polygon
              points="20,21 35,13 35,30 20,38"
              fill="rgba(16, 24, 39, 0.9)"
              stroke="rgba(139, 92, 246, 0.18)"
              strokeWidth="0.8"
            />
          </g>

          <linearGradient id="cyan-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base Grid Pattern */}
        <rect width="100%" height="100%" fill="url(#cubes-grid-pattern)" />

        {/* Scattered 3D Isometric Glowing Cubes */}
        {cubes.map((cube) => (
          <g
            key={cube.id}
            transform={`translate(${cube.x * 14 + 20}, ${cube.y * 14 + 30})`}
            className="transition-opacity duration-1000"
          >
            <use href="#iso-cube" />
          </g>
        ))}
      </svg>

      {/* 3. Subtle floating animated beam pulses across the grid */}
      <motion.div
        animate={{
          x: ['-10%', '110%'],
          opacity: [0, 0.25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 2,
        }}
        className="absolute top-1/4 -left-1/4 w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-12 blur-[1px]"
      />
      <motion.div
        animate={{
          x: ['110%', '-10%'],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
          repeatDelay: 3,
        }}
        className="absolute top-2/3 -right-1/4 w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent -rotate-12 blur-[1px]"
      />

      {/* 4. Fine Vignette Overlay to maintain superior contrast and focus */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050816]/60 to-[#050816] pointer-events-none" />
    </div>
  );
}

