import React, { useState } from 'react';
import { Mail, MapPin, PhoneCall, Send, ShieldCheck, CheckCircle2, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';

interface ContactViewProps {
  onNavigate: (path: string) => void;
  onOpenDiagnostic: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenDiagnostic
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedService, setSelectedService] = useState('generate');
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
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" />
            START A CONVERSATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Let's build your next stage of growth.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Tell us what you're trying to achieve. We'll help you identify what needs to be built, marketed, or transformed across your operating layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-white">Direct Communication Channels</h2>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#F97316] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">General & Commercial Inquiries:</span>
                    <a href="mailto:hello@sanskargrowthsolutions.com" className="font-semibold text-white hover:text-orange-400 transition-colors">
                      hello@sanskargrowthsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Headquarters:</span>
                    <span className="font-semibold text-white">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Response Velocity:</span>
                    <span className="font-semibold text-white">
                      Within 1 Business Day (Guaranteed SLA)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                Official Corporate Domain: <strong className="text-white font-mono">sanskargrowthsolutions.com</strong>
              </div>
            </div>

            {/* Diagnostic Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-orange-400">
                Unsure Where to Start?
              </span>
              <h3 className="text-base font-bold text-white">
                Take the 60-Second Growth Diagnostic
              </h3>
              <p className="text-xs text-slate-400">
                Identify whether your revenue bottleneck is in ATTRACT, CONVERT, or SCALE before our call.
              </p>
              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 pt-1"
              >
                <span>Launch Interactive Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Contact & Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{fullName}</strong>. Your inquiry for <strong className="text-white">{company}</strong> has been assigned to a senior growth strategist at SGS.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Work Email:</span>
                      <span className="font-mono text-white">{workEmail}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Selected Solution:</span>
                      <span className="text-orange-400 capitalize font-medium">{selectedService}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Next Step:</span>
                      <span className="text-emerald-400 font-medium">Initial Discovery Brief via Email</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">Project Consultation Brief</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fill in your requirements below for a prioritized response.</p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Full Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Kulkarni"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Company / Firm Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Kulkarni Architecture"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.company ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-rose-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Official Work Email <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.workEmail ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.workEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Phone / WhatsApp <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Website & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Current Website URL (If Any)
                      </label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Primary Requirement / Growth Area
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="generate">GENERATE — Lead Generation & CRM Pipeline</option>
                        <option value="launch">LAUNCH — Market Entry, Brand & Website</option>
                        <option value="automate">AUTOMATE — Workflows, CRM & AI Efficiency</option>
                        <option value="transform">TRANSFORM — Enterprise Digital Transformation</option>
                        <option value="digital-growth">Digital Growth & Performance Advertising</option>
                        <option value="technology">Technology Solutions & Custom Software</option>
                        <option value="brand-creative">Brand Strategy & UI/UX Design</option>
                        <option value="business-media">Business Media & Founder Authority</option>
                        <option value="business-consulting">Strategic Business Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Planned Investment Range
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="₹50k – ₹1L">₹50,000 – ₹1,00,000 (Initial Pilot)</option>
                        <option value="₹1L – ₹3L">₹1,00,000 – ₹3,00,000 (Growth Sprint)</option>
                        <option value="₹3L – ₹7L">₹3,00,000 – ₹7,00,000 (Comprehensive Operating Layer)</option>
                        <option value="₹7L+">₹7,00,000+ (Multi-Quarter Scale)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={projectTimeline}
                        onChange={(e) => setProjectTimeline(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="Immediate (< 2 Weeks)">Immediate (Within 2 Weeks)</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="Within 60 Days">Within 60 Days</option>
                        <option value="Exploratory / Next Quarter">Exploratory / Next Quarter</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Brief Message or Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your current commercial goals or operational bottlenecks..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-orange-500 focus:ring-orange-500 bg-slate-900"
                    />
                    <label htmlFor="contact-consent" className="text-xs text-slate-400">
                      I agree to receive commercial communications and proposal updates from Sanskar Growth Solutions.
                    </label>
                  </div>
                  {errors.consent && <p className="text-[11px] text-rose-400">{errors.consent}</p>}

                  {/* Submit */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Enterprise privacy & NDA assured.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Brief</span>
                          <Send className="w-3.5 h-3.5" />
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
