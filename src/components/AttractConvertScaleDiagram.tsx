import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, RefreshCw, Cpu, Layers, CheckCircle2 } from 'lucide-react';
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
      tagline: 'Build market authority and predictable inbound demand.',
      description: 'Without high-intent attention, even the best digital products sit unnoticed. We engineer precision demand engines that capture qualified commercial buyers.',
      capabilities: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing & Distribution',
        'High-Intent Google Search Ads',
        'Targeted Meta Paid Campaigns',
        'Strategic Brand & Visual Positioning',
        'B2B & B2C Inbound Lead Engines'
      ],
      outcome: 'Predictable qualified inbound pipeline and high-reputation market visibility.',
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    convert: {
      number: '02',
      title: 'CONVERT',
      category: 'Digital Experience + UI/UX',
      tagline: 'Turn attention and clicks into qualified sales pipeline.',
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
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    scale: {
      number: '03',
      title: 'SCALE',
      category: 'Technology + Automation',
      tagline: 'Build resilient operational systems for compound growth.',
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
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    }
  };

  const current = stagesInfo[activeStage];

  return (
    <section id="growth-framework" className="relative py-24 bg-[#08090D] text-white overflow-hidden border-t border-white/[0.06]">
      
      {/* Background Decorative Strativ Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-[130px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            The Signature SGS Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            ATTRACT → CONVERT → SCALE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            Your business doesn't need more disconnected services. We combine marketing, technology, branding, and automation into one synchronized operating layer.
          </p>
        </motion.div>

        {/* Strativ 3-Stage Bento Cards with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Stage 1: Attract */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onClick={() => {
              setActiveStage('attract');
              onSelectStage?.('attract');
            }}
            className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border relative ${
              activeStage === 'attract'
                ? 'bg-[#121626]/90 border-amber-500/80 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/30 -translate-y-1'
                : 'bg-[#0F121C]/70 border-white/[0.08] hover:bg-[#141828]/80 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase">
                Stage 01
              </span>
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeStage === 'attract' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-amber-400'}`}>
                <Target className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 font-heading">ATTRACT</h3>
            <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wide mb-3">
              Marketing + Brand
            </p>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
              Build visibility, market authority, and qualified demand.
            </p>
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>View Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'attract' ? 'translate-x-1' : ''}`} />
            </div>
          </motion.div>

          {/* Stage 2: Convert */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
            onClick={() => {
              setActiveStage('convert');
              onSelectStage?.('convert');
            }}
            className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border relative ${
              activeStage === 'convert'
                ? 'bg-[#121626]/90 border-amber-500/80 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/30 -translate-y-1'
                : 'bg-[#0F121C]/70 border-white/[0.08] hover:bg-[#141828]/80 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase">
                Stage 02
              </span>
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeStage === 'convert' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-amber-400'}`}>
                <Zap className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 font-heading">CONVERT</h3>
            <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wide mb-3">
              Digital Experience
            </p>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
              Turn high-intent attention and traffic into sales opportunities.
            </p>
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>View Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'convert' ? 'translate-x-1' : ''}`} />
            </div>
          </motion.div>

          {/* Stage 3: Scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => {
              setActiveStage('scale');
              onSelectStage?.('scale');
            }}
            className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border relative ${
              activeStage === 'scale'
                ? 'bg-[#121626]/90 border-amber-500/80 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/30 -translate-y-1'
                : 'bg-[#0F121C]/70 border-white/[0.08] hover:bg-[#141828]/80 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase">
                Stage 03
              </span>
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeStage === 'scale' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-amber-400'}`}>
                <Cpu className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 font-heading">SCALE</h3>
            <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wide mb-3">
              Technology + Automation
            </p>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
              Build resilient systems for sustainable, automated operations.
            </p>
            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>View Capabilities</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeStage === 'scale' ? 'translate-x-1' : ''}`} />
            </div>
          </motion.div>

        </div>

        {/* Selected Stage Deep-Dive Card (Strativ Bento Box with Spring Transition) */}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F121C]/90 border border-white/[0.08] rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Stage Overview & Strategy */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {current.number} • {current.category}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
                {current.tagline}
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider mb-2">
                  Primary Commercial Outcome
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{current.outcome}</span>
                </div>
              </div>
            </div>

            {/* Right: Concrete Capabilities Delivered */}
            <div className="lg:col-span-7 bg-black/30 rounded-2xl p-6 sm:p-7 border border-white/[0.06]">
              <div className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Integrated Capabilities</span>
                <span className="text-[10px] font-normal text-amber-400">Execution Layer</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-200 flex items-center gap-2.5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {onExploreCapabilities && (
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-end">
                  <button
                    onClick={onExploreCapabilities}
                    className="text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
                  >
                    <span>View All 5 Solution Groups</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
