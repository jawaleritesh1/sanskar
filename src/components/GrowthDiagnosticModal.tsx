import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw, Layers, Zap, Target, Cpu, X } from 'lucide-react';
import { GrowthStage } from '../types';

interface GrowthDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProjectWithDiagnostic: (stage: GrowthStage, answers: any) => void;
}

export const GrowthDiagnosticModal: React.FC<GrowthDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onStartProjectWithDiagnostic
}) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('sme');
  const [primaryBottleneck, setPrimaryBottleneck] = useState<string>('convert');
  const [currentRevenueStage, setCurrentRevenueStage] = useState<string>('scaling');

  if (!isOpen) return null;

  const calculateRecommendation = () => {
    if (primaryBottleneck === 'leads' || primaryBottleneck === 'visibility') {
      return {
        stage: 'attract' as GrowthStage,
        title: 'ATTRACT Stage Focus: Demand & Authority Engine',
        summary: 'Your core bottleneck is buyer awareness and high-intent inbound pipeline. You need targeted Search/Meta ad funnels and category authority positioning.',
        solution: 'GENERATE Solution',
        priorityModules: [
          'High-Intent Google Search & Meta Acquisition',
          'Targeted Lead Gen Landing Pages with A/B Tests',
          'Executive Founder & Media Positioning'
        ]
      };
    } else if (primaryBottleneck === 'conversion' || primaryBottleneck === 'website') {
      return {
        stage: 'convert' as GrowthStage,
        title: 'CONVERT Stage Focus: High-Velocity Digital Experience',
        summary: 'You are losing high-intent prospects due to weak value proposition clarity, slow website load times, or clunky intake forms.',
        solution: 'LAUNCH / CONVERT Overhaul',
        priorityModules: [
          'Sub-second Modern Web Architecture',
          'Multi-step Interactive Intake Qualification Funnels',
          'Sub-2-Minute Automated CRM Dispatch'
        ]
      };
    } else {
      return {
        stage: 'scale' as GrowthStage,
        title: 'SCALE Stage Focus: Operational Automation & Systems',
        summary: 'Your team is suffocating in manual follow-ups, fragmented spreadsheets, and slow coordination. You need automation and custom portal infrastructure.',
        solution: 'AUTOMATE / TRANSFORM Solution',
        priorityModules: [
          'End-to-End CRM & Pipeline Automation',
          'Automated WhatsApp & Email Lead Nurturing',
          'Custom Operational Management Dashboards'
        ]
      };
    }
  };

  const rec = calculateRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                SGS Growth System Diagnostic
              </h3>
              <p className="text-xs text-slate-400">
                Identify your primary business growth bottleneck in 60 seconds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Business Profile */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">Step 1 of 3</span>
              <h4 className="text-xl font-bold text-white mt-1">What best describes your business?</h4>
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
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    businessType === b.id
                      ? 'bg-slate-800/90 border-orange-500/80 text-white shadow-sm ring-1 ring-orange-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="text-sm font-semibold text-white">{b.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{b.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-lg bg-[#F97316] text-white text-xs font-semibold hover:bg-orange-600 flex items-center gap-1.5"
              >
                <span>Continue to Bottleneck Diagnosis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Primary Bottleneck */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">Step 2 of 3</span>
              <h4 className="text-xl font-bold text-white mt-1">What is currently holding back your revenue?</h4>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'leads',
                  stage: 'ATTRACT',
                  title: 'Lack of Qualified Inbound Inquiries',
                  desc: 'We rely too heavily on word-of-mouth or get low-budget tire-kickers instead of high-value buyers.'
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
                  className={`w-full p-4 rounded-xl text-left border transition-all ${
                    primaryBottleneck === bn.id
                      ? 'bg-slate-800/90 border-orange-500/80 text-white shadow-sm ring-1 ring-orange-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-white">{bn.title}</span>
                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-orange-400">
                      {bn.stage}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">{bn.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-lg bg-[#F97316] text-white text-xs font-semibold hover:bg-orange-600 flex items-center gap-1.5"
              >
                <span>Generate Growth Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Diagnostic Results & Recommended Operating Architecture */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Diagnosis Complete</span>
              <h4 className="text-xl font-bold text-white mt-1">{rec.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{rec.summary}</p>
            </div>

            {/* Recommended Solution Package */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-slate-400">Recommended Growth Solution:</span>
                <span className="text-xs font-bold text-orange-400 px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  {rec.solution}
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-xs text-slate-400 block">Priority Implementation Modules:</span>
                {rec.priorityModules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Retake Diagnostic
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  onStartProjectWithDiagnostic(rec.stage, { businessType, primaryBottleneck, currentRevenueStage });
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#F97316] text-white text-xs font-semibold hover:bg-orange-600 flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20"
              >
                <span>Discuss This Growth Architecture with SGS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
