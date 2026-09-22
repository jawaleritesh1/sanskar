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
    <div className="w-full bg-transparent text-white pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#AFEB00] selection:text-[#141414] overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/25 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/20 blur-[140px]"
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
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
              About Sanskar Growth Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Building Better Businesses Through{" "}
            <span className="relative inline-block text-[#AFEB00]">
              Technology &amp; Innovation
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Sanskar Growth Solutions (SGS) was founded on a simple conviction: modern businesses do not need another list of isolated marketing or IT services—they need one cohesive operating layer that helps them attract, convert, and scale.
          </p>
        </motion.div>

        {/* Who We Are & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#AFEB00]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#AFEB00] font-heading">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
              A Business Growth &amp; Digital Transformation Partner.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We are not a conventional digital marketing agency selling vanity likes, nor are we a distant software outsourcing vendor writing code in isolation.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              SGS acts as an embedded growth partner for founders, SME owners, and enterprise leaders. We align market research, brand positioning, high-intent advertising, custom web architecture, and CRM automation toward commercial outcomes.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#AFEB00]">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Our Mission</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To build resilient, high-velocity digital operating systems that empower ambitious businesses to attract high-value clients, streamline conversions, and scale sustainably.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF]" />
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#AFEB00]">
                  <Compass size={20} />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be the most trusted business growth and digital transformation partner for enterprises across India and global markets, recognized for commercial craftsmanship and engineering rigor.
              </p>
            </div>
          </div>
        </div>

        {/* Core Operating Principles */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-4 bg-[#AFEB00]" />
              <span className="text-xs uppercase font-bold text-[#AFEB00] font-heading tracking-wider">
                OUR BELIEFS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              The Principles That Guide Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold font-heading text-[#AFEB00] uppercase mb-4 px-3 py-1 rounded-full bg-[#070D2B] border border-white/10 w-fit">
                01 • Commercial First
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">Business-First Thinking</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Technology and design must serve commercial goals. We never build software or launch campaigns without establishing clear financial and operational KPIs.
              </p>
            </div>

            <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold font-heading text-[#AFEB00] uppercase mb-4 px-3 py-1 rounded-full bg-[#070D2B] border border-white/10 w-fit">
                02 • Zero Vanity
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">No Artificial Metrics</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We reject fabricated numbers and vanity impressions. We report on genuine pipeline value, qualified sales conversations, and tangible operational efficiencies.
              </p>
            </div>

            <div className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/85 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 transition-all duration-300 group hover:-translate-y-1 text-white">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-xs font-bold font-heading text-[#AFEB00] uppercase mb-4 px-3 py-1 rounded-full bg-[#070D2B] border border-white/10 w-fit">
                03 • Unified Stack
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">One Operating Layer</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Marketing, technology, and branding must communicate seamlessly. We eliminate the friction of managing fragmented vendors by executing the complete stack.
              </p>
            </div>

          </div>
        </div>

        {/* 6-Step Approach */}
        <ApproachTimeline />

        {/* Bottom CTA */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0B1446] to-[#070D2B] p-8 sm:p-12 border border-white/15 text-center max-w-4xl mx-auto space-y-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2033FF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#AFEB00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#AFEB00] border border-white/10 backdrop-blur-sm font-heading">
              <Rocket size={13} />
              <span>Partner for Growth</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Let's build what's next for your business.
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Whether you are launching a new venture, scaling qualified lead acquisition, or modernizing enterprise operations, SGS is ready to partner with you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenProjectModal}
                className="flex items-center gap-2 rounded-full bg-[#AFEB00] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onOpenDiagnostic}
                className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-white hover:bg-white/15 transition-all backdrop-blur-md hover:-translate-y-0.5"
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
