import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-growth',
    slug: 'digital-growth',
    title: 'Digital Growth',
    category: 'Marketing & Demand Generation',
    stage: 'attract',
    tagline: 'Turn visibility into measurable business growth.',
    description: 'We design and execute integrated demand generation engines that capture high-intent buyers, establish market presence, and consistently generate qualified sales pipelines.',
    businessOutcome: 'Predictable qualified inbound pipeline and sustained customer acquisition.',
    capabilities: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing & Distribution',
      'Performance Marketing & Paid Acquisition',
      'Google Ads (Search, Display, Performance Max)',
      'Meta Ads (Facebook & Instagram High-Intent Campaigns)',
      'B2B & B2C Lead Generation Engines',
      'Audience Segmentation & Retargeting Infrastructure'
    ],
    deliverables: [
      'Omnichannel Demand Architecture',
      'High-Converting Ad Campaigns & Creative Sets',
      'Technical SEO Audit & Ranking Roadmap',
      'Lead Quality Tracking & Attribution Setup',
      'Weekly Commercial Performance Reporting'
    ],
    process: [
      { step: '01', title: 'Audience & Search Intent Audit', desc: 'Map high-value customer search patterns and competitor acquisition gaps.' },
      { step: '02', title: 'Campaign Architecture & Tracking', desc: 'Deploy conversion-calibrated tracking pixels, server-side tagging, and landing assets.' },
      { step: '03', title: 'Channel Execution & Creative', desc: 'Launch targeted Search, Social, and Meta campaigns focused on commercial intent.' },
      { step: '04', title: 'Attribution & Optimization', desc: 'Continuously refine CPA, lead qualification, and ROAS across customer lifecycle.' }
    ],
    faqs: [
      {
        question: 'How is SGS Digital Growth different from typical agency marketing?',
        answer: 'We do not sell vanity impressions or superficial clicks. Our campaigns are directly coupled to your CRM and sales stages so every marketing rupee is accountable to actual qualified pipeline and revenue.'
      },
      {
        question: 'Which ad channels do you recommend for B2B vs B2C?',
        answer: 'For high-ticket B2B and professional services, we combine Search Intent (Google Ads) with authority-driven social distribution and remarketing. For retail and consumer brands, Meta and omnichannel performance funnels dominate.'
      }
    ],
    iconName: 'TrendingUp',
    relatedIndustrySlugs: ['real-estate', 'interior-design', 'professional-services', 'startups', 'smes']
  },
  {
    id: 'technology-solutions',
    slug: 'technology',
    title: 'Technology Solutions',
    category: 'Infrastructure & Engineering',
    stage: 'convert',
    tagline: 'Build the digital infrastructure behind your business.',
    description: 'We engineer robust, high-performance web platforms, custom software architectures, CRM/ERP systems, and AI automations that transform manual operations into scalable competitive advantages.',
    businessOutcome: 'Scalable operational velocity, high conversion rates, and unified business data.',
    capabilities: [
      'Modern High-Converting Website Development',
      'Scalable E-Commerce Architectures',
      'Custom Business Software & Portals',
      'CRM & ERP Implementation & Sync',
      'Mobile & Progressive Web Applications',
      'AI-Powered Workflow Automation'
    ],
    deliverables: [
      'Enterprise-Grade Web Application',
      'Unified CRM Data Pipeline & Webhook Integration',
      'Automated Lead Routing & Notification Bot',
      'Custom Operational Management Dashboards',
      'Production Codebase with Zero Vendor Lock-in'
    ],
    process: [
      { step: '01', title: 'Technical Architecture Design', desc: 'Blueprint data structures, user journeys, and integration points.' },
      { step: '02', title: 'Modular Engineering & Testing', desc: 'Develop modern, accessible, responsive code with enterprise security.' },
      { step: '03', title: 'CRM & System Integrations', desc: 'Connect frontend touchpoints directly to internal sales and operational software.' },
      { step: '04', title: 'Deployment & Monitoring', desc: 'Host on scalable cloud infrastructure with proactive telemetry and speed optimization.' }
    ],
    faqs: [
      {
        question: 'Why build custom web software instead of using a generic template?',
        answer: 'Off-the-shelf templates carry heavy bloat, slow load times, poor mobile UX, and rigid constraints. Our custom architectures load in milliseconds, convert significantly better, and integrate seamlessly with your internal business workflows.'
      },
      {
        question: 'Can you integrate our website directly into our existing CRM?',
        answer: 'Yes. We build two-way sync pipelines with leading CRMs (Zoho, HubSpot, Salesforce, custom PostgreSQL backends, WhatsApp bots, and email automation engines).'
      }
    ],
    iconName: 'Code2',
    relatedIndustrySlugs: ['startups', 'smes', 'real-estate', 'professional-services']
  },
  {
    id: 'brand-creative',
    slug: 'brand-creative',
    title: 'Brand & Creative',
    category: 'Identity & Experience Design',
    stage: 'convert',
    tagline: 'Create a brand people recognize, trust and remember.',
    description: 'We treat branding not as superficial decoration, but as a commercial trust-multiplier. We craft visual identities, company profiles, and UI/UX experiences that establish immediate market authority.',
    businessOutcome: 'Higher perceived market value, shorter sales cycles, and pricing power.',
    capabilities: [
      'Strategic Brand Positioning & Narrative',
      'Visual Identity Systems & Brand Guidelines',
      'High-Impact Corporate Presentations & Pitch Decks',
      'Comprehensive Company Profiles & Sales Collateral',
      'Digital Creative & Asset Design',
      'User Experience (UI/UX) Architecture & Prototyping'
    ],
    deliverables: [
      'Comprehensive Brand Style Guide & Asset Kit',
      'Investor & Executive Pitch Presentations',
      'Interactive Figma UI/UX Design System',
      'B2B Sales Deck & Service Catalogues',
      'Digital & Print-Ready Collateral Assets'
    ],
    process: [
      { step: '01', title: 'Market Positioning Diagnosis', desc: 'Identify competitive whitespace and crystallize your core commercial value proposition.' },
      { step: '02', title: 'Visual Identity & System Architecture', desc: 'Craft typographic hierarchy, color systems, and distinctive visual anchors.' },
      { step: '03', title: 'Touchpoint Rollout', desc: 'Apply the system systematically across sales decks, web experiences, and brand collateral.' },
      { step: '04', title: 'Brand Governance Kit', desc: 'Deliver scalable design libraries for your internal team and external partners.' }
    ],
    faqs: [
      {
        question: 'Why does branding directly affect business revenue?',
        answer: 'Enterprise and high-ticket buyers evaluate credibility within seconds. A cohesive, sophisticated visual system commands higher pricing power, reduces client skepticism, and accelerates deal velocity.'
      }
    ],
    iconName: 'Sparkles',
    relatedIndustrySlugs: ['interior-design', 'real-estate', 'startups', 'professional-services']
  },
  {
    id: 'business-media',
    slug: 'business-media',
    title: 'Business Media & Authority',
    category: 'Reputation & Executive Positioning',
    stage: 'attract',
    tagline: 'Build authority around the people behind your business.',
    description: 'We elevate founders, leadership teams, and growing enterprises into recognized category authorities through strategic media features, executive interviews, founder branding, and PR visibility.',
    businessOutcome: 'Industry credibility, executive reputation, and organic inbound partnership inquiries.',
    capabilities: [
      'Leadership Features & Executive Profiles',
      'Founder Personal Branding & Thought Leadership',
      'Executive Video & Written Interviews',
      'Business Magazine & Industry Publications',
      'Strategic PR & Media Distribution',
      'Keynote & Panel Visibility Strategy'
    ],
    deliverables: [
      'Executive Thought Leadership Calendar & Articles',
      'Published Business Profile & Media Features',
      'Digital Press Kit & Speaker One-Sheet',
      'Syndicated Industry Distribution'
    ],
    process: [
      { step: '01', title: 'Executive Voice Discovery', desc: 'Extract founder insights, domain expertise, and core company milestones.' },
      { step: '02', title: 'Editorial Narrative Development', desc: 'Frame compelling business stories suited for media and leadership platforms.' },
      { step: '03', title: 'Publication & Feature Release', desc: 'Coordinate multi-channel publication and authority syndication.' },
      { step: '04', title: 'Commercial Amplification', desc: 'Repurpose media features into sales enablement assets and trust badges.' }
    ],
    faqs: [
      {
        question: 'Why is Business Media integrated with Technology & Marketing at SGS?',
        answer: 'People do business with leaders they trust. Executive branding and media credibility amplify paid ad conversions, boost organic recruitment, and open enterprise doors that cold outreach cannot.'
      }
    ],
    iconName: 'Newspaper',
    relatedIndustrySlugs: ['startups', 'professional-services', 'smes']
  },
  {
    id: 'business-consulting',
    slug: 'business-consulting',
    title: 'Business Consulting',
    category: 'Strategy & Transformation',
    stage: 'scale',
    tagline: 'Turn business challenges into actionable growth strategies.',
    description: 'We provide senior strategic guidance to eliminate growth bottlenecks, restructure digital sales pipelines, implement scalable operational systems, and guide full digital transformation.',
    businessOutcome: 'Clear operational roadmaps, streamlined sales processes, and derisked expansion.',
    capabilities: [
      'Startup Go-To-Market (GTM) Strategy',
      'B2B Sales Pipeline & Funnel Optimization',
      'Digital Transformation & Systems Audit',
      'Technology Stack Rationalization',
      'Commercial Growth Modeling & KPIs',
      'Process Automation Advisory'
    ],
    deliverables: [
      'Comprehensive Growth & Tech Blueprint',
      'Sales Playbook & Conversion SOPs',
      'System Architecture Migration Plan',
      'Bi-weekly Strategic Review & Execution Sprints'
    ],
    process: [
      { step: '01', title: 'Growth Bottleneck Diagnosis', desc: 'Analyze sales data, client drop-offs, tech debt, and workflow inefficiencies.' },
      { step: '02', title: 'Strategic Roadmap Formulation', desc: 'Develop actionable 90-day execution sprints prioritizing highest ROI interventions.' },
      { step: '03', title: 'Cross-Functional Implementation', desc: 'Align marketing, sales, and tech teams on unified operating metrics.' },
      { step: '04', title: 'Scale & Governance', desc: 'Establish self-sustaining operational rhythms and automated reporting.' }
    ],
    faqs: [
      {
        question: 'How do consulting engagements work at SGS?',
        answer: 'Unlike traditional consulting firms that leave behind theoretical slide decks, SGS actively builds and implements the technology and marketing systems recommended in our strategic blueprints.'
      }
    ],
    iconName: 'Compass',
    relatedIndustrySlugs: ['smes', 'startups', 'professional-services', 'real-estate']
  }
];
