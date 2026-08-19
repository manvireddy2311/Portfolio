'use client';

import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './BrandIcons';

export default function Projects() {
  const projects = [
    {
      title: 'AI Skin Intelligence & Personalized Skincare Planner',
      type: 'AI/ML & Deep Learning',
      description:
        'An AI-powered skincare system that uses machine learning and deep learning to analyze skin-related information and provide personalized skincare recommendations.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Pandas', 'NumPy', 'Git', 'GitHub'],
      features: [
        'CNN-based skin image classification & fine-tuning',
        'Advanced image preprocessing & feature extraction',
        'FastAPI REST endpoints for serving predictions',
        'Model explainability concepts for transparency',
        'Rule-based skincare routine generation engine',
      ],
      githubUrl: 'https://github.com/manvireddy2311', // Main Github with note
      demoUrl: null, // Coming soon
      comingSoon: true,
    },
    {
      title: 'Stock Price Prediction using LSTM',
      type: 'Deep Learning & Forecasting',
      description:
        'A deep learning application that forecasts stock price trends using historical financial data and an LSTM neural network.',
      tech: ['Python', 'Pandas', 'NumPy', 'Keras', 'Scikit-learn', 'Streamlit', 'Matplotlib'],
      features: [
        'Time-series data preprocessing & normalization',
        'LSTM sequence generation & parameter tuning',
        'Actual vs. predicted price visualizations',
        'Streamlit interactive dashboard user interface',
        'Flexible ticker symbol querying capability',
      ],
      githubUrl: 'https://github.com/manvireddy2311',
      demoUrl: null,
      comingSoon: true,
    },
    {
      title: 'AI-Based Job Portal',
      type: 'Full Stack Java Application',
      description:
        'A recruitment platform enabling recruiters to post jobs and candidates to search and apply for opportunities seamlessly.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Secure user authentication & credentials management',
        'Intuitive dashboards for both recruiters and job seekers',
        'Job listing creation, updates, and filtering systems',
        'Real-time candidate application tracking system',
      ],
      githubUrl: 'https://github.com/manvireddy2311',
      demoUrl: null,
      comingSoon: true,
    },
    {
      title: 'ServiceNow Leave Management System',
      type: 'Cloud Workflow Automation',
      description:
        'An enterprise Leave Management application to automate employee leave requests, workflows, and manager approvals.',
      tech: ['ServiceNow', 'Flow Designer', 'Business Rules', 'Client Scripts', 'App Engine Studio'],
      features: [
        'Automated workflows using ServiceNow Flow Designer',
        'Role-based access control and dashboard views',
        'Triggers for email notifications and approval requests',
        'Detailed analytical reporting of leave balances',
      ],
      githubUrl: 'https://github.com/manvireddy2311',
      demoUrl: null,
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            A selection of software systems, deep learning models, and automation workflows I have developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-full rounded-2xl bg-card-custom border border-card-border-custom hover:border-accent-custom/40 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Banner Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-violet-500" />

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Type Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Sparkles size={14} className="text-accent-custom" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-custom">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-text-custom mb-3 group-hover:text-accent-custom transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted-custom text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights / Features List */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs sm:text-sm font-semibold text-text-custom/80 mb-3">
                    Key Implementation Details:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-text-muted-custom">
                        <CheckCircle2 size={14} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-card-border-custom/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold text-text-custom/80 bg-bg-custom border border-card-border-custom"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-card-border-custom/50 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-text-muted-custom bg-bg-custom border border-card-border-custom rounded-xl hover:text-accent-custom hover:border-accent-custom/40 transition-colors"
                  >
                    <GithubIcon size={14} />
                    {project.comingSoon ? 'Repo Coming Soon' : 'View Code'}
                  </a>
                  
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-accent-custom rounded-xl hover:bg-accent-muted-custom transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-text-muted-custom/60 bg-bg-custom/50 border border-card-border-custom/30 rounded-xl select-none">
                      Demo Unavailable
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
