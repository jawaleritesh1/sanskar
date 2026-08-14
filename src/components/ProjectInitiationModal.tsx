import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Send } from 'lucide-react';
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

    // Simulate reliable server validation and CRM logging
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Project Consultation Requested
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>. Your requirement for <strong className="text-white">{company}</strong> has been received by our growth architecture team.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Work Email:</span>
                <span className="font-mono text-white">{workEmail}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Selected Requirement:</span>
                <span className="text-orange-400 capitalize font-medium">{selectedRequirement}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Response SLA:</span>
                <span className="text-emerald-400 font-medium">Within 1 Business Day</span>
              </div>
              <p className="pt-2 text-[11px] text-slate-400">
                A confirmation has been dispatched to your email along with an initial discovery overview.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <div>
            
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                Commercial Inquiry
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Start a Growth Conversation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us about your business objectives. We'll identify what needs to be built, marketed, or automated.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
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
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Company / Organization <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Realty"
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
                    Work Email <span className="text-orange-400">*</span>
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
                    Contact Phone / WhatsApp <span className="text-orange-400">*</span>
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

              {/* Service / Solution Requirement */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Primary Objective / Solution Needed
                </label>
                <select
                  value={selectedRequirement}
                  onChange={(e) => setSelectedRequirement(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                >
                  <optgroup label="Growth Solutions">
                    <option value="generate">GENERATE — Predictable Lead Pipeline & CRM</option>
                    <option value="launch">LAUNCH — Brand, Website & Market Entry</option>
                    <option value="automate">AUTOMATE — Workflows, CRM & AI Efficiency</option>
                    <option value="transform">TRANSFORM — Enterprise Digital Modernization</option>
                  </optgroup>
                  <optgroup label="Core Capabilities">
                    <option value="digital-growth">Digital Growth & Performance Ads (Google/Meta/SEO)</option>
                    <option value="technology">Technology Solutions (Website, Portals, Custom Software)</option>
                    <option value="brand-creative">Brand & Creative (Identity, UI/UX, Sales Decks)</option>
                    <option value="business-media">Business Media & Founder Authority</option>
                    <option value="business-consulting">Business Consulting & Growth Strategy</option>
                  </optgroup>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="₹50k – ₹1L">₹50,000 – ₹1,00,000 (Initial Pilot / Asset)</option>
                    <option value="₹1L – ₹3L">₹1,00,000 – ₹3,00,000 (Standard Growth Sprint)</option>
                    <option value="₹3L – ₹7L">₹3,00,000 – ₹7,00,000 (Comprehensive System)</option>
                    <option value="₹7L+">₹7,00,000+ (Enterprise Transformation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Target Deployment Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Immediate (< 2 Weeks)">Immediate (Within 2 Weeks)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Within 60 Days">Within 60 Days</option>
                    <option value="Planning for Next Quarter">Planning for Next Quarter</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Brief Project Overview / Context
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any context regarding your current sales pipeline, target market, or challenges..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-orange-500 focus:ring-orange-500 bg-slate-900"
                />
                <label htmlFor="modal-consent" className="text-xs text-slate-400">
                  I agree to receive communications from Sanskar Growth Solutions regarding this growth consultation.
                </label>
              </div>
              {errors.consent && <p className="text-[11px] text-rose-400">{errors.consent}</p>}

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Strict NDA & confidentiality assured.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send className="w-3.5 h-3.5" />
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
