'use client';

import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'Infosys Springboard',
      type: 'Virtual Internship',
      duration: 'June 2026 – August 2026',
      project: 'Project: AI Skin Intelligence & Personalized Skincare Planner',
      points: [
        'Developed machine learning and deep learning components for an AI-powered skincare recommendation system and skin assessment application using Python.',
        'Performed data preprocessing, normalization, feature engineering, and model evaluation to prepare datasets.',
        'Applied hyperparameter tuning, model training, feature optimization, and CNN fine-tuning.',
        'Developed FastAPI REST endpoints to serve model predictions and integrate ML models with backend services.',
        'Built workflows for user authentication, analytics, and progress tracking using Git & GitHub for source control.',
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Git', 'GitHub'],
    },
    {
      role: 'Java Full Stack Developer Intern',
      company: 'IIDT Blackbucks',
      type: 'Virtual Internship',
      duration: 'June 2026 – July 2026',
      project: 'Full Stack Web Development',
      points: [
        'Developed backend web applications using Java Full Stack technologies including Java, Spring Boot, and MySQL.',
        'Designed, implemented, and integrated REST APIs with relational database operations using SQL.',
        'Implemented core CRUD functionalities, role-based controls, and optimized backend logic for web services.',
        'Utilized Git for version control, collaborative development, and codebase management.',
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card-custom/30 border-y border-card-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Internship Experience</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            Professional industry experiences and virtual internships applying AI/ML and software development concepts.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-card-border-custom">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-10 sm:-left-12 top-1.5 p-1.5 bg-card-custom border-2 border-accent-custom rounded-full flex items-center justify-center text-accent-custom">
                <Briefcase size={12} />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-card-custom border border-card-border-custom shadow-md hover:shadow-lg transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-custom">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-accent-custom">
                      {exp.company} <span className="text-text-muted-custom font-normal">({exp.type})</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted-custom self-start sm:self-center px-3 py-1 rounded-full bg-accent-light-custom border border-card-border-custom">
                    <Calendar size={12} />
                    {exp.duration}
                  </div>
                </div>

                {/* Sub-Header Project Name */}
                <div className="mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-text-custom/85 bg-accent-light-custom px-3 py-1.5 rounded-lg border border-card-border-custom">
                    {exp.project}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start text-xs sm:text-sm text-text-muted-custom leading-relaxed">
                      <ChevronRight size={16} className="text-accent-custom mr-1.5 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border-custom">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-medium text-accent-custom bg-accent-light-custom"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
