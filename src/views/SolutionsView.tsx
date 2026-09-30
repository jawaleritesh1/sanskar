import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  TrendingUp,
  Code2,
  Newspaper,
  Compass,
  Rocket,
  Zap
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { solutionsData } from '../data/solutionsData';

interface SolutionsViewProps {
  initialServiceSlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
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

const capabilityPhotos: Record<string, string> = {
  'digital-growth': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'technology': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  'brand-creative': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'business-media': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
  'business-consulting': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
};

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  initialServiceSlug,
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(
    initialServiceSlug || 'digital-growth'
  );
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const currentService = servicesData.find(s => s.slug === selectedServiceSlug) || servicesData[0];
  const activePhoto = capabilityPhotos[currentService.slug] || capabilityPhotos['digital-growth'];

  return (
    <div className="w-full bg-[#080E32] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. SOLUTIONS HERO (CINEMATIC DARK SKYLINE SPLIT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#080E32] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/15 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#AFEB00]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-mono">
                  Engineered Growth Capabilities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Integrated Digital Systems <br />
                To{" "}
                <span className="font-heading font-bold text-[#AFEB00]">
                  Attract, Convert &amp; Scale
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                We reject disconnected agency silos. We architect synchronized growth operations combining high-yield acquisition, sub-second web platforms, category brand authority, and automated CRM pipelines into one sovereign layer.
              </p>

              <div className="font-heading text-base sm:text-lg text-slate-200 font-semibold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Five synchronized capabilities. One accountable partner.</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenProjectModal(selectedServiceSlug)}
                  className="px-8 py-3.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#AFEB00]/25 transition-all hover:-translate-y-0.5"
                >
                  <span>Deploy {currentService.title}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={onOpenDiagnostic}
                  className="px-6 py-3 rounded-xl bg-[#0A1245] hover:bg-[#0F1B64] text-white border border-white/20 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all"
                >
                  Launch 60s Diagnostic
                </button>
              </div>
            </motion.div>

            {/* Right Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Strategic Operations Architecture"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-transparent to-black/30" />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0A1245] border border-white/15 p-4 rounded-xl shadow-2xl backdrop-blur-xl max-w-[220px] space-y-1.5 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <Zap size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Unified Stack</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  Demand gen, custom code, and CRM automation fully integrated.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>Pune • Global Reach</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">5 Capabilities</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">One Integrated Engine</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">&lt; 1s Speed</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Custom Platform SLA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">100% Attribution</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">End-to-End Tracking</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">24h Dispatch</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Partner Discovery SLA</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. PHOTOGRAPHIC 5 CAPABILITY SELECTOR (WARM IVORY / WHITE SECTION BACKGROUND)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-1.5">
                SELECT A CAPABILITY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-tight">
                Architectural Breakdown by Domain
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Click any capability below to view execution deliverables, sprint methodologies, and guaranteed commercial outcomes.
            </p>
          </div>

          {/* 5 Photographic Vertical Cards against Light Canvas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicesData.map((s, idx) => {
              const isSelected = selectedServiceSlug === s.slug;
              const photo = capabilityPhotos[s.slug] || capabilityPhotos['digital-growth'];
              return (
                <div
                  key={s.slug}
                  onClick={() => {
                    setSelectedServiceSlug(s.slug);
                    setOpenFaqIdx(0);
                  }}
                  className={`group relative h-[320px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 ${isSelected
                      ? 'border-[#2033FF] ring-2 ring-[#2033FF]/30 shadow-2xl -translate-y-1.5'
                      : 'border-slate-300/80 bg-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1'
                    }`}
                >
                  <img
                    src={photo}
                    alt={s.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isSelected ? 'opacity-85' : 'opacity-75 group-hover:opacity-90'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#AFEB00]">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-md border ${isSelected ? 'bg-[#AFEB00] text-[#0F1B64] border-[#AFEB00]' : 'bg-black/60 text-slate-200 border-white/20'
                      }`}>
                      {s.stage}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 space-y-1.5 text-white">
                    <h3 className={`text-base sm:text-lg font-heading font-bold leading-snug transition-colors ${isSelected ? 'text-[#AFEB00]' : 'text-white group-hover:text-[#AFEB00]'
                      }`}>
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-sans">
                      {s.tagline}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/15">
                      <span className="text-[10px] font-mono text-slate-300">
                        {isSelected ? '● Active View' : 'Explore →'}
                      </span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${isSelected ? 'bg-[#AFEB00] text-[#0F1B64]' : 'bg-white/10 text-white group-hover:bg-[#AFEB00] group-hover:text-[#0F1B64]'
                        }`}>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. DETAILED CAPABILITY SHOWCASE (CRISP WHITE EDITORIAL SPREAD)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white text-[#1A1A1A] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-[#F5FAFF] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">

            {/* Top Bar Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F1B64] text-[#AFEB00] flex items-center justify-center font-mono font-bold text-sm">
                  {currentService.stage.slice(0, 3)}
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                    Operating Capability Details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#141414]">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenProjectModal(selectedServiceSlug)}
                  className="px-6 py-2.5 rounded-xl bg-[#0F1B64] hover:bg-[#0A1245] text-[#AFEB00] text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <span>Inquire for {currentService.title}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Content Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">

              {/* Left Column: Scope & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#2033FF] mb-2">
                    Scope of Delivery
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {currentService.description}
                  </p>
                </div>

                {/* Core Deliverables Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#141414]">
                    Core Deliverables Included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 size={16} className="text-[#2033FF] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Business Outcome */}
                {currentService.businessOutcome && (
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2033FF]">
                      Guaranteed Commercial Impact:
                    </div>
                    <div className="text-xs sm:text-sm text-[#141414] font-semibold leading-relaxed">
                      {currentService.businessOutcome}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Execution Stages & FAQs */}
              <div className="lg:col-span-5 space-y-6">

                {/* 4-Step Process Timeline */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#141414]">
                    Execution Roadmap
                  </div>
                  <div className="space-y-3">
                    {(currentService.process || []).map((step, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-[#0F1B64] text-[#AFEB00] text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {step.step || pIdx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-heading font-bold text-[#141414]">{step.title}</div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5 font-sans">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs Accordion */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#141414]">
                    Frequently Answered Questions
                  </div>
                  {(currentService.faqs || []).map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                        className="w-full p-3 text-left flex items-center justify-between text-xs font-heading font-bold text-[#141414] hover:text-[#2033FF] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={14} className={`shrink-0 transition-transform ${openFaqIdx === fIdx ? 'rotate-180 text-[#2033FF]' : ''}`} />
                      </button>
                      {openFaqIdx === fIdx && (
                        <div className="px-3 pb-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 font-sans">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          04. PACKAGED GROWTH ARCHITECTURES (WARM IVORY SECTION)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2033FF] font-mono mb-1.5">
                OUTCOME-ORIENTED PACKAGES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-[1.1]">
                Need a Packaged Solution<br />
                Tailored to Your Stage?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Choose an outcome-oriented system package to solve a specific commercial bottleneck with defined milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutionsData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2033FF]">
                      {pkg.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#0F1B64] text-[#AFEB00]">
                      {pkg.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#141414] group-hover:text-[#2033FF] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {pkg.coreProblem}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Includes:
                    </span>
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check size={14} className="text-[#2033FF] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenProjectModal(pkg.id)}
                    className="w-full py-2.5 rounded-xl bg-[#0F1B64] text-white hover:bg-[#0A1245] text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Inquire for {pkg.title}</span>
                    <ArrowRight size={13} className="text-[#AFEB00]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          05. CINEMATIC SUMMIT BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 bg-[#080E32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Mountain Summit Sunset"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-[#080E32]/70 to-[#080E32]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Direct Partner Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Ready to Architect Your Enterprise Growth Engine?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's evaluate your commercial bottlenecks and engineer a sovereign system built for lasting scale.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenProjectModal(selectedServiceSlug)}
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-[#0A1245]/80 hover:bg-[#0F1B64] text-white border border-white/20 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all"
            >
              <span>Take Growth Diagnostic</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
