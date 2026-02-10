'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Octopus3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect behind octopus */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main Octopus SVG */}
      <motion.svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="relative z-10 drop-shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Define gradients */}
        <defs>
          <radialGradient id="octopusGradient">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="tentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Octopus Head */}
        <motion.ellipse
          cx="250"
          cy="200"
          rx="120"
          ry="140"
          fill="url(#octopusGradient)"
          filter="url(#glow)"
          animate={{
            ry: [140, 150, 140],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Eyes */}
        <motion.circle
          cx="210"
          cy="180"
          r="25"
          fill="#fff"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="290"
          cy="180"
          r="25"
          fill="#fff"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="210" cy="185" r="12" fill="#1e293b" />
        <motion.circle cx="290" cy="185" r="12" fill="#1e293b" />
        <circle cx="215" cy="180" r="5" fill="#fff" opacity="0.8" />
        <circle cx="295" cy="180" r="5" fill="#fff" opacity="0.8" />

        {/* Smile */}
        <motion.path
          d="M 220 220 Q 250 240 280 220"
          stroke="#1e293b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          animate={{ d: ['M 220 220 Q 250 240 280 220', 'M 220 220 Q 250 245 280 220', 'M 220 220 Q 250 240 280 220'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Tentacles - 8 animated tentacles */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * Math.PI) / 4 - Math.PI / 8;
          const baseX = 250 + Math.cos(angle) * 100;
          const baseY = 320 + Math.sin(angle) * 40;
          const controlX = baseX + Math.cos(angle + 0.5) * 150;
          const controlY = baseY + Math.sin(angle + 0.5) * 150 + 100;
          const endX = baseX + Math.cos(angle + 1) * 100;
          const endY = baseY + Math.sin(angle + 1) * 200 + 150;

          return (
            <motion.path
              key={i}
              d={`M 250 320 Q ${baseX} ${baseY} ${controlX} ${controlY} T ${endX} ${endY}`}
              stroke="url(#tentacleGradient)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                d: [
                  `M 250 320 Q ${baseX} ${baseY} ${controlX} ${controlY} T ${endX} ${endY}`,
                  `M 250 320 Q ${baseX} ${baseY} ${controlX + 20} ${controlY + 10} T ${endX + 10} ${endY + 20}`,
                  `M 250 320 Q ${baseX} ${baseY} ${controlX} ${controlY} T ${endX} ${endY}`,
                ],
              }}
              transition={{
                pathLength: { duration: 1, delay: i * 0.1 },
                opacity: { duration: 0.5, delay: i * 0.1 },
                d: {
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          );
        })}

        {/* Suction cups on tentacles */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * Math.PI) / 4 - Math.PI / 8;
          const positions = [
            { x: 250 + Math.cos(angle) * 80, y: 320 + Math.sin(angle) * 30 },
            { x: 250 + Math.cos(angle) * 130, y: 350 + Math.sin(angle) * 60 },
            { x: 250 + Math.cos(angle) * 160, y: 400 + Math.sin(angle) * 80 },
          ];

          return positions.map((pos, j) => (
            <motion.circle
              key={`sucker-${i}-${j}`}
              cx={pos.x}
              cy={pos.y}
              r="6"
              fill="#ec4899"
              opacity="0.6"
              animate={{
                r: [6, 8, 6],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1 + j * 0.2,
                repeat: Infinity,
              }}
            />
          ));
        })}
      </motion.svg>

      {/* Sparkle particles around octopus */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${50 + Math.cos(i * 0.5) * 40}%`,
              top: `${50 + Math.sin(i * 0.5) * 40}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
