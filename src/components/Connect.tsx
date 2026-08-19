'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Connect() {
  const profiles = [
    {
      name: 'LinkedIn',
      description: 'Connect with me professionally',
      meta: 'Network, Career Updates & Collaborations',
      url: 'https://www.linkedin.com/in/manvitha-reddy-yalluru/',
      icon: <LinkedinIcon size={32} className="text-[#0077B5]" />,
      colorClass: 'group-hover:border-[#0077B5]/40 group-hover:bg-[#0077B5]/5',
      badgeText: 'Professional Profile',
    },
    {
      name: 'GitHub',
      description: 'Explore my projects and source code',
      meta: 'Repositiories, ML Models & Scripts',
      url: 'https://github.com/manvireddy2311',
      icon: <GithubIcon size={32} className="text-text-custom" />,
      colorClass: 'group-hover:border-text-custom/40 group-hover:bg-text-custom/5',
      badgeText: 'Open Source',
    },
    {
      name: 'LeetCode',
      description: 'View my problem-solving journey',
      meta: '75+ Data Structures & Algorithms Solved',
      url: 'https://leetcode.com/u/manvitha_reddy2/',
      icon: (
        <span className="font-mono text-xl font-black text-[#FFA116] bg-[#FFA116]/10 w-12 h-12 rounded-xl flex items-center justify-center select-none border border-[#FFA116]/20">
          LC
        </span>
      ),
      colorClass: 'group-hover:border-[#FFA116]/40 group-hover:bg-[#FFA116]/5',
      badgeText: 'Problem Solving',
    },
  ];

  return (
    <section id="connect" className="py-20 bg-card-custom/30 border-y border-card-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect & Code</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            Find me on developer platforms and professional networks.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-card-custom border border-card-border-custom hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${profile.colorClass}`}
            >
              <div>
                {/* Header Profile Icon & Link Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {profile.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-text-muted-custom px-2 py-0.5 rounded border border-card-border-custom bg-bg-custom group-hover:text-accent-custom group-hover:border-accent-custom/25 transition-colors">
                    Visit <ExternalLink size={10} />
                  </span>
                </div>

                {/* Badge text */}
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-accent-custom">
                    {profile.badgeText}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-text-custom group-hover:text-accent-custom transition-colors mb-1">
                  {profile.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm font-medium text-text-custom/90 leading-snug mb-1">
                  {profile.description}
                </p>
                
                {/* Meta details */}
                <p className="text-xs text-text-muted-custom leading-normal">
                  {profile.meta}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
