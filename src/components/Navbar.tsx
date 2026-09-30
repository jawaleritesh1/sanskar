import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  PhoneCall
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

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#080E32]/75 backdrop-blur-xl border-b border-white/10 py-2 sm:py-2.5 shadow-xl shadow-black/20'
          : 'bg-transparent border-b border-transparent py-2.5 sm:py-3.5'
        }`}
    >
      {/* Top Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#080E32] via-[#2033FF] to-[#AFEB00] origin-left z-50 shadow-[0_0_12px_rgba(174,240,0,0.5)]"
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
            className="flex items-center group text-left focus:outline-none"
            aria-label="Sanskar Growth Solutions Home"
          >
            <img
              src="/logo/logo.png"
              alt="Sanskar Growth Solutions"
              className="h-16 sm:h-18 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">

            {/* Home */}
            <button
              onClick={() => onNavigate('/')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath === '/'
                  ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath.startsWith('/solutions')
                    ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-[#AFEB00]' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-88 p-3 bg-[#080E32]/88 border border-white/15 rounded-2xl shadow-2xl shadow-black/70 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center gap-2 px-3 py-1.5 mb-1">
                    <span className="h-[2px] w-3 bg-[#AFEB00]" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFEB00] font-mono">
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
                        className="w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-all text-left group block"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors">
                            {s.title}
                          </span>
                          <span className="text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 shrink-0">
                            {s.stage}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 group-hover:text-slate-300 line-clamp-1 mt-0.5 font-sans transition-colors">
                          {s.tagline}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/solutions');
                        setSolutionsDropdownOpen(false);
                      }}
                      className="text-xs font-bold text-[#AFEB00] hover:text-white flex items-center gap-1 group font-heading"
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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath.startsWith('/industries')
                    ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#AFEB00]' : ''}`} />
              </button>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-88 p-3 bg-[#080E32]/88 border border-white/15 rounded-2xl shadow-2xl shadow-black/70 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center gap-2 px-3 py-1.5 mb-1">
                    <span className="h-[2px] w-3 bg-[#AFEB00]" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFEB00] font-mono">
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
                        className="w-full px-3 py-2 rounded-xl hover:bg-white/10 transition-all text-left group block"
                      >
                        <div className="text-xs font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors">
                          {ind.title}
                        </div>
                        <p className="text-[11px] text-slate-400 group-hover:text-slate-300 line-clamp-1 mt-0.5 font-sans transition-colors">
                          {ind.shortDesc}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 px-3 py-1.5">
                    <button
                      onClick={() => {
                        onNavigate('/industries');
                        setIndustriesDropdownOpen(false);
                      }}
                      className="text-xs font-bold text-[#AFEB00] hover:text-white flex items-center gap-1 group font-heading"
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath === '/work' || currentPath.startsWith('/work/')
                  ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
            >
              Work & Proof
            </button>

            {/* About */}
            <button
              id="nav-about-btn"
              onClick={() => onNavigate('/about')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath === '/about'
                  ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
            >
              About
            </button>

            {/* Insights */}
            <button
              id="nav-insights-btn"
              onClick={() => onNavigate('/insights')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath.startsWith('/insights')
                  ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
            >
              Insights
            </button>

            {/* Careers */}
            <button
              id="nav-careers-btn"
              onClick={() => onNavigate('/careers')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-200 ${currentPath === '/careers'
                  ? 'text-white bg-[#2033FF] shadow-md shadow-[#2033FF]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
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
              className="text-xs font-heading font-semibold px-4 py-2.5 rounded-xl text-slate-200 hover:text-[#AFEB00] border border-white/20 hover:border-[#AFEB00]/50 bg-white/5 hover:bg-white/10 transition-all shadow-sm"
            >
              Growth Diagnostic
            </button>
            <button
              id="nav-lets-talk-cta"
              onClick={onOpenProjectModal}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-heading font-bold text-[#141414] bg-[#AFEB00] hover:bg-[#9CD100] rounded-xl transition-all duration-300 shadow-md shadow-[#AFEB00]/25 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
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
              className="text-xs font-heading font-bold px-3.5 py-1.5 bg-[#AFEB00] text-[#141414] rounded-xl shadow-md shadow-[#AFEB00]/20"
            >
              Let's Talk
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 border border-white/15 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#080E32]/85 border-b border-white/15 backdrop-blur-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top duration-200 text-white">
          <div className="space-y-4">

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-[2px] w-3 bg-[#AFEB00]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFEB00] font-mono">
                  Core Navigation
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath === '/' ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  Home
                </button>
                <button
                  onClick={() => { onNavigate('/work'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath === '/work' ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  Work & Proof
                </button>
                <button
                  onClick={() => { onNavigate('/about'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath === '/about' ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  About SGS
                </button>
                <button
                  onClick={() => { onNavigate('/insights'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath.startsWith('/insights') ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  Insights
                </button>
                <button
                  onClick={() => { onNavigate('/careers'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath === '/careers' ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  Careers
                </button>
                <button
                  onClick={() => { onNavigate('/contact'); setMobileMenuOpen(false); }}
                  className={`p-2.5 rounded-xl text-left text-xs font-heading font-bold border transition-all ${currentPath === '/contact' ? 'bg-[#2033FF] text-white border-[#2033FF]' : 'bg-[#0B1446] border-white/10 text-slate-200'
                    }`}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-[2px] w-3 bg-[#AFEB00]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#AFEB00] font-mono">
                  5 Growth Capabilities
                </span>
              </div>
              <div className="space-y-1">
                {servicesData.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => { onNavigate(`/solutions/${s.slug}`); setMobileMenuOpen(false); }}
                    className="w-full flex items-center justify-between p-2 rounded-xl text-xs text-slate-200 hover:bg-white/5 font-sans"
                  >
                    <span className="font-heading font-semibold">{s.title}</span>
                    <span className="text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                      {s.stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={() => { onOpenDiagnostic(); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 rounded-xl bg-[#0B1446] border border-white/20 text-xs font-heading font-semibold text-white text-center hover:bg-white/10 hover:border-[#AFEB00] hover:text-[#AFEB00]"
              >
                Evaluate Growth Bottlenecks
              </button>
              <button
                onClick={() => { onOpenProjectModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 rounded-xl bg-[#AFEB00] text-[#141414] text-xs font-heading font-bold flex items-center justify-center gap-2 shadow-md shadow-[#AFEB00]/25 hover:bg-[#9CD100]"
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
