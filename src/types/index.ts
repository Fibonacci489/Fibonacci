export type ServiceCategory = 'Product Management' | 'Network Marketing & Business Growth';

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  methodology: string;
  keyBenefits: string[];
}

export type PortfolioCategory =
  | 'All'
  | 'Product Management'
  | 'Strategy & Research'
  | 'Network Marketing'
  | 'Business Development';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Product Management' | 'Strategy & Research' | 'Network Marketing' | 'Business Development';
  shortDesc: string;
  detailedDesc: string;
  tools: string[];
  keyOutcomes: string[];
  badge: string; // e.g., 'Concept Blueprint', 'Strategic Model'
  accentGradient: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  phase: string;
  description: string;
  inputs: string[];
  actions: string[];
  deliverables: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  badge: string;
  businessChallenge: string;
  objectives: string[];
  roleAndResponsibilities: string;
  researchAndStrategy: string[];
  executionApproach: string[];
  toolsAndMethods: string[];
  verifiedOutcomes: string[];
  keyTakeaways: string;
}

export interface Review {
  id: string;
  authorName: string;
  role: string;
  organization: string;
  serviceRelated: string;
  quote: string;
  date: string;
  isTemplate: boolean;
  avatarPlaceholder: string;
}

export interface GuideSection {
  heading: string;
  content: string[];
  keyTakeaway?: string;
}

export interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  sections: GuideSection[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  areaOfInterest: string;
  budgetRange: string;
  details: string;
}
