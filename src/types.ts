export type GrowthStage = 'attract' | 'convert' | 'scale';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  stage: GrowthStage | 'all';
  tagline: string;
  description: string;
  businessOutcome: string;
  capabilities: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  iconName: string;
  relatedIndustrySlugs: string[];
}

export interface GrowthSolution {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  targetAudience: string;
  coreProblem: string;
  includedModules: string[];
  businessOutcomes: string[];
  badge: string;
  accentColor: string;
  deliverables: string[];
  timeframe: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  commonChallenges: { title: string; description: string }[];
  sgsSolution: {
    approach: string;
    operatingLayer: string[];
    outcomes: string[];
  };
  relevantServices: string[];
  featuredProjectSlug?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  industrySlug: string;
  location: string;
  summary: string;
  challenge: string;
  objective: string;
  strategy: string;
  solutionBuilt: string[];
  servicesDelivered: string[];
  qualitativeResults: string[];
  verifiedMetrics?: { value: string; label: string }[];
  techStack?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Marketing' | 'Technology' | 'Business Growth' | 'AI & Automation' | 'Branding' | 'Digital Transformation';
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  contentMarkdown: string;
  keyTakeaways: string[];
  relatedServices: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: 'Technology' | 'Growth & Marketing' | 'Design & Brand' | 'Strategy & Operations';
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export interface ContactEnquiry {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  website?: string;
  serviceCategory: string;
  growthStage?: string;
  budgetRange: string;
  projectTimeline: string;
  message: string;
  consent: boolean;
}
