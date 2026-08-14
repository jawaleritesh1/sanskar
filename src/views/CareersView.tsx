import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Briefcase, MapPin, Clock, X, Send, ShieldCheck } from 'lucide-react';
import { careersData } from '../data/careersData';
import { CareerOpening } from '../types';

interface CareersViewProps {
  onNavigate: (path: string) => void;
}

export const CareersView: React.FC<CareersViewProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#F97316]" />
            CAREERS AT SGS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Build the operating layer behind high-growth businesses.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            We are looking for thoughtful engineers, growth strategists, and brand designers who value craft, commercial impact, and direct accountability.
          </p>
        </div>

        {/* Culture & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">High Agency & Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We empower team members to make decisions, experiment with high-leverage growth strategies, and take direct pride in client business results.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Craft Meets Commercial Impact</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We obsess over code performance, typography, and mathematical design, but we always measure success by client revenue and operational velocity.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">Continuous Technical Evolution</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We stay at the frontier of modern web engineering, TypeScript, automated CRM pipelines, and practical AI workflow tools.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Open Positions
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {careersData.length} Roles Active in Pune / Hybrid
            </span>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-orange-400 border border-slate-700">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {job.description}
                  </p>
                </div>

                <button
                  id={`btn-apply-job-${job.id}`}
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSubmitted(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-[#F97316] text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 flex items-center gap-1.5 self-start md:self-auto"
                >
                  <span>View Role & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Inquiries */}
        <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">Don't see your exact role?</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            We are always interested in connecting with outstanding growth strategists, full-stack developers, and designers.
          </p>
          <a
            href="mailto:careers@sanskargrowthsolutions.com"
            className="inline-block text-xs font-semibold text-[#F97316] hover:underline"
          >
            Send your portfolio to careers@sanskargrowthsolutions.com →
          </a>
        </div>

      </div>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{applicantName}</strong>. Your profile for <strong className="text-white">{selectedJob.title}</strong> has been submitted to the SGS talent team.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 bg-slate-800 text-xs font-semibold rounded-lg text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase text-orange-400">
                    {selectedJob.department} • {selectedJob.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedJob.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Location: {selectedJob.location} • Experience: {selectedJob.experience}
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-300 mb-8">
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Key Responsibilities</h4>
                    <ul className="space-y-1.5">
                      {selectedJob.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Requirements</h4>
                    <ul className="space-y-1.5">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleApply} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase text-white tracking-wider">Quick Application</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="Your Email *"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="Contact Phone / WhatsApp"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="LinkedIn / GitHub / Portfolio URL"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Brief note on your recent relevant work..."
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#F97316] hover:bg-orange-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
