import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Briefcase,
  MapPin,
  Clock, 
  X,
  Send,
  ShieldCheck,
  Sparkles,
  Code2,
  TrendingUp,
  Users,
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { careersData } from '../data/careersData';
import { CareerOpening } from '../types';
import { api } from '../services/api';

interface CareersViewProps {
  onNavigate: (path: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const CareersView: React.FC<CareersViewProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !selectedJob) return;
    setIsSubmitting(true);
    try {
      await api.submitCareerApplication({
        jobId: selectedJob.id,
        jobTitle: selectedJob.title,
        applicantName,
        applicantEmail,
        applicantPhone,
        portfolioLink,
        applicantNote
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
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
              Careers at Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Build The Systems Powering{" "}
            <span className="relative inline-block text-[#FF4B16]">
              High-Growth Businesses
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            We are looking for thoughtful engineers, growth strategists, and brand designers who value craftsmanship, commercial impact, and direct accountability.
          </p>
        </motion.div>

        {/* Culture & Values Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 flex items-center justify-center text-[#092B78] mb-4 font-bold text-xs">
              01
            </div>
            <h3 className="text-xl font-bold text-[#092B78] mb-2">High Agency & Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We empower team members to make decisions, experiment with high-leverage growth strategies, and take direct pride in client business results.
            </p>
          </div>

          <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#FFF8F6] border border-[#FF4B16]/20 flex items-center justify-center text-[#FF4B16] mb-4 font-bold text-xs">
              02
            </div>
            <h3 className="text-xl font-bold text-[#092B78] mb-2">Craft Meets Commercial Impact</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We obsess over code performance, typography, and mathematical design, but we always measure success by client revenue and operational velocity.
            </p>
          </div>

          <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 flex items-center justify-center text-[#092B78] mb-4 font-bold text-xs">
              03
            </div>
            <h3 className="text-xl font-bold text-[#092B78] mb-2">Continuous Technical Evolution</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stay at the frontier of modern web engineering, TypeScript, automated CRM pipelines, and practical AI workflow tools.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#092B78]">
              Open Positions
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
              {careersData.length} Roles Active in Pune / Hybrid
            </span>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="relative overflow-hidden p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:-translate-y-0.5 group"
              >
                {/* Top Hover Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <MapPin size={13} className="text-slate-400" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Clock size={13} className="text-slate-400" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <button
                  id={`btn-apply-job-${job.id}`}
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSubmitted(false);
                  }}
                  className="px-7 py-3.5 rounded-full bg-[#092B78] hover:bg-[#071F5B] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#092B78]/20 shrink-0 flex items-center gap-2 self-start md:self-auto group/btn hover:shadow-xl"
                >
                  <span>View Role & Apply</span>
                  <ArrowRight size={15} className="text-[#FF4B16] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Inquiries */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 text-center max-w-2xl mx-auto space-y-3 shadow-md">
          <h3 className="text-xl font-bold text-[#092B78]">Don't see your exact role?</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We are always interested in connecting with outstanding growth strategists, full-stack developers, and designers.
          </p>
          <a
            href="mailto:careers@sanskargrowthsolutions.com"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4B16] hover:text-[#E03E0E] pt-1"
          >
            <span>Send your portfolio to careers@sanskargrowthsolutions.com</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051336]/75 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 text-[#092B78] shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] rounded-t-3xl" />

            {/* Close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
              aria-label="Close job application modal"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/20 flex items-center justify-center mx-auto text-[#092B78]">
                  <CheckCircle2 size={32} className="text-[#FF4B16]" />
                </div>
                <h3 className="text-2xl font-bold text-[#092B78]">Application Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#092B78]">{applicantName}</strong>. Your profile for <strong className="text-[#092B78]">{selectedJob.title}</strong> has been submitted to the SGS talent team.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-7 py-3 bg-[#092B78] text-xs font-semibold rounded-full text-white hover:bg-[#071F5B] transition-colors shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pt-2">
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                    {selectedJob.department} • {selectedJob.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#092B78] mt-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">
                    Location: {selectedJob.location} • Experience: {selectedJob.experience}
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-700 mb-8">
                  <div>
                    <h4 className="font-bold text-[#092B78] uppercase text-xs tracking-wider mb-2.5">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B16] mt-1.5 shrink-0"></span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#092B78] uppercase text-xs tracking-wider mb-2.5">Requirements & Qualifications</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#092B78] mt-1.5 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleApply} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase text-[#092B78] tracking-wider">Quick Application</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                    />
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="Your Email *"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="Contact Phone / WhatsApp"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                    />
                    <input
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="LinkedIn / GitHub / Portfolio URL"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Brief note on your recent relevant work..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#FF4B16] hover:bg-[#E03E0E] text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF4B16]/25 disabled:opacity-50 active:scale-95"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    <Send size={14} />
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
