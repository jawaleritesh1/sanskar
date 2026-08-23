import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Layers, 
  TrendingUp, 
  Code2, 
  Sparkles, 
  Newspaper, 
  Compass, 
  Building2, 
  Home, 
  Briefcase, 
  Rocket, 
  Factory, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'digital-growth': return <TrendingUp className="w-4 h-4 text-[#092B78]" />;
      case 'technology': return <Code2 className="w-4 h-4 text-[#FF4B16]" />;
      case 'brand-creative': return <Sparkles className="w-4 h-4 text-[#092B78]" />;
      case 'business-media': return <Newspaper className="w-4 h-4 text-[#FF4B16]" />;
      case 'business-consulting': return <Compass className="w-4 h-4 text-[#092B78]" />;
      default: return <Layers className="w-4 h-4 text-[#092B78]" />;
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building2 className="w-4 h-4 text-[#092B78]" />;
      case 'interior-design': return <Home className="w-4 h-4 text-[#FF4B16]" />;
      case 'professional-services': return <Briefcase className="w-4 h-4 text-[#092B78]" />;
      case 'startups': return <Rocket className="w-4 h-4 text-[#FF4B16]" />;
      case 'smes': return <Factory className="w-4 h-4 text-[#092B78]" />;
      default: return <Building2 className="w-4 h-4 text-[#092B78]" />;
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-lg shadow-[#092B78]/5'
          : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-4'
      }`}
    >
      {/* Top Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#60A5FA] origin-left z-50 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => {
              onNavigate('/');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <img
              src="/assets/logo/logo.png"
              alt="Sanskar Growth Solutions"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-[#EEF3FF]/90 border border-[#092B78]/10 backdrop-blur-md">

            {/* Home */}
            <button
              onClick={() => onNavigate('/')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentPath === '/'
                  ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                  : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
              }`}
            >
              Home
            </button>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                id="nav-solutions-btn"
                onClick={() => onNavigate('/solutions')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  currentPath.startsWith('/solutions')
                    ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                    : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
                }`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-[#FF4B16]' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-88 p-3 bg-white border border-slate-200/80 rounded-2xl shadow-2xl shadow-[#092B78]/15 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center gap-2 px-3 py-1.5 mb-1">
                    <span className="h-[2px] w-3 bg-[#FF4B16]" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#092B78]">
                      5 Growth Capabilities
                    </span>
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
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#EEF3FF] transition-all text-left group"
                      >
                        <div className="p-2 rounded-xl bg-[#EEF3FF] border border-slate-200/60 group-hover:bg-white group-hover:border-[#FF4B16]/30 transition-colors mt-0.5">
                          {getServiceIcon(s.id)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#092B78] group-hover:text-[#FF4B16] flex items-center gap-1.5">
                            {s.title}
                            <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                              {s.stage}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{s.tagline}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/solutions');
                        setSolutionsDropdownOpen(false);
                      }}
                      className="text-xs font-bold text-[#FF4B16] hover:text-[#E03E0E] flex items-center gap-1 group"
                    >
                      <span>View All Capabilities</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
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
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  currentPath.startsWith('/industries')
                    ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                    : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
                }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#FF4B16]' : ''}`} />
              </button>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-88 p-3 bg-white border border-slate-200/80 rounded-2xl shadow-2xl shadow-[#092B78]/15 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center gap-2 px-3 py-1.5 mb-1">
                    <span className="h-[2px] w-3 bg-[#FF4B16]" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#092B78]">
                      Sectors We Serve
                    </span>
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
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#EEF3FF] transition-all text-left group"
                      >
                        <div className="p-2 rounded-xl bg-[#EEF3FF] border border-slate-200/60 group-hover:bg-white group-hover:border-[#FF4B16]/30 transition-colors mt-0.5">
                          {getIndustryIcon(ind.id)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#092B78] group-hover:text-[#FF4B16]">
                            {ind.title}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{ind.shortDesc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/industries');
                        setIndustriesDropdownOpen(false);
                      }}
                      className="text-xs font-bold text-[#FF4B16] hover:text-[#E03E0E] flex items-center gap-1 group"
                    >
                      <span>Explore Industry Blueprints</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Work */}
            <button
              id="nav-work-btn"
              onClick={() => onNavigate('/work')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentPath === '/work' || currentPath.startsWith('/work/')
                  ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                  : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
              }`}
            >
              Work & Proof
            </button>

            {/* About */}
            <button
              id="nav-about-btn"
              onClick={() => onNavigate('/about')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentPath === '/about'
                  ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                  : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
              }`}
            >
              About
            </button>

            {/* Insights */}
            <button
              id="nav-insights-btn"
              onClick={() => onNavigate('/insights')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentPath.startsWith('/insights')
                  ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                  : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
              }`}
            >
              Insights
            </button>

            {/* Careers */}
            <button
              id="nav-careers-btn"
              onClick={() => onNavigate('/careers')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentPath === '/careers'
                  ? 'text-white bg-[#092B78] shadow-md shadow-[#092B78]/20'
                  : 'text-[#092B78] hover:text-[#092B78] hover:bg-white/70'
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
              className="text-xs font-semibold px-4 py-2 rounded-full text-[#092B78] hover:text-[#092B78] border border-[#092B78]/20 hover:border-[#092B78]/40 bg-white hover:bg-[#EEF3FF] transition-all shadow-sm"
            >
              Growth Diagnostic
            </button>
            <button
              id="nav-lets-talk-cta"
              onClick={onOpenProjectModal}
              className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-[#FF4B16] hover:bg-[#E03E0E] rounded-full transition-all duration-300 shadow-md shadow-[#FF4B16]/25 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight size={14} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-lets-talk-cta"
              onClick={onOpenProjectModal}
              className="text-xs font-semibold px-3.5 py-1.5 bg-[#FF4B16] text-white rounded-full shadow-md shadow-[#FF4B16]/20"
            >
              Let's Talk
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#092B78] hover:bg-[#EEF3FF] border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-white/98 border-b border-slate-200/80 backdrop-blur-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top duration-200">
          <div className="space-y-4">

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-[2px] w-3 bg-[#FF4B16]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#092B78]">
                  Core Navigation
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath === '/' ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => { onNavigate('/work'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath === '/work' ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  Work & Proof
                </button>
                <button
                  onClick={() => { onNavigate('/about'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath === '/about' ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  About SGS
                </button>
                <button
                  onClick={() => { onNavigate('/insights'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath.startsWith('/insights') ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  Insights
                </button>
                <button
                  onClick={() => { onNavigate('/careers'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath === '/careers' ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  Careers
                </button>
                <button
                  onClick={() => { onNavigate('/contact'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                    currentPath === '/contact' ? 'bg-[#092B78] text-white border-[#092B78]' : 'bg-[#F8FAFC] border-slate-200/80 text-[#092B78]'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-[2px] w-3 bg-[#FF4B16]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#092B78]">
                  5 Growth Capabilities
                </span>
              </div>
              <div className="space-y-1">
                {servicesData.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => { onNavigate(`/solutions/${s.slug}`); setMobileMenuOpen(false); }}
                    className="w-full flex items-center justify-between p-2 rounded-xl text-xs text-[#092B78] hover:bg-[#EEF3FF]"
                  >
                    <span className="font-semibold">{s.title}</span>
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-[#EEF3FF] text-[#092B78]">
                      {s.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => { onOpenDiagnostic(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 px-4 rounded-full bg-[#EEF3FF] border border-[#092B78]/20 text-xs font-semibold text-[#092B78] text-center hover:bg-[#C8D8FF]/50"
              >
                Evaluate Growth Bottlenecks
              </button>
              <button
                onClick={() => { onOpenProjectModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 rounded-full bg-[#FF4B16] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF4B16]/20"
              >
                <PhoneCall size={14} />
                <span>Start a Conversation</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
