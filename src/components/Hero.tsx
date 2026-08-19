'use client';

import React from 'react';
import { FileText, ArrowRight, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Visual Tech Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
        <div className="absolute top-1/4 left-1/10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 sm:py-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent-custom bg-accent-light-custom border border-accent-muted-custom/20">
            <BrainCircuit size={14} className="animate-pulse" />
            AI & Machine Learning Student
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              Manvitha Reddy Yalluru
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-custom/90">
            Computer Science & AI/ML Engineer
          </h2>

          <p className="text-base sm:text-lg text-text-muted-custom max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Computer Science and Engineering (AI & ML) undergraduate passionate about Artificial Intelligence, Machine Learning, Deep Learning, backend development, and building practical technology solutions.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => handleScroll('projects')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent-custom rounded-xl hover:bg-accent-muted-custom shadow-lg hover:shadow-accent-custom/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              View My Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-text-custom bg-card-custom border border-card-border-custom rounded-xl hover:bg-accent-light-custom hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons & Resume Download */}
          <div className="flex items-center justify-center lg:justify-start gap-5 pt-4">
            <a
              href="https://github.com/manvireddy2311"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card-custom border border-card-border-custom text-text-muted-custom hover:text-accent-custom hover:border-accent-custom/40 transition-all duration-200"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manvitha-reddy-yalluru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card-custom border border-card-border-custom text-text-muted-custom hover:text-accent-custom hover:border-accent-custom/40 transition-all duration-200"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://leetcode.com/u/manvitha_reddy2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card-custom border border-card-border-custom text-text-muted-custom hover:text-accent-custom hover:border-accent-custom/40 transition-all duration-200 flex items-center justify-center font-bold text-sm tracking-tighter"
              title="LeetCode"
            >
              {/* LeetCode clean text icon */}
              <span className="font-mono text-xs select-none">LC</span>
            </a>
            <a
              href="/Manvitha_Reddy_Resume.pdf"
              download="Manvitha_Reddy_Resume.pdf"
              className="p-3 rounded-xl bg-card-custom border border-card-border-custom text-text-muted-custom hover:text-accent-custom hover:border-accent-custom/40 flex items-center gap-2 text-sm font-semibold transition-all duration-200"
              title="Resume"
            >
              <FileText size={20} />
              <span className="hidden sm:inline">Resume PDF</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Graphic Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Tech background graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20 rounded-3xl rotate-6 blur-lg pointer-events-none" />
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-blue-600/80 dark:text-blue-400/80 filter drop-shadow-md select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central AI node */}
              <motion.circle
                cx="100"
                cy="100"
                r="12"
                className="fill-violet-600/20 stroke-violet-500"
                strokeWidth="2"
                animate={{ r: [10, 14, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle cx="100" cy="100" r="5" className="fill-violet-500" />

              {/* Connections (Neural Network Layers) */}
              {/* Input Layer */}
              <circle cx="40" cy="60" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />
              <circle cx="40" cy="100" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />
              <circle cx="40" cy="140" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />

              {/* Hidden Layer 1 */}
              <circle cx="90" cy="50" r="6" className="fill-card-custom stroke-violet-400" strokeWidth="2" />
              <circle cx="90" cy="150" r="6" className="fill-card-custom stroke-violet-400" strokeWidth="2" />

              {/* Hidden Layer 2 (Output side) */}
              <circle cx="150" cy="60" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />
              <circle cx="150" cy="100" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />
              <circle cx="150" cy="140" r="6" className="fill-card-custom stroke-accent-custom" strokeWidth="2" />

              {/* Paths connecting nodes */}
              {/* Input to Hidden */}
              <line x1="46" y1="60" x2="84" y2="50" className="stroke-accent-custom/40 dark:stroke-accent-custom/20" strokeWidth="1.5" />
              <line x1="46" y1="60" x2="94" y2="100" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="46" y1="100" x2="84" y2="50" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="46" y1="100" x2="94" y2="100" className="stroke-accent-custom/40 dark:stroke-accent-custom/20" strokeWidth="1.5" />
              <line x1="46" y1="100" x2="84" y2="150" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="46" y1="140" x2="94" y2="100" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="46" y1="140" x2="84" y2="150" className="stroke-accent-custom/40 dark:stroke-accent-custom/20" strokeWidth="1.5" />

              {/* Hidden to Center */}
              <line x1="90" y1="56" x2="100" y2="88" className="stroke-violet-400/40 dark:stroke-violet-400/20" strokeWidth="1" />
              <line x1="90" y1="144" x2="100" y2="112" className="stroke-violet-400/40 dark:stroke-violet-400/20" strokeWidth="1" />

              {/* Center to Output */}
              <line x1="106" y1="100" x2="144" y2="60" className="stroke-violet-400/40 dark:stroke-violet-400/20" strokeWidth="1" />
              <line x1="106" y1="100" x2="144" y2="100" className="stroke-violet-400/50 dark:stroke-violet-400/30" strokeWidth="1.5" />
              <line x1="106" y1="100" x2="144" y2="140" className="stroke-violet-400/40 dark:stroke-violet-400/20" strokeWidth="1" />

              {/* Hidden layer 2 connections */}
              <line x1="96" y1="50" x2="144" y2="60" className="stroke-accent-custom/40 dark:stroke-accent-custom/20" strokeWidth="1" />
              <line x1="96" y1="50" x2="144" y2="100" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="96" y1="150" x2="144" y2="100" className="stroke-accent-custom/30 dark:stroke-accent-custom/10" strokeWidth="1" />
              <line x1="96" y1="150" x2="144" y2="140" className="stroke-accent-custom/40 dark:stroke-accent-custom/20" strokeWidth="1" />

              {/* Glowing signal animation */}
              <motion.circle
                cx="40"
                cy="100"
                r="3"
                className="fill-accent-custom"
                animate={{ cx: [40, 90, 100, 150], cy: [100, 50, 100, 60] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="40"
                cy="140"
                r="3"
                className="fill-violet-400"
                animate={{ cx: [40, 90, 100, 150], cy: [140, 150, 100, 140] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
