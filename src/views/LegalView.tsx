import React from 'react';
import { Shield, FileText } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  return (
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {type === 'privacy' ? <Shield className="w-3.5 h-3.5 text-blue-400" /> : <FileText className="w-3.5 h-3.5 text-orange-400" />}
            LEGAL GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            Official Corporate Entity: Sanskar Growth Solutions (SGS) • Domain: sanskargrowthsolutions.com • Last Updated: August 2026
          </p>
        </div>

        {/* Content */}
        {type === 'privacy' ? (
          <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Information Collection & Usage</h2>
              <p>
                Sanskar Growth Solutions ("SGS", "we", "us", or "our") operates the official website at <strong className="text-white">https://www.sanskargrowthsolutions.com</strong>. We collect business contact information (including name, work email address, telephone number, organization name, and project scope details) solely when voluntarily submitted through our consultation and inquiry forms.
              </p>
              <p>
                This information is utilized strictly to evaluate commercial requirements, provide customized growth architectures, respond to client communications, and facilitate business operations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">2. Data Confidentiality & Non-Disclosure</h2>
              <p>
                We recognize the sensitivity of corporate growth strategies, ad spend allocations, and internal operational data. We do not sell, rent, or lease client data or contact lists to any third parties. Data is accessible solely to authorized SGS growth strategists and technical personnel under binding confidentiality obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">3. Analytics & Cookies</h2>
              <p>
                Our platform utilizes privacy-respecting telemetry, Google Analytics 4, and conversion tracking pixels to analyze website performance, user journeys, and page response latency. Users may configure their browser preferences to disable non-essential cookies at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">4. Contact & Inquiries</h2>
              <p>
                For data protection inquiries, corrections, or erasure requests, please contact our administrative office at:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Email: hello@sanskargrowthsolutions.com<br />
                Entity: Sanskar Growth Solutions<br />
                Location: Pune, Maharashtra, India
              </div>
            </section>

          </div>
        ) : (
          <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and browsing the official website of Sanskar Growth Solutions (<strong className="text-white">sanskargrowthsolutions.com</strong>), you agree to comply with and be bound by these Terms of Service. If you disagree with any portion of these terms, you should discontinue using the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">2. Intellectual Property & Brand Rights</h2>
              <p>
                All proprietary frameworks (including the ATTRACT → CONVERT → SCALE operating model, Growth Solutions classifications, service blueprints, and case study documentations) published on this site are the intellectual property of Sanskar Growth Solutions. Unauthorized reproduction or imitation is prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">3. Commercial Proposals & Engagement Contracts</h2>
              <p>
                Information presented on this website is for informational and positioning purposes. Formal commercial engagements, service level agreements (SLAs), deliverables, and pricing are established through executed Statements of Work (SOW) and bilateral agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">4. Jurisdiction</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction situated in the courts of Pune, Maharashtra.
              </p>
            </section>

          </div>
        )}

      </div>
    </div>
  );
};
