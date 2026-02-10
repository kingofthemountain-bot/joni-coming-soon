'use client';

import { motion } from 'framer-motion';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900"
        animate={{
          background: [
            'linear-gradient(135deg, #581c87 0%, #0f172a 50%, #164e63 100%)',
            'linear-gradient(135deg, #164e63 0%, #581c87 50%, #0f172a 100%)',
            'linear-gradient(135deg, #0f172a 0%, #164e63 50%, #581c87 100%)',
            'linear-gradient(135deg, #581c87 0%, #0f172a 50%, #164e63 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-full h-full border-2 border-purple-500/30 rounded-lg backdrop-blur-sm" />
          ) : i % 3 === 1 ? (
            <div className="w-full h-full border-2 border-cyan-500/30 rounded-full backdrop-blur-sm" />
          ) : (
            <div
              className="w-full h-full border-2 border-pink-500/30 backdrop-blur-sm"
              style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
            />
          )}
        </motion.div>
      ))}

      {/* Floating bubbles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 backdrop-blur-md"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 20}%`,
            width: `${10 + Math.random() * 40}px`,
            height: `${10 + Math.random() * 40}px`,
          }}
          animate={{
            y: [`0vh`, `-${100 + Math.random() * 50}vh`],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`,
            width: `${200 + Math.random() * 200}px`,
            height: `${200 + Math.random() * 200}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0) 70%)',
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
