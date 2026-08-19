'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for active section detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg-custom backdrop-blur-md border-b border-card-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="text-base sm:text-lg font-bold tracking-wider text-accent-custom hover:text-accent-muted-custom transition-colors"
            >
              MANVITHA REDDY YALLURU
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-accent-custom ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-custom font-semibold'
                    : 'text-text-muted-custom'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent-light-custom text-text-muted-custom hover:text-accent-custom transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Sun size={20} className="transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/Manvitha_Reddy_Resume.pdf"
              download="Manvitha_Reddy_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-accent-custom rounded-lg hover:bg-accent-muted-custom shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted-custom hover:text-accent-custom transition-colors"
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-muted-custom hover:text-accent-custom transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-card-border-custom bg-bg-custom/95 backdrop-blur-lg transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-custom bg-accent-light-custom font-semibold'
                    : 'text-text-muted-custom hover:text-accent-custom hover:bg-accent-light-custom'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 pt-2">
              <a
                href="/Manvitha_Reddy_Resume.pdf"
                download="Manvitha_Reddy_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-accent-custom rounded-lg hover:bg-accent-muted-custom transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
