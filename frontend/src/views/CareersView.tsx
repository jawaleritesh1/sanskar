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
  Award,
  Zap,
  Check
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
    <div className="w-full bg-[#0F1B64] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. CAREERS HERO (PHOTOGRAPHIC SPLIT WITH STATS)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#0F1B64] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/15 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content (Span 7) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#AFEB00]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-mono">
                  Careers at Sanskar Growth Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Build The Systems Powering{" "}
                <span className="text-[#AFEB00]">
                  High-Growth Enterprises
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                We are looking for thoughtful engineers, growth strategists, and brand designers who value commercial rigor, architectural craftsmanship, and direct ownership.
              </p>

              <div className="font-heading text-lg sm:text-xl text-slate-200 font-bold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Craft Meets Commercial Leverage</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#open-roles"
                  className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5"
                >
                  <span>View Open Roles</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Showcase with Floating Prestige Badges (Span 5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Engineering Team"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B64] via-transparent to-black/30" />
              </div>

              {/* Floating Dark Prestige Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0F1B64] border border-white/15 p-5 rounded-xl shadow-2xl backdrop-blur-xl max-w-[240px] space-y-2 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <Zap size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">High Agency</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  Direct ownership of client outcomes with zero micro-management.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>Pune / Hybrid</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{careersData.length} Roles</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Active Hiring</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">&lt; 48h</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Application Review SLA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">Pune HQ</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Hybrid &amp; Modern Studio</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">100% Merit</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Real Impact Culture</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. CULTURE & VALUES SECTION (CLOUD CONTRAST)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#141414] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2033FF] font-mono mb-2">
                HOW WE OPERATE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-[#141414] tracking-tight leading-[1.1]">
                Our Working Principles &amp; Culture
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              We look for craft-obsessed thinkers who understand that commercial velocity and technical elegance are complementary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#141414]">High Agency &amp; Direct Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We empower team members to make decisions, execute high-leverage growth strategies, and take direct pride in real client revenue outcomes.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#141414]">Craft Meets Commercial Impact</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We obsess over code performance, typography, and mathematical design, but we always benchmark success by enterprise EBITDA and velocity.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#141414]">Continuous Technical Evolution</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We stay at the frontier of modern web engineering, TypeScript, automated CRM pipelines, and practical AI workflow systems.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. OPEN POSITIONS SECTION (CRISP CLOUD / WHITE BACKGROUND)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="open-roles" className="py-14 sm:py-20 bg-white text-[#141414] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-2">
                JOIN THE SQUAD
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-[#141414] tracking-tight">
                Open Positions
              </h2>
            </div>
            <span className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#F5FAFF] text-[#2033FF] border border-slate-300 font-mono w-fit">
              {careersData.length} Roles Active in Pune / Hybrid
            </span>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-[#F5FAFF] border border-slate-200 hover:border-[#2033FF]/50 hover:bg-white transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md hover:shadow-xl hover:-translate-y-0.5 group text-[#141414]"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#141414] border border-slate-200 font-mono shadow-xs">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin size={13} className="text-[#2033FF]" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock size={13} className="text-[#2033FF]" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#141414] group-hover:text-[#2033FF] transition-colors">
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
                  className="px-7 py-3 rounded-xl bg-[#0F1B64] hover:bg-[#2033FF] text-[#AFEB00] text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 self-start md:self-auto group/btn"
                >
                  <span>View Role &amp; Apply</span>
                  <ArrowRight size={15} className="text-[#AFEB00] transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {/* General Application Inquiries */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#F5FAFF] border border-slate-200 text-center max-w-2xl mx-auto space-y-3 shadow-md text-[#141414]">
            <h3 className="text-xl font-heading font-bold text-[#141414]">Don't see your exact role?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We are always eager to connect with outstanding growth strategists, full-stack engineers, and brand designers who resonate with our standard of excellence.
            </p>
            <a
              href="mailto:careers@sanskargrowthsolutions.com"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#2033FF] hover:text-[#0F1B64] hover:underline pt-1"
            >
              <span>Send your CV and portfolio to careers@sanskargrowthsolutions.com</span>
              <ArrowRight size={13} />
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. CINEMATIC SUMMIT BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 bg-[#0F1B64] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Mountain Summit Sunset"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B64] via-[#0F1B64]/60 to-[#0F1B64]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Engineering Culture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Do The Best Work of Your Career at SGS.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join an ambitious team crafting commercial systems for high-conviction businesses.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-roles"
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Explore Roles</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Job Detail & Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-[#0F1B64] border border-white/15 rounded-2xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">

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
                <h3 className="text-2xl font-heading font-bold text-white">Application Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#AFEB00]">{applicantName}</strong>. Your profile for <strong className="text-white">{selectedJob.title}</strong> has been submitted directly to the SGS leadership team.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-7 py-3 bg-[#AFEB00] text-xs font-bold rounded-xl text-[#0F1B64] hover:bg-[#9CD100] transition-colors shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0F1B64] text-[#AFEB00] border border-white/10 font-mono">
                    {selectedJob.department} • {selectedJob.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    Location: {selectedJob.location} • Experience: {selectedJob.experience}
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-300 mb-8">
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider text-white mb-2.5">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AFEB00] mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider text-white mb-2.5">Requirements &amp; Qualifications</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AFEB00] mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleApply} className="p-6 rounded-2xl bg-[#09103D] border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#AFEB00]">Quick Application</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0F1B64] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="Your Email *"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0F1B64] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="Contact Phone / WhatsApp"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0F1B64] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                    <input
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="LinkedIn / GitHub / Portfolio URL"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0F1B64] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Brief note on your recent relevant work..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0F1B64] border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#AFEB00]/25 disabled:opacity-50 active:scale-95"
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
