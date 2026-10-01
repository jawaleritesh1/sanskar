import { z } from 'zod';

export const ContactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().min(1, 'Company name is required'),
  workEmail: z.string().email('Valid work email is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  website: z.string().optional(),
  selectedService: z.string().optional().default('digital-growth'),
  budgetRange: z.string().optional(),
  projectTimeline: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Consent is required')
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const ConsultationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  company: z.string().min(1, 'Company name is required'),
  workEmail: z.string().email('Valid work email is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  website: z.string().optional(),
  selectedRequirement: z.string().optional().default('generate'),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Consent is required')
});

export type ConsultationInput = z.infer<typeof ConsultationSchema>;

export const DiagnosticSchema = z.object({
  businessType: z.string(),
  primaryBottleneck: z.string(),
  currentRevenueStage: z.string(),
  recommendedStage: z.string(),
  recommendedTitle: z.string(),
  recommendedSolution: z.string(),
  contactInfo: z.object({
    fullName: z.string().optional(),
    company: z.string().optional(),
    workEmail: z.string().email().optional(),
    phone: z.string().optional()
  }).optional()
});

export type DiagnosticInput = z.infer<typeof DiagnosticSchema>;

export const NewsletterSchema = z.object({
  email: z.string().email('Valid email address is required')
});

export type NewsletterInput = z.infer<typeof NewsletterSchema>;

export const CareerApplicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  applicantName: z.string().min(1, 'Applicant name is required'),
  applicantEmail: z.string().email('Valid email is required'),
  applicantPhone: z.string().optional(),
  portfolioLink: z.string().optional(),
  applicantNote: z.string().optional()
});

export type CareerApplicationInput = z.infer<typeof CareerApplicationSchema>;

export interface StoredRecord<T> {
  id: string;
  createdAt: string;
  data: T;
}
