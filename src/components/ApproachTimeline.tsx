import React from 'react';
import { Search, Compass, Code, Rocket, BarChart3, TrendingUp, Layers } from 'lucide-react';

export const ApproachTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understand Business & Bottlenecks',
      description: 'We audit your commercial unit economics, current customer journey, competitor positioning, and tech debt to pinpoint highest-leverage growth levers.',
      icon: <Search className="w-5 h-5 text-blue-400" />
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      subtitle: 'Define Architecture & Roadmap',
      description: 'We formulate an actionable roadmap coupling brand positioning, paid acquisition channels, and technical infrastructure into 90-day execution milestones.',
      icon: <Compass className="w-5 h-5 text-orange-400" />
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Engineer Systems & Assets',
      description: 'Our engineering and creative teams construct high-speed web platforms, creative ad variations, CRM sync pipelines, and automated lead routing engines.',
      icon: <Code className="w-5 h-5 text-emerald-400" />
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Execute Go-To-Market Live',
      description: 'We activate targeted search and social campaigns, deploy landing environments, and monitor real-time telemetry to ensure smooth customer onboarding.',
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    },
    {
      number: '05',
      title: 'MEASURE',
      subtitle: 'Track Data & Unit Economics',
      description: 'We analyze lead quality tiers, cost per acquisition (CPA), sales velocity, and drop-off points directly in your synchronized CRM dashboard.',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />
    },
    {
      number: '06',
      title: 'SCALE',
      subtitle: 'Optimize & Automate Expansion',
      description: 'We systematically double down on winning channels, automate repetitive sales follow-ups, and build custom operational portals for 10x scale.',
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section id="our-approach" className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F97316]" />
            Our Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            From Initial Discovery to Measurable Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            We don't believe in chaotic improvisation. Our structured six-stage process ensures transparency, velocity, and measurable commercial outcomes at every step.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              id={`approach-step-${step.number}`}
              className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 group"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                  STEP {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
