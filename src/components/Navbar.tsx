import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Layers, TrendingUp, Code2, Sparkles, Newspaper, Compass, Building2, Home, Briefcase, Rocket, Factory, PhoneCall } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenProjectModal,
  onOpenDiagnostic
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'digital-growth': return <TrendingUp className="w-4 h-4 text-[#3B82F6]" />;
      case 'technology': return <Code2 className="w-4 h-4 text-[#10B981]" />;
      case 'brand-creative': return <Sparkles className="w-4 h-4 text-[#F97316]" />;
      case 'business-media': return <Newspaper className="w-4 h-4 text-[#8B5CF6]" />;
      case 'business-consulting': return <Compass className="w-4 h-4 text-[#EAB308]" />;
      default: return <Layers className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building2 className="w-4 h-4 text-[#3B82F6]" />;
      case 'interior-design': return <Home className="w-4 h-4 text-[#F97316]" />;
      case 'professional-services': return <Briefcase className="w-4 h-4 text-[#10B981]" />;
      case 'startups': return <Rocket className="w-4 h-4 text-[#8B5CF6]" />;
      case 'smes': return <Factory className="w-4 h-4 text-[#EAB308]" />;
      default: return <Building2 className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-slate-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Wordmark */}
          <button
            id="nav-logo-btn"
            onClick={() => {
              onNavigate('/');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 flex items-center justify-center font-bold text-base text-white tracking-wider shadow-inner group-hover:border-orange-500/50 transition-colors">
              <span className="text-[#3B82F6]">S</span>
              <span className="text-[#F97316]">G</span>
              <span className="text-white">S</span>
            </div>
            <div>
              <span className="block font-bold tracking-tight text-white text-base sm:text-lg leading-tight font-sans">
                Sanskar Growth Solutions
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-slate-400 font-sans">
                Technology • Marketing • Innovation
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                id="nav-solutions-btn"
                onClick={() => onNavigate('/solutions')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath.startsWith('/solutions')
                    ? 'text-white bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-3 bg-[#0F172A] border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] uppercase font-semibold tracking-wider text-slate-400 px-3 py-1.5 mb-1">
                    5 Growth Capabilities
                  </div>
                  <div className="space-y-1">
                    {servicesData.map((s) => (
                      <button
                        key={s.slug}
                        id={`nav-sol-${s.slug}`}
                        onClick={() => {
                          onNavigate(`/solutions/${s.slug}`);
                          setSolutionsDropdownOpen(false);
                        }}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors text-left group"
                      >
                        <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-slate-700 transition-colors mt-0.5">
                          {getServiceIcon(s.id)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-200 group-hover:text-white flex items-center gap-1.5">
                            {s.title}
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-slate-300">
                              {s.stage}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{s.tagline}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/solutions');
                        setSolutionsDropdownOpen(false);
                      }}
                      className="text-xs font-semibold text-[#F97316] hover:text-orange-400 flex items-center gap-1 group"
                    >
                      View All 5 Capabilities & Outcomes
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <button
                id="nav-industries-btn"
                onClick={() => onNavigate('/industries')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath.startsWith('/industries')
                    ? 'text-white bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-3 bg-[#0F172A] border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] uppercase font-semibold tracking-wider text-slate-400 px-3 py-1.5 mb-1">
                    Sectors We Serve
                  </div>
                  <div className="space-y-1">
                    {industriesData.map((ind) => (
                      <button
                        key={ind.slug}
                        id={`nav-ind-${ind.slug}`}
                        onClick={() => {
                          onNavigate(`/industries/${ind.slug}`);
                          setIndustriesDropdownOpen(false);
                        }}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors text-left group"
                      >
                        <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-slate-700 transition-colors mt-0.5">
                          {getIndustryIcon(ind.id)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                            {ind.title}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{ind.shortDesc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/industries');
                        setIndustriesDropdownOpen(false);
                      }}
                      className="text-xs font-semibold text-[#3B82F6] hover:text-blue-400 flex items-center gap-1 group"
                    >
                      Explore Industry Solutions
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Work */}
            <button
              id="nav-work-btn"
              onClick={() => onNavigate('/work')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === '/work' || currentPath.startsWith('/work/')
                  ? 'text-white bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Work
            </button>

            {/* About */}
            <button
              id="nav-about-btn"
              onClick={() => onNavigate('/about')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === '/about'
                  ? 'text-white bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              About
            </button>

            {/* Insights */}
            <button
              id="nav-insights-btn"
              onClick={() => onNavigate('/insights')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath.startsWith('/insights')
                  ? 'text-white bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Insights
            </button>

            {/* Careers */}
            <button
              id="nav-careers-btn"
              onClick={() => onNavigate('/careers')}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === '/careers'
                  ? 'text-white bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Careers
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-diagnostic-cta"
              onClick={onOpenDiagnostic}
              className="text-xs font-semibold px-3 py-2 rounded-lg text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-600 bg-slate-800/40 transition-colors"
            >
              System Diagnostic
            </button>
            <button
              id="nav-lets-talk-cta"
              onClick={onOpenProjectModal}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#F97316] hover:bg-orange-600 rounded-lg transition-all shadow-md shadow-orange-500/20 active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-lets-talk-cta"
              onClick={onOpenProjectModal}
              className="text-xs font-semibold px-3 py-1.5 bg-[#F97316] text-white rounded-md"
            >
              Let's Talk
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B0F19]/98 border-b border-slate-800 backdrop-blur-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top duration-200">
          <div className="space-y-4">
            
            <div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                Core Navigation
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath === '/' ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  Home
                </button>
                <button
                  onClick={() => { onNavigate('/work'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath === '/work' ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  Work & Proof
                </button>
                <button
                  onClick={() => { onNavigate('/about'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath === '/about' ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  About SGS
                </button>
                <button
                  onClick={() => { onNavigate('/insights'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath.startsWith('/insights') ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  Insights
                </button>
                <button
                  onClick={() => { onNavigate('/careers'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath === '/careers' ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  Careers
                </button>
                <button
                  onClick={() => { onNavigate('/contact'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium ${currentPath === '/contact' ? 'bg-slate-800 text-white' : 'text-slate-300'}`}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                5 Growth Capabilities
              </div>
              <div className="space-y-1">
                {servicesData.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => { onNavigate(`/solutions/${s.slug}`); setMobileMenuOpen(false); }}
                    className="w-full flex items-center justify-between p-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {s.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                Industries We Serve
              </div>
              <div className="grid grid-cols-1 gap-1">
                {industriesData.map((ind) => (
                  <button
                    key={ind.slug}
                    onClick={() => { onNavigate(`/industries/${ind.slug}`); setMobileMenuOpen(false); }}
                    className="p-2 rounded-lg text-left text-sm text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    {ind.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={() => { onOpenDiagnostic(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-sm font-semibold text-slate-200 text-center"
              >
                Evaluate Growth Bottlenecks
              </button>
              <button
                onClick={() => { onOpenProjectModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 rounded-lg bg-[#F97316] text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Start a Conversation
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
