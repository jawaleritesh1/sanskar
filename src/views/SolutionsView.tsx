import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ChevronDown, Layers, Target, Zap, Cpu, Sparkles, TrendingUp, Code2, Newspaper, Compass } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';
import { ServiceItem, GrowthSolution } from '../types';

interface SolutionsViewProps {
  initialServiceSlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
  onOpenDiagnostic: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  initialServiceSlug,
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(
    initialServiceSlug || 'digital-growth'
  );
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const currentService = servicesData.find(s => s.slug === selectedServiceSlug) || servicesData[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'digital-growth': return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'technology': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'brand-creative': return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 'business-media': return <Newspaper className="w-5 h-5 text-purple-400" />;
      case 'business-consulting': return <Compass className="w-5 h-5 text-yellow-400" />;
      default: return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F97316]" />
            SOLUTIONS & CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Everything you need to build, market and scale.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            We don't sell disconnected agency deliverables. We engineer synchronized digital growth systems combining marketing, modern engineering, brand authority, and strategic consulting.
          </p>
        </div>

        {/* 5 Capability Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {servicesData.map((s) => (
            <button
              key={s.slug}
              onClick={() => {
                setSelectedServiceSlug(s.slug);
                setOpenFaqIdx(null);
              }}
              className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                selectedServiceSlug === s.slug
                  ? 'bg-slate-900 border-orange-500/80 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/30'
                  : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  {getServiceIcon(s.id)}
                </div>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                  {s.stage}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{s.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{s.category}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Capability Deep-Dive View */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-12 mb-24 shadow-2xl">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                  Growth Stage: {currentService.stage.toUpperCase()}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">{currentService.category}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {currentService.title}
              </h2>
              <p className="text-base text-slate-300 mt-2 max-w-2xl">
                {currentService.tagline}
              </p>
            </div>

            <button
              onClick={() => onOpenProjectModal(currentService.slug)}
              className="px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all self-start lg:self-auto"
            >
              <span>Inquire for {currentService.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Overview & Core Outcome */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Strategic Scope & Philosophy
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentService.description}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-xs uppercase font-bold text-orange-400 tracking-wider block">
                Primary Business Outcome
              </span>
              <p className="text-sm font-semibold text-white">
                {currentService.businessOutcome}
              </p>
            </div>
          </div>

          {/* Capabilities & Concrete Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Capabilities */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4">
                Execution Capabilities
              </h3>
              <ul className="space-y-3">
                {currentService.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4">
                What We Deliver
              </h3>
              <ul className="space-y-3">
                {currentService.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Process Timeline */}
          <div className="mb-12">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-6">
              Execution Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentService.process.map((p, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-orange-400 block mb-2">
                    STEP {p.step}
                  </span>
                  <div className="text-sm font-bold text-white mb-1">{p.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4">
              Frequently Addressed Questions
            </h3>
            <div className="space-y-3">
              {currentService.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl bg-slate-950/70 border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIdx === idx && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Outcome-Oriented Growth Solutions Section */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
              Outcome-Oriented Packages
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Need a packaged solution tailored to your stage?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Choose an outcome-oriented package to solve a specific commercial bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutionsData.map((sol) => (
              <div
                key={sol.slug}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-white">{sol.title}</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {sol.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4">{sol.tagline}</p>
                  
                  <div className="space-y-1.5 mb-6 text-xs text-slate-300">
                    {sol.includedModules.slice(0, 3).map((m, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectModal(sol.slug)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <span>Inquire for {sol.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Unsure which capability or growth solution fits your current stage?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Take our interactive 60-second diagnostic or schedule an architectural discovery call with our team.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
            >
              Take Diagnostic
            </button>
            <button
              onClick={() => onOpenProjectModal()}
              className="px-5 py-2.5 rounded-lg bg-[#F97316] text-xs font-semibold text-white hover:bg-orange-600 shadow-md shadow-orange-500/20"
            >
              Start Conversation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
