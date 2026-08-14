import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'abc-interiors',
    slug: 'abc-interiors',
    client: 'ABC Interiors',
    industry: 'Interior Design & Architecture',
    industrySlug: 'interior-design',
    location: 'Pune, Maharashtra',
    summary: 'Brand repositioning, editorial portfolio web platform, and targeted homeowner inquiry acquisition for an established interior design studio.',
    challenge: 'ABC Interiors possessed an exceptional portfolio of luxury residential projects but relied predominantly on intermittent architect referrals. Their previous web presence was slow, unoptimized for mobile browsing, and failed to communicate their bespoke design philosophy, resulting in price-sensitive inquiries and prolonged consultation cycles.',
    objective: 'Transform ABC Interiors into a recognized luxury design authority, showcase their completed spatial works through an editorial digital experience, and create a steady stream of qualified homeowner consultation requests.',
    strategy: 'We deployed the SGS ATTRACT → CONVERT → SCALE framework: crafted a refined minimalist brand identity, engineered a high-speed imagery-first portfolio platform, and targeted high-net-worth homeowners in premium residential communities through visual storytelling campaigns.',
    solutionBuilt: [
      'Comprehensive brand identity refinement, typographic hierarchy, and luxury stationery suite',
      'Ultra-fast, mobile-first portfolio website featuring interactive project galleries and spatial walkthroughs',
      'Interactive Consultation Questionnaire filtering project scope, floor area, and investment range',
      'Targeted visual discovery campaigns on Meta focusing on completed villa and penthouse transformations',
      'Automated CRM integration routing qualified client intake briefs instantly to principal designers'
    ],
    servicesDelivered: [
      'Brand Strategy & Visual Identity',
      'Custom Web Platform Development',
      'High-Intent Meta Advertising',
      'Lead Qualification & CRM Automation'
    ],
    qualitativeResults: [
      'Established distinctive luxury market positioning commanding higher initial design consultation fees',
      'Significantly improved inbound lead qualification with detailed homeowner requirements submitted upfront',
      'Eliminated manual follow-up delays through automated portfolio lookbook delivery via WhatsApp and email',
      'Unified portfolio presentation utilized across client pitch meetings and developer proposals'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js Architecture', 'Meta Ads Manager', 'CRM Lead Sync'],
    testimonial: {
      quote: 'SGS understood that in luxury design, credibility is won in the first five seconds. The new digital system positions our studio exactly where we belong and brings us clients who value architectural craft.',
      author: 'Principal Architect & Founder',
      role: 'ABC Interiors'
    }
  },
  {
    id: 'apex-realty-growth',
    slug: 'apex-realty-growth',
    client: 'Apex Realty Group',
    industry: 'Real Estate & Property Development',
    industrySlug: 'real-estate',
    location: 'Western India Region',
    summary: 'Integrated project launch ecosystem, immersive microsite, and automated lead distribution for a multi-unit premium residential enclave.',
    challenge: 'During their flagship project launch, the developer faced intense regional competition, high cost per lead on generic portals, and substantial lead drop-off due to a 24-48 hour delay in sales team response times.',
    objective: 'Create a dedicated project digital destination, capture high-intent buyers seeking 3 & 4 BHK residences, and accelerate the time from digital inquiry to confirmed on-site walkthroughs.',
    strategy: 'SGS engineered a full-funnel acquisition and conversion pipeline: geo-fenced search and social campaigns, a lightning-fast responsive project microsite with 3D interactive unit layouts, and instant automated CRM lead routing directly to on-site sales managers.',
    solutionBuilt: [
      'Dedicated project launch web portal featuring interactive floorplans and location proximity maps',
      'High-intent Google Search campaigns capturing specific residential micro-market queries',
      'Dynamic Meta video ads highlighting project amenities, construction progress, and architectural renders',
      'Two-way CRM integration with instant lead notification bots triggering SMS/WhatsApp follow-ups within 90 seconds',
      'Real-time executive performance dashboard tracking ad spend, lead quality tiers, and scheduled site visits'
    ],
    servicesDelivered: [
      'Digital Growth & Performance Marketing',
      'High-Conversion Website Development',
      'CRM Integration & Pipeline Automation',
      'Creative & Advertising Asset Production'
    ],
    qualitativeResults: [
      'Substantially reduced prospect response latency from over 24 hours down to under 2 minutes',
      'Increased ratio of qualified scheduled site visits relative to total marketing inquiries',
      'Eliminated duplicate lead entries and streamlined sales representative accountability across shifts',
      'Delivered transparent daily attribution showing exact campaign source for booked unit reservations'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'Custom Web Architecture', 'Webhook Automation', 'CRM Integration']
  },
  {
    id: 'finedge-advisory',
    slug: 'finedge-advisory',
    client: 'FinEdge Advisory Partners',
    industry: 'Professional Services & Corporate Advisory',
    industrySlug: 'professional-services',
    location: 'Mumbai & Pune',
    summary: 'Corporate brand elevation, executive thought leadership positioning, and inbound corporate consultation pipeline for a financial advisory firm.',
    challenge: 'FinEdge provided institutional-grade corporate tax, M&A, and debt syndication advisory, but their legacy website was static, text-heavy, and indistinguishable from traditional accounting firms. Prospective corporate clients had difficulty understanding their specialized practice areas.',
    objective: 'Reposition the firm as a modern strategic financial partner for mid-market CFOs and business owners, enhance partner authority, and generate inbound advisory consultations.',
    strategy: 'We reorganized their service architecture into outcome-focused practice pillars, developed an authoritative corporate platform, and deployed executive leadership features and industry whitepapers.',
    solutionBuilt: [
      'Re-engineered corporate brand language, typography, and premium corporate presentation templates',
      'Modern, highly accessible corporate web platform with dedicated practice vertical pages and case highlights',
      'Executive thought leadership editorial series and business media features highlighting managing partners',
      'B2B Search intent campaigns targeting CFO and founder search queries for transaction advisory',
      'Digital client intake workflow allowing prospective clients to securely schedule confidential discovery sessions'
    ],
    servicesDelivered: [
      'Business Consulting & Strategic Narrative',
      'Brand & Creative Design',
      'Corporate Web Development',
      'Business Media & Executive Positioning'
    ],
    qualitativeResults: [
      'Enhanced institutional credibility during high-stakes enterprise advisory pitches and investor reviews',
      'Consistently attracted corporate founders and CFOs for structured transaction advisory consultations',
      'Transformed partner insights into high-authority media assets referenced during business proposals',
      'Streamlined initial client onboarding with secure digital documentation discovery'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Search Engine Architecture', 'Executive PR Syndication']
  },
  {
    id: 'novacommerce',
    slug: 'novacommerce',
    client: 'Nova Distribution & Commerce',
    industry: 'SMEs & Growing Enterprises',
    industrySlug: 'smes',
    location: 'Maharashtra Region',
    summary: 'End-to-end digital modernization: custom B2B ordering portal, automated inventory inquiry sync, and multi-channel commercial growth.',
    challenge: 'A growing industrial distributor managed dealer orders and product inquiries manually through phone calls and paper catalogs, leading to frequent inventory misunderstandings, delayed order fulfillment, and limited regional growth.',
    objective: 'Digitize the entire product catalog, automate dealer product inquiries and order requests, and expand wholesale market reach into new territories.',
    strategy: 'SGS built a unified digital operating system combining a modern digital catalog portal, automated CRM dealer routing, and focused B2B digital visibility campaigns.',
    solutionBuilt: [
      'Custom B2B digital catalog portal featuring structured product specs, downloadable technical sheets, and request-for-quote (RFQ) engine',
      'CRM integration synchronizing incoming dealer inquiries with sales representatives by regional territory',
      'Search engine optimization and performance marketing targeting wholesale procurement managers',
      'Automated email and WhatsApp order confirmation notifications for verified trade accounts'
    ],
    servicesDelivered: [
      'Technology Solutions & Custom Portal Development',
      'Digital Growth & B2B Performance Marketing',
      'Process & Pipeline Automation',
      'Brand & Catalog Asset Redesign'
    ],
    qualitativeResults: [
      'Replaced cumbersome paper catalogs with an always-updated, instant mobile-friendly digital catalog',
      'Reduced manual inquiry processing time and minimized order miscommunication between dealers and warehouse',
      'Successfully onboarded new regional distributors discovering the company through targeted search channels',
      'Provided management with clear visibility into high-demand product categories and dealer inquiry patterns'
    ],
    techStack: ['Custom Web Platform', 'PostgreSQL Data Layer Ready', 'CRM Sync', 'Automated Webhooks', 'Google Ads']
  }
];
