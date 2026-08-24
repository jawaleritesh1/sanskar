import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw, Layers, Zap, Target, Cpu, X, Sparkles } from 'lucide-react';
import { GrowthStage } from '../types';
import { api } from '../services/api';

interface GrowthDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution?: (solutionSlug: string) => void;
  onOpenContact?: () => void;
  onStartProjectWithDiagnostic?: (stage: GrowthStage, answers: any) => void;
}

export const GrowthDiagnosticModal: React.FC<GrowthDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onSelectSolution,
  onOpenContact,
  onStartProjectWithDiagnostic
}) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('sme');
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('leads');
  const [currentRevenueStage, setCurrentRevenueStage] = useState<string>('scaling');

  if (!isOpen) return null;

  const calculateRecommendation = () => {
    if (primaryBottleneck === 'leads' || primaryBottleneck === 'visibility') {
      return {
        stage: 'attract' as GrowthStage,
        slug: 'digital-growth',
        title: 'ATTRACT Stage Focus: Demand & Authority Engine',
        summary: 'Your core bottleneck is buyer awareness and high-intent inbound pipeline. You need targeted Search/Meta ad funnels and category authority positioning.',
        solution: 'GENERATE / Digital Growth Engine',
        priorityModules: [
          'High-Intent Google Search & Meta Acquisition',
          'Targeted Lead Gen Landing Pages with A/B Tests',
          'Executive Founder & Media Positioning'
        ]
      };
    } else if (primaryBottleneck === 'conversion' || primaryBottleneck === 'website') {
      return {
        stage: 'convert' as GrowthStage,
        slug: 'technology',
        title: 'CONVERT Stage Focus: High-Velocity Digital Experience',
        summary: 'You are losing high-intent prospects due to weak value proposition clarity, slow website load times, or clunky intake forms.',
        solution: 'LAUNCH / Custom Tech Platform',
        priorityModules: [
          'Sub-second Modern Web Architecture',
          'Multi-step Interactive Intake Qualification Funnels',
          'Sub-2-Minute Automated CRM Dispatch'
        ]
      };
    } else {
      return {
        stage: 'scale' as GrowthStage,
        slug: 'technology',
        title: 'SCALE Stage Focus: Operational Automation & Systems',
        summary: 'Your team is suffocating in manual follow-ups, fragmented spreadsheets, and slow coordination. You need automation and custom portal infrastructure.',
        solution: 'AUTOMATE / Enterprise Architecture',
        priorityModules: [
          'End-to-End CRM & Pipeline Automation',
          'Automated WhatsApp & Email Lead Nurturing',
          'Custom Operational Management Dashboards'
        ]
      };
    }
  };

  const rec = calculateRecommendation();

  const handleGenerateDiagnostic = async () => {
    setStep(3);
    try {
      await api.submitDiagnostic({
        businessType,
        primaryBottleneck,
        currentRevenueStage,
        recommendedStage: rec.stage,
        recommendedTitle: rec.title,
        recommendedSolution: rec.solution
      });
    } catch (e) {
      console.error('Failed to submit diagnostic:', e);
    }
  };

  const handleCompleteAction = () => {
    if (onStartProjectWithDiagnostic) {
      onStartProjectWithDiagnostic(rec.stage, { businessType, primaryBottleneck, currentRevenueStage });
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051336]/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 text-[#092B78] shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] rounded-t-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 mb-6 pt-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 flex items-center justify-center text-[#092B78]">
              <Layers size={20} className="text-[#FF4B16]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#092B78]">
                SGS Growth System Diagnostic
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Identify your primary business growth bottleneck in 60 seconds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step 1: Business Profile */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#FF4B16]" />
                <span className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider">Step 1 of 3</span>
              </div>
              <h4 className="text-xl font-bold text-[#092B78]">What best describes your business?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'real-estate', title: 'Real Estate & Property', desc: 'Developers, brokers, spatial builders' },
                { id: 'interior-design', title: 'Interior & Architecture', desc: 'Design studios, premium spatial firms' },
                { id: 'professional', title: 'Professional Services', desc: 'Advisory, consulting, legal, financial' },
                { id: 'startup', title: 'Startup / Emerging Tech', desc: 'Early stage ventures scaling GTM' },
                { id: 'sme', title: 'SME / Growing Enterprise', desc: 'Established business seeking digital scale' },
                { id: 'other', title: 'Other Commercial Enterprise', desc: 'B2B/B2C businesses' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBusinessType(b.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                    businessType === b.id
                      ? 'bg-[#EEF3FF] border-[#092B78] text-[#092B78] shadow-sm ring-1 ring-[#092B78]/20'
                      : 'bg-[#F8FAFC] border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="text-sm font-bold text-[#092B78]">{b.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{b.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-200/80">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-full bg-[#FF4B16] text-white text-xs font-semibold hover:bg-[#E03E0E] flex items-center gap-2 shadow-md shadow-[#FF4B16]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Continue to Bottleneck Diagnosis</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Primary Bottleneck */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#FF4B16]" />
                <span className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider">Step 2 of 3</span>
              </div>
              <h4 className="text-xl font-bold text-[#092B78]">What is currently holding back your revenue?</h4>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'leads',
                  stage: 'ATTRACT',
                  title: 'Lack of Qualified Inbound Inquiries',
                  desc: 'We rely too heavily on word-of-mouth or get low-budget inquiries instead of high-value buyers.'
                },
                {
                  id: 'website',
                  stage: 'CONVERT',
                  title: 'Website Doesn’t Represent Us or Convert',
                  desc: 'Our current digital presence looks outdated, loads slowly, and fails to convince visitors to take action.'
                },
                {
                  id: 'operations',
                  stage: 'SCALE',
                  title: 'Manual Bottlenecks & Spreadsheet Chaos',
                  desc: 'Leads get lost, sales follow-ups are delayed by days, and operations are bogged down by repetitive work.'
                }
              ].map((bn) => (
                <button
                  key={bn.id}
                  onClick={() => setPrimaryBottleneck(bn.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 ${
                    primaryBottleneck === bn.id
                      ? 'bg-[#EEF3FF] border-[#092B78] text-[#092B78] shadow-sm ring-1 ring-[#092B78]/20'
                      : 'bg-[#F8FAFC] border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#092B78]">{bn.title}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#092B78] text-white">
                      {bn.stage}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600">{bn.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-[#092B78]"
              >
                ← Back
              </button>
              <button
                onClick={handleGenerateDiagnostic}
                className="px-6 py-2.5 rounded-full bg-[#FF4B16] text-white text-xs font-semibold hover:bg-[#E03E0E] flex items-center gap-2 shadow-md shadow-[#FF4B16]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Generate Growth Architecture</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Diagnostic Results */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-[2px] w-4 bg-[#FF4B16]" />
                <span className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider">Diagnosis Complete</span>
              </div>
              <h4 className="text-xl font-bold text-[#092B78]">{rec.title}</h4>
              <p className="text-xs text-slate-600 mt-1">{rec.summary}</p>
            </div>

            {/* Recommended Solution Package */}
            <div className="p-5 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#092B78]">Recommended Growth Solution:</span>
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-[#092B78]">
                  {rec.solution}
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-slate-700 block">Priority Implementation Modules:</span>
                {rec.priorityModules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <CheckCircle2 size={15} className="text-[#FF4B16] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200/80">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-[#092B78] flex items-center gap-1.5"
              >
                <RefreshCw size={13} />
                <span>Retake Diagnostic</span>
              </button>
              
              <button
                onClick={handleCompleteAction}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#FF4B16] text-white text-xs font-semibold hover:bg-[#E03E0E] flex items-center justify-center gap-2 shadow-lg shadow-[#FF4B16]/25 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Discuss This Architecture with SGS</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
