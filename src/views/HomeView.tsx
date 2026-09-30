import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import {
  ArrowRight,
  Play,
  Search,
  Lightbulb,
  Cpu,
  Rocket,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Target,
  Compass,
  Building2,
} from 'lucide-react';
import { CaseStudy, InsightArticle } from '../types';
import { SgsBrandMotifsStrip } from '../components/BrandGraphics';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenProjectModal: (initialService?: string) => void;
  onOpenDiagnostic: () => void;
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onSelectArticle?: (article: InsightArticle) => void;
}

const solutionsList = [
  {
    num: '01',
    title: 'Digital Growth',
    slug: 'digital-growth',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    capabilities: ['Performance Marketing', 'Lead Generation', 'Content & Social', 'Growth Systems'],
  },
  {
    num: '02',
    title: 'Technology Solutions',
    slug: 'technology',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    capabilities: ['Web & App Development', 'Custom Software', 'Automation & Integration', 'AI & Emerging Tech'],
  },
  {
    num: '03',
    title: 'Brand & Creative',
    slug: 'brand-creative',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    capabilities: ['Brand Strategy', 'Visual Identity', 'Content Production', 'Campaigns & Storytelling'],
  },
  {
    num: '04',
    title: 'Business Media & Authority',
    slug: 'business-media',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    capabilities: ['The Success World', 'Industry Publications', 'Thought Leadership', 'Editorial & PR'],
  },
  {
    num: '05',
    title: 'Business Consulting',
    slug: 'business-consulting',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    capabilities: ['Growth Strategy', 'Market Expansion', 'Process & Operations', 'Advisory & Mentorship'],
  },
];

const industriesList = [
  {
    title: 'Real Estate & Property',
    slug: 'real-estate-property',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Architecture & Interiors',
    slug: 'architecture-interiors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Technology & SaaS',
    slug: 'technology-saas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Manufacturing & SMEs',
    slug: 'manufacturing-smes',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Professional Services',
    slug: 'high-ticket-b2b-legal',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  },
];

const approachSteps = [
  {
    num: '01',
    phase: 'Phase 01',
    title: 'Discover',
    desc: 'Deep-dive audit into your business model, customer data, competitors, and growth bottlenecks.',
    deliverable: 'Diagnostic & Audit',
    icon: Search,
  },
  {
    num: '02',
    phase: 'Phase 02',
    title: 'Strategise',
    desc: 'Architecting a bespoke growth roadmap with clear channel economics, positioning, and KPI milestones.',
    deliverable: 'Growth Roadmap',
    icon: Lightbulb,
  },
  {
    num: '03',
    phase: 'Phase 03',
    title: 'Build',
    desc: 'Engineering high-converting web platforms, automation workflows, and brand creative assets.',
    deliverable: 'Platform & Assets',
    icon: Cpu,
  },
  {
    num: '04',
    phase: 'Phase 04',
    title: 'Launch',
    desc: 'Executing precision go-to-market campaigns across search, social, and direct outbound channels.',
    deliverable: 'Acquisition Funnels',
    icon: Rocket,
  },
  {
    num: '05',
    phase: 'Phase 05',
    title: 'Scale',
    desc: 'Continuous conversion optimization, automated CRM routing, and compounding market expansion.',
    deliverable: 'Compounding Scale',
    icon: BarChart3,
  },
];

const caseStudiesList = [
  {
    id: 'arc-interiors',
    client: 'Raaga Interiors',
    industry: 'Architecture & Interiors',
    headline: 'From Local Presence to 3x More Qualified Leads.',
    metrics: [
      { value: '3x', label: 'Increase in leads' },
      { value: '60%', label: 'Lower cost per lead' },
      { value: '4 Months', label: 'To significant growth' },
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'apex-realty',
    client: 'Sanskar Realty',
    industry: 'Real Estate & Property',
    headline: 'Scaling Luxury Real Estate Bookings Across Pune & Mumbai.',
    metrics: [
      { value: '₹42 Cr', label: 'Gross booking value' },
      { value: '4.8x', label: 'Return on ad spend' },
      { value: '90 Days', label: 'Campaign maturity' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'technova-saas',
    client: 'TechNova SaaS',
    industry: 'Technology & SaaS',
    headline: 'Modern Product Funnel Generating Global Enterprise Demos.',
    metrics: [
      { value: '180+', label: 'Enterprise SQLs' },
      { value: '2.4x', label: 'Demo conversion rate' },
      { value: '60 Days', label: 'Time to full rollout' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'sharma-industries',
    client: 'Sharma Industries',
    industry: 'Manufacturing & SMEs',
    headline: 'Automated Lead Routing for Precision Industrial Engineering.',
    metrics: [
      { value: '310%', label: 'Inbound inquiry surge' },
      { value: '45m', label: 'Average lead response' },
      { value: '5 Months', label: 'Break-even timeline' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = caseStudiesList[activeCaseIdx];

  return (
    <div className="w-full bg-[#F5FAFF] text-[#1A1A1A] font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. HERO SECTION (CINEMATIC SKYLINE OFFICE)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <Hero onNavigate={onNavigate} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. ABOUT SGS — A GROWTH PARTNER (REDESIGNED)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F5FAFF] via-white to-[#F5FAFF] text-[#1A1A1A] overflow-hidden">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#2033FF]/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#AFEB00]/10 blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

            {/* Left Narrative Column (Span 6) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">

                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2033FF]/10 border border-[#2033FF]/20 text-[#2033FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2033FF]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                    About Sanskar Growth Solutions
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold leading-[1.12] text-[#080E32] tracking-tight">
                  More Than a Service Provider.<br />
                  <span className="text-[#2033FF]">A Strategic Growth Partner.</span>
                </h2>

                {/* Sub-narrative */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-xl">
                  Sanskar Growth Solutions is a modern Indian company that brings together strategy, technology, marketing, creative, and business advisory to help enterprises and growing businesses achieve measurable, long-term compounding growth.
                </p>

                {/* Slogan Banner */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#080E32] to-[#0F1B64] text-white flex items-center justify-between gap-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#AFEB00] animate-pulse" />
                    <span className="font-heading text-sm sm:text-base font-bold tracking-tight">
                      Built for a Brighter Business India
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#AFEB00] px-2 py-0.5 rounded bg-white/10 border border-white/10 shrink-0">
                    National Mission
                  </span>
                </div>

                {/* Purpose & Vision Cards — Balanced 2-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {/* Purpose Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#2033FF]/40 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#2033FF]/10 text-[#2033FF] flex items-center justify-center group-hover:bg-[#2033FF] group-hover:text-white transition-colors">
                        <Target size={16} />
                      </div>
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#2033FF]">
                        Our Purpose
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      To empower businesses with intelligent growth systems that create lasting value for a stronger, more prosperous India.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#080E32]/40 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#080E32]/10 text-[#080E32] flex items-center justify-center group-hover:bg-[#080E32] group-hover:text-white transition-colors">
                        <Compass size={16} />
                      </div>
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#080E32]">
                        Our Vision
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      To be India's most trusted growth partner across industries, combining strategic intelligence, technology, and creativity.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Link Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#080E32] text-white hover:bg-[#2033FF] transition-all font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Know Our Story</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

            {/* Right Architectural Visual & Integrated Framework (Span 6) — Full Height */}
            <div className="lg:col-span-6 relative flex flex-col h-full min-h-[480px] lg:min-h-0">

              {/* Full Height Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group h-full w-full flex flex-col justify-between">

                {/* Full Height Building Photo */}
                <div className="absolute inset-0">
                  <img
                    src="/images/sgs-hq-building.jpg"
                    alt="Sanskar Growth Solutions Corporate Building"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E32]/95 via-[#080E32]/25 to-[#080E32]/20" />
                </div>

                {/* Top Location / Status Pill */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#080E32]/85 backdrop-blur-md border border-white/20 shadow-md flex items-center gap-1.5 text-[11px] font-mono font-bold text-white">
                    <Building2 size={13} className="text-[#AFEB00]" />
                    <span>SGS Corporate HQ</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-md text-[10px] font-mono font-bold text-[#0F1B64] uppercase tracking-wider">
                    Tier-1 Enterprise
                  </div>
                </div>

                {/* Bottom Docked Capability Command Center */}
                <div className="relative z-10 p-4 sm:p-6">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#080E32]/95 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#AFEB00]">
                          Connected Growth System
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-300 px-2 py-0.5 rounded bg-white/10 border border-white/10">
                        5 Disciplines
                      </span>
                    </div>

                    {/* 5 Integrated Capability Pills in Clean Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-center">
                      {['Growth', 'Strategy', 'Technology', 'Creative', 'Advisory'].map((item, idx) => (
                        <div
                          key={idx}
                          className="py-1.5 px-1 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-heading font-semibold text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Assurance */}
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 font-sans">
                      <span className="text-white font-heading font-bold flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2033FF]" />
                        Real Business Impact
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Compounding Value</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          BRAND PERSONALITY & ETHOS BANNER (Brand Guidelines Page 4)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 bg-[#2033FF] text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#AFEB00]">
                Brand Personality &amp; Operating Standards
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tight">
                Strategic, Professional, Confident, Clear, Innovative, Reliable
              </h3>
            </div>
            <div className="shrink-0">
              <SgsBrandMotifsStrip motifSize={32} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. OUR SOLUTIONS — CONNECTED GROWTH ENGINE
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#080E32] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14 lg:mb-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading mb-2">
                OUR SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold leading-[1.08] text-white tracking-tight">
                Different Capabilities.<br />
                A Connected Growth Engine.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans font-normal">
                From demand generation to digital platforms, from brand building to business consulting, our solutions work together to create a complete growth system for your business.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/solutions')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#AFEB00] hover:underline self-start md:self-end pb-1"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 5 Vertical Solution Cards — Zigzag Staggered Placement with Static 3D Look */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 pb-6 lg:pt-6 lg:pb-12">
            {solutionsList.map((sol, idx) => {
              const isDown = idx % 2 === 1;
              return (
                <div
                  key={sol.num}
                  className={isDown ? 'lg:translate-y-7 sm:translate-y-3' : 'lg:-translate-y-5 sm:-translate-y-2'}
                >
                  <div
                    onClick={() => onNavigate(`/solutions/${sol.slug}`)}
                    className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-[#080E32] flex flex-col justify-between p-5 transition-colors duration-300 border-t border-t-white/30 border-x-0 border-b-4 border-b-[#02040e] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_16px_0_24px_-8px_rgba(3,6,22,0.9),inset_-16px_0_24px_-8px_rgba(3,6,22,0.9),inset_0_-2px_4px_rgba(0,0,0,0.8)] hover:border-t-[#AFEB00]/80 hover:border-b-[#01030d]"
                  >
                    {/* Background Image with Depth & Specular Glare */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover object-center opacity-80"
                      />
                      {/* Base Full Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-[#080E32]/40 to-transparent" />
                      {/* Diagonal Glass Sheen Light Glare across top surface */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/[0.02] to-transparent pointer-events-none" />
                    </div>

                    {/* Inward Curved Side Shading Gradients (Left & Right concave curve effect) */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#020514]/80 via-transparent via-50% to-[#020514]/80 z-[4]" />

                    {/* Dedicated Deep Gradient Backdrop Behind Text for Maximum Legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#080E32] from-25% via-[#080E32]/95 via-60% to-transparent pointer-events-none z-[5]" />

                    {/* Top Number */}
                    <div className="relative z-10">
                      <span className="inline-block text-xs font-mono font-bold text-[#AFEB00] tracking-wider px-2 py-0.5 rounded-md bg-[#080E32]/85 border-t border-t-white/30 border-b border-b-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                        {sol.num}
                      </span>
                    </div>

                    {/* Bottom Content with enhanced readability */}
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors leading-snug drop-shadow-md">
                        {sol.title}
                      </h3>

                      <div className="space-y-1.5 text-xs font-sans">
                        {sol.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="leading-tight text-slate-200 drop-shadow-sm font-medium">
                            {cap}
                          </div>
                        ))}
                      </div>

                      {/* Geometric Bottom Arrow Button — 3D Beveled Pill without outer shadow */}
                      <div className="pt-1 flex items-center justify-start">
                        <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm border-t border-t-white/40 border-l border-l-white/25 border-b-2 border-b-black/70 flex items-center justify-center text-white transition-colors duration-200 group-hover:bg-[#AFEB00] group-hover:text-[#0F1B64] group-hover:border-t-[#AFEB00] group-hover:border-b-[#7CB000]">
                          <ArrowRight size={13} />
                        </div>
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
          04. INDUSTRIES WE SERVE — REAL BUSINESSES. REAL IMPACT.
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Narrative (Span 4) */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2033FF] font-heading">
                INDUSTRIES WE SERVE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold leading-[1.08] text-[#141414] tracking-tight">
                Real<br />
                Businesses.<br />
                Real Impact.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans max-w-sm">
                We work with ambitious businesses across key industries, understanding their unique challenges and creating tailored growth solutions.
              </p>

              <div>
                <button
                  onClick={() => onNavigate('/industries')}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141414] hover:text-[#2033FF] transition-colors border-b border-black/40 pb-1"
                >
                  <span>Explore Your Industry</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right 5 Tall Industry Cards (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {industriesList.map((ind, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                  className="group relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-slate-900 flex flex-col justify-end p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative z-10 text-white font-bold text-sm sm:text-base font-heading leading-tight group-hover:text-[#AFEB00] transition-colors">
                    {ind.title}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          05. OUR APPROACH — A CLEAR PATH FROM INSIGHT TO IMPACT (REDESIGNED)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F5FAFF] to-white text-[#1A1A1A] border-y border-slate-200/80 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#2033FF]/5 blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#AFEB00]/10 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">

          {/* Section Header & Slogan Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2033FF]/10 border border-[#2033FF]/20 text-[#2033FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2033FF]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                  Our 5-Stage Execution Framework
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold leading-[1.1] text-[#080E32] tracking-tight">
                A Clear Path from Insight to Impact.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                A structured, audited methodology turning ambitious business targets into predictable, compounding commercial growth.
              </p>
            </div>

            {/* Slogan Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#080E32] text-white border border-white/10 shadow-xl flex items-center gap-4 shrink-0 lg:max-w-md">
              <div className="w-10 h-10 rounded-xl bg-[#2033FF]/30 border border-[#2033FF]/40 text-[#AFEB00] flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="font-heading text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Growth Without Guesswork</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AFEB00] animate-pulse" />
                </div>
                <p className="text-xs text-slate-300 font-sans mt-0.5">
                  Milestone-driven roadmaps with transparent attribution.
                </p>
              </div>
            </div>
          </div>

          {/* Connected 5-Step Process Pipeline */}
          <div className="relative">
            {/* Desktop Connecting Line behind cards */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#2033FF]/20 via-[#2033FF]/60 to-[#AFEB00]/80 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
              {approachSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2033FF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Top Row: Icon Container + Step Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#F5FAFF] border border-slate-200 text-[#2033FF] flex items-center justify-center group-hover:bg-[#2033FF] group-hover:text-white group-hover:border-[#2033FF] group-hover:scale-105 transition-all shadow-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#2033FF] px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-[#2033FF]/10 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-2 flex-grow">
                      <div className="text-[11px] font-mono uppercase font-bold text-[#2033FF] tracking-wider">
                        {step.phase}
                      </div>
                      <h3 className="text-lg font-bold font-heading text-[#080E32] group-hover:text-[#2033FF] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Deliverable Tag */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {step.deliverable}
                      </span>
                      <ArrowRight size={13} className="text-slate-300 group-hover:text-[#2033FF] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          06. SELECTED WORK — REAL STORIES. TANGIBLE RESULTS.
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#080E32] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Narrative (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
                SELECTED WORK
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold leading-[1.08] text-white tracking-tight">
                Real<br />
                Stories.<br />
                Tangible<br />
                Results.
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-xs">
                From emerging brands to established enterprises, we help businesses achieve meaningful growth through strategy, technology and creative execution.
              </p>

              <div>
                <button
                  onClick={() => onNavigate('/work')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#AFEB00] hover:underline"
                >
                  <span>View More Case Studies</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Center Featured Case Study Card (Span 5) */}
            <div className="lg:col-span-5 bg-[#0A1245] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-60 sm:h-64 bg-slate-800">
                <img
                  src={activeCase.image}
                  alt={activeCase.client}
                  className="w-full h-full object-cover object-center"
                />

                {/* Pagination Indicator Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-white/90">
                  <span>{String(activeCaseIdx + 1).padStart(2, '0')} / {String(caseStudiesList.length).padStart(2, '0')}</span>
                  <div className="flex items-center gap-1 ml-1 text-white">
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev > 0 ? prev - 1 : caseStudiesList.length - 1))}
                      className="p-0.5 hover:text-[#AFEB00]"
                      aria-label="Previous case study"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => setActiveCaseIdx((prev) => (prev < caseStudiesList.length - 1 ? prev + 1 : 0))}
                      className="p-0.5 hover:text-[#AFEB00]"
                      aria-label="Next case study"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#AFEB00] block mb-1">
                    {activeCase.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {activeCase.headline}
                  </h3>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                  {activeCase.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-xl sm:text-2xl font-heading font-bold text-[#AFEB00]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => onNavigate('/work')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#AFEB00] hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Client Switcher Tabs (Span 3) */}
            <div className="lg:col-span-3 space-y-2 pt-2 lg:pt-0">
              {caseStudiesList.map((cs, idx) => {
                const isActive = activeCaseIdx === idx;
                return (
                  <button
                    key={cs.id}
                    onClick={() => setActiveCaseIdx(idx)}
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${isActive
                        ? 'bg-[#AFEB00] text-[#0F1B64] font-bold shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span>{cs.client}</span>
                    {isActive && <ArrowRight size={14} className="text-[#0F1B64]" />}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          07. CALL TO ACTION BANNER — MOUNTAIN SUMMIT SUNRISE
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 overflow-hidden text-[#141414]">
        {/* Full Bleed Summit Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Ambitious Professional on Mountain Summit"
            className="w-full h-full object-cover object-center"
          />
          {/* Soft Sunset/Golden Mist Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5FAFF]/95 via-[#F5FAFF]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4 sm:space-y-5">

            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2033FF] font-heading">
              LET'S BUILD WHAT'S NEXT
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-bold leading-[1.08] text-[#141414] tracking-tight">
              Ready to Build a<br />
              Predictable Growth System?
            </h2>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-sans max-w-xl">
              Whether you want more customers, a stronger brand, a scalable technology partner or strategic guidance — SGS is ready to help.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Let's Talk About Your Goals</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('/about')}
                className="group inline-flex items-center gap-2 rounded-xl border border-black/30 bg-white/40 backdrop-blur-md text-[#141414] font-heading font-semibold text-xs sm:text-sm px-6 py-4 hover:bg-white/70 transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-md bg-[#141414] flex items-center justify-center text-white">
                  <Play size={9} className="fill-white ml-0.5" />
                </div>
                <span>Watch Our Story (2 min)</span>
              </button>
            </div>

            {/* Bottom Right Geometric Brand Slogan */}
            <div className="pt-4 flex justify-end items-center gap-2">
              <span className="h-0.5 w-6 bg-[#2033FF]" />
              <div className="font-heading text-lg sm:text-xl text-[#0F1B64] font-bold tracking-tight">
                Ambitious Businesses Build A Better India
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
