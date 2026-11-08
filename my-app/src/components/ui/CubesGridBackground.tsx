'use client';

import React, { useEffect, useRef } from 'react';

interface Cube {
  x: number;
  y: number;
  size: number;
  baseElevation: number;
  currentElevation: number;
  targetElevation: number;
  glowIntensity: number;
  ambientPhase: number;
  colorShift: number;
}

export default function CubesGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 220, // Influence radius of cursor
      isActive: false,
    };

    let cubes: Cube[] = [];

    // Helper to generate grid of isometric cubes based on viewport dimensions
    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      cubes = [];
      const cubeSize = Math.max(28, Math.min(42, Math.floor(width / 32)));
      const stepX = cubeSize * 2.8;
      const stepY = cubeSize * 1.6;

      const cols = Math.ceil(width / stepX) + 3;
      const rows = Math.ceil(height / stepY) + 4;

      for (let r = -2; r < rows; r++) {
        for (let c = -2; c < cols; c++) {
          const offsetX = (r % 2) * (stepX / 2);
          const x = c * stepX + offsetX;
          const y = r * stepY;

          cubes.push({
            x,
            y,
            size: cubeSize,
            baseElevation: 0,
            currentElevation: 0,
            targetElevation: 0,
            glowIntensity: 0,
            ambientPhase: Math.random() * Math.PI * 2,
            colorShift: Math.random(),
          });
        }
      }
    };

    initGrid();

    // Mouse & Pointer events
    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isActive = false;
    };

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('resize', handleResize);

    // Draw single isometric 3D cube
    const drawIsometricCube = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      elevation: number,
      intensity: number,
      isDark: boolean
    ) => {
      const topY = cy - elevation;
      const hSize = size * 0.866; // cos(30 deg)
      const vSize = size * 0.5;   // sin(30 deg)
      const height = size * 0.9;  // extrusion height

      const cyanFactor = Math.min(1, Math.max(0, intensity));

      // TOP FACE
      context.beginPath();
      context.moveTo(cx, topY - vSize);
      context.lineTo(cx + hSize, topY);
      context.lineTo(cx, topY + vSize);
      context.lineTo(cx - hSize, topY);
      context.closePath();

      if (isDark) {
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(${Math.floor(20 + 14 * cyanFactor)}, ${Math.floor(
            35 + 176 * cyanFactor
          )}, ${Math.floor(65 + 173 * cyanFactor)}, ${0.12 + 0.45 * cyanFactor})`;
          context.strokeStyle = `rgba(34, 211, 238, ${0.15 + 0.7 * cyanFactor})`;
          context.lineWidth = 1 + 1.2 * cyanFactor;
        } else {
          context.fillStyle = 'rgba(11, 18, 32, 0.4)';
          context.strokeStyle = 'rgba(34, 211, 238, 0.07)';
          context.lineWidth = 0.8;
        }
      } else {
        // Light Mode
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(6, 182, 212, ${0.1 + 0.28 * cyanFactor})`;
          context.strokeStyle = `rgba(8, 145, 178, ${0.3 + 0.55 * cyanFactor})`;
          context.lineWidth = 1 + 1.2 * cyanFactor;
        } else {
          context.fillStyle = 'rgba(255, 255, 255, 0.75)';
          context.strokeStyle = 'rgba(148, 163, 184, 0.22)';
          context.lineWidth = 0.8;
        }
      }
      context.fill();
      context.stroke();

      // LEFT FACE
      context.beginPath();
      context.moveTo(cx - hSize, topY);
      context.lineTo(cx, topY + vSize);
      context.lineTo(cx, topY + vSize + height);
      context.lineTo(cx - hSize, topY + height);
      context.closePath();

      if (isDark) {
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(11, 20, 38, ${0.6 + 0.25 * cyanFactor})`;
          context.strokeStyle = `rgba(59, 130, 246, ${0.1 + 0.45 * cyanFactor})`;
          context.lineWidth = 0.8;
        } else {
          context.fillStyle = 'rgba(8, 14, 26, 0.45)';
          context.strokeStyle = 'rgba(59, 130, 246, 0.05)';
          context.lineWidth = 0.6;
        }
      } else {
        // Light Mode
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(241, 245, 249, ${0.8 + 0.15 * cyanFactor})`;
          context.strokeStyle = `rgba(37, 99, 235, ${0.15 + 0.3 * cyanFactor})`;
          context.lineWidth = 0.8;
        } else {
          context.fillStyle = 'rgba(241, 245, 249, 0.6)';
          context.strokeStyle = 'rgba(203, 213, 225, 0.35)';
          context.lineWidth = 0.6;
        }
      }
      context.fill();
      context.stroke();

      // RIGHT FACE
      context.beginPath();
      context.moveTo(cx, topY + vSize);
      context.lineTo(cx + hSize, topY);
      context.lineTo(cx + hSize, topY + height);
      context.lineTo(cx, topY + vSize + height);
      context.closePath();

      if (isDark) {
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(16, 24, 45, ${0.7 + 0.25 * cyanFactor})`;
          context.strokeStyle = `rgba(139, 92, 246, ${0.1 + 0.4 * cyanFactor})`;
          context.lineWidth = 0.8;
        } else {
          context.fillStyle = 'rgba(10, 16, 28, 0.55)';
          context.strokeStyle = 'rgba(139, 92, 246, 0.05)';
          context.lineWidth = 0.6;
        }
      } else {
        // Light Mode
        if (cyanFactor > 0.05) {
          context.fillStyle = `rgba(226, 232, 240, ${0.85 + 0.15 * cyanFactor})`;
          context.strokeStyle = `rgba(124, 58, 237, ${0.15 + 0.3 * cyanFactor})`;
          context.lineWidth = 0.8;
        } else {
          context.fillStyle = 'rgba(226, 232, 240, 0.6)';
          context.strokeStyle = 'rgba(203, 213, 225, 0.35)';
          context.lineWidth = 0.6;
        }
      }
      context.fill();
      context.stroke();

      // Specular Center Beacon Glint when strongly hovering
      if (cyanFactor > 0.35) {
        context.beginPath();
        context.arc(cx, topY, 2.5 * cyanFactor, 0, Math.PI * 2);
        if (isDark) {
          context.fillStyle = `rgba(255, 255, 255, ${cyanFactor * 0.9})`;
          context.shadowColor = 'rgba(34, 211, 238, 0.9)';
        } else {
          context.fillStyle = `rgba(8, 145, 178, ${cyanFactor * 0.95})`;
          context.shadowColor = 'rgba(6, 182, 212, 0.8)';
        }
        context.shadowBlur = 10 * cyanFactor;
        context.fill();
        context.shadowBlur = 0;
      }
    };

    // Render loop
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Detect current theme dynamically
      const isDark = document.documentElement.classList.contains('dark');

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.14;
      mouse.y += (mouse.targetY - mouse.y) * 0.14;

      ctx.clearRect(0, 0, width, height);

      const sec = time * 0.001;

      // Draw cursor radial glow
      if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
        const glowRadius = mouse.radius * 1.35;
        const radialGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );

        if (isDark) {
          radialGrad.addColorStop(0, 'rgba(34, 211, 238, 0.12)');
          radialGrad.addColorStop(0.4, 'rgba(59, 130, 246, 0.06)');
          radialGrad.addColorStop(1, 'rgba(5, 8, 22, 0)');
        } else {
          radialGrad.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
          radialGrad.addColorStop(0.4, 'rgba(37, 99, 235, 0.05)');
          radialGrad.addColorStop(1, 'rgba(248, 250, 252, 0)');
        }

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw each cube
      for (let i = 0; i < cubes.length; i++) {
        const cube = cubes[i];

        const ambientFloat = Math.sin(sec * 1.5 + cube.ambientPhase) * 2;

        const dx = cube.x - mouse.x;
        const dy = cube.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetElev = ambientFloat;
        let targetIntensity = 0;

        if (dist < mouse.radius) {
          const normDist = 1 - dist / mouse.radius;
          const power = Math.pow(normDist, 2.2);

          targetElev = -16 * power + ambientFloat;
          targetIntensity = power;
        }

        cube.currentElevation += (targetElev - cube.currentElevation) * 0.15;
        cube.glowIntensity += (targetIntensity - cube.glowIntensity) * 0.18;

        drawIsometricCube(
          ctx,
          cube.x,
          cube.y,
          cube.size,
          cube.currentElevation,
          cube.glowIntensity,
          isDark
        );
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#f8fafc] dark:bg-[#050816] transition-colors duration-300"
    >
      {/* 1. Deep Atmospheric Radial Ambient Glows (Adaptable to Light & Dark Mode) */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-cyan-400/10 dark:bg-cyan-600/12 blur-[130px] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-[35%] -left-[10%] w-[650px] h-[650px] rounded-full bg-blue-400/8 dark:bg-blue-600/10 blur-[150px] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-[65%] -right-[10%] w-[700px] h-[700px] rounded-full bg-violet-400/8 dark:bg-violet-600/10 blur-[160px] pointer-events-none transition-colors duration-300" />
      <div className="absolute -bottom-[10%] left-1/3 w-[800px] h-[500px] rounded-full bg-cyan-300/10 dark:bg-cyan-500/10 blur-[150px] pointer-events-none transition-colors duration-300" />

      {/* 2. Interactive Canvas for Real-Time 3D Isometric Cubes & Cursor Response */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block opacity-80 dark:opacity-70 pointer-events-none transition-opacity duration-300"
      />

      {/* 3. Subtle Cyber Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#f8fafc]/70 dark:to-[#050816]/90 pointer-events-none transition-colors duration-300" />
    </div>
  );
}
