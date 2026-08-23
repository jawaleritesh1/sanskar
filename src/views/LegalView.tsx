import React from 'react';
import { Shield, FileText } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  return (
    <div className="w-full bg-transparent text-[#092B78] pt-28 sm:pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 mb-10 shadow-[0_15px_40px_rgba(9,43,120,0.04)]">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B]" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FF] border border-[#092B78]/10 text-[#092B78] text-xs font-bold uppercase tracking-wider mb-4">
            {type === 'privacy' ? <Shield size={14} className="text-[#FF4B16]" /> : <FileText size={14} className="text-[#FF4B16]" />}
            <span>LEGAL GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#092B78]">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Official Corporate Entity: Sanskar Growth Solutions (SGS) • Domain: sanskargrowthsolutions.com • Last Updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(9,43,120,0.04)]">
          {type === 'privacy' ? (
            <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">1. Information Collection & Usage</h2>
                <p>
                  Sanskar Growth Solutions ("SGS", "we", "us", or "our") operates the official website at <strong className="text-[#092B78]">https://www.sanskargrowthsolutions.com</strong>. We collect business contact information (including name, work email address, telephone number, organization name, and project scope details) solely when voluntarily submitted through our consultation and inquiry forms.
                </p>
                <p>
                  This information is utilized strictly to evaluate commercial requirements, provide customized growth architectures, respond to client communications, and facilitate business operations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">2. Data Confidentiality & Non-Disclosure</h2>
                <p>
                  We recognize the sensitivity of corporate growth strategies, ad spend allocations, and internal operational data. We do not sell, rent, or lease client data or contact lists to any third parties. Data is accessible solely to authorized SGS growth strategists and technical personnel under binding confidentiality obligations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">3. Analytics & Cookies</h2>
                <p>
                  Our platform utilizes privacy-respecting telemetry, Google Analytics 4, and conversion tracking pixels to analyze website performance, user journeys, and page response latency. Users may configure their browser preferences to disable non-essential cookies at any time.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">4. Contact & Inquiries</h2>
                <p>
                  For data protection inquiries, corrections, or erasure requests, please contact our administrative office at: <strong className="text-[#092B78]">hello@sanskargrowthsolutions.com</strong>
                </p>
              </section>

            </div>
          ) : (
            <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">1. Scope of Engagement</h2>
                <p>
                  Sanskar Growth Solutions ("SGS") provides growth consulting, performance marketing, brand advisory, and custom software development services under formal statements of work (SOW) and service level agreements (SLAs).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">2. Intellectual Property Rights</h2>
                <p>
                  All custom code repositories, website builds, proprietary funnel architectures, and brand collateral developed for clients become the intellectual property of the respective client upon full settlement of contracted milestone fees, subject to standard licensing terms for third-party open-source libraries.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">3. Service Delivery & Warranties</h2>
                <p>
                  SGS executes all projects with commercial and engineering diligence in accordance with agreed specifications. While we optimize campaigns and architectures for maximum conversion velocity, commercial outcomes are influenced by external market forces, client sales execution, and product-market factors.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-[#092B78]">4. Governing Jurisdiction</h2>
                <p>
                  These terms are governed by the commercial laws of India, with exclusive jurisdiction in the courts of Pune, Maharashtra.
                </p>
              </section>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
