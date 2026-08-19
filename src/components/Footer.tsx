'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bg-custom border-t border-card-border-custom py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Info */}
          <div className="text-center md:text-left text-xs sm:text-sm text-text-muted-custom">
            <p>© {currentYear} Manvitha Reddy Yalluru. All rights reserved.</p>
            <p className="text-[11px] sm:text-xs mt-1 text-text-muted-custom/60">
              Designed as a professional computer science portfolio.
            </p>
          </div>

          {/* Social Profiles & Scroll-to-Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/manvireddy2311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted-custom hover:text-accent-custom transition-colors"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/manvitha-reddy-yalluru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted-custom hover:text-accent-custom transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://leetcode.com/u/manvitha_reddy2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted-custom hover:text-accent-custom transition-colors font-bold text-xs font-mono select-none"
                title="LeetCode"
              >
                LC
              </a>
              <a
                href="mailto:manvithareddy2311@gmail.com"
                className="text-text-muted-custom hover:text-accent-custom transition-colors"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-card-border-custom hidden sm:block" />

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg border border-card-border-custom text-text-muted-custom hover:text-accent-custom hover:bg-accent-light-custom transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
