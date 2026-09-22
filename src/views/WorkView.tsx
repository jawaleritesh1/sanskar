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
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
              Proven Client Impact &amp; Case Studies
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Transformative Work <br />
            That Drives{" "}
            <span className="relative inline-block text-[#AFEB00]">
              Measurable Growth
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Explore authentic case studies illustrating how we diagnose commercial bottlenecks, architect digital operating layers, and deliver tangible commercial outcomes.
          </p>
        </motion.div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-5 border-b border-white/10">
          <span className="text-xs font-bold uppercase text-slate-400 mr-2 flex items-center gap-1.5 font-heading">
            <Filter size={14} className="text-[#AFEB00]" />
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
                className={`px-4 py-2 rounded-full text-xs font-bold font-heading transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#AFEB00] text-[#141414] shadow-lg shadow-[#AFEB00]/25 scale-105'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/25'
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
              className="relative overflow-hidden rounded-3xl bg-[#0B1446]/85 border border-white/10 p-7 sm:p-9 hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 text-white"
            >
              {/* Top Hover Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {study.location}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors mb-3">
                  {study.client}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Challenge & Strategy Brief */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-[#070D2B] border border-white/10">
                    <span className="text-[11px] uppercase font-bold text-slate-400 font-heading tracking-wider block mb-1">
                      The Challenge:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#070D2B] border border-white/10">
                    <span className="text-[11px] uppercase font-bold text-[#AFEB00] font-heading tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#AFEB00]" />
                      Qualitative Commercial Outcome:
                    </span>
                    <ul className="space-y-1.5">
                      {study.qualitativeResults.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-200 flex items-start gap-2 font-medium">
                          <CheckCircle2 size={14} className="text-[#AFEB00] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Services Delivered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.servicesDelivered.map((serv, idx) => (
                    <span key={idx} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  id={`btn-open-case-${study.slug}`}
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-3 px-4 rounded-full bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs sm:text-sm font-bold font-heading flex items-center justify-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all duration-300 hover:shadow-xl group/btn"
                >
                  <span>Read Full Case Study Breakdown</span>
                  <ArrowRight size={15} className="text-[#141414] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B1446] to-[#070D2B] p-8 sm:p-12 border border-white/15 text-center max-w-4xl mx-auto space-y-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2033FF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#AFEB00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#AFEB00] border border-white/10 backdrop-blur-sm font-heading">
              <Rocket size={13} />
              <span>Tailored Commercial Systems</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Have a similar growth or technology challenge?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential discovery consultation. We'll audit your current customer journey and recommend the right operating layer.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenProjectModal()}
                className="flex items-center gap-2 rounded-full bg-[#AFEB00] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] hover:-translate-y-0.5 mx-auto active:scale-95"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E32]/85 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0B1446] border border-white/15 rounded-3xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] rounded-t-3xl" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 mb-8 pt-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#AFEB00] font-heading mb-1.5">
                  <span>{selectedCaseStudy.industry}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-slate-400 font-semibold">{selectedCaseStudy.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {selectedCaseStudy.client}
                </h2>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                  {selectedCaseStudy.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Case Content */}
            <div className="space-y-8 text-sm sm:text-base">
              
              {/* Challenge */}
              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 font-heading tracking-wider mb-2">
                  The Commercial Challenge
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Objective & Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#070D2B] border border-white/10">
                  <h4 className="text-xs uppercase font-bold text-[#AFEB00] font-heading tracking-wider mb-2">
                    Primary Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCaseStudy.objective}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#070D2B] border border-white/10">
                  <h4 className="text-xs uppercase font-bold text-[#AFEB00] font-heading tracking-wider mb-2">
                    SGS Strategic Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* What Was Built & Executed */}
              <div>
                <h3 className="text-xs uppercase font-bold text-slate-400 font-heading tracking-wider mb-3">
                  Solution Architecture &amp; Deliverables
                </h3>
                <div className="space-y-2.5">
                  {selectedCaseStudy.solutionBuilt.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#070D2B] border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <Check size={12} className="text-[#AFEB00] font-bold" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Qualitative Outcomes */}
              <div className="p-6 rounded-2xl bg-[#070D2B] border border-white/10">
                <h3 className="text-xs uppercase font-bold text-white font-heading tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#AFEB00]" />
                  <span>Verified Commercial Outcomes</span>
                </h3>
                <ul className="space-y-2.5">
                  {selectedCaseStudy.qualitativeResults.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 size={16} className="text-[#AFEB00] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial if available */}
              {selectedCaseStudy.testimonial && (
                <div className="p-6 rounded-2xl bg-[#070D2B] border-l-4 border-l-[#AFEB00] border-white/10 italic text-slate-300 text-sm">
                  "{selectedCaseStudy.testimonial.quote}"
                  <div className="mt-3 font-normal not-italic text-xs text-slate-400">
                    <strong className="text-white font-heading">{selectedCaseStudy.testimonial.author}</strong> • {selectedCaseStudy.testimonial.role}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedCaseStudy.techStack && (
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 font-heading tracking-wider mb-2">
                    Technologies &amp; Platforms Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-xs font-bold font-heading text-slate-400 hover:text-white transition-colors"
              >
                Close Case Study
              </button>

              <button
                onClick={() => {
                  const study = selectedCaseStudy;
                  setSelectedCaseStudy(null);
                  onOpenProjectModal(study.industrySlug);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#AFEB00] px-7 py-3 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] active:scale-95"
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
