'use client';

import React from 'react';
import { Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      icon: <GraduationCap className="text-blue-500" size={24} />,
      value: '9.7 / 10.0',
      label: 'B.Tech CGPA',
      description: 'Mohan Babu University',
    },
    {
      icon: <Briefcase className="text-violet-500" size={24} />,
      value: '2 Roles',
      label: 'Internships',
      description: 'AI/ML & Full Stack',
    },
    {
      icon: <Code2 className="text-emerald-500" size={24} />,
      value: '4 Projects',
      label: 'Featured Work',
      description: 'AI, ML & Web Apps',
    },
    {
      icon: <Award className="text-amber-500" size={24} />,
      value: '6',
      label: 'Certifications',
      description: 'ServiceNow, Oracle, ML',
    },
  ];

  return (
    <section id="about" className="py-20 bg-card-custom/30 border-y border-card-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Text */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-semibold text-text-custom/90">
              Aspiring Computer Science & AI/ML Engineer
            </h3>
            
            <p className="text-text-muted-custom leading-relaxed">
              I am a Computer Science & Engineering (AI & ML) student with a strong academic background and a passion for developing smart, scalable software. My technical focus ranges from designing deep learning systems to crafting robust backend architectures.
            </p>

            <p className="text-text-muted-custom leading-relaxed">
              Through my internships at <strong>Infosys Springboard</strong> and <strong>IIDT Blackbucks</strong>, I have gained hands-on experience applying machine learning to real-world applications, creating RESTful API interfaces, and working with modern enterprise workflows. I enjoy coding, solving problems on LeetCode, and engineering technology solutions from front to back.
            </p>

            {/* Interest Areas Tags */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-custom/75 mb-3">
                Core Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Deep Learning',
                  'Backend Development',
                  'Software Engineering',
                  'Data Structures & Algorithms',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-text-custom bg-card-custom border border-card-border-custom shadow-sm hover:border-accent-custom/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card-custom border border-card-border-custom shadow-md hover:shadow-lg hover:border-accent-custom/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-accent-light-custom rounded-xl">
                    {stat.icon}
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-text-custom tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-sm font-semibold text-text-custom/90 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-text-muted-custom mt-0.5">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
