import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Layers, Filter, Check, X, ShieldCheck } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy } from '../types';

interface WorkViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onNavigate,
  onOpenProjectModal
}) => {
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = selectedIndustryFilter === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(c => c.industrySlug === selectedIndustryFilter);

  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F97316]" />
            PROVEN CLIENT IMPACT
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Work that moves businesses forward.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Explore authentic case studies illustrating how we diagnose commercial bottlenecks, architect digital operating layers, and deliver tangible business outcomes.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-800">
          <span className="text-xs font-bold uppercase text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-orange-400" />
            Filter by Sector:
          </span>
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'interior-design', label: 'Interior & Architecture' },
            { id: 'real-estate', label: 'Real Estate' },
            { id: 'professional-services', label: 'Professional Services' },
            { id: 'smes', label: 'SMEs & Distribution' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedIndustryFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedIndustryFilter === tab.id
                  ? 'bg-[#F97316] text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredStudies.map((study) => (
            <div
              key={study.slug}
              id={`work-card-${study.slug}`}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-8 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {study.location}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                  {study.client}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Challenge & Strategy Brief */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      The Challenge:
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-3">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-[11px] uppercase font-bold text-orange-400 tracking-wider block mb-1">
                      Qualitative Outcome:
                    </span>
                    <ul className="space-y-1">
                      {study.qualitativeResults.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Services Delivered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.servicesDelivered.map((serv, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  id={`btn-open-case-${study.slug}`}
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors group/btn"
                >
                  <span>Read Full Case Study Breakdown</span>
                  <ArrowRight className="w-4 h-4 text-[#F97316] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Have a similar growth or technology challenge?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule a confidential discovery consultation. We'll audit your current customer journey and recommend the right operating layer.
          </p>
          <button
            onClick={() => onOpenProjectModal()}
            className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
          >
            Start a Conversation →
          </button>
        </div>

      </div>

      {/* Case Study Full Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                  <span>{selectedCaseStudy.industry}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{selectedCaseStudy.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCaseStudy.client}
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  {selectedCaseStudy.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Case Content */}
            <div className="space-y-8 text-sm sm:text-base">
              
              {/* Challenge */}
              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  The Commercial Challenge
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Objective & Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs uppercase font-bold text-orange-400 tracking-wider mb-2">
                    Primary Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCaseStudy.objective}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider mb-2">
                    SGS Strategic Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* What Was Built & Executed */}
              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                  Solution Architecture & Deliverables
                </h3>
                <div className="space-y-2">
                  {selectedCaseStudy.solutionBuilt.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Qualitative Outcomes */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800">
                <h3 className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Commercial Outcomes
                </h3>
                <ul className="space-y-2.5">
                  {selectedCaseStudy.qualitativeResults.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial if available */}
              {selectedCaseStudy.testimonial && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border-l-4 border-l-[#F97316] border-slate-800 italic text-slate-300 text-sm">
                  "{selectedCaseStudy.testimonial.quote}"
                  <div className="mt-3 font-normal not-italic text-xs text-slate-400">
                    <strong className="text-white">{selectedCaseStudy.testimonial.author}</strong> • {selectedCaseStudy.testimonial.role}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedCaseStudy.techStack && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                    Technologies & Platforms Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close Case Study
              </button>

              <button
                onClick={() => {
                  const study = selectedCaseStudy;
                  setSelectedCaseStudy(null);
                  onOpenProjectModal(study.industrySlug);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <span>Have a Similar Challenge? Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
