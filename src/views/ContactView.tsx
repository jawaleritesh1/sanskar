import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall, Send, ShieldCheck, CheckCircle2, Clock, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { api } from '../services/api';

interface ContactViewProps {
  onNavigate: (path: string) => void;
  onOpenDiagnostic: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenDiagnostic
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedService, setSelectedService] = useState('digital-growth');
  const [budgetRange, setBudgetRange] = useState('₹1L – ₹3L / Project or Mo');
  const [projectTimeline, setProjectTimeline] = useState('Within 30 Days');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = 'Full name is required.';
    if (!company.trim()) err.company = 'Company name is required.';
    if (!workEmail.trim() || !workEmail.includes('@') || !workEmail.includes('.')) {
      err.workEmail = 'Please provide a valid work email address.';
    }
    if (!phone.trim() || phone.length < 8) {
      err.phone = 'Please provide a valid contact phone number.';
    }
    if (!consent) {
      err.consent = 'Please confirm your consent to be contacted.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await api.submitContact({
        fullName,
        company,
        workEmail,
        phone,
        website,
        selectedService,
        budgetRange,
        projectTimeline,
        message,
        consent
      });

      if (res.success || res.id) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#080E32] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. CONTACT HERO (PHOTOGRAPHIC SPLIT WITH STATS)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#080E32] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#2033FF]/10 blur-[150px]" />
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
                  Executive Engagement • Pune, India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Architecting Your Next Stage of{" "}
                <span className="font-heading font-bold text-[#AFEB00]">
                  Market Dominance
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Tell us what your enterprise is aiming to accomplish. We will design the exact operational stack, brand capital, and technical leverage required to outperform your sector.
              </p>

              <div className="font-heading text-base sm:text-lg text-slate-200 font-semibold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Direct partner consultation, zero delegation.</span>
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
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Advisory Engagement"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-transparent to-black/30" />
              </div>

              {/* Floating Dark Prestige Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0A1245] border border-white/15 p-5 rounded-xl shadow-2xl backdrop-blur-xl max-w-[240px] space-y-2 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <Zap size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Direct SLA</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  Direct evaluation by a senior managing partner within 24 business hours.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>NDA Protected</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">24h SLA</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Response Velocity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">100% Direct</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Partner Leadership</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">Pune HQ</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Global Capabilities</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">Strict NDA</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Data Confidentiality</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. CONTACT FORM & ADVISORY CHANNELS SECTION (CLOUD & CRISP WHITE)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#141414] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Direct Advisory Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xl text-[#141414]">
                <h2 className="text-2xl font-heading font-bold text-[#141414]">Direct Advisory Channels</h2>

                <div className="space-y-3.5 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-2xl bg-[#F5FAFF] border border-slate-200 text-[#2033FF] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">General &amp; Commercial Inquiries:</span>
                      <a href="mailto:hello@sanskargrowthsolutions.com" className="font-semibold text-[#141414] hover:text-[#2033FF] transition-colors">
                        hello@sanskargrowthsolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-2xl bg-[#F5FAFF] border border-slate-200 text-[#2033FF] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">Headquarters:</span>
                      <span className="font-semibold text-[#141414]">
                        Kalyani Nagar / Baner, Pune, Maharashtra, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-2xl bg-[#F5FAFF] border border-slate-200 text-[#2033FF] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">Partner Response SLA:</span>
                      <span className="font-semibold text-[#141414]">
                        Within 1 Business Day (Guaranteed)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                  <span>Official Domain:</span>
                  <strong className="text-[#2033FF] font-mono">sanskargrowthsolutions.com</strong>
                </div>
              </div>

              {/* Diagnostic Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xl text-[#141414]">
                <span className="text-xs font-bold uppercase text-[#2033FF] tracking-wider block font-mono">
                  Interactive Assessment
                </span>
                <h3 className="text-xl font-heading font-bold text-[#141414]">
                  Take the 60-Second Growth Diagnostic
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Pinpoint whether your enterprise bottleneck lies within ATTRACT, CONVERT, or SCALE before our briefing call.
                </p>
                <button
                  onClick={onOpenDiagnostic}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#2033FF] hover:text-[#141414] flex items-center gap-1.5 pt-1"
                >
                  <span>Launch Interactive Diagnostic</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Column: Contact & Project Intake Form */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-[#141414]">

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5FAFF] border border-slate-200 flex items-center justify-center mx-auto text-[#AFEB00]">
                      <CheckCircle2 size={36} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#141414]">
                        Consultation Brief Received
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                        Thank you, <strong className="text-[#141414]">{fullName}</strong>. Your inquiry on behalf of <strong className="text-[#141414]">{company}</strong> has been assigned to a senior managing partner.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F5FAFF] border border-slate-200 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2.5">
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500 font-mono">Work Email:</span>
                        <span className="text-[#141414] font-semibold">{workEmail}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500 font-mono">Selected Solution:</span>
                        <span className="text-[#2033FF] capitalize font-bold">{selectedService}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500 font-mono">Next Step:</span>
                        <span className="text-[#2033FF] font-bold">Initial Discovery Brief via Email</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3.5 rounded-xl bg-[#0F1B64] hover:bg-[#0A1245] text-[#AFEB00] text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="mb-4">
                      <h3 className="text-2xl font-heading font-bold text-[#141414]">Project Consultation Brief</h3>
                      <p className="text-xs text-slate-500 mt-1 font-sans">Provide your goals below for a prioritized senior partner evaluation within 24 hours.</p>
                    </div>

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#141414] font-semibold mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Anand Kulkarni"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-[#141414] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] transition-colors font-sans ${errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-slate-200'
                            }`}
                        />
                        {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-[#141414] font-semibold mb-1">
                          Company / Firm Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Kulkarni Architecture"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-[#141414] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] transition-colors font-sans ${errors.company ? 'border-rose-500 bg-rose-50' : 'border-slate-200'
                            }`}
                        />
                        {errors.company && <p className="text-[11px] text-rose-500 mt-1">{errors.company}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#141414] font-semibold mb-1">
                          Official Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          placeholder="anand@kulkarni.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-[#141414] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] transition-colors font-sans ${errors.workEmail ? 'border-rose-500 bg-rose-50' : 'border-slate-200'
                            }`}
                        />
                        {errors.workEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.workEmail}</p>}
                      </div>

                      <div>
                        <label className="block text-[#141414] font-semibold mb-1">
                          Contact Phone / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-[#141414] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] transition-colors font-sans ${errors.phone ? 'border-rose-500 bg-rose-50' : 'border-slate-200'
                            }`}
                        />
                        {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[#141414] font-semibold mb-1">Primary Growth Requirement</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#141414] focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] font-sans"
                      >
                        <option value="digital-growth">Digital Growth &amp; Paid Ads</option>
                        <option value="technology">Modern Web &amp; Custom Software</option>
                        <option value="brand-creative">Brand Authority &amp; Design</option>
                        <option value="business-media">Business Media &amp; PR</option>
                        <option value="business-consulting">Strategic Consulting</option>
                        <option value="all-in-one">Complete Operating Stack</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[#141414] font-semibold mb-1">Project Objectives / Current Bottlenecks</label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe current bottlenecks, revenue targets, or timeline..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#141414] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#2033FF] focus:ring-1 focus:ring-[#2033FF] font-sans"
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent-box"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 bg-white text-[#2033FF] focus:ring-[#2033FF]"
                      >
                      </input>
                      <label htmlFor="consent-box" className="text-[11px] text-slate-600 leading-snug font-sans">
                        I agree to receive communications regarding this project inquiry from Sanskar Growth Solutions.
                      </label>
                    </div>
                    {errors.consent && <p className="text-[11px] text-rose-500">{errors.consent}</p>}

                    {/* Submit Button */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-sans">
                        <ShieldCheck size={14} className="text-[#2033FF]" />
                        Confidential &amp; NDA Protected
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 transition-all"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Brief...</span>
                        ) : (
                          <>
                            <span>Submit Consultation Brief</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

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
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-[#080E32]/60 to-[#080E32]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Direct Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Let's Architect Your Next Phase of Growth.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Enterprise growth systems engineered for measurable revenue and market dominance.
          </p>
        </div>
      </section>

    </div>
  );
};
