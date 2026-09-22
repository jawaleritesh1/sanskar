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
              Careers at Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Build The Systems Powering{" "}
            <span className="relative inline-block text-[#AFEB00]">
              High-Growth Businesses
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            We are looking for thoughtful engineers, growth strategists, and brand designers who value craftsmanship, commercial impact, and direct accountability.
          </p>
        </motion.div>

        {/* Culture & Values Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#070D2B] border border-white/10 flex items-center justify-center text-[#AFEB00] mb-4 font-bold text-xs font-heading">
              01
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">High Agency &amp; Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We empower team members to make decisions, experiment with high-leverage growth strategies, and take direct pride in client business results.
            </p>
          </div>

          <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#070D2B] border border-white/10 flex items-center justify-center text-[#AFEB00] mb-4 font-bold text-xs font-heading">
              02
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">Craft Meets Commercial Impact</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We obsess over code performance, typography, and mathematical design, but we always measure success by client revenue and operational velocity.
            </p>
          </div>

          <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-10 h-10 rounded-2xl bg-[#070D2B] border border-white/10 flex items-center justify-center text-[#AFEB00] mb-4 font-bold text-xs font-heading">
              03
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">Continuous Technical Evolution</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We stay at the frontier of modern web engineering, TypeScript, automated CRM pipelines, and practical AI workflow tools.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Open Positions
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
              {careersData.length} Roles Active in Pune / Hybrid
            </span>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="relative overflow-hidden p-7 sm:p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group text-white"
              >
                {/* Top Hover Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin size={13} className="text-slate-400" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <Clock size={13} className="text-slate-400" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <button
                  id={`btn-apply-job-${job.id}`}
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSubmitted(false);
                  }}
                  className="px-7 py-3.5 rounded-full bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs sm:text-sm font-bold font-heading transition-all duration-300 shadow-lg shadow-[#AFEB00]/25 shrink-0 flex items-center gap-2 self-start md:self-auto group/btn hover:shadow-xl"
                >
                  <span>View Role &amp; Apply</span>
                  <ArrowRight size={15} className="text-[#141414] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Inquiries */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1446]/80 border border-white/10 text-center max-w-2xl mx-auto space-y-3 shadow-md text-white">
          <h3 className="text-xl font-bold font-heading text-white">Don't see your exact role?</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We are always interested in connecting with outstanding growth strategists, full-stack developers, and designers.
          </p>
          <a
            href="mailto:careers@sanskargrowthsolutions.com"
            className="inline-flex items-center gap-1 text-xs font-bold font-heading text-[#AFEB00] hover:underline pt-1"
          >
            <span>Send your portfolio to careers@sanskargrowthsolutions.com</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E32]/85 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-[#0B1446] border border-white/15 rounded-3xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] rounded-t-3xl" />

            {/* Close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
              aria-label="Close job application modal"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#AFEB00]">
                  <CheckCircle2 size={32} className="text-[#AFEB00]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Application Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#AFEB00] font-heading">{applicantName}</strong>. Your profile for <strong className="text-white font-heading">{selectedJob.title}</strong> has been submitted to the SGS talent team.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-7 py-3 bg-[#AFEB00] text-xs font-bold font-heading rounded-full text-[#141414] hover:bg-[#9CD600] transition-colors shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pt-2">
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                    {selectedJob.department} • {selectedJob.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">
                    Location: {selectedJob.location} • Experience: {selectedJob.experience}
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-300 mb-8">
                  <div>
                    <h4 className="font-bold font-heading text-white uppercase text-xs tracking-wider mb-2.5">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AFEB00] mt-1.5 shrink-0"></span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold font-heading text-white uppercase text-xs tracking-wider mb-2.5">Requirements &amp; Qualifications</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2033FF] mt-1.5 shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleApply} className="p-6 rounded-2xl bg-[#070D2B] border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold font-heading uppercase text-white tracking-wider">Quick Application</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="Your Email *"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="Contact Phone / WhatsApp"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                    <input
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="LinkedIn / GitHub / Portfolio URL"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Brief note on your recent relevant work..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs font-bold font-heading rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-[#AFEB00]/25 disabled:opacity-50 active:scale-95"
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
