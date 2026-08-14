import React, { useState } from 'react';
import { ArrowRight, Zap, Target, RefreshCw, Cpu, Layers } from 'lucide-react';
import { GrowthStage } from '../types';

interface AttractConvertScaleDiagramProps {
  onSelectStage?: (stage: GrowthStage) => void;
  onExploreCapabilities?: () => void;
}

export const AttractConvertScaleDiagram: React.FC<AttractConvertScaleDiagramProps> = ({
  onSelectStage,
  onExploreCapabilities
}) => {
  const [activeStage, setActiveStage] = useState<GrowthStage>('convert');

  const stagesInfo = {
    attract: {
      number: '01',
      title: 'ATTRACT',
      category: 'Marketing + Brand',
      tagline: 'Build visibility and qualified demand.',
      description: 'Without high-intent attention, the best digital products sit unnoticed. We engineer demand generation engines that capture active buyers and build category authority.',
      capabilities: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing & Distribution',
        'High-Intent Google Search Ads',
        'Targeted Meta Paid Campaigns',
        'Strategic Brand & Visual Positioning',
        'B2B & B2C Lead Generation Engines'
      ],
      outcome: 'Predictable qualified inbound pipeline and high-reputation market visibility.',
      color: '#3B82F6',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    convert: {
      number: '02',
      title: 'CONVERT',
      category: 'Digital Experience + UI/UX',
      tagline: 'Turn attention into measurable business.',
      description: 'Traffic without conversion is just vanity spend. We build ultra-fast, high-converting web platforms, frictionless intake funnels, and sub-minute CRM lead dispatch.',
      capabilities: [
        'Modern High-Converting Web Platforms',
        'Dedicated Campaign Landing Experiences',
        'UI/UX Design Systems & Spatial Walkthroughs',
        'Multi-Step Lead Qualification Funnels',
        'Conversion Rate Optimization (CRO)',
        'Instant Two-Way CRM Lead Sync'
      ],
      outcome: 'Higher inquiry-to-client conversion velocity and zero lost leads.',
      color: '#F97316',
      badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    },
    scale: {
      number: '03',
      title: 'SCALE',
      category: 'Technology + Automation',
      tagline: 'Build systems for sustainable growth.',
      description: 'Growth breaks manual workflows. We build custom software architectures, CRM/ERP backends, and AI automations that enable 10x operations without proportional headcount.',
      capabilities: [
        'Custom Business Software & Portals',
        'Enterprise CRM & ERP Architectures',
        'AI-Powered Workflow Automations',
        'Automated Customer Nurturing & WhatsApp Bots',
        'Scalable E-Commerce Architectures',
        'Executive Real-Time Performance Analytics'
      ],
      outcome: 'Operational leverage, reduced overhead, and scalable unit economics.',
      color: '#10B981',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    }
  };

  const current = stagesInfo[activeStage];

  return (
    <section id="growth-framework" className="relative py-24 bg-[#0B0F19] text-white overflow-hidden">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-900/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#F97316]" />
            The Signature SGS Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            ATTRACT → CONVERT → SCALE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Your business doesn't need more disconnected services. We combine marketing, technology, branding, and automation into one synchronized operating layer.
          </p>
        </div>

        {/* Interactive Operating Layer Flow (Connected Timeline/Diagram) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Stage 1: Attract */}
          <div
            onClick={() => {
              setActiveStage('attract');
              onSelectStage?.('attract');
            }}
            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border relative ${
              activeStage === 'attract'
                ? 'bg-slate-900/90 border-blue-500/80 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-blue-400 tracking-widest uppercase">
                Stage 01
              </span>
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Target className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">ATTRACT</h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
              Marketing + Brand
            </p>
            <p className="text-sm text-slate-300 line-clamp-2">
              Build visibility, market authority, and qualified demand.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-400">
              <span>Explore Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'attract' ? 'translate-x-1' : ''}`} />
            </div>
          </div>

          {/* Stage 2: Convert */}
          <div
            onClick={() => {
              setActiveStage('convert');
              onSelectStage?.('convert');
            }}
            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border relative ${
              activeStage === 'convert'
                ? 'bg-slate-900/90 border-orange-500/80 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30'
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-orange-400 tracking-widest uppercase">
                Stage 02
              </span>
              <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Zap className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">CONVERT</h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
              Digital Experience
            </p>
            <p className="text-sm text-slate-300 line-clamp-2">
              Turn high-intent attention and traffic into sales opportunities.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-orange-400">
              <span>Explore Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'convert' ? 'translate-x-1' : ''}`} />
            </div>
          </div>

          {/* Stage 3: Scale */}
          <div
            onClick={() => {
              setActiveStage('scale');
              onSelectStage?.('scale');
            }}
            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border relative ${
              activeStage === 'scale'
                ? 'bg-slate-900/90 border-emerald-500/80 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">
                Stage 03
              </span>
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">SCALE</h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
              Technology + Automation
            </p>
            <p className="text-sm text-slate-300 line-clamp-2">
              Build resilient systems for sustainable, automated operations.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Explore Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'scale' ? 'translate-x-1' : ''}`} />
            </div>
          </div>

        </div>

        {/* Selected Stage Deep-Dive Card (Editorial Layout) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Stage Overview & Strategy */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${current.badgeBg}`}>
                {current.number} • {current.category}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {current.tagline}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Primary Commercial Outcome
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-200 flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>{current.outcome}</span>
                </div>
              </div>
            </div>

            {/* Right: Concrete Capabilities Delivered */}
            <div className="lg:col-span-7 bg-slate-950/50 rounded-xl p-6 border border-slate-800/80">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Integrated System Capabilities</span>
                <span className="text-[11px] font-normal text-slate-500">Execution Layer</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-center gap-2.5 hover:border-slate-700 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0"></span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {onExploreCapabilities && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-end">
                  <button
                    onClick={onExploreCapabilities}
                    className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View All 5 Solution Groups</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
