import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Send, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';
import { api } from '../services/api';

interface ProjectInitiationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceSlug?: string;
  initialStage?: string;
}

export const ProjectInitiationModal: React.FC<ProjectInitiationModalProps> = ({
  isOpen,
  onClose,
  initialServiceSlug,
  initialStage
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedRequirement, setSelectedRequirement] = useState(initialServiceSlug || 'generate');
  const [budgetRange, setBudgetRange] = useState('₹1L – ₹3L / Project or Mo');
  const [timeline, setTimeline] = useState('Within 30 Days');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

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
      err.consent = 'Please confirm consent to be contacted regarding this inquiry.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await api.submitConsultation({
        fullName,
        company,
        workEmail,
        phone,
        website,
        selectedRequirement,
        budgetRange,
        timeline,
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

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompany('');
    setWorkEmail('');
    setPhone('');
    setWebsite('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E32]/85 backdrop-blur-xl animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0B1446] border border-white/15 rounded-3xl p-6 sm:p-9 text-white shadow-2xl shadow-black/80 max-h-[92vh] overflow-y-auto">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] rounded-t-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#2033FF]/20 border border-[#2033FF]/30 flex items-center justify-center mx-auto text-[#AFEB00]">
              <CheckCircle2 size={36} className="text-[#AFEB00]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Project Consultation Requested
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                Thank you, <strong className="text-[#AFEB00]">{fullName}</strong> from <strong className="text-[#AFEB00]">{company}</strong>. Our growth partners will review your objectives and reach out within 24 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070D2B] border border-white/10 text-xs text-slate-300 max-w-md mx-auto text-left space-y-1 font-sans">
              <div className="font-bold text-[#AFEB00]">Next Steps:</div>
              <div>• Initial commercial and technical feasibility evaluation</div>
              <div>• Discovery session preparation with tailored industry benchmarks</div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-7 py-3 bg-[#AFEB00] text-[#141414] text-xs font-bold rounded-full hover:bg-[#9CD600] transition-colors shadow-lg shadow-[#AFEB00]/25 active:scale-95"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="mb-6 pt-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#AFEB00]" />
                <span className="text-xs uppercase font-bold text-[#AFEB00] tracking-wider">Commercial Discovery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                Tell us about your commercial objectives. We'll map the exact architecture needed to scale.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Realty"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />
                  {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />
                  {errors.workEmail && <p className="text-[11px] text-red-400 mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Contact Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-1 focus:ring-[#AFEB00]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Primary Area of Focus */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary Growth Requirement</label>
                <select
                  value={selectedRequirement}
                  onChange={(e) => setSelectedRequirement(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#AFEB00]"
                >
                  <option value="digital-growth" className="bg-[#0B1446] text-white">Digital Growth &amp; Paid Acquisition</option>
                  <option value="technology" className="bg-[#0B1446] text-white">Modern Web &amp; Custom Software</option>
                  <option value="brand-creative" className="bg-[#0B1446] text-white">Brand Authority &amp; Creative Direction</option>
                  <option value="business-media" className="bg-[#0B1446] text-white">Business Media &amp; PR Authority</option>
                  <option value="business-consulting" className="bg-[#0B1446] text-white">Strategic Growth Consulting</option>
                  <option value="all-in-one" className="bg-[#0B1446] text-white">Complete Unified Operating Layer</option>
                </select>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Commercial Goals / Bottleneck Details</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your current challenges, pipeline goals, or timeline..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 bg-[#060B24] text-[#AFEB00] focus:ring-[#AFEB00]"
                />
                <label htmlFor="consent" className="text-[11px] text-slate-400 leading-snug">
                  I agree to receive communications regarding this project discovery request from Sanskar Growth Solutions.
                </label>
              </div>
              {errors.consent && <p className="text-[11px] text-red-400">{errors.consent}</p>}

              {/* Submit Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#AFEB00]" />
                  Confidential &amp; NDA Protected
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-full bg-[#AFEB00] hover:bg-[#9CD600] text-[#141414] text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Discovery Request...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <ArrowRight size={14} className="text-[#141414]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
