import { Industry } from '../types';

export const industriesData: Industry[] = [
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate & Property Development',
    shortDesc: 'High-intent buyer generation, project showcase web systems, and automated site-visit CRM workflows.',
    overview: 'Real estate developers and premium property consultants face long decision cycles and high customer acquisition costs. SGS delivers integrated project launch ecosystems combining hyper-targeted geo-fenced marketing, immersive project micro-sites, and instant lead capture routing directly to sales executives.',
    commonChallenges: [
      {
        title: 'High volume of unqualified leads',
        description: 'Marketing campaigns that generate curiosity clicks rather than genuine homebuyers with validated purchasing power.'
      },
      {
        title: 'Slow lead contact & leakage',
        description: 'Delays in contacting fresh leads result in cold prospects and lost booking opportunities.'
      },
      {
        title: 'Outdated project presentation',
        description: 'Heavy PDF brochures and unresponsive websites that fail to showcase project luxury and floorplans effectively on mobile devices.'
      }
    ],
    sgsSolution: {
      approach: 'We engineer a synchronized project launch engine: targeted meta/search intent campaigns, interactive floorplan web experiences, and sub-minute CRM lead dispatch.',
      operatingLayer: [
        'Geo-targeted high-intent paid acquisition (Google Search + Meta property ads)',
        'Ultra-fast project showcase microsites with interactive unit walkthroughs',
        'Automated CRM integration with WhatsApp instant brochures and sales notifications',
        'Lead scoring based on budget, timeline, and location preference'
      ],
      outcomes: [
        'Higher site-visit scheduling rate from online inquiries',
        'Zero lead leakage with automated multi-channel follow-ups',
        'Streamlined sales rep accountability with real-time pipeline reporting'
      ]
    },
    relevantServices: ['digital-growth', 'technology', 'brand-creative'],
    featuredProjectSlug: 'apex-realty-growth'
  },
  {
    id: 'interior-design',
    slug: 'interior-design',
    title: 'Interior Design & Architecture',
    shortDesc: 'Visual authority branding, high-aesthetic portfolio platforms, and qualified consultation acquisition.',
    overview: 'High-end interior studios and architectural practices sell craftsmanship, taste, and bespoke trust. We position design firms as prestigious category leaders through magazine-grade digital portfolios, targeted homeowner acquisition, and streamlined design consultation funnels.',
    commonChallenges: [
      {
        title: 'Price-sensitive inquiries vs luxury buyers',
        description: 'Spending valuable consultation hours on low-budget leads who do not match minimum project sizes.'
      },
      {
        title: 'Suboptimal visual showcase',
        description: 'Instagram-only presence lacking an authoritative portfolio website that commands premium architectural fees.'
      },
      {
        title: 'Unsystematic lead nurturing',
        description: 'Losing high-value residential and commercial leads due to manual proposal and follow-up processes.'
      }
    ],
    sgsSolution: {
      approach: 'We establish an editorial brand identity, deploy high-speed gallery platforms, and run targeted homeowner discovery campaigns filtered by property size and micro-location.',
      operatingLayer: [
        'Visual identity overhaul and editorial portfolio website development',
        'Luxury aesthetic Meta campaigns targeting homeowners in premium residential developments',
        'Interactive project cost estimator and consultation booking questionnaire',
        'Automated portfolio delivery and qualification sequence'
      ],
      outcomes: [
        'Higher average project value and client quality',
        'Shortened client consultation-to-signing timeline',
        'Authoritative brand presence that substantiates premium design fees'
      ]
    },
    relevantServices: ['brand-creative', 'digital-growth', 'technology'],
    featuredProjectSlug: 'abc-interiors'
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: 'Professional Services & Advisory',
    shortDesc: 'Executive authority building, trust-driven digital presence, and high-ticket B2B client acquisition.',
    overview: 'Legal, financial, corporate advisory, and consulting firms rely on reputation, domain authority, and peer trust. SGS transforms complex expertise into clear digital value propositions, high-converting consultation channels, and thought leadership platforms.',
    commonChallenges: [
      {
        title: 'Over-reliance on personal referrals',
        description: 'Vulnerability to referral dry spells and inability to predictably generate new corporate accounts.'
      },
      {
        title: 'Complex service articulation',
        description: 'Websites filled with dense legalistic or technical jargon that confuses prospective clients.'
      },
      {
        title: 'Lack of visible thought leadership',
        description: 'Senior partners with deep domain expertise whose insights remain invisible in search and professional networks.'
      }
    ],
    sgsSolution: {
      approach: 'We distill complex advisory capabilities into clear business outcomes, position senior partners as media-featured authorities, and build high-trust client acquisition funnels.',
      operatingLayer: [
        'High-trust corporate website with clear sector-specific practice pages',
        'Executive branding and business media thought-leadership publication',
        'Intent-focused Google Search campaigns targeting corporate decision-makers',
        'Automated B2B consultation scheduling and intake workflows'
      ],
      outcomes: [
        'Predictable inbound corporate consultation requests',
        'Enhanced institutional reputation and partner visibility',
        'Higher conversion rate on multi-year retainer proposals'
      ]
    },
    relevantServices: ['business-consulting', 'business-media', 'technology', 'digital-growth'],
    featuredProjectSlug: 'finedge-advisory'
  },
  {
    id: 'startups',
    slug: 'startups',
    title: 'Startups & Emerging Tech',
    shortDesc: 'Rapid go-to-market execution, full-stack digital foundations, and scalable user acquisition engines.',
    overview: 'Startups need velocity, cohesive product-market storytelling, and cost-efficient traction. SGS serves as an embedded growth partner, deploying brand assets, high-converting product landing engines, analytics instrumentation, and agile marketing experiments.',
    commonChallenges: [
      {
        title: 'Fragmented early execution',
        description: 'Juggling multiple freelance designers, developers, and marketers with conflicting priorities.'
      },
      {
        title: 'High burn on premature paid marketing',
        description: 'Spending ad budgets before validating positioning, messaging, and conversion funnel readiness.'
      },
      {
        title: 'Lack of scalable infrastructure',
        description: 'Building brittle web assets that cannot adapt as product features and pricing models evolve.'
      }
    ],
    sgsSolution: {
      approach: 'We deploy our LAUNCH and GENERATE growth solution frameworks to deliver brand, web, tracking, and customer acquisition in structured agile sprints.',
      operatingLayer: [
        'Brand positioning narrative and responsive UI/UX design systems',
        'Modern TypeScript/Next.js product websites with sub-second performance',
        'Comprehensive product analytics (event tracking, drop-off mapping, conversion funnels)',
        'Rapid validation ad campaigns to test messaging angles and buyer personas'
      ],
      outcomes: [
        'Market launch accomplished in weeks rather than months',
        'Clear data on customer acquisition costs and conversion dynamics',
        'Scalable digital foundation built to support investor diligence and growth'
      ]
    },
    relevantServices: ['digital-growth', 'technology', 'brand-creative', 'business-consulting'],
    featuredProjectSlug: 'techvanguard'
  },
  {
    id: 'smes',
    slug: 'smes',
    title: 'SMEs & Growing Enterprises',
    shortDesc: 'Full digital modernization, automated sales pipelines, and sustainable multi-channel expansion.',
    overview: 'Established small and mid-sized enterprises often struggle with disconnected marketing efforts and manual operational processes. SGS builds integrated operating layers connecting branding, modern web portals, CRM automation, and performance marketing to enable systematic scaling.',
    commonChallenges: [
      {
        title: 'Disconnected marketing & sales tools',
        description: 'Leads from multiple channels scattered across emails, chat apps, and manual logbooks.'
      },
      {
        title: 'Legacy website holding back brand perception',
        description: 'An outdated online presence that doesn’t reflect the true scale and quality of the enterprise.'
      },
      {
        title: 'Operational bottlenecks capping growth',
        description: 'Key personnel bogged down by repetitive manual coordination and fragmented reporting.'
      }
    ],
    sgsSolution: {
      approach: 'We execute comprehensive digital transformation: modernizing the brand, building a unified web platform, automating the sales pipeline, and driving targeted customer acquisition.',
      operatingLayer: [
        'Enterprise web modernization with unified product/service architectures',
        'Centralized CRM deployment with automated lead assignment and tracking',
        'Omnichannel digital marketing focused on profitable customer lifetime value',
        'Executive business dashboards tracking marketing ROI and sales velocity'
      ],
      outcomes: [
        'Streamlined sales operations and reduced customer response latency',
        'Professionalized brand perception matching enterprise capabilities',
        'Scalable foundation for sustainable revenue expansion'
      ]
    },
    relevantServices: ['technology', 'digital-growth', 'business-consulting', 'brand-creative'],
    featuredProjectSlug: 'novacommerce'
  }
];
