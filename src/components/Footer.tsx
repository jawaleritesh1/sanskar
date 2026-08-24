import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle2,
  Globe,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';
import { api } from '../services/api';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    try {
      await api.subscribeNewsletter(newsletterEmail);
    } catch (err) {
      console.error('Newsletter subscription error:', err);
    }
  };

  return (
    <footer id="corporate-footer" className="relative overflow-hidden bg-[#051336] text-white font-sans border-t border-slate-800/80">
      {/* Ambient Radial Lighting & Gradient Glows matching Homepage theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[400px] w-[500px] rounded-full bg-[#092B78]/40 blur-[130px]" />
        <div className="absolute -bottom-32 right-10 h-[450px] w-[450px] rounded-full bg-[#FF4B16]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(9,43,120,0.25)_0%,transparent_75%)]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8 lg:px-10 lg:pt-20">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 gap-10 pb-16 border-b border-white/10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">

          {/* Col 1: Brand & Identity (Span 4) */}
          <div className="space-y-6 lg:col-span-4 pr-0 lg:pr-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-white/95 p-2.5 shadow-xl shadow-[#092B78]/30 backdrop-blur-md">
                <img
                  src="/assets/logo/logo.png"
                  alt="Sanskar Growth Solutions"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white block leading-tight">
                  Sanskar Growth Solutions
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#FF4B16]">
                  Strategy • Tech • Growth
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              We build scalable digital growth engines that help ambitious enterprises attract high-intent clients, streamline operations, and drive measurable commercial outcomes.
            </p>

            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>All Systems Operational • Pune, India</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#FF4B16] hover:bg-[#FF4B16] hover:text-white hover:-translate-y-1"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#FF4B16] hover:bg-[#FF4B16] hover:text-white hover:-translate-y-1"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#FF4B16] hover:bg-[#FF4B16] hover:text-white hover:-translate-y-1"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:hello@sanskargrowthsolutions.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#FF4B16] hover:bg-[#FF4B16] hover:text-white hover:-translate-y-1"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions / Capabilities (Span 2) */}
          <div className="space-y-4 lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#FF4B16]" />
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4B16]">
                Growth Capabilities
              </h5>
            </div>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/solutions/${s.slug}`)}
                    className="group flex items-start gap-2 text-slate-300 transition-all duration-200 hover:text-white hover:translate-x-1 text-left w-full"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 transition-all duration-200 group-hover:w-2.5 group-hover:bg-[#FF4B16]" />
                    <span className="leading-snug text-xs sm:text-[13px]">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries We Serve (Span 3) */}
          <div className="space-y-4 lg:col-span-3 xl:col-span-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#FF4B16]" />
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4B16]">
                Industries
              </h5>
            </div>
            <ul className="space-y-2.5 text-sm">
              {industriesData.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <button
                    onClick={() => onNavigate(`/industries/${ind.slug}`)}
                    className="group flex items-start gap-2.5 text-slate-300 transition-all duration-200 hover:text-white hover:translate-x-1 text-left w-full"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 transition-all duration-200 group-hover:w-2.5 group-hover:bg-[#FF4B16]" />
                    <span className="leading-snug text-xs sm:text-[13px]">{ind.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Informed / Newsletter (Span 3) */}
          <div className="space-y-4 lg:col-span-3 xl:col-span-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#FF4B16]" />
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4B16]">
                Stay Ahead
              </h5>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Get strategic perspectives on digital growth systems, high-intent marketing, and automation.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2.5 rounded-2xl border border-[#FF4B16]/40 bg-[#FF4B16]/10 p-3.5 text-xs font-medium text-white backdrop-blur-md">
                <CheckCircle2 size={16} className="text-[#FF4B16] shrink-0" />
                <span>Subscribed! Welcome to SGS Insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-md transition-all duration-300 focus-within:border-[#FF4B16] focus-within:bg-white/10">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email"
                    className="w-full bg-transparent px-3 text-xs text-white placeholder-slate-400 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="flex shrink-0 items-center gap-1 rounded-full bg-[#FF4B16] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] hover:scale-105 active:scale-95"
                  >
                    <span>Join</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </form>
            )}

            {/* Quick Navigation Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <button
                  onClick={() => onNavigate('/about')}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition-colors hover:border-white/25 hover:text-white"
                >
                  About
                </button>
                <button
                  onClick={() => onNavigate('/insights')}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition-colors hover:border-white/25 hover:text-white"
                >
                  Insights
                </button>
                <button
                  onClick={() => onNavigate('/work')}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition-colors hover:border-white/25 hover:text-white"
                >
                  Work
                </button>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition-colors hover:border-white/25 hover:text-white"
                >
                  Careers
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 transition-colors hover:border-white/25 hover:text-white"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sanskar Growth Solutions (SGS). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck size={14} className="text-[#FF4B16]" />
              Enterprise-Grade Growth Systems
            </span>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy & Terms
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
