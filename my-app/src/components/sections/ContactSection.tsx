'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, PhoneIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <SectionHeading
        number="07"
        category="Initiate Contact"
        title="Let's Build Resilient Systems Together"
        subtitle="Looking for an analytical MERN Stack Developer or full-stack software engineer? Direct communication is always welcome."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Communication & Profile Links */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-200/90 dark:border-slate-800/80 space-y-6 shadow-lg"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/70 dark:bg-cyan-950/70 border border-cyan-300/60 dark:border-cyan-500/30 text-xs font-mono text-cyan-800 dark:text-cyan-300 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Available for Full-Time Roles & Freelance</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 font-display">
              Open for High-Impact Software Engineering
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are hiring for an engineering team, need an architectural consultation, or want to discuss full-stack platforms, reach out directly.
            </p>

            {/* Direct Email Action with Copy Button */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all truncate shadow-xs"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 ml-1" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-pointer active:scale-95 shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Dial Link */}
              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              </a>

              {/* Resume Download Action */}
              <a
                href="/Adharsh-removebg-preview.png"
                download="Adharsh_S_Resume"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/90 dark:border-cyan-500/30 hover:border-cyan-400 text-xs sm:text-sm font-mono text-cyan-800 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-200 transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Download Developer Profile & CV</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              </a>
            </div>

            {/* Profile Icons Bar */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">DIGITAL PROFILES</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-xs"
                  aria-label="LeetCode"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Direct Interactive Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-200/90 dark:border-slate-800/80 shadow-lg"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80 dark:border-cyan-500/15">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">
                Dispatch Direct Message
              </h4>
              <span className="text-[10px] font-mono text-cyan-800 dark:text-cyan-400 bg-cyan-100/70 dark:bg-cyan-950/60 border border-cyan-300/60 dark:border-cyan-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                ENCRYPTED TRANSIT
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-100/60 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-emerald-800 dark:text-emerald-300">Message Dispatched!</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. Your client opened with pre-filled details, and I will respond to your inquiry shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-slate-800 cursor-pointer shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                      Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                      Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Engineering Role / Project Architecture / Consultation"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm outline-none transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                    Message Details <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your team, project requirements, or question..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs sm:text-sm outline-none transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] active:scale-98 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
