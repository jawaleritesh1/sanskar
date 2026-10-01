import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Home as HomeIcon,
  Briefcase,
  Rocket,
  Factory,
  Zap
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy } from '../types';

interface IndustriesViewProps {
  initialIndustrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const industryPhotos: Record<string, string> = {
  'real-estate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'interior-design': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'professional-services': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  'startups': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  'smes': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
};

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  initialIndustrySlug,
  onNavigate,
  onOpenProjectModal,
  onSelectCaseStudy
}) => {
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string>(
    initialIndustrySlug || 'real-estate'
  );

  const currentIndustry = industriesData.find(i => i.slug === selectedIndustrySlug) || industriesData[0];
  const featuredStudy = caseStudiesData.find(c => c.slug === currentIndustry.featuredProjectSlug);
  const activePhoto = industryPhotos[currentIndustry.slug] || industryPhotos['real-estate'];
  const operatingLayers = currentIndustry.sgsSolution?.operatingLayer || [];

  return (
    <div className="w-full bg-[#080E32] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. INDUSTRIES HERO (CINEMATIC DARK SPLIT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#080E32] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/15 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#AFEB00]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-mono">
                  Sector-Specific Architectures
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Tailored Growth Systems <br />
                Engineered For{" "}
                <span className="font-heading font-bold text-[#AFEB00]">
                  Your Industry
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Generic growth tactics fail because commercial realities differ across sectors. Real estate requires high-ticket trust; B2B tech demands demo velocity; luxury interiors demand sensory prestige. We build bespoke systems for your domain.
              </p>

              <div className="font-heading text-base sm:text-lg text-slate-200 font-semibold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Real Businesses. Real Commercial Impact.</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenProjectModal(selectedIndustrySlug)}
                  className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5"
                >
                  <span>Build For {currentIndustry.title}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onNavigate('/work')}
                  className="px-6 py-3 rounded-xl bg-[#0A1245] hover:bg-[#0F1B64] text-white border border-white/20 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all"
                >
                  Explore Verified Work
                </button>
              </div>
            </motion.div>

            {/* Right Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Industry Engineering"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-transparent to-black/30" />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0A1245] border border-white/15 p-4 rounded-xl shadow-2xl backdrop-blur-xl max-w-[220px] space-y-1.5 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <Zap size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Sector Precision</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  Custom lead qualification, CRM triggers, and media strategies per vertical.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>5 Deep Verticals</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">5 Verticals</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Specialized Playbooks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">3.8x Median</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Pipeline Inbound Surge</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">₹100Cr+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Pipeline Enabled</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">100% Owned</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Client IP Sovereignty</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. PHOTOGRAPHIC 5 INDUSTRY CARDS (WARM IVORY / WHITE SECTION BACKGROUND)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-1.5">
                SELECT AN INDUSTRY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-tight">
                Vertical Blueprint Selection
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Explore specialized growth architectures designed for unit economics and customer lifecycles across key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industriesData.map((ind, idx) => {
              const isSelected = selectedIndustrySlug === ind.slug;
              const photo = industryPhotos[ind.slug] || industryPhotos['interior-design'];
              return (
                <div
                  key={ind.slug}
                  onClick={() => setSelectedIndustrySlug(ind.slug)}
                  className={`group relative h-[320px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 ${isSelected
                      ? 'border-[#2033FF] ring-2 ring-[#2033FF]/30 shadow-2xl -translate-y-1.5'
                      : 'border-slate-300/80 bg-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1'
                    }`}
                >
                  <img
                    src={photo}
                    alt={ind.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isSelected ? 'opacity-85' : 'opacity-75 group-hover:opacity-90'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {/* Top Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#AFEB00]">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-md border ${isSelected ? 'bg-[#AFEB00] text-[#0F1B64] border-[#AFEB00]' : 'bg-black/60 text-slate-200 border-white/20'
                      }`}>
                      {ind.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 space-y-1.5 text-white">
                    <h3 className={`text-base sm:text-lg font-heading font-bold leading-snug transition-colors ${isSelected ? 'text-[#AFEB00]' : 'text-white group-hover:text-[#AFEB00]'
                      }`}>
                      {ind.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-sans">
                      {ind.shortDesc}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/15">
                      <span className="text-[10px] font-mono text-slate-300">
                        {isSelected ? '● Active Blueprint' : 'Inspect →'}
                      </span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${isSelected ? 'bg-[#AFEB00] text-[#0F1B64]' : 'bg-white/10 text-white group-hover:bg-[#AFEB00] group-hover:text-[#0F1B64]'
                        }`}>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. INDUSTRY BLUEPRINT DEEP DIVE (CRISP WHITE EDITORIAL SECTION)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-[#F5FAFF] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6 sm:mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2033FF]">
                  VERTICAL BLUEPRINT • {currentIndustry.id.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#141414] mt-1">
                  {currentIndustry.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">{currentIndustry.shortDesc}</p>
              </div>

              <button
                onClick={() => onOpenProjectModal(currentIndustry.slug)}
                className="px-6 py-2.5 rounded-xl bg-[#0F1B64] hover:bg-[#0A1245] text-white text-xs font-heading font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto flex items-center gap-2 shadow-md transition-all"
              >
                <span>Deploy Vertical Stack</span>
                <ArrowRight size={14} className="text-[#AFEB00]" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Scope & Deliverables */}
              <div className="lg:col-span-7 space-y-6">

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-[#2033FF]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2033FF] font-mono">
                      Market Context &amp; Core Challenge
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {currentIndustry.overview}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#141414] font-mono flex items-center justify-between">
                    <span>Core Vertical Operating Layers</span>
                    <span className="text-[#2033FF] font-bold">0{operatingLayers.length} Modules</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {operatingLayers.map((layer, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 size={15} className="text-[#2033FF] shrink-0 mt-0.5" />
                        <span>{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Photo Card */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] shadow-md">
                  <img
                    src={activePhoto}
                    alt={currentIndustry.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-3 left-4 right-4 space-y-1 text-white">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#AFEB00] tracking-wider block">
                      Vertical Growth Focus:
                    </span>
                    <div className="text-xs sm:text-sm font-heading font-bold leading-snug">
                      High-Yield Inbound Systems Tailored to {currentIndustry.title}
                    </div>
                  </div>
                </div>

                {featuredStudy && (
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#2033FF]">
                      Featured Case Study: {featuredStudy.client}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans italic">
                      "{featuredStudy.summary}"
                    </p>
                    <button
                      onClick={() => onNavigate('/work')}
                      className="text-xs font-heading font-bold text-[#141414] hover:text-[#2033FF] flex items-center gap-1 pt-0.5 uppercase tracking-wider"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. CINEMATIC SUMMIT BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 bg-[#080E32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Mountain Summit Sunset"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-[#080E32]/70 to-[#080E32]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Direct Partner Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Ready to Build an Unfair Advantage in Your Sector?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's discuss how our unified operating layer applies to your enterprise goals.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenProjectModal(selectedIndustrySlug)}
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
