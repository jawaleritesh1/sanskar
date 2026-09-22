import React from 'react';
import { Search, Compass, Code, Rocket, BarChart3, TrendingUp, Layers } from 'lucide-react';

export const ApproachTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Audit Business & Bottlenecks',
      description: 'We audit your commercial unit economics, current customer journey, competitor positioning, and tech debt to pinpoint highest-leverage growth levers.',
      icon: <Search className="w-5 h-5 text-[#2033FF]" />
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      subtitle: 'Define Architecture & Roadmap',
      description: 'We formulate an actionable roadmap coupling brand positioning, paid acquisition channels, and technical infrastructure into 90-day execution milestones.',
      icon: <Compass className="w-5 h-5 text-[#0F1B64]" />
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Engineer Systems & Assets',
      description: 'Our engineering and creative teams construct high-speed web platforms, creative ad variations, CRM sync pipelines, and automated lead routing engines.',
      icon: <Code className="w-5 h-5 text-[#2033FF]" />
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Execute Go-To-Market Live',
      description: 'We activate targeted search and social campaigns, deploy landing environments, and monitor real-time telemetry to ensure smooth customer onboarding.',
      icon: <Rocket className="w-5 h-5 text-[#0F1B64]" />
    },
    {
      number: '05',
      title: 'MEASURE',
      subtitle: 'Track Data & Unit Economics',
      description: 'We analyze lead quality tiers, cost per acquisition (CPA), sales velocity, and drop-off points directly in your synchronized CRM dashboard.',
      icon: <BarChart3 className="w-5 h-5 text-[#2033FF]" />
    },
    {
      number: '06',
      title: 'SCALE',
      subtitle: 'Optimize & Automate Expansion',
      description: 'We systematically double down on winning channels, automate repetitive sales follow-ups, and build custom operational portals for 10x scale.',
      icon: <TrendingUp className="w-5 h-5 text-[#2033FF]" />
    }
  ];

  return (
    <section id="our-approach" className="py-20 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00]">
              Our Systematic Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
            From Initial Discovery to Measurable Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            We don't believe in chaotic improvisation. Our structured six-stage process ensures transparency, velocity, and measurable commercial outcomes at every step.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              id={`approach-step-${step.number}`}
              className="relative overflow-hidden p-8 rounded-3xl bg-[#0B1446]/80 border border-white/10 hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/90 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              {/* Top Hover Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-[#070D2B] text-slate-200 border border-white/10">
                    PHASE {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#AFEB00]">{step.icon}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#AFEB00] tracking-tight mb-1 font-heading transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-bold text-[#AFEB00] uppercase tracking-wide mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
