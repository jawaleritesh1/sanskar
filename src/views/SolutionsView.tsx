import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Layers,
  Target, 
  Zap,
  Cpu,
  Sparkles,
  TrendingUp,
  Code2,
  Newspaper,
  Compass, 
  Shield,
  Clock,
  BarChart3,
  Activity,
  ArrowUpRight,
  HelpCircle,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';
import { ServiceItem, GrowthSolution } from '../types';

interface SolutionsViewProps {
  initialServiceSlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
  onOpenDiagnostic: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  initialServiceSlug,
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(
    initialServiceSlug || 'digital-growth'
  );
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const currentService = servicesData.find(s => s.slug === selectedServiceSlug) || servicesData[0];

  const getServiceIcon = (id: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-[#AFEB00]" : "text-[#2033FF]";
    switch (id) {
      case 'digital-growth': return <TrendingUp className={`w-5 h-5 ${iconClass}`} />;
      case 'technology': return <Code2 className={`w-5 h-5 ${iconClass}`} />;
      case 'brand-creative': return <Sparkles className={`w-5 h-5 ${iconClass}`} />;
      case 'business-media': return <Newspaper className={`w-5 h-5 ${iconClass}`} />;
      case 'business-consulting': return <Compass className={`w-5 h-5 ${iconClass}`} />;
      default: return <Layers className={`w-5 h-5 ${iconClass}`} />;
    }
  };

  return (
    <div className="w-full bg-transparent text-white pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#AFEB00] selection:text-[#141414] overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/25 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/20 blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
              Engineered Growth Capabilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Integrated Digital Systems <br />
            To{" "}
            <span className="relative inline-block text-[#AFEB00]">
              Attract, Convert &amp; Scale
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            We don't sell disconnected agency deliverables. We engineer synchronized digital growth systems combining performance marketing, custom web engineering, brand authority, and strategic automation into one scalable operating layer.
          </p>
        </motion.div>

        {/* 5 Capability Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {servicesData.map((s) => {
            const isSelected = selectedServiceSlug === s.slug;
            return (
              <button
                key={s.slug}
                onClick={() => {
                  setSelectedServiceSlug(s.slug);
                  setOpenFaqIdx(0);
                }}
                className={`group p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#0E1A5A] text-white border-[#AFEB00] shadow-xl shadow-[#2033FF]/20 -translate-y-1'
                    : 'bg-[#0B1446]/70 border-white/10 text-slate-300 hover:border-white/20 hover:bg-[#0B1446] hover:text-white'
                }`}
              >
                {/* Top Accent Line for Selected */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isSelected ? 'bg-white/10 shadow-inner' : 'bg-white/5 border border-white/10'
                  }`}>
                    {getServiceIcon(s.id, isSelected)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#AFEB00] text-[#141414] font-extrabold'
                      : 'bg-[#070D2B] text-slate-400 border border-white/10'
                  }`}>
                    {s.stage}
                  </span>
                </div>

                <div>
                  <div className={`text-sm font-bold font-heading leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {s.title}
                  </div>
                  <div className={`text-[11px] font-medium mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    {s.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-[#0B1446]/90 border border-white/15 p-7 sm:p-12 mb-24 shadow-2xl relative overflow-hidden text-white"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />

            {/* Capability Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10 relative z-10">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AFEB00] font-heading">
                    GROWTH STAGE: {currentService.stage.toUpperCase()}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-slate-400 font-semibold">{currentService.category}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                  {currentService.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2.5 max-w-2xl leading-relaxed">
                  {currentService.tagline}
                </p>
              </div>

              <button
                onClick={() => onOpenProjectModal(currentService.slug)}
                className="group flex items-center gap-3 rounded-full bg-[#AFEB00] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9CD600] hover:shadow-2xl self-start lg:self-auto"
              >
                <span>Deploy {currentService.title}</span>
                <ArrowRight size={16} className="text-[#141414] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Overview & Core Outcome Bento */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 relative z-10">
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#AFEB00]" />
                  <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider">
                    Strategic Scope &amp; Commercial Objective
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#070D2B] border border-white/10 space-y-2 relative overflow-hidden">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#AFEB00]" />
                  <span className="text-[11px] uppercase font-bold text-[#AFEB00] font-heading tracking-wider block">
                    Primary Commercial Outcome
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white font-heading">
                  {currentService.businessOutcome}
                </p>
              </div>
            </div>

            {/* Execution Capabilities & Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
              
              {/* Capabilities */}
              <div className="p-7 rounded-2xl bg-[#070D2B]/80 border border-white/10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#2033FF]" />
                    <span>Execution Capabilities</span>
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">Integrated Stack</span>
                </div>
                <ul className="space-y-3">
                  {currentService.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <Check size={12} className="text-[#AFEB00] font-bold" />
                      </div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="p-7 rounded-2xl bg-[#070D2B]/80 border border-white/10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#AFEB00]" />
                    <span>Concrete Deliverables</span>
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">Assets &amp; Systems</span>
                </div>
                <ul className="space-y-3">
                  {currentService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Process Journey */}
            <div className="mb-12 relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider">
                  Execution Methodology
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentService.process.map((p, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#070D2B] border border-white/10 shadow-sm hover:border-[#AFEB00]/40 transition-all">
                    <span className="text-xs font-bold text-[#AFEB00] font-heading block mb-2">
                      PHASE {p.step}
                    </span>
                    <div className="text-sm font-bold font-heading text-white mb-1.5">{p.title}</div>
                    <div className="text-xs text-slate-300 leading-relaxed">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <HelpCircle size={16} className="text-[#AFEB00]" />
                <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider">
                  Frequently Addressed Questions
                </h3>
              </div>
              <div className="space-y-3">
                {currentService.faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-2xl bg-[#070D2B] border border-white/10 overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold font-heading text-white hover:text-[#AFEB00] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openFaqIdx === idx ? 'rotate-180 text-[#AFEB00]' : ''}`} />
                    </button>
                    {openFaqIdx === idx && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 border-t border-white/10 leading-relaxed bg-[#060B24]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* 4 Outcome-Oriented Growth Solutions Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-4 bg-[#AFEB00]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#AFEB00] font-heading">
                Outcome-Oriented Packages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1">
              Need a packaged solution tailored to your stage?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Choose an outcome-oriented package to solve a specific commercial bottleneck with defined milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutionsData.map((sol) => (
              <div
                key={sol.slug}
                className="relative overflow-hidden p-7 rounded-3xl bg-[#0B1446]/85 border border-white/10 hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1 text-white"
              >
                {/* Top Hover Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold font-heading text-white">{sol.title}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10">
                      {sol.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-5 leading-relaxed">{sol.tagline}</p>
                  
                  <div className="space-y-2 mb-6 text-xs text-slate-300">
                    {sol.includedModules.slice(0, 3).map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 font-medium">
                        <Check size={14} className="text-[#AFEB00] shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectModal(sol.slug)}
                  className="w-full py-3 px-4 rounded-full bg-white/5 hover:bg-[#AFEB00] hover:text-[#141414] text-white text-xs font-bold font-heading flex items-center justify-center gap-2 transition-all duration-300 border border-white/15 hover:border-[#AFEB00] group/btn"
                >
                  <span>Inquire for {sol.title}</span>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-[#141414] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B1446] to-[#070D2B] p-8 sm:p-12 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2033FF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#AFEB00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#AFEB00] border border-white/10 mb-3 backdrop-blur-sm font-heading">
              <Rocket size={13} />
              <span>Tailored Growth Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
              Unsure which capability fits your current growth bottleneck?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Take our interactive 60-second diagnostic or schedule an architectural discovery consultation with our partners.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
            <button
              onClick={onOpenDiagnostic}
              className="px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-white hover:bg-white/15 transition-all backdrop-blur-md hover:-translate-y-0.5"
            >
              Take 60s Diagnostic
            </button>
            <button
              onClick={() => onOpenProjectModal()}
              className="flex items-center gap-2 rounded-full bg-[#AFEB00] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] hover:-translate-y-0.5 active:scale-95"
            >
              <span>Start Conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
