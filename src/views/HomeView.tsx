import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  BarChart3,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Globe,
  Home as HomeIcon,
  Briefcase,
  Factory,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy, InsightArticle } from '../types';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (initialService?: string) => void;
  onOpenDiagnostic: () => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onSelectArticle?: (article: InsightArticle) => void;
}

const industryItems = [
  { name: 'Real Estate & Property', icon: Building2 },
  { name: 'Architecture & Interiors', icon: HomeIcon },
  { name: 'High-Ticket B2B & Legal', icon: Briefcase },
  { name: 'Technology & SaaS', icon: Cpu },
  { name: 'Manufacturing & SMEs', icon: Factory },
  { name: 'Healthcare & Clinics', icon: Sparkles },
  { name: 'Retail & E-Commerce', icon: Globe },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic,
  onSelectCaseStudy,
}) => {
  return (
    <div className="w-full bg-transparent text-[#092B78] font-sans overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════════════════
          01. HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <Hero onNavigate={onNavigate} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. INDUSTRIES MARQUEE BAR — LUMINOUS CORPORATE RIBBON
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative border-y border-[#092B78]/20 bg-gradient-to-r from-[#051336] via-[#092B78] to-[#051336] text-white py-8 sm:py-9 overflow-hidden shadow-[0_15px_40px_rgba(9,43,120,0.18)]">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-28 bg-[#FF4B16]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-28 bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 mb-4 flex items-center justify-center relative z-10">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#FF4B16]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF4B16]">
              Specialized Expertise Across Key Industries
            </span>
            <span className="h-[2px] w-6 bg-[#FF4B16]" />
          </div>
        </div>

        <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative z-10">
          <div className="sgs-marquee flex items-center py-1">
            {[...industryItems, ...industryItems, ...industryItems].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 hover:border-[#FF4B16]/60 transition-all duration-300 group cursor-default mx-2.5 shrink-0 shadow-sm"
                >
                  <div className="p-1.5 rounded-full bg-[#FF4B16]/20 text-[#FF4B16] group-hover:bg-[#FF4B16] group-hover:text-white transition-colors shrink-0">
                    <Icon size={13} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF4B16] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. CAPABILITIES — PREMIUM ARCHITECTURAL GRID
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Ambient Aura */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-[#C8D8FF] blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -right-20 top-1/2 h-[450px] w-[450px] rounded-full bg-[#FF4B16] blur-[140px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <span className="h-[2px] w-10 bg-[#FF4B16]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
                  Core Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
                A Cohesive Growth Engine for Your{' '}
                <span className="relative inline-block text-[#FF4B16]">
                  Commercial Stack
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#FF4B16]/30" />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="max-w-md text-base text-slate-600 leading-relaxed lg:text-right"
            >
              Everything your enterprise needs to capture high-intent customers, automate workflows, and modernize digital infrastructure — delivered with precision.
            </motion.p>
          </div>

          {/* Capability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => onNavigate(`/solutions/${service.slug}`)}
                className="group relative cursor-pointer rounded-[28px] border border-white/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(9,43,120,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#092B78]/30 hover:shadow-[0_25px_60px_rgba(9,43,120,0.15)] overflow-hidden flex flex-col justify-between"
              >
                {/* Custom Card Background Pattern */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.38] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.60]"
                  style={{
                    backgroundImage: `url(${
                      idx === 0
                        ? '/assets/backgrounds/bgc1.png'
                        : idx === 1
                        ? '/assets/backgrounds/bgc2.png'
                        : idx === 2
                        ? '/assets/backgrounds/bgc3.png'
                        : idx === 3
                        ? '/assets/backgrounds/bgc4.png'
                        : '/assets/backgrounds/bgc5.png'
                    })`,
                  }}
                />

                {/* Top Glowing Gradient Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20" />

                <div className="relative z-10">
                  {/* Stage & Index Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2.5 rounded-full bg-[#EEF3FF] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#092B78] border border-[#092B78]/10 shadow-xs">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#092B78] text-[10px] font-bold text-white">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {service.stage}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF3FF] border border-[#092B78]/10 text-[#092B78] transition-all duration-300 group-hover:bg-[#FF4B16] group-hover:text-white group-hover:border-[#FF4B16] group-hover:rotate-45 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-5 border-t border-slate-100/90 space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Deliverables
                    </span>
                    {service.deliverables.slice(0, 2).map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4B16] mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors pt-2">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. SELECTED WORK — PROVEN CASE STUDIES
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-[#F0F4FC] border-t border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="work-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#092B78" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <span className="h-[2px] w-10 bg-[#FF4B16]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
                  Selected Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#092B78]">
                Proven Commercial{' '}
                <span className="relative inline-block text-[#FF4B16]">
                  Results
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#FF4B16]/30" />
                </span>
              </h2>
            </motion.div>

            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => onNavigate('/work')}
              className="group inline-flex items-center gap-3 rounded-full border border-[#092B78]/25 bg-white px-6 py-3.5 text-sm font-bold text-[#092B78] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#092B78] hover:shadow-md self-start sm:self-auto"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#FF4B16] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.slice(0, 4).map((study, idx) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                onClick={() =>
                  onSelectCaseStudy ? onSelectCaseStudy(study) : onNavigate('/work')
                }
                className="group relative cursor-pointer rounded-[32px] border border-white/90 bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(9,43,120,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-[#092B78]/30 hover:shadow-[0_25px_65px_rgba(9,43,120,0.16)] overflow-hidden flex flex-col justify-between"
              >
                {/* Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF4B16] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400" />

                <div>
                  {/* Meta Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF3FF] px-3.5 py-1 text-xs font-bold text-[#092B78]">
                      {study.industry}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {study.location}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092B78] group-hover:text-[#FF4B16] transition-colors mb-3">
                    {study.client}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="rounded-2xl border border-[#C8D8FF]/70 bg-[#F7F9FF] p-4.5 mb-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#FF4B16] mb-1.5">
                      <Sparkles size={14} />
                      <span>Key Business Outcome</span>
                    </div>
                    <p className="text-xs sm:text-[13.5px] font-semibold text-[#092B78] leading-relaxed">
                      {study.qualitativeResults[0]}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors pt-2">
                  <span>Read Case Study Breakdown</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          05. CALL TO ACTION — MAJESTIC LIGHT GLASS PORTAL
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-transparent text-[#092B78] py-20 sm:py-28 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-10 h-[450px] w-[450px] rounded-full bg-[#C8D8FF] blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute right-1/4 bottom-10 h-[450px] w-[450px] rounded-full bg-[#FF4B16] blur-[140px]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_20px_60px_rgba(9,43,120,0.07)] backdrop-blur-xl p-8 sm:p-14 lg:p-16 text-center space-y-7">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#FF4B16]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
                Let's Build Together
              </span>
              <span className="h-[2px] w-8 bg-[#FF4B16]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#092B78] leading-[1.12]"
            >
              Ready to Build a{' '}
              <span className="relative inline-block text-[#FF4B16]">
                Predictable Growth
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#FF4B16]/30" />
              </span>{' '}
              System?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your commercial objectives. We will map the exact marketing channels, software architecture, and automations required to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenProjectModal()}
                className="group flex items-center gap-3 rounded-full bg-[#FF4B16] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E03E0E] hover:shadow-2xl active:scale-95"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenDiagnostic}
                className="group flex items-center gap-3 rounded-full border border-[#092B78]/20 bg-[#EEF3FF] px-8 py-4 text-sm font-bold text-[#092B78] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C8D8FF]/50"
              >
                <span>Take 60s Diagnostic</span>
                <Sparkles className="w-4 h-4 text-[#FF4B16]" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-medium border-t border-slate-100"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF4B16] animate-pulse" />
                hello@sanskargrowthsolutions.com
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Pune, Maharashtra, India</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
