import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Building2,
  Layers,
  Filter,
  Check, 
  X,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Code2,
  Globe,
  ArrowUpRight,
  Rocket
} from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudy } from '../types';

interface WorkViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

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
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#FF4B16]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
              Proven Client Impact & Case Studies
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Transformative Work <br />
            That Drives{" "}
            <span className="relative inline-block text-[#FF4B16]">
              Measurable Growth
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Explore authentic case studies illustrating how we diagnose commercial bottlenecks, architect digital operating layers, and deliver tangible commercial outcomes.
          </p>
        </motion.div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-5 border-b border-slate-200/80">
          <span className="text-xs font-bold uppercase text-slate-500 mr-2 flex items-center gap-1.5">
            <Filter size={14} className="text-[#FF4B16]" />
            Filter by Sector:
          </span>
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'interior-design', label: 'Interior & Architecture' },
            { id: 'real-estate', label: 'Real Estate & PropTech' },
            { id: 'professional-services', label: 'Professional Services' },
            { id: 'smes', label: 'SMEs & Distribution' }
          ].map((tab) => {
            const isSelected = selectedIndustryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedIndustryFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#092B78] text-white shadow-lg shadow-[#092B78]/25 scale-105'
                    : 'bg-white/80 border border-slate-200/80 text-[#092B78] hover:text-[#092B78] hover:bg-white hover:border-[#092B78]/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredStudies.map((study) => (
            <div
              key={study.slug}
              id={`work-card-${study.slug}`}
              className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9 hover:border-[#092B78]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_40px_rgba(9,43,120,0.05)] hover:-translate-y-1.5"
            >
              {/* Top Hover Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {study.location}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors mb-3">
                  {study.client}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Challenge & Strategy Brief */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                      The Challenge:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15">
                    <span className="text-[11px] uppercase font-bold text-[#092B78] tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#FF4B16]" />
                      Qualitative Commercial Outcome:
                    </span>
                    <ul className="space-y-1.5">
                      {study.qualitativeResults.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-800 flex items-start gap-2 font-medium">
                          <CheckCircle2 size={14} className="text-[#FF4B16] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Services Delivered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.servicesDelivered.map((serv, idx) => (
                    <span key={idx} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  id={`btn-open-case-${study.slug}`}
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-3 px-4 rounded-full bg-[#092B78] hover:bg-[#071F5B] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#092B78]/20 transition-all duration-300 hover:shadow-xl group/btn"
                >
                  <span>Read Full Case Study Breakdown</span>
                  <ArrowRight size={15} className="text-[#FF4B16] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-[#051336] p-8 sm:p-12 border border-slate-800/80 text-center max-w-4xl mx-auto space-y-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4B16]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#092B78]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4B16] border border-white/10 backdrop-blur-sm">
              <Rocket size={13} />
              <span>Tailored Commercial Systems</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Have a similar growth or technology challenge?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential discovery consultation. We'll audit your current customer journey and recommend the right operating layer.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenProjectModal()}
                className="flex items-center gap-2 rounded-full bg-[#FF4B16] px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] hover:-translate-y-0.5 mx-auto active:scale-95"
              >
                <span>Start a Project Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study Full Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051336]/75 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 text-[#092B78] shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] rounded-t-3xl" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8 pt-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FF4B16] mb-1.5">
                  <span>{selectedCaseStudy.industry}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-semibold">{selectedCaseStudy.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#092B78]">
                  {selectedCaseStudy.client}
                </h2>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {selectedCaseStudy.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2.5 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Case Content */}
            <div className="space-y-8 text-sm sm:text-base">
              
              {/* Challenge */}
              <div>
                <h3 className="text-xs uppercase font-bold text-[#092B78] tracking-wider mb-2">
                  The Commercial Challenge
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Objective & Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FFF8F6] border border-[#FF4B16]/20">
                  <h4 className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider mb-2">
                    Primary Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedCaseStudy.objective}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15">
                  <h4 className="text-xs uppercase font-bold text-[#092B78] tracking-wider mb-2">
                    SGS Strategic Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* What Was Built & Executed */}
              <div>
                <h3 className="text-xs uppercase font-bold text-[#092B78] tracking-wider mb-3">
                  Solution Architecture & Deliverables
                </h3>
                <div className="space-y-2.5">
                  {selectedCaseStudy.solutionBuilt.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 font-medium">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF]">
                        <Check size={12} className="text-[#092B78] font-bold" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Qualitative Outcomes */}
              <div className="p-6 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/20">
                <h3 className="text-xs uppercase font-bold text-[#092B78] tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#FF4B16]" />
                  <span>Verified Commercial Outcomes</span>
                </h3>
                <ul className="space-y-2.5">
                  {selectedCaseStudy.qualitativeResults.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={16} className="text-[#FF4B16] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial if available */}
              {selectedCaseStudy.testimonial && (
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border-l-4 border-l-[#FF4B16] border-slate-200/80 italic text-slate-700 text-sm">
                  "{selectedCaseStudy.testimonial.quote}"
                  <div className="mt-3 font-normal not-italic text-xs text-slate-500">
                    <strong className="text-[#092B78]">{selectedCaseStudy.testimonial.author}</strong> • {selectedCaseStudy.testimonial.role}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedCaseStudy.techStack && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#092B78] tracking-wider mb-2">
                    Technologies & Platforms Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#EEF3FF] border border-[#092B78]/10 text-[#092B78] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-xs font-bold text-slate-500 hover:text-[#092B78] transition-colors"
              >
                Close Case Study
              </button>

              <button
                onClick={() => {
                  const study = selectedCaseStudy;
                  setSelectedCaseStudy(null);
                  onOpenProjectModal(study.industrySlug);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#FF4B16] px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] active:scale-95"
              >
                <span>Have a Similar Challenge? Start a Project</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
