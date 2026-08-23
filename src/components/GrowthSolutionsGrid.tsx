import React, { useState } from 'react';
import { ArrowRight, Check, Rocket, Zap, Cpu, Sparkles, Clock, Target } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { GrowthSolution } from '../types';

interface GrowthSolutionsGridProps {
  onSelectSolution?: (solution: GrowthSolution) => void;
  onStartProjectForSolution?: (solution: GrowthSolution) => void;
}

export const GrowthSolutionsGrid: React.FC<GrowthSolutionsGridProps> = ({
  onSelectSolution,
  onStartProjectForSolution
}) => {
  const [selectedSolutionModal, setSelectedSolutionModal] = useState<GrowthSolution | null>(null);

  const getSolutionIcon = (slug: string) => {
    switch (slug) {
      case 'launch': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'generate': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'automate': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'transform': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Target className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="growth-solutions" className="py-24 bg-[#0A0C13] border-t border-b border-white/[0.06] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            Outcome-Oriented Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Growth Solutions Built Around Business Outcomes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Business leaders think about commercial objectives, not isolated agency tactics. We package strategy, engineering, and marketing into four focused growth solutions.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((sol) => (
            <div
              key={sol.slug}
              id={`solution-card-${sol.slug}`}
              className="rounded-3xl bg-[#0F121C]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:bg-[#141828]/95 hover:border-amber-500/40 transition-all duration-300 group relative shadow-2xl hover:-translate-y-1"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSolutionIcon(sol.slug)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 font-heading">
                  {sol.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-medium line-clamp-2 mb-4 leading-relaxed">
                  {sol.tagline}
                </p>

                {/* Target Audience */}
                <div className="mb-4 pb-4 border-b border-white/[0.06] text-xs">
                  <span className="text-slate-500 font-mono text-[10px] uppercase block mb-1">Target Profile:</span>
                  <span className="text-slate-200">{sol.targetAudience}</span>
                </div>

                {/* Included Core Modules */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider block">
                    What We Deploy:
                  </span>
                  {sol.includedModules.slice(0, 4).map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  id={`btn-solution-details-${sol.slug}`}
                  onClick={() => {
                    setSelectedSolutionModal(sol);
                    onSelectSolution?.(sol);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-black text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn border border-white/5 hover:border-amber-500/40"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-black group-hover/btn:translate-x-0.5 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Solution Detail Modal */}
      {selectedSolutionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-[#0F121C] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-xs font-mono font-bold text-amber-400 border border-amber-500/20 mb-2">
                  {selectedSolutionModal.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {selectedSolutionModal.title} Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {selectedSolutionModal.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedSolutionModal(null)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                aria-label="Close solution modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm">
              
              {/* Problem Solved */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono font-bold text-amber-400 block mb-1">
                  Core Bottleneck Solved:
                </span>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {selectedSolutionModal.coreProblem}
                </p>
              </div>

              {/* Modules & Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider">
                    Included Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedSolutionModal.includedModules.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider">
                    Concrete Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedSolutionModal.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expected Outcomes */}
              <div>
                <h4 className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider mb-2">
                  Target Commercial Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedSolutionModal.businessOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/[0.06] text-xs text-slate-200">
                      • {outcome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeframe */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 font-mono">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Typical Deployment Cadence: <strong className="text-white">{selectedSolutionModal.timeframe}</strong></span>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSolutionModal(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sol = selectedSolutionModal;
                  setSelectedSolutionModal(null);
                  onStartProjectForSolution?.(sol);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <span>Inquire About {selectedSolutionModal.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
