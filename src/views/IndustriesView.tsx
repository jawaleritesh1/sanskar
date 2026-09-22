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
    const iconClass = isSelected ? "text-[#AFEB00]" : "text-[#2033FF]";
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
    <div className="w-full bg-transparent text-white pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#AFEB00] selection:text-[#141414] overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
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
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
              Sector-Specific Architectures
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Specialized Digital Systems <br />
            Built For{" "}
            <span className="relative inline-block text-[#AFEB00]">
              Your Industry
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
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
                    {getIndustryIcon(ind.id, isSelected)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#AFEB00] text-[#141414] font-extrabold'
                      : 'bg-[#070D2B] text-slate-400 border border-white/10'
                  }`}>
                    {ind.id}
                  </span>
                </div>

                <div>
                  <div className={`text-sm font-bold font-heading leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {ind.title}
                  </div>
                  <div className={`text-[11px] font-medium mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
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
            className="rounded-3xl bg-[#0B1446]/90 border border-white/15 p-7 sm:p-12 mb-24 shadow-2xl relative overflow-hidden text-white"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />

            {/* Top Title & CTA */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                  <Sparkles size={13} className="text-[#AFEB00]" />
                  <span>{currentIndustry.title} Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                  {currentIndustry.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2.5 max-w-3xl leading-relaxed">
                  {currentIndustry.overview}
                </p>
              </div>

              <button
                onClick={() => onOpenProjectModal(currentIndustry.slug)}
                className="group flex items-center gap-3 rounded-full bg-[#AFEB00] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9CD600] hover:shadow-2xl self-start lg:self-auto shrink-0"
              >
                <span>Build for {currentIndustry.title.split(' ')[0]}</span>
                <ArrowRight size={16} className="text-[#141414] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Common Industry Challenges */}
            <div className="mb-12 relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <AlertCircle size={17} className="text-[#AFEB00]" />
                <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider">
                  Sector Bottlenecks We Eliminate
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentIndustry.commonChallenges.map((ch, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#070D2B] border border-white/10 relative overflow-hidden transition-all duration-300 hover:border-[#AFEB00]/40 hover:shadow-md">
                    <span className="text-xs font-bold text-[#AFEB00] font-heading block mb-2">
                      BOTTLENECK 0{idx + 1}
                    </span>
                    <div className="text-sm font-bold font-heading text-white mb-2">{ch.title}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{ch.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SGS Customized Operating Layer Bento */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#070D2B]/80 border border-white/10 mb-12 relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <Layers size={20} className="text-[#AFEB00]" />
                <h3 className="text-sm uppercase font-bold text-white font-heading tracking-wider">
                  SGS Operating Architecture for {currentIndustry.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed max-w-3xl">
                {currentIndustry.sgsSolution.approach}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Systems Deployed */}
                <div className="p-6 rounded-2xl bg-[#060B24] border border-white/10 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#2033FF]" />
                    <span className="text-xs font-bold text-white font-heading uppercase tracking-wider block">
                      Operating Systems Deployed:
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {currentIndustry.sgsSolution.operatingLayer.map((layer, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                          <Check size={12} className="text-[#AFEB00] font-bold" />
                        </div>
                        <span>{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Business Outcomes */}
                <div className="p-6 rounded-2xl bg-[#060B24] border border-white/10 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-3 bg-[#AFEB00]" />
                    <span className="text-xs font-bold text-white font-heading uppercase tracking-wider block">
                      Target Commercial Outcomes:
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {currentIndustry.sgsSolution.outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                        <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Project Case Study Highlight */}
            {featuredStudy && (
              <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0E1A5A] to-[#070D2B] text-white border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2033FF]/30 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#AFEB00] border border-white/10 mb-2.5 backdrop-blur-sm font-heading">
                    <Sparkles size={13} />
                    <span>Verified Case Study • {featuredStudy.client}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                    {featuredStudy.summary}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Location: {featuredStudy.location} • Sector: {featuredStudy.industry}
                  </p>
                </div>

                <button
                  onClick={() => onSelectCaseStudy(featuredStudy)}
                  className="group relative z-10 flex items-center gap-2 rounded-full bg-[#AFEB00] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] hover:-translate-y-0.5 shrink-0 active:scale-95"
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
