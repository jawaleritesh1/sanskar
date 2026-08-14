import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, CheckCircle2, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';

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
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    // Simulating newsletter intake
  };

  return (
    <footer id="corporate-footer" className="bg-[#070A11] border-t border-slate-800/80 text-slate-400">
      
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/60 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-slate-900/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
                ATTRACT • CONVERT • SCALE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to build an operating layer for your business?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                We combine strategy, marketing, technology and automation to help ambitious businesses grow predictably.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                id="footer-diagnostic-cta"
                onClick={onOpenDiagnostic}
                className="px-5 py-3 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 text-sm font-semibold hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Growth Diagnostic
              </button>
              <button
                id="footer-start-project-cta"
                onClick={onOpenProjectModal}
                className="px-6 py-3 rounded-lg bg-[#F97316] text-white text-sm font-semibold hover:bg-orange-600 shadow-lg shadow-orange-500/20 flex items-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 flex items-center justify-center font-bold text-lg text-white tracking-wider">
                <span className="text-[#3B82F6]">S</span>
                <span className="text-[#F97316]">G</span>
                <span className="text-white">S</span>
              </div>
              <div>
                <span className="block font-bold tracking-tight text-white text-lg font-sans">
                  Sanskar Growth Solutions
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Business Growth & Digital Transformation Partner
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We build digital growth systems that help businesses attract, convert and scale—combining brand, technology, marketing, automation, and consulting into one unified operating layer.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a href="mailto:hello@sanskargrowthsolutions.com" className="hover:text-white transition-colors">
                  hello@sanskargrowthsolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Growth Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/solutions/${s.slug}`)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/solutions')}
                  className="text-xs font-semibold text-[#F97316] hover:text-orange-400 flex items-center gap-1"
                >
                  All 4 Solutions (Launch/Scale) →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries & Work */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Industries We Serve
            </h4>
            <ul className="space-y-2.5 text-sm">
              {industriesData.map((ind) => (
                <li key={ind.slug}>
                  <button
                    onClick={() => onNavigate(`/industries/${ind.slug}`)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/work')}
                  className="text-xs font-semibold text-[#3B82F6] hover:text-blue-400 flex items-center gap-1"
                >
                  View Case Studies & Proof →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400">
              Executive insights on digital growth systems, performance marketing, and business automation.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You are subscribed to SGS Executive Insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your work email"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#F97316] text-white rounded-md text-xs font-semibold hover:bg-orange-600 transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    Join
                  </button>
                </div>
                {error && <p className="text-[11px] text-rose-400">{error}</p>}
              </form>
            )}

            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
                <button onClick={() => onNavigate('/about')} className="hover:text-white">About SGS</button>
                <button onClick={() => onNavigate('/insights')} className="hover:text-white">Insights</button>
                <button onClick={() => onNavigate('/careers')} className="hover:text-white">Careers</button>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white">Contact</button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sanskar Growth Solutions (SGS). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <span className="text-slate-400">Domain: sanskargrowthsolutions.com</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
