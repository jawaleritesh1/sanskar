import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Code2, Sparkles, Newspaper, Compass, Building2, Home, Briefcase, Rocket, Factory, Shield, BarChart3, Clock, Users, ArrowUpRight, Zap, Target, Layers, Cpu } from 'lucide-react';
import { AttractConvertScaleDiagram } from '../components/AttractConvertScaleDiagram';
import { GrowthSolutionsGrid } from '../components/GrowthSolutionsGrid';
import { ApproachTimeline } from '../components/ApproachTimeline';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { insightsData } from '../data/insightsData';
import { CaseStudy, InsightArticle, GrowthSolution } from '../types';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (initialService?: string) => void;
  onOpenDiagnostic: () => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onSelectArticle?: (article: InsightArticle) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic,
  onSelectCaseStudy,
  onSelectArticle
}) => {
  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9]">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION */}
      {/* ========================================================================= */}
      <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-900/15 via-slate-900/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-orange-950/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-900/40 rounded-full blur-2xl"></div>
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-widest shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
                <span>BUSINESS GROWTH × TECHNOLOGY × MARKETING</span>
              </div>

              {/* Primary Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
                  GROW YOUR BRAND. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                    SCALE YOUR BUSINESS.
                  </span>
                </h1>
              </div>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                We combine strategy, marketing, technology, and automation to build digital growth systems for startups, SMEs, and ambitious businesses.
              </p>

              {/* Core Proposition Pill */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="w-6 h-6 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316] shrink-0 mt-0.5 font-bold">
                  ⚡
                </div>
                <span>
                  <strong>The Operating Layer:</strong> Turn attention into qualified pipeline, streamline sales velocity, and automate operations with zero vendor bloat.
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={() => onOpenProjectModal()}
                  className="px-7 py-4 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-sm sm:text-base font-semibold shadow-xl shadow-orange-500/20 flex items-center gap-2.5 transition-all active:scale-[0.98] group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('/solutions')}
                  className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-sm sm:text-base font-semibold transition-all"
                >
                  Explore Solutions
                </button>

                <button
                  id="hero-diagnostic-link"
                  onClick={onOpenDiagnostic}
                  className="w-full sm:w-auto text-xs font-semibold text-slate-400 hover:text-orange-400 py-2 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Take 60-Sec Growth Diagnostic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column: Signature SGS Growth System Visualization */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Central System Architecture Card */}
                <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0F172A] border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                      SGS Growth Architecture
                    </span>
                  </div>

                  {/* Core 3 Pillars Connected */}
                  <div className="space-y-4">
                    
                    {/* Node 1: ATTRACT */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-blue-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                          <Target className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-blue-400 uppercase">Stage 01</div>
                          <div className="text-sm font-bold text-white">ATTRACT</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">Marketing + Brand</span>
                    </div>

                    {/* Connecting Connector Line */}
                    <div className="flex justify-center -my-2 relative z-10">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                    </div>

                    {/* Node 2: CONVERT */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-orange-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316]">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-orange-400 uppercase">Stage 02</div>
                          <div className="text-sm font-bold text-white">CONVERT</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">Digital Experience</span>
                    </div>

                    {/* Connecting Connector Line */}
                    <div className="flex justify-center -my-2 relative z-10">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-orange-500 to-emerald-500"></div>
                    </div>

                    {/* Node 3: SCALE */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Stage 03</div>
                          <div className="text-sm font-bold text-white">SCALE</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">Technology + Automation</span>
                    </div>

                  </div>

                  {/* Central Synchronization Core */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-semibold">
                      <Layers className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>Unified Operating Layer</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 02. SIGNATURE FRAMEWORK: ATTRACT → CONVERT → SCALE */}
      {/* ========================================================================= */}
      <AttractConvertScaleDiagram
        onExploreCapabilities={() => onNavigate('/solutions')}
      />

      {/* ========================================================================= */}
      {/* 03. THE PROBLEM SECTION */}
      {/* ========================================================================= */}
      <section id="the-problem-section" className="py-24 bg-[#070A11] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
              The Fundamental Challenge
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              Your business doesn't need more disconnected services.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
              Most companies hire separate freelancers or vendors for ads, web development, branding, and software. The result is fragmented data, finger-pointing, and missed commercial targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/90 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-6 font-mono text-sm font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Marketing without Technology
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Creates sudden spikes of ad traffic and inquiries that sit in unmonitored inboxes, lead to slow sales responses, and leak high-value revenue opportunities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/90 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-6 font-mono text-sm font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Technology without Strategy
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Produces expensive custom software, bloated portals, and complex CRMs that internal teams abandon because they were not engineered around actual commercial workflows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/90 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-6 font-mono text-sm font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Branding without Growth
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Results in pretty logos, aesthetic Instagram feeds, and glossy stationery that fail to generate pipeline or establish measurable pricing power.
              </p>
            </div>

          </div>

          {/* Solution Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                SGS bridges this divide into one operating layer.
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                We align your brand positioning, web architecture, paid acquisition, and CRM automation toward one single metric: sustainable business growth.
              </p>
            </div>
            <button
              onClick={() => onOpenProjectModal()}
              className="px-6 py-3 rounded-lg bg-[#F97316] text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 transition-colors shrink-0"
            >
              Partner with SGS
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. WHAT WE DO (5 CAPABILITY GROUPS) */}
      {/* ========================================================================= */}
      <section id="what-we-do-section" className="py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                WHAT WE DO
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                Everything your business needs to grow digitally.
              </h2>
              <p className="mt-4 text-base text-slate-400 font-sans leading-relaxed">
                From strategy to execution, we deliver end-to-end solutions that help businesses attract the right audience, convert them into customers, and scale operations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/solutions')}
              className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 self-start lg:self-auto"
            >
              <span>Explore All 5 Capabilities & Case Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <div
                key={service.slug}
                id={`capability-card-${service.slug}`}
                onClick={() => onNavigate(`/solutions/${service.slug}`)}
                className="cursor-pointer p-7 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {service.stage}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                    {service.category}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>View Breakdown & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. GROWTH SOLUTIONS (LAUNCH / GENERATE / AUTOMATE / TRANSFORM) */}
      {/* ========================================================================= */}
      <GrowthSolutionsGrid
        onStartProjectForSolution={(sol) => onOpenProjectModal(sol.slug)}
      />

      {/* ========================================================================= */}
      {/* 06. INDUSTRIES WE SERVE */}
      {/* ========================================================================= */}
      <section id="industries-section" className="py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                INDUSTRIES WE SERVE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                We build around your business model.
              </h2>
              <p className="mt-4 text-base text-slate-400 font-sans leading-relaxed">
                Customized growth architectures and systems calibrated for sectors with specific sales cycles and operational demands.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/industries')}
              className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 self-start lg:self-auto"
            >
              <span>View All Industry Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.slug}
                id={`industry-card-${ind.slug}`}
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="cursor-pointer p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                      Common Pain Points Solved:
                    </span>
                    {ind.commonChallenges.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                        <span className="line-clamp-1">{ch.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Explore Industry Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. OUR APPROACH (6-STEP METHODOLOGY) */}
      {/* ========================================================================= */}
      <ApproachTimeline />

      {/* ========================================================================= */}
      {/* 08. FEATURED WORK (REAL QUALITATIVE EVIDENCE) */}
      {/* ========================================================================= */}
      <section id="featured-work-section" className="py-24 bg-[#070A11] border-t border-slate-800/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                FEATURED WORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                Work that moves businesses forward.
              </h2>
              <p className="mt-4 text-base text-slate-400 font-sans leading-relaxed">
                Real commercial case studies showing how we help clients eliminate growth bottlenecks and modernize their digital operating layers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/work')}
              className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 self-start lg:self-auto"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.slug}
                id={`case-card-${study.slug}`}
                onClick={() => onSelectCaseStudy(study)}
                className="cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-400">
                      {study.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                    {study.client}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                      Qualitative Commercial Outcome:
                    </span>
                    <ul className="space-y-1.5">
                      {study.qualitativeResults.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services Delivered Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.servicesDelivered.map((serv, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Read Full Case Study Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09. WHY SGS (6 DIFFERENTIATORS) */}
      {/* ========================================================================= */}
      <section id="why-sgs-section" className="py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
              WHY CHOOSE SGS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              A partner invested in your long-term success.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
              We operate as an extension of your leadership team—bringing commercial discipline, technical excellence, and transparent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Business First</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We start with your commercial objective, profit margins, and sales bottlenecks—not a predefined menu of cookie-cutter services.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-orange-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">End-to-End Execution</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                From initial go-to-market strategy to software deployment and daily campaign optimization, we handle the entire execution stack.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Technology Driven</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Smart, high-performance technology that solves tangible business problems, accelerates response times, and cuts manual overhead.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-purple-400 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Driven</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Decisions backed by live pipeline attribution, conversion tracking, and measurable unit economics rather than subjective guesswork.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Long-Term Partnership</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We build scalable systems and collaborative relationships designed to evolve and compound with your company over multiple years.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent & Reliable</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clear communication, honest reporting, dependable delivery sprints, and zero hidden vendor lock-in.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. INSIGHTS (THOUGHT LEADERSHIP) */}
      {/* ========================================================================= */}
      <section id="insights-section" className="py-24 bg-[#070A11] border-t border-slate-800/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                INSIGHTS & THOUGHT LEADERSHIP
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                Ideas for businesses building what's next.
              </h2>
              <p className="mt-4 text-base text-slate-400 font-sans leading-relaxed">
                Strategic articles on digital growth systems, performance marketing, conversion design, and business automation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/insights')}
              className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 self-start lg:self-auto"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightsData.slice(0, 3).map((art) => (
              <div
                key={art.slug}
                id={`article-card-${art.slug}`}
                onClick={() => onSelectArticle ? onSelectArticle(art) : onNavigate(`/insights/${art.slug}`)}
                className="cursor-pointer rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-orange-400 border border-slate-700">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-500">{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section id="final-cta-section" className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#070A11] border-t border-slate-800/80 text-white relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Let's Build What's Next
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans max-w-3xl mx-auto leading-tight">
            Ready to transform your business growth with a unified operating layer?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your current commercial challenges. We'll help you pinpoint the exact systems, marketing channels, and automations needed to scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="final-cta-start-project"
              onClick={() => onOpenProjectModal()}
              className="px-8 py-4 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-base font-semibold shadow-xl shadow-orange-500/25 flex items-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="final-cta-diagnostic"
              onClick={onOpenDiagnostic}
              className="px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-base font-semibold transition-all"
            >
              Take Growth Diagnostic
            </button>
          </div>

          <div className="pt-8 text-xs text-slate-500">
            Official Corporate Enquiries: <a href="mailto:hello@sanskargrowthsolutions.com" className="text-slate-300 hover:text-white underline">hello@sanskargrowthsolutions.com</a> • Pune, Maharashtra, India
          </div>

        </div>
      </section>

    </div>
  );
};
