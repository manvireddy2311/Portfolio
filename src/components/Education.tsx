'use client';

import React from 'react';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
      institution: 'Mohan Babu University',
      duration: '2023 – Present',
      location: 'Tirupati, Andhra Pradesh, India',
      achievement: 'CGPA: 9.7 / 10.0',
      details: 'Specializing in Artificial Intelligence, Machine Learning, Deep Neural Networks, Backend Frameworks, and Advanced Data Structures.',
    },
    {
      degree: 'Intermediate (MPC - Mathematics, Physics, Chemistry)',
      institution: 'Narayana Junior College',
      duration: '2021 – 2023',
      location: 'Andhra Pradesh, India',
      achievement: 'Score: 980 / 1000',
      details: 'Focused on foundational mathematics, physics, and chemistry concepts with top academic standing.',
    },
    {
      degree: 'Matriculation (Secondary School)',
      institution: 'Sarvepalli Vidya Nilayam',
      duration: '2020 – 2021',
      location: 'Andhra Pradesh, India',
      achievement: 'Score: 600 / 600 (Perfect Score)',
      details: 'Completed secondary education with honors and a maximum academic GPA score.',
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            My academic journey and milestones.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-card-border-custom">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot Indicator */}
              <div className="absolute -left-10 sm:-left-12 top-1.5 p-1.5 bg-card-custom border-2 border-accent-custom rounded-full flex items-center justify-center text-accent-custom">
                <GraduationCap size={12} />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-card-custom border border-card-border-custom shadow-md hover:shadow-lg transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text-custom">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-accent-custom">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted-custom self-start sm:self-center px-3 py-1 rounded-full bg-accent-light-custom border border-card-border-custom">
                    <Calendar size={12} />
                    {edu.duration}
                  </div>
                </div>

                {/* Additional Info Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs font-medium text-text-muted-custom">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-text-muted-custom" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/25">
                    <Award size={12} />
                    {edu.achievement}
                  </span>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-text-muted-custom leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
