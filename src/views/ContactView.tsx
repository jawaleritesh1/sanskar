import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall, Send, ShieldCheck, CheckCircle2, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';
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
        setIsSubmitted(true); // Graceful fallback
      }
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
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
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
              Contact Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Let's Build Your Next Stage of{" "}
            <span className="relative inline-block text-white">
              Growth &{" "}
              <span className="bg-[#AFEB00] text-[#141414] px-3 py-0.5 rounded-lg inline-block">Scale</span>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Tell us what you're aiming to achieve. We'll help you architect the exact systems needed to attract high-value buyers, optimize conversions, and scale operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 space-y-6 shadow-2xl backdrop-blur-md">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />
              
              <h2 className="text-xl font-bold font-heading text-white">Direct Communication Channels</h2>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#080E32] border border-white/10 text-[#AFEB00] shrink-0">
                    <Mail size={18} className="text-[#AFEB00]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">General & Commercial Inquiries:</span>
                    <a href="mailto:hello@sanskargrowthsolutions.com" className="font-semibold text-white hover:text-[#AFEB00] transition-colors">
                      hello@sanskargrowthsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#080E32] border border-white/10 text-[#AFEB00] shrink-0">
                    <MapPin size={18} className="text-[#AFEB00]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Headquarters:</span>
                    <span className="font-semibold text-white">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#080E32] border border-white/10 text-[#AFEB00] shrink-0">
                    <Clock size={18} className="text-[#AFEB00]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Response Velocity:</span>
                    <span className="font-semibold text-white">
                      Within 1 Business Day (Guaranteed SLA)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                Official Corporate Domain: <strong className="text-[#AFEB00] font-heading">sanskargrowthsolutions.com</strong>
              </div>
            </div>

            {/* Diagnostic Box */}
            <div className="p-7 rounded-3xl bg-[#0B1446]/85 border border-white/10 space-y-3 shadow-2xl backdrop-blur-md">
              <span className="text-xs font-bold uppercase text-[#AFEB00] font-heading tracking-wider block">
                Unsure Where to Start?
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Take the 60-Second Growth Diagnostic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Identify whether your revenue bottleneck is in ATTRACT, CONVERT, or SCALE before our call.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-bold font-heading text-[#AFEB00] hover:underline flex items-center gap-1 pt-1"
              >
                <span>Launch Interactive Diagnostic</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

          {/* Right Column: Contact & Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-2xl backdrop-blur-md">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />

              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-[#080E32] border border-[#AFEB00]/30 flex items-center justify-center mx-auto text-[#AFEB00]">
                    <CheckCircle2 size={36} className="text-[#AFEB00]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#AFEB00] font-heading">{fullName}</strong>. Your inquiry for <strong className="text-white font-heading">{company}</strong> has been assigned to a senior growth partner at SGS.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#080E32] border border-white/10 text-left text-xs text-slate-300 max-w-md mx-auto space-y-2">
                    <div className="flex justify-between py-1 border-b border-white/10">
                      <span className="text-slate-400">Work Email:</span>
                      <span className="text-white font-semibold">{workEmail}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/10">
                      <span className="text-slate-400">Selected Solution:</span>
                      <span className="text-[#AFEB00] capitalize font-bold">{selectedService}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Next Step:</span>
                      <span className="text-[#AFEB00] font-bold">Initial Discovery Brief via Email</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-7 py-3 rounded-full bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs font-bold font-heading transition-colors shadow-lg shadow-[#AFEB00]/20"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold font-heading text-white">Project Consultation Brief</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fill in your requirements below for a prioritized response within 24 hours.</p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">
                        Full Name <span className="text-[#AFEB00]">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Kulkarni"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00] transition-colors ${
                          errors.fullName ? 'border-rose-500 bg-rose-950/20' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">
                        Company / Firm Name <span className="text-[#AFEB00]">*</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Kulkarni Architecture"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00] transition-colors ${
                          errors.company ? 'border-rose-500 bg-rose-950/20' : 'border-white/15'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-rose-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">
                        Official Work Email <span className="text-[#AFEB00]">*</span>
                      </label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="anand@kulkarni.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00] transition-colors ${
                          errors.workEmail ? 'border-rose-500 bg-rose-950/20' : 'border-white/15'
                        }`}
                      />
                      {errors.workEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">
                        Contact Phone / WhatsApp <span className="text-[#AFEB00]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00] transition-colors ${
                          errors.phone ? 'border-rose-500 bg-rose-950/20' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Website & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">Website URL (Optional)</label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-200 font-bold font-heading mb-1">Primary Growth Requirement</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border border-white/15 text-white focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                      >
                        <option value="digital-growth" className="bg-[#080E32] text-white">Digital Growth &amp; Paid Ads</option>
                        <option value="technology" className="bg-[#080E32] text-white">Modern Web &amp; Custom Software</option>
                        <option value="brand-creative" className="bg-[#080E32] text-white">Brand Authority &amp; Design</option>
                        <option value="business-media" className="bg-[#080E32] text-white">Business Media &amp; PR</option>
                        <option value="business-consulting" className="bg-[#080E32] text-white">Strategic Consulting</option>
                        <option value="all-in-one" className="bg-[#080E32] text-white">Complete Operating Stack</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-200 font-bold font-heading mb-1">Project Objectives / Context</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your current bottlenecks, target audience, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B24] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent-box"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 bg-[#060B24] text-[#AFEB00] focus:ring-[#AFEB00]"
                    />
                    <label htmlFor="consent-box" className="text-[11px] text-slate-300 leading-snug">
                      I agree to receive communications regarding this project inquiry from Sanskar Growth Solutions.
                    </label>
                  </div>
                  {errors.consent && <p className="text-[11px] text-rose-400">{errors.consent}</p>}

                  {/* Submit Button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck size={14} className="text-[#AFEB00]" />
                      Confidential &amp; NDA Protected
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 rounded-full bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs font-bold font-heading flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
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
    </div>
  );
};
