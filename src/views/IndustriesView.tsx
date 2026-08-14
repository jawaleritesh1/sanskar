import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Home, Briefcase, Rocket, Factory, AlertCircle, Layers } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { servicesData } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { Industry, CaseStudy } from '../types';

interface IndustriesViewProps {
  initialIndustrySlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

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

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'interior-design': return <Home className="w-5 h-5 text-orange-400" />;
      case 'professional-services': return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'startups': return <Rocket className="w-5 h-5 text-purple-400" />;
      case 'smes': return <Factory className="w-5 h-5 text-amber-400" />;
      default: return <Building2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            INDUSTRIES WE SERVE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            We build around your business model.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Different sectors require distinct customer journeys, sales qualification funnels, and operational backends. We adapt our ATTRACT → CONVERT → SCALE framework to your specific vertical.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {industriesData.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setSelectedIndustrySlug(ind.slug)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                selectedIndustrySlug === ind.slug
                  ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30'
                  : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
                {getIndustryIcon(ind.id)}
              </div>
              <div>
                <div className="text-sm font-bold text-white line-clamp-1">{ind.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{ind.shortDesc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Industry Deep-Dive */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-12 mb-24 shadow-2xl">
          
          {/* Top Title & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                Industry Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {currentIndustry.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {currentIndustry.overview}
              </p>
            </div>

            <button
              onClick={() => onOpenProjectModal(currentIndustry.slug)}
              className="px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all self-start lg:self-auto shrink-0"
            >
              <span>Build for {currentIndustry.title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Common Industry Challenges */}
          <div className="mb-12">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              Common Sector Challenges We Eliminate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentIndustry.commonChallenges.map((ch, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-rose-400 block mb-2">
                    BOTTLENECK 0{idx + 1}
                  </span>
                  <div className="text-sm font-bold text-white mb-1.5">{ch.title}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{ch.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SGS Customized Operating Layer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#F97316]" />
              <h3 className="text-sm uppercase font-bold text-white tracking-wider">
                SGS Operating Layer for {currentIndustry.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {currentIndustry.sgsSolution.approach}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Systems Deployed:
                </span>
                {currentIndustry.sgsSolution.operatingLayer.map((layer, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{layer}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Target Business Outcomes:
                </span>
                {currentIndustry.sgsSolution.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant Project Case Study Highlight */}
          {featuredStudy && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                  Verified Case Study • {featuredStudy.client}
                </span>
                <h4 className="text-lg font-bold text-white mt-1">{featuredStudy.summary}</h4>
                <p className="text-xs text-slate-400 mt-1">Location: {featuredStudy.location}</p>
              </div>

              <button
                onClick={() => onSelectCaseStudy(featuredStudy)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 shrink-0"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
