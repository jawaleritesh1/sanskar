import React from 'react';
import { Shield, FileText } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  return (
    <div className="w-full bg-[#F5FAFF] text-[#1A1A1A] pt-24 sm:pt-28 pb-16 sm:pb-20 font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 mb-6 shadow-lg text-[#141414]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#F5FAFF] border border-slate-300 text-[#2033FF] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            {type === 'privacy' ? <Shield size={14} className="text-[#2033FF]" /> : <FileText size={14} className="text-[#2033FF]" />}
            <span>LEGAL GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#141414]">
            {type === 'privacy' ? 'Privacy Policy & Data Protection' : 'Terms of Service & Advisory Engagement'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium font-sans">
            Official Corporate Entity: Sanskar Growth Solutions (SGS) • Domain: sanskargrowthsolutions.com • Updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-[#141414]">
          {type === 'privacy' ? (
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">1. Information Collection &amp; Usage</h2>
                <p>
                  Sanskar Growth Solutions ("SGS", "we", "us", or "our") operates the official website at <strong className="text-[#2033FF] font-mono">https://www.sanskargrowthsolutions.com</strong>. We collect corporate contact information (including name, work email address, telephone number, organization name, and project scope parameters) solely when voluntarily submitted through our consultation, career, and diagnostic intake forms.
                </p>
                <p>
                  This data is utilized strictly to evaluate commercial requirements, architect customized growth architectures, respond to client communications, and facilitate professional services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">2. Data Confidentiality &amp; Non-Disclosure</h2>
                <p>
                  We understand the sensitivity of corporate growth strategies, ad spend allocations, conversion metrics, and internal proprietary workflows. We do not sell, rent, or lease client data or contact lists to any third parties. Data is accessible solely to authorized SGS partners and engineering personnel under binding confidentiality and NDA terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">3. Analytics &amp; Cookies</h2>
                <p>
                  Our platform utilizes privacy-respecting telemetry, Google Analytics 4, and conversion tracking pixels to analyze website performance, user journeys, and page response latency. Users may configure their browser preferences to disable non-essential cookies at any time.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">4. Contact &amp; Inquiries</h2>
                <p>
                  For data protection inquiries, corrections, or erasure requests, please contact our administrative office at: <strong className="text-[#2033FF] font-mono">hello@sanskargrowthsolutions.com</strong>
                </p>
              </section>

            </div>
          ) : (
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">1. Scope of Engagement</h2>
                <p>
                  Sanskar Growth Solutions ("SGS") provides growth consulting, performance marketing, brand advisory, and custom software development services under formal statements of work (SOW) and service level agreements (SLAs).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">2. Intellectual Property Rights</h2>
                <p>
                  All custom code repositories, website builds, proprietary funnel architectures, and brand collateral developed for clients become the exclusive intellectual property of the respective client upon full settlement of contracted milestone fees, subject to standard licensing terms for third-party open-source libraries.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">3. Service Delivery &amp; Warranties</h2>
                <p>
                  SGS executes all engagements with commercial and engineering rigor in accordance with agreed specifications. While we optimize campaigns and architectures for maximum conversion velocity, commercial outcomes are influenced by external market forces, client sales execution, and product-market factors.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#141414]">4. Governing Jurisdiction</h2>
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
