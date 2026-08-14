import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { SolutionsView } from './views/SolutionsView';
import { IndustriesView } from './views/IndustriesView';
import { WorkView } from './views/WorkView';
import { InsightsView } from './views/InsightsView';
import { AboutView } from './views/AboutView';
import { CareersView } from './views/CareersView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { ProjectInitiationModal } from './components/ProjectInitiationModal';
import { GrowthDiagnosticModal } from './components/GrowthDiagnosticModal';
import { CaseStudy } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectModalPreselectedService, setProjectModalPreselectedService] = useState<string | undefined>(undefined);
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);
  const [activeCaseStudyForModal, setActiveCaseStudyForModal] = useState<CaseStudy | null>(null);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // If hash link on same page
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectModal = (serviceSlug?: string) => {
    setProjectModalPreselectedService(serviceSlug);
    setProjectModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setDiagnosticModalOpen(true);
  };

  // Route matching logic
  const renderCurrentView = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomeView
          onNavigate={navigate}
          onOpenProjectModal={handleOpenProjectModal}
          onOpenDiagnostic={handleOpenDiagnostic}
        />
      );
    }

    if (currentPath.startsWith('/solutions')) {
      const parts = currentPath.split('/');
      const slug = parts[2]; // e.g. /solutions/digital-growth -> 'digital-growth'
      return (
        <SolutionsView
          initialServiceSlug={slug}
          onNavigate={navigate}
          onOpenProjectModal={handleOpenProjectModal}
          onOpenDiagnostic={handleOpenDiagnostic}
        />
      );
    }

    if (currentPath.startsWith('/industries')) {
      const parts = currentPath.split('/');
      const slug = parts[2]; // e.g. /industries/real-estate -> 'real-estate'
      return (
        <IndustriesView
          initialIndustrySlug={slug}
          onNavigate={navigate}
          onOpenProjectModal={handleOpenProjectModal}
          onSelectCaseStudy={(study) => {
            navigate('/work');
          }}
        />
      );
    }

    if (currentPath === '/work' || currentPath.startsWith('/work')) {
      return (
        <WorkView
          onNavigate={navigate}
          onOpenProjectModal={handleOpenProjectModal}
        />
      );
    }

    if (currentPath.startsWith('/insights')) {
      const parts = currentPath.split('/');
      const slug = parts[2];
      return (
        <InsightsView
          initialArticleSlug={slug}
          onNavigate={navigate}
          onOpenProjectModal={handleOpenProjectModal}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutView
          onNavigate={navigate}
          onOpenProjectModal={() => handleOpenProjectModal()}
          onOpenDiagnostic={handleOpenDiagnostic}
        />
      );
    }

    if (currentPath === '/careers') {
      return (
        <CareersView
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactView
          onNavigate={navigate}
          onOpenDiagnostic={handleOpenDiagnostic}
        />
      );
    }

    if (currentPath === '/privacy') {
      return (
        <LegalView
          type="privacy"
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/terms') {
      return (
        <LegalView
          type="terms"
          onNavigate={navigate}
        />
      );
    }

    // Default Fallback to Home
    return (
      <HomeView
        onNavigate={navigate}
        onOpenProjectModal={handleOpenProjectModal}
        onOpenDiagnostic={handleOpenDiagnostic}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F1F5F9] font-sans flex flex-col selection:bg-[#F97316]/30 selection:text-white">
      {/* Global Responsive Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Main View Container */}
      <main className="flex-grow w-full">
        {renderCurrentView()}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={navigate}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Interactive Modals */}
      <ProjectInitiationModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        preselectedService={projectModalPreselectedService}
      />

      <GrowthDiagnosticModal
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
        onSelectSolution={(solutionSlug) => {
          setDiagnosticModalOpen(false);
          navigate(`/solutions/${solutionSlug}`);
        }}
        onOpenContact={() => {
          setDiagnosticModalOpen(false);
          handleOpenProjectModal();
        }}
      />
    </div>
  );
}
