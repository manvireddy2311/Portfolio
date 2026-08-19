'use client';

import React from 'react';
import { Award, ShieldCheck, BrainCircuit, Code, BrainCircuit as BrainIcon, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      name: 'Certified System Administrator (CSA)',
      issuer: 'ServiceNow',
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      badge: 'Systems & Administration',
    },
    {
      name: 'Certified Application Developer (CAD)',
      issuer: 'ServiceNow',
      icon: <Award className="text-blue-500" size={24} />,
      badge: 'Application Development',
    },
    {
      name: 'Oracle AI Foundations Associate',
      issuer: 'Oracle',
      icon: <BrainCircuit className="text-rose-500" size={24} />,
      badge: 'Artificial Intelligence',
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'L&T EduTech',
      icon: <BrainIcon className="text-violet-500" size={24} />,
      badge: 'Deep Neural Networks',
    },
    {
      name: 'Machine Learning Certification',
      issuer: 'Coursera (Stanford Online)',
      icon: <Database className="text-amber-500" size={24} />,
      badge: 'Supervised & Unsupervised ML',
    },
    {
      name: 'Java Programming Certification',
      issuer: 'Udemy',
      icon: <Code className="text-cyan-500" size={24} />,
      badge: 'Object-Oriented Java',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-card-custom/30 border-y border-card-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            Professional industry-recognized credentials and specializations completed.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-card-custom border border-card-border-custom shadow-md hover:shadow-lg hover:border-accent-custom/30 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-light-custom rounded-xl">
                    {cert.icon}
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-custom bg-accent-light-custom rounded-full">
                    {cert.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-text-custom mb-1 leading-snug">
                  {cert.name}
                </h3>
              </div>

              {/* Issuer */}
              <div className="mt-4 pt-4 border-t border-card-border-custom/50 flex items-center justify-between text-xs text-text-muted-custom">
                <span className="font-semibold text-text-custom/80">Issued by:</span>
                <span>{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
