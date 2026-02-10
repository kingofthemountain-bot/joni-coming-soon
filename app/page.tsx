'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Octopus3D from '@/components/Octopus3D';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email submission logic here
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-900">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        style={{ opacity, scale }}
      >
        <motion.div
          className="container mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Octopus */}
          <motion.div 
            className="w-full h-[600px] mb-8"
            variants={itemVariants}
          >
            <Octopus3D />
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="text-center space-y-6"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Something Legendary
            </motion.h1>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white relative inline-block"
              variants={itemVariants}
            >
              <span className="relative">
                is Coming
                <motion.span
                  className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </span>
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-3xl text-cyan-300/80 text-center mt-8 font-light tracking-wide"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Joni AI 🐙
            </motion.span>
            {' '}— Your AI-Powered Companion
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="mt-16 flex justify-center"
            variants={itemVariants}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-50"
                animate={{
                  opacity: hovering ? [0.5, 0.8, 0.5] : 0.3,
                  scale: hovering ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative flex gap-2">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-slate-800/90 backdrop-blur-xl border-2 border-purple-500/50 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                  whileFocus={{ scale: 1.02 }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                />
                
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    {submitted ? '✓ Subscribed!' : 'Notify Me'}
                  </span>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

          {/* Feature Teasers */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {[
              { icon: '🧠', title: 'Intelligent', desc: 'Advanced AI that learns and adapts' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Instant responses, zero lag' },
              { icon: '🔮', title: 'Magical', desc: 'Experience the future of AI' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="relative p-8 bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl hover:border-cyan-500/50 transition-colors">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative py-12 text-center text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.p
          whileHover={{ scale: 1.05, color: '#a855f7' }}
          className="cursor-default transition-colors"
        >
          © 2026 Joni AI. Prepare to be amazed.
        </motion.p>
      </motion.footer>
    </main>
  );
}
