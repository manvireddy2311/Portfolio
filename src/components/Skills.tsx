'use client';

import React from 'react';
import { Code, Brain, Cpu, Database, Settings, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="text-blue-500" size={20} />,
      skills: ['Python', 'Java', 'SQL'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-violet-500" size={20} />,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'CNN',
        'LSTM',
        'Supervised Learning',
        'Classification',
        'Regression',
        'Feature Engineering',
        'Data Preprocessing',
        'Explainable AI',
      ],
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Cpu className="text-emerald-500" size={20} />,
      skills: [
        'Scikit-learn',
        'TensorFlow',
        'Pandas',
        'Keras',
        'NumPy',
        'Matplotlib',
        'FastAPI',
        'Streamlit',
      ],
    },
    {
      title: 'Backend Development',
      icon: <Database className="text-amber-500" size={20} />,
      skills: ['FastAPI', 'REST APIs', 'Java', 'Spring Boot', 'MySQL', 'SQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings className="text-rose-500" size={20} />,
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'ServiceNow'],
    },
    {
      title: 'Core Computer Science',
      icon: <BookOpen className="text-cyan-500" size={20} />,
      skills: [
        'Data Structures',
        'Algorithms',
        'Object-Oriented Programming',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            Categorized skills and core concepts representing my AI/ML and software engineering background.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="p-6 rounded-2xl bg-card-custom border border-card-border-custom shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-card-border-custom">
                <div className="p-2 bg-accent-light-custom rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-text-custom">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-custom bg-bg-custom border border-card-border-custom hover:border-accent-custom/40 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
