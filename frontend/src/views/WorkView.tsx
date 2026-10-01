import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  Check,
  X,
  TrendingUp,
  Award
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

const caseStudyPhotos: Record<string, string> = {
  'abc-interiors': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  'apex-realty-growth': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
  'finedge-advisory': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
  'novacommerce': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
};

const getStudyMetrics = (study: CaseStudy) => {
  if (study.verifiedMetrics && study.verifiedMetrics.length > 0) {
    return study.verifiedMetrics;
  }
  switch (study.slug) {
    case 'abc-interiors':
      return [
        { value: '3.4x', label: 'Qualified Inquiries' },
        { value: '62%', label: 'Lower Cost / Lead' },
        { value: '90 Days', label: 'Time to Scale' },
      ];
    case 'apex-realty-growth':
      return [
        { value: '₹42 Cr', label: 'Gross Bookings' },
        { value: '4.8x', label: 'Campaign ROAS' },
        { value: '< 2 Min', label: 'CRM Dispatch' },
      ];
    case 'finedge-advisory':
      return [
        { value: '4.2x', label: 'Direct Bookings' },
        { value: '65%', label: 'Lower Cost / Inquiry' },
        { value: '90 Days', label: 'To 300+ Bookings' },
      ];
    case 'novacommerce':
      return [
        { value: '310%', label: 'Inbound Surges' },
        { value: '45 Min', label: 'Lead Response SLA' },
        { value: '100%', label: 'Catalog Digitized' },
      ];
    default:
      return [
        { value: '3x', label: 'Lead Growth' },
        { value: '100%', label: 'System Ownership' },
        { value: '24h', label: 'Response SLA' },
      ];
  }
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
    <div className="w-full bg-[#080E32] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. WORK HERO (CINEMATIC DARK SPLIT)
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
                  Proven Client Impact &amp; Case Studies
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Real Stories. <br />
                <span className="font-heading font-bold text-[#AFEB00]">
                  Tangible Commercial Results.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                We measure our success exclusively by client revenue acceleration, pipeline volume, and operational efficiency. Explore our verified portfolio across real estate, architecture, B2B advisory, and high-growth SMEs.
              </p>

              <div className="font-heading text-base sm:text-lg text-slate-200 font-semibold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Validated metrics, sovereign client architectures.</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenProjectModal()}
                  className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5"
                >
                  <span>Build Your Case Study</span>
                  <ArrowRight size={15} />
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
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Featured Client Architecture"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-transparent to-black/30" />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0A1245] border border-white/15 p-4 rounded-xl shadow-2xl backdrop-blur-xl max-w-[220px] space-y-1.5 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <TrendingUp size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Verified Growth</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  3x average lead volume surge within 90 days of system deployment.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>Verified Client Data</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">₹42 Cr+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Gross Booking Value</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">4.8x ROAS</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Peak Campaign Return</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">62% Cost Cut</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Lower Inbound CPL</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">90 Days</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Average Payback Speed</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. CASE STUDIES GRID (WARM IVORY / WHITE SECTION BACKGROUND)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-1.5">
                PORTFOLIO &amp; PROOF
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-tight">
                Selected Client Deployments
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Real-world systems engineered by SGS. Filter by vertical to inspect specific challenges, architectures, and verified commercial impact.
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 mr-2 flex items-center gap-1.5">
              <Filter size={14} className="text-[#2033FF]" />
              Filter by Sector:
            </span>
            {[
              { id: 'all', label: 'All Industries' },
              { id: 'interior-design', label: 'Interior & Architecture' },
              { id: 'real-estate', label: 'Real Estate & Property' },
              { id: 'professional-services', label: 'Professional Services' },
              { id: 'smes', label: 'SMEs & Distribution' }
            ].map((tab) => {
              const isSelected = selectedIndustryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedIndustryFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-300 ${isSelected
                      ? 'bg-[#0F1B64] text-[#AFEB00] shadow-md scale-105'
                      : 'bg-white border border-slate-300/80 text-slate-700 hover:text-black hover:border-slate-400'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Case Studies Grid with Crisp White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStudies.map((study) => {
              const photo = caseStudyPhotos[study.slug] || caseStudyPhotos['abc-interiors'];
              const metrics = getStudyMetrics(study);
              return (
                <div
                  key={study.slug}
                  id={`work-card-${study.slug}`}
                  className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-[#141414] transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1 text-[#1A1A1A]"
                >
                  {/* Top Photographic Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={photo}
                      alt={study.client}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#AFEB00] border border-white/15">
                        {study.industry}
                      </span>
                      <span className="text-xs text-white font-mono font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                        {study.location}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                        {study.client}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                        {study.summary}
                      </p>

                      {/* Key Metrics Strip */}
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F5FAFF] border border-slate-200 mb-4">
                        {metrics.slice(0, 3).map((res, rIdx) => (
                          <div key={rIdx} className="text-center">
                            <div className="text-base sm:text-lg font-heading font-bold text-[#141414]">
                              {res.value}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5 line-clamp-1">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Solutions Deployed */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          Operating Layers Deployed:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(study.servicesDelivered || []).map((sol, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-mono"
                            >
                              {sol}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="text-xs font-heading font-bold text-[#141414] hover:text-[#2033FF] flex items-center gap-1.5 uppercase tracking-wider"
                      >
                        <span>View Architecture Details</span>
                        <ArrowRight size={14} />
                      </button>

                      <button
                        onClick={() => onOpenProjectModal(study.slug)}
                        className="px-5 py-2 rounded-xl bg-[#0F1B64] text-white hover:bg-[#0A1245] text-xs font-heading font-bold uppercase tracking-wider transition-all"
                      >
                        Inquire
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. CINEMATIC SUMMIT BOTTOM CTA BANNER
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
            Ready to Engineer Your Own Measurable Case Study?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's evaluate your commercial bottlenecks and engineer a bespoke system built for compounding market scale.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenProjectModal()}
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0A1245] border border-white/15 rounded-2xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mb-6 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#080E32] text-[#AFEB00] border border-white/10">
                {selectedCaseStudy.industry}
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-3">
                {selectedCaseStudy.client}
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Location: {selectedCaseStudy.location}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-5 rounded-xl bg-[#080E32] border border-white/10 mb-8 text-center">
              {getStudyMetrics(selectedCaseStudy).map((res, rIdx) => (
                <div key={rIdx}>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">
                    {res.value}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-sm text-slate-300 mb-8">
              <div>
                <h4 className="font-bold font-mono text-white uppercase text-xs tracking-wider mb-2">The Challenge</h4>
                <p className="leading-relaxed bg-[#080E32] p-4 rounded-xl border border-white/10">{selectedCaseStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold font-mono text-white uppercase text-xs tracking-wider mb-2">SGS Strategy &amp; Execution</h4>
                <p className="leading-relaxed bg-[#080E32] p-4 rounded-xl border border-white/10">{selectedCaseStudy.strategy}</p>
              </div>

              <div>
                <h4 className="font-bold font-mono text-white uppercase text-xs tracking-wider mb-2">Operating Layers Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedCaseStudy.servicesDelivered || []).map((s, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-md bg-[#080E32] border border-white/10 text-[#AFEB00] font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCaseStudy.qualitativeResults && selectedCaseStudy.qualitativeResults.length > 0 && (
                <div>
                  <h4 className="font-bold font-mono text-white uppercase text-xs tracking-wider mb-2">Key Outcomes &amp; Value Realized</h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.qualitativeResults.map((qr, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 size={15} className="text-[#AFEB00] shrink-0 mt-0.5" />
                        <span>{qr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCaseStudy.testimonial && (
                <div className="p-5 rounded-xl bg-[#080E32] border border-[#AFEB00]/30 space-y-2">
                  <p className="text-sm font-sans italic text-white leading-relaxed">
                    "{selectedCaseStudy.testimonial.quote}"
                  </p>
                  <div className="text-xs font-mono text-[#AFEB00] pt-1">
                    — {selectedCaseStudy.testimonial.author}, {selectedCaseStudy.testimonial.role}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-heading font-bold uppercase tracking-wider text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  onOpenProjectModal(selectedCaseStudy.slug);
                }}
                className="px-7 py-2.5 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] transition-colors shadow-lg shadow-[#AFEB00]/20"
              >
                Inquire for Similar Architecture
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
