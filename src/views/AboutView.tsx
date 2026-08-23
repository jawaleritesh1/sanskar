import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Shield,
  Target,
  Compass,
  Layers,
  Users,
  Zap,
  Code2,
  TrendingUp,
  Sparkles,
  Newspaper,
  Rocket
} from 'lucide-react';
import { ApproachTimeline } from '../components/ApproachTimeline';

interface AboutViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  return (
    <div className="w-full bg-transparent text-[#092B78] pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#FF4B16] selection:text-white overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6)_0%,rgba(247,249,255,0.25)_45%,rgba(234,240,255,0.5)_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8D8FF] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#FF4B16] blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#FF4B16]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
              About Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Building Better Businesses Through{" "}
            <span className="relative inline-block text-[#FF4B16]">
              Technology & Innovation
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Sanskar Growth Solutions (SGS) was founded on a simple conviction: modern businesses do not need another list of isolated marketing or IT services—they need one cohesive operating layer that helps them attract, convert, and scale.
          </p>
        </motion.div>

        {/* Who We Are & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-slate-200/80">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#FF4B16]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF4B16]">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#092B78] tracking-tight leading-tight">
              A Business Growth & Digital Transformation Partner.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We are not a conventional digital marketing agency selling vanity likes, nor are we a distant software outsourcing vendor writing code in isolation.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              SGS acts as an embedded growth partner for founders, SME owners, and enterprise leaders. We align market research, brand positioning, high-intent advertising, custom web architecture, and CRM automation toward commercial outcomes.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF4B16] to-[#FFA07A]" />
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF8F6] border border-[#FF4B16]/20 flex items-center justify-center text-[#FF4B16]">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#092B78]">Our Mission</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To build resilient, high-velocity digital operating systems that empower ambitious businesses to attract high-value clients, streamline conversions, and scale sustainably.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] to-[#2563EB]" />
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/20 flex items-center justify-center text-[#092B78]">
                  <Compass size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#092B78]">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the most trusted business growth and digital transformation partner for enterprises across India and global markets, recognized for commercial craftsmanship and engineering rigor.
              </p>
            </div>
          </div>
        </div>

        {/* Core Operating Principles */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-4 bg-[#FF4B16]" />
              <span className="text-xs uppercase font-bold text-[#FF4B16] tracking-wider">
                OUR BELIEFS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#092B78] tracking-tight">
              The Principles That Guide Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold text-[#092B78] uppercase mb-4 px-3 py-1 rounded-full bg-[#EEF3FF] border border-[#092B78]/10 w-fit">
                01 • Commercial First
              </div>
              <h3 className="text-xl font-bold text-[#092B78] mb-2">Business-First Thinking</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Technology and design must serve commercial goals. We never build software or launch campaigns without establishing clear financial and operational KPIs.
              </p>
            </div>

            <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold text-[#FF4B16] uppercase mb-4 px-3 py-1 rounded-full bg-[#FFF8F6] border border-[#FF4B16]/20 w-fit">
                02 • Zero Vanity
              </div>
              <h3 className="text-xl font-bold text-[#092B78] mb-2">No Artificial Metrics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We reject fabricated numbers and vanity impressions. We report on genuine pipeline value, qualified sales conversations, and tangible operational efficiencies.
              </p>
            </div>

            <div className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:border-[#092B78]/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold text-[#092B78] uppercase mb-4 px-3 py-1 rounded-full bg-[#EEF3FF] border border-[#092B78]/10 w-fit">
                03 • Unified Stack
              </div>
              <h3 className="text-xl font-bold text-[#092B78] mb-2">One Operating Layer</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Marketing, technology, and branding must communicate seamlessly. We eliminate the friction of managing fragmented vendors by executing the complete stack.
              </p>
            </div>

          </div>
        </div>

        {/* 6-Step Approach */}
        <ApproachTimeline />

        {/* Bottom CTA */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-[#051336] p-8 sm:p-12 border border-slate-800/80 text-center max-w-4xl mx-auto space-y-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4B16]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#092B78]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4B16] border border-white/10 backdrop-blur-sm">
              <Rocket size={13} />
              <span>Partner for Growth</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Let's build what's next for your business.
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Whether you are launching a new venture, scaling qualified lead acquisition, or modernizing enterprise operations, SGS is ready to partner with you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenProjectModal}
                className="flex items-center gap-2 rounded-full bg-[#FF4B16] px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onOpenDiagnostic}
                className="px-7 py-3.5 rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-md hover:-translate-y-0.5"
              >
                Evaluate Growth Readiness
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
