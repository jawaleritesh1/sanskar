import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Send, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051336]/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 text-[#092B78] shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] rounded-t-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/20 flex items-center justify-center mx-auto text-[#092B78]">
              <CheckCircle2 size={36} className="text-[#FF4B16]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#092B78]">
                Project Consultation Requested
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#092B78]">{fullName}</strong> from <strong className="text-[#092B78]">{company}</strong>. Our growth partners will review your objectives and reach out within 24 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
              <div className="font-bold text-[#092B78]">Next Steps:</div>
              <div>• Initial commercial and technical feasibility evaluation</div>
              <div>• Discovery session preparation with tailored industry benchmarks</div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-7 py-3 bg-[#092B78] text-xs font-semibold rounded-full text-white hover:bg-[#071F5B] transition-colors shadow-lg"
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
                <span className="h-[2px] w-4 bg-[#FF4B16]" />
                <span className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider">Commercial Discovery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#092B78]">
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell us about your commercial objectives. We'll map the exact architecture needed to scale.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#092B78] mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                  />
                  {errors.fullName && <p className="text-[11px] text-[#FF4B16] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#092B78] mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Realty"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                  />
                  {errors.company && <p className="text-[11px] text-[#FF4B16] mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#092B78] mb-1">Work Email *</label>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                  />
                  {errors.workEmail && <p className="text-[11px] text-[#FF4B16] mt-1">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#092B78] mb-1">Contact Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-1 focus:ring-[#FF4B16]"
                  />
                  {errors.phone && <p className="text-[11px] text-[#FF4B16] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Primary Area of Focus */}
              <div>
                <label className="block text-xs font-bold text-[#092B78] mb-1">Primary Growth Requirement</label>
                <select
                  value={selectedRequirement}
                  onChange={(e) => setSelectedRequirement(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] focus:outline-none focus:border-[#FF4B16]"
                >
                  <option value="digital-growth">Digital Growth & Paid Acquisition</option>
                  <option value="technology">Modern Web & Custom Software</option>
                  <option value="brand-creative">Brand Authority & Creative Direction</option>
                  <option value="business-media">Business Media & PR Authority</option>
                  <option value="business-consulting">Strategic Growth Consulting</option>
                  <option value="all-in-one">Complete Unified Operating Layer</option>
                </select>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-bold text-[#092B78] mb-1">Commercial Goals / Bottleneck Details</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your current challenges, pipeline goals, or timeline..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-[#FF4B16] focus:ring-[#FF4B16]"
                />
                <label htmlFor="consent" className="text-[11px] text-slate-500 leading-snug">
                  I agree to receive communications regarding this project discovery request from Sanskar Growth Solutions.
                </label>
              </div>
              {errors.consent && <p className="text-[11px] text-[#FF4B16]">{errors.consent}</p>}

              {/* Submit Button */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
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
                    <span>Submitting Discovery Request...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <ArrowRight size={14} />
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
