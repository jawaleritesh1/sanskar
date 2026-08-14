import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Target, Compass, Layers, Users, Zap, Code2, TrendingUp, Sparkles, Newspaper } from 'lucide-react';
import { ApproachTimeline } from '../components/ApproachTimeline';

interface AboutViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#F97316]" />
            ABOUT SANSKAR GROWTH SOLUTIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Building better businesses through technology, marketing and innovation.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
            Sanskar Growth Solutions (SGS) was founded on a simple conviction: modern businesses do not need another list of isolated marketing or IT services—they need one cohesive operating layer that helps them attract, convert, and scale.
          </p>
        </div>

        {/* Who We Are & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-slate-800">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono font-bold text-orange-400 tracking-wider">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A Business Growth & Digital Transformation Partner.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We are not a conventional digital marketing agency selling vanity likes, nor are we a distant software outsourcing vendor writing code in isolation.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              SGS acts as an embedded growth partner for founders, SME owners, and enterprise leaders. We align market research, brand positioning, high-intent advertising, custom web architecture, and CRM automation toward commercial outcomes.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-[#F97316]" />
                <h3 className="text-lg font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To build resilient, high-velocity digital operating systems that empower ambitious businesses to attract high-value clients, streamline conversions, and scale sustainably.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-[#3B82F6]" />
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be the most trusted business growth and digital transformation partner for enterprises across India and global markets, recognized for commercial craftsmanship and engineering rigor.
              </p>
            </div>
          </div>
        </div>

        {/* What We Believe (Core Operating Principles) */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono font-bold text-orange-400 tracking-wider">
              OUR BELIEFS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              The Principles That Guide Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">01 • Commercial First</div>
              <h3 className="text-xl font-bold text-white mb-2">Business-First Thinking</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Technology and design must serve commercial goals. We never build software or launch campaigns without establishing clear financial and operational KPIs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">02 • Zero Vanity</div>
              <h3 className="text-xl font-bold text-white mb-2">No Artificial Metrics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We reject fabricated numbers and vanity impressions. We report on genuine pipeline value, qualified sales conversations, and tangible operational efficiencies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">03 • Unified Stack</div>
              <h3 className="text-xl font-bold text-white mb-2">One Operating Layer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Marketing, technology, and branding must communicate seamlessly. We eliminate the friction of managing fragmented vendors by executing the complete stack.
              </p>
            </div>

          </div>
        </div>

        {/* 6-Step Approach */}
        <ApproachTimeline />

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Let's build what's next for your business.
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Whether you are launching a new venture, scaling qualified lead acquisition, or modernizing enterprise operations, SGS is ready to partner with you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProjectModal}
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
            >
              Start a Conversation →
            </button>
            <button
              onClick={onOpenDiagnostic}
              className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-all"
            >
              Evaluate Growth Readiness
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
