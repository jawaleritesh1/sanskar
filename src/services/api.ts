/// <reference types="vite/client" />
// API Client for Sanskar Growth Solutions Backend

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || '/api';

export interface ApiResponse<T = any> {
  success?: boolean;
  status?: string;
  message?: string;
  id?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface ContactPayload {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  website?: string;
  selectedService?: string;
  budgetRange?: string;
  projectTimeline?: string;
  message?: string;
  consent: boolean;
}

export interface ConsultationPayload {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  website?: string;
  selectedRequirement?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  consent: boolean;
}

export interface DiagnosticPayload {
  businessType: string;
  primaryBottleneck: string;
  currentRevenueStage: string;
  recommendedStage: string;
  recommendedTitle: string;
  recommendedSolution: string;
  contactInfo?: {
    fullName?: string;
    company?: string;
    workEmail?: string;
    phone?: string;
  };
}

async function request<T = any>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(options?.headers || {})
      },
      ...options
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API request failed [${endpoint}]:`, error);
    return {
      success: false,
      message: 'Unable to connect to the server. Please try again later.'
    };
  }
}

export interface CareerPayload {
  jobId: string;
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  portfolioLink?: string;
  applicantNote?: string;
}

export const api = {
  // Check API health
  async checkHealth(): Promise<boolean> {
    try {
      const res = await request('/health');
      return res.status === 'healthy' || res.success === true;
    } catch {
      return false;
    }
  },

  // Submit Contact Form
  async submitContact(payload: ContactPayload): Promise<ApiResponse> {
    return request('/contact', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },

  // Submit Project Consultation Request
  async submitConsultation(payload: ConsultationPayload): Promise<ApiResponse> {
    return request('/consultation', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },

  // Submit 60s Diagnostic Assessment
  async submitDiagnostic(payload: DiagnosticPayload): Promise<ApiResponse> {
    return request('/diagnostic', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },

  // Subscribe to Newsletter
  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    return request('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  },

  // Submit Career Application
  async submitCareerApplication(payload: CareerPayload): Promise<ApiResponse> {
    return request('/career', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
};
