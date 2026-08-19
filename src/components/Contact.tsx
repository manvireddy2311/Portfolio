'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isSimulated, setIsSimulated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setIsSimulated(false);

    const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    if (!formKey) {
      // Simulate submission if no key is configured
      setTimeout(() => {
        setStatus('success');
        setIsSimulated(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setIsSimulated(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Build Something Together</h2>
          <div className="h-1 w-12 bg-accent-custom mx-auto mt-4 rounded-full" />
          <p className="text-text-muted-custom mt-4 text-sm sm:text-base">
            I'm always interested in opportunities involving AI/ML, software engineering, backend development, and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-text-custom">
                Get In Touch
              </h3>
              <p className="text-text-muted-custom text-sm sm:text-base leading-relaxed">
                Feel free to reach out for internship opportunities, project collaborations, or just to chat about technology! I am generally responsive to emails and LinkedIn messages.
              </p>

              {/* Info Rows */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:manvithareddy2311@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-custom border border-card-border-custom hover:border-accent-custom/40 shadow-sm transition-all duration-200"
                >
                  <div className="p-3 bg-accent-light-custom text-accent-custom rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted-custom uppercase">Email</h4>
                    <p className="text-sm font-bold text-text-custom">manvithareddy2311@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916304635707"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-custom border border-card-border-custom hover:border-accent-custom/40 shadow-sm transition-all duration-200"
                >
                  <div className="p-3 bg-accent-light-custom text-accent-custom rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted-custom uppercase">Phone</h4>
                    <p className="text-sm font-bold text-text-custom">+91 6304635707</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card-custom border border-card-border-custom shadow-sm">
                  <div className="p-3 bg-accent-light-custom text-accent-custom rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted-custom uppercase">Location</h4>
                    <p className="text-sm font-bold text-text-custom">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note about Setup */}
            <div className="p-4 rounded-xl bg-accent-light-custom border border-card-border-custom/50 flex items-start gap-3">
              <Info size={18} className="text-accent-custom mt-0.5 flex-shrink-0" />
              <p className="text-[11px] sm:text-xs text-text-muted-custom leading-relaxed">
                <strong>Recruiter Note:</strong> This form can be plugged directly into email utilities (like Formspree or EmailJS) by adding a `NEXT_PUBLIC_FORMSPREE_KEY` variable to your deployment configurations. No API secrets are exposed.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-card-custom border border-card-border-custom shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-text-custom/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-card-border-custom bg-bg-custom text-text-custom text-sm focus:outline-none focus:ring-1 focus:ring-accent-custom focus:border-accent-custom transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-text-custom/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-card-border-custom bg-bg-custom text-text-custom text-sm focus:outline-none focus:ring-1 focus:ring-accent-custom focus:border-accent-custom transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-text-custom/90 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 rounded-xl border border-card-border-custom bg-bg-custom text-text-custom text-sm focus:outline-none focus:ring-1 focus:ring-accent-custom focus:border-accent-custom transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-text-custom/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-card-border-custom bg-bg-custom text-text-custom text-sm focus:outline-none focus:ring-1 focus:ring-accent-custom focus:border-accent-custom transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 border ${
                    isSimulated 
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400' 
                      : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong>{isSimulated ? 'Message Simulated Successfully!' : 'Message Sent Successfully!'}</strong>
                      <p className="mt-1 text-[11px] sm:text-xs">
                        {isSimulated 
                          ? 'This is a simulator response. Connect actual emails by setting NEXT_PUBLIC_FORMSPREE_KEY in your environment variables.'
                          : 'Thank you for reaching out. I will get back to you as soon as possible.'}
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-start gap-3">
                    <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <strong>Submission Error</strong>
                      <p className="mt-1 text-[11px] sm:text-xs">There was an issue sending your message. Please try emailing me directly at manvithareddy2311@gmail.com.</p>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-accent-custom rounded-xl hover:bg-accent-muted-custom shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-200 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
