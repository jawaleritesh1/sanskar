import { prisma } from './prisma.service';
import { ContactInput, ConsultationInput, DiagnosticInput, NewsletterInput } from '../types';

class StorageService {
  public async saveContact(data: ContactInput) {
    return prisma.contactInquiry.create({
      data: {
        fullName: data.fullName,
        company: data.company,
        workEmail: data.workEmail,
        phone: data.phone,
        website: data.website || null,
        selectedService: data.selectedService || 'digital-growth',
        budgetRange: data.budgetRange || null,
        projectTimeline: data.projectTimeline || null,
        message: data.message || null,
        consent: data.consent
      }
    });
  }

  public async saveConsultation(data: ConsultationInput) {
    return prisma.consultationRequest.create({
      data: {
        fullName: data.fullName,
        company: data.company,
        workEmail: data.workEmail,
        phone: data.phone,
        website: data.website || null,
        selectedRequirement: data.selectedRequirement || 'generate',
        budgetRange: data.budgetRange || null,
        timeline: data.timeline || null,
        message: data.message || null,
        consent: data.consent
      }
    });
  }

  public async saveDiagnostic(data: DiagnosticInput) {
    return prisma.growthDiagnostic.create({
      data: {
        businessType: data.businessType,
        primaryBottleneck: data.primaryBottleneck,
        currentRevenueStage: data.currentRevenueStage,
        recommendedStage: data.recommendedStage,
        recommendedTitle: data.recommendedTitle,
        recommendedSolution: data.recommendedSolution,
        contactName: data.contactInfo?.fullName || null,
        contactCompany: data.contactInfo?.company || null,
        contactEmail: data.contactInfo?.workEmail || null,
        contactPhone: data.contactInfo?.phone || null
      }
    });
  }

  public async saveNewsletter(data: NewsletterInput) {
    return prisma.newsletterSubscriber.upsert({
      where: { email: data.email.toLowerCase() },
      update: { isActive: true },
      create: {
        email: data.email.toLowerCase(),
        isActive: true
      }
    });
  }

  public async saveCareerApplication(data: {
    jobId: string;
    jobTitle: string;
    applicantName: string;
    applicantEmail: string;
    applicantPhone?: string;
    portfolioLink?: string;
    applicantNote?: string;
  }) {
    return prisma.careerApplication.create({
      data: {
        jobId: data.jobId,
        jobTitle: data.jobTitle,
        applicantName: data.applicantName,
        applicantEmail: data.applicantEmail,
        applicantPhone: data.applicantPhone || null,
        portfolioLink: data.portfolioLink || null,
        applicantNote: data.applicantNote || null
      }
    });
  }

  public async getAllSubmissions() {
    const [contacts, consultations, diagnostics, newsletter, careers] = await Promise.all([
      prisma.contactInquiry.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.consultationRequest.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.growthDiagnostic.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.newsletterSubscriber.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.careerApplication.findMany({ orderBy: { createdAt: 'desc' } })
    ]);

    return {
      contacts,
      consultations,
      diagnostics,
      newsletter,
      careers
    };
  }
}

export const storage = new StorageService();
