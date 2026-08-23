import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall, Send, ShieldCheck, CheckCircle2, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
              Contact Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Let's Build Your Next Stage of{" "}
            <span className="relative inline-block text-[#FF4B16]">
              Growth & Scale
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Tell us what you're aiming to achieve. We'll help you architect the exact systems needed to attract high-value buyers, optimize conversions, and scale operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 space-y-6 shadow-[0_15px_40px_rgba(9,43,120,0.04)]">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B]" />
              
              <h2 className="text-xl font-bold text-[#092B78]">Direct Communication Channels</h2>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 text-[#092B78] shrink-0">
                    <Mail size={18} className="text-[#FF4B16]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">General & Commercial Inquiries:</span>
                    <a href="mailto:hello@sanskargrowthsolutions.com" className="font-semibold text-[#092B78] hover:text-[#FF4B16] transition-colors">
                      hello@sanskargrowthsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 text-[#092B78] shrink-0">
                    <MapPin size={18} className="text-[#092B78]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Headquarters:</span>
                    <span className="font-semibold text-[#092B78]">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 text-[#092B78] shrink-0">
                    <Clock size={18} className="text-[#092B78]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Response Velocity:</span>
                    <span className="font-semibold text-[#092B78]">
                      Within 1 Business Day (Guaranteed SLA)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                Official Corporate Domain: <strong className="text-[#092B78]">sanskargrowthsolutions.com</strong>
              </div>
            </div>

            {/* Diagnostic Box */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 space-y-3 shadow-md">
              <span className="text-xs font-bold uppercase text-[#FF4B16] tracking-wider block">
                Unsure Where to Start?
              </span>
              <h3 className="text-lg font-bold text-[#092B78]">
                Take the 60-Second Growth Diagnostic
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identify whether your revenue bottleneck is in ATTRACT, CONVERT, or SCALE before our call.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-bold text-[#FF4B16] hover:text-[#E03E0E] flex items-center gap-1 pt-1"
              >
                <span>Launch Interactive Diagnostic</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

          {/* Right Column: Contact & Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(9,43,120,0.06)]">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B]" />

              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/20 flex items-center justify-center mx-auto text-[#092B78]">
                    <CheckCircle2 size={36} className="text-[#FF4B16]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#092B78]">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#092B78]">{fullName}</strong>. Your inquiry for <strong className="text-[#092B78]">{company}</strong> has been assigned to a senior growth partner at SGS.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Work Email:</span>
                      <span className="text-[#092B78] font-semibold">{workEmail}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500">Selected Solution:</span>
                      <span className="text-[#092B78] capitalize font-bold">{selectedService}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Next Step:</span>
                      <span className="text-[#FF4B16] font-bold">Initial Discovery Brief via Email</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-7 py-3 rounded-full bg-[#092B78] text-white text-xs font-semibold hover:bg-[#071F5B] transition-colors shadow-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#092B78]">Project Consultation Brief</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Fill in your requirements below for a prioritized response within 24 hours.</p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">
                        Full Name <span className="text-[#FF4B16]">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Kulkarni"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] transition-colors ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200/80'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">
                        Company / Firm Name <span className="text-[#FF4B16]">*</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Kulkarni Architecture"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] transition-colors ${
                          errors.company ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200/80'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-rose-500 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">
                        Official Work Email <span className="text-[#FF4B16]">*</span>
                      </label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="anand@kulkarni.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] transition-colors ${
                          errors.workEmail ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200/80'
                        }`}
                      />
                      {errors.workEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">
                        Contact Phone / WhatsApp <span className="text-[#FF4B16]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] transition-colors ${
                          errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200/80'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Website & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">Website URL (Optional)</label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#092B78] font-bold mb-1">Primary Growth Requirement</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-[#092B78] focus:outline-none focus:border-[#FF4B16]"
                      >
                        <option value="digital-growth">Digital Growth & Paid Ads</option>
                        <option value="technology">Modern Web & Custom Software</option>
                        <option value="brand-creative">Brand Authority & Design</option>
                        <option value="business-media">Business Media & PR</option>
                        <option value="business-consulting">Strategic Consulting</option>
                        <option value="all-in-one">Complete Operating Stack</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#092B78] font-bold mb-1">Project Objectives / Context</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your current bottlenecks, target audience, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16]"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent-box"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#FF4B16] focus:ring-[#FF4B16]"
                    />
                    <label htmlFor="consent-box" className="text-[11px] text-slate-500 leading-snug">
                      I agree to receive communications regarding this project inquiry from Sanskar Growth Solutions.
                    </label>
                  </div>
                  {errors.consent && <p className="text-[11px] text-rose-500">{errors.consent}</p>}

                  {/* Submit Button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck size={14} className="text-[#092B78]" />
                      Confidential & NDA Protected
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 rounded-full bg-[#FF4B16] hover:bg-[#E03E0E] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#FF4B16]/25 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
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
