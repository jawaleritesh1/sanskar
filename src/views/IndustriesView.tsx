import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Building2,
  Home as HomeIcon,
  Briefcase, 
  Rocket,
  Factory,
  AlertCircle,
  Layers,
  Check,
  Sparkles,
  Shield,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { Industry, CaseStudy } from '../types';

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

  const getIndustryIcon = (id: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-[#FF4B16]" : "text-[#092B78]";
    switch (id) {
      case 'real-estate': return <Building2 className={`w-5 h-5 ${iconClass}`} />;
      case 'interior-design': return <HomeIcon className={`w-5 h-5 ${iconClass}`} />;
      case 'professional-services': return <Briefcase className={`w-5 h-5 ${iconClass}`} />;
      case 'startups': return <Rocket className={`w-5 h-5 ${iconClass}`} />;
      case 'smes': return <Factory className={`w-5 h-5 ${iconClass}`} />;
      default: return <Building2 className={`w-5 h-5 ${iconClass}`} />;
    }
  };

  return (
    <div className="w-full bg-transparent text-[#092B78] pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#FF4B16] selection:text-white overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6)_0%,rgba(247,249,255,0.25)_45%,rgba(234,240,255,0.5)_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8D8FF] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#FF4B16] blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#FF4B16]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
              Sector-Specific Architectures
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Specialized Digital Systems <br />
            Built For{" "}
            <span className="relative inline-block text-[#FF4B16]">
              Your Industry
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Different sectors require distinct customer journeys, sales qualification funnels, and operational backends. We tailor our ATTRACT → CONVERT → SCALE framework to your specific vertical dynamics.
          </p>
        </motion.div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {industriesData.map((ind) => {
            const isSelected = selectedIndustrySlug === ind.slug;
            return (
              <button
                key={ind.slug}
                onClick={() => setSelectedIndustrySlug(ind.slug)}
                className={`group p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#092B78] text-white border-[#092B78] shadow-xl shadow-[#092B78]/25 -translate-y-1'
                    : 'bg-white/80 border-slate-200/80 text-[#092B78] hover:border-[#092B78]/30 hover:bg-white hover:shadow-md'
                }`}
              >
                {/* Top Accent Line for Selected */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF4B16] via-[#FFA07A] to-[#FF4B16]" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isSelected ? 'bg-white/10 shadow-inner' : 'bg-[#EEF3FF] border border-slate-200/60'
                  }`}>
                    {getIndustryIcon(ind.id, isSelected)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#FF4B16]/20 text-[#FFA07A] border border-[#FF4B16]/30'
                      : 'bg-[#EEF3FF] text-[#092B78]'
                  }`}>
                    {ind.id}
                  </span>
                </div>

                <div>
                  <div className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#092B78]'}`}>
                    {ind.title}
                  </div>
                  <div className={`text-[11px] font-medium mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {ind.shortDesc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Deep-Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndustry.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-12 mb-24 shadow-[0_20px_50px_rgba(9,43,120,0.06)] relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B]" />

            {/* Top Title & CTA */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/80 mb-10 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                  <Sparkles size={13} className="text-[#FF4B16]" />
                  <span>{currentIndustry.title} Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#092B78] tracking-tight">
                  {currentIndustry.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-3xl leading-relaxed">
                  {currentIndustry.overview}
                </p>
              </div>

              <button
                onClick={() => onOpenProjectModal(currentIndustry.slug)}
                className="group flex items-center gap-3 rounded-full bg-[#092B78] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#092B78]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#071F5B] hover:shadow-2xl self-start lg:self-auto shrink-0"
              >
                <span>Build for {currentIndustry.title.split(' ')[0]}</span>
                <ArrowRight size={16} className="text-[#FF4B16] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Common Industry Challenges */}
            <div className="mb-12 relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <AlertCircle size={17} className="text-[#FF4B16]" />
                <h3 className="text-xs uppercase font-bold text-[#092B78] tracking-wider">
                  Sector Bottlenecks We Eliminate
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentIndustry.commonChallenges.map((ch, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FFF8F6] border border-[#FF4B16]/20 relative overflow-hidden transition-all duration-300 hover:border-[#FF4B16]/40 hover:shadow-md">
                    <span className="text-xs font-bold text-[#FF4B16] block mb-2">
                      BOTTLENECK 0{idx + 1}
                    </span>
                    <div className="text-sm font-bold text-[#092B78] mb-2">{ch.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SGS Customized Operating Layer Bento */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 mb-12 relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <Layers size={20} className="text-[#FF4B16]" />
                <h3 className="text-sm uppercase font-bold text-[#092B78] tracking-wider">
                  SGS Operating Architecture for {currentIndustry.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-3xl">
                {currentIndustry.sgsSolution.approach}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Systems Deployed */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#092B78]" />
                    <span className="text-xs font-bold text-[#092B78] uppercase tracking-wider block">
                      Operating Systems Deployed:
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {currentIndustry.sgsSolution.operatingLayer.map((layer, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF]">
                          <Check size={12} className="text-[#092B78] font-bold" />
                        </div>
                        <span>{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Business Outcomes */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#FF4B16]" />
                    <span className="text-xs font-bold text-[#FF4B16] uppercase tracking-wider block">
                      Target Commercial Outcomes:
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {currentIndustry.sgsSolution.outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-[#FF4B16] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Project Case Study Highlight */}
            {featuredStudy && (
              <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-[#051336] text-white border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4B16]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4B16] border border-white/10 mb-2.5 backdrop-blur-sm">
                    <Sparkles size={13} />
                    <span>Verified Case Study • {featuredStudy.client}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {featuredStudy.summary}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Location: {featuredStudy.location} • Sector: {featuredStudy.industry}
                  </p>
                </div>

                <button
                  onClick={() => onSelectCaseStudy(featuredStudy)}
                  className="group relative z-10 flex items-center gap-2 rounded-full bg-[#FF4B16] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] hover:-translate-y-0.5 shrink-0 active:scale-95"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
