import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Clock,
  User,
  X,
  Share2,
  CheckCircle2,
  Bookmark,
  Rocket,
  Zap,
  BookOpen
} from 'lucide-react';
import { insightsData } from '../data/insightsData';
import { InsightArticle } from '../types';

interface InsightsViewProps {
  initialArticleSlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const articlePhotos = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
];

export const InsightsView: React.FC<InsightsViewProps> = ({
  initialArticleSlug,
  onNavigate,
  onOpenProjectModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(
    initialArticleSlug ? insightsData.find(a => a.slug === initialArticleSlug) || null : null
  );
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Marketing', 'Technology', 'Business Growth', 'AI & Automation', 'Branding', 'Digital Transformation'];

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#080E32] text-white font-sans selection:bg-[#AFEB00] selection:text-[#0F1B64] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════════
          01. INSIGHTS HERO (CINEMATIC DARK SPLIT)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10 bg-[#080E32] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/15 blur-[140px]" />
          <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#AFEB00]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-mono">
                  SGS Executive Insights
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-[1.08]">
                Strategic Perspectives For <br />
                Building{" "}
                <span className="font-heading font-bold text-[#AFEB00]">
                  What's Next
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                In-depth strategic briefs on performance demand generation, high-converting digital architecture, enterprise CRM systems, and practical AI workflows for growth leaders.
              </p>

              <div className="font-heading text-base sm:text-lg text-slate-200 font-semibold tracking-tight flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#2033FF]" />
                <span>Rigorous thinking, practical market execution.</span>
              </div>
            </motion.div>

            {/* Right Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/15 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80"
                  alt="SGS Thought Leadership"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-transparent to-black/30" />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0A1245] border border-white/15 p-4 rounded-xl shadow-2xl backdrop-blur-xl max-w-[220px] space-y-1.5 z-20">
                <div className="flex items-center gap-2 text-[#AFEB00]">
                  <BookOpen size={16} />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">The Success World</span>
                </div>
                <div className="text-xs text-slate-200 leading-snug font-medium">
                  Official publications and market analysis from the SGS research desk.
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white font-mono text-[11px] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#AFEB00] animate-pulse" />
                <span>Quarterly Analysis</span>
              </div>
            </motion.div>

          </div>

          {/* Stats Bar Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{insightsData.length}+ Briefs</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Published Field Notes</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">7 Categories</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Growth Domains</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">100% Practical</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Tested Playbooks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#AFEB00]">Free Access</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Open Executive Library</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          02. ARTICLES LIBRARY (WARM IVORY / WHITE SECTION BACKGROUND)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F5FAFF] text-[#1A1A1A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2033FF] mb-1.5">
                EXECUTIVE LIBRARY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[#141414] tracking-tight leading-tight">
                Market Analysis &amp; Strategic Notes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Explore tactical guides and perspectives on digital operating stacks, CRM workflows, and modern enterprise scaling.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-300 ${isSelected
                        ? 'bg-[#0F1B64] text-[#AFEB00] shadow-md scale-105'
                        : 'bg-white border border-slate-300/80 text-slate-700 hover:text-black hover:border-slate-400'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-80">
              <Search size={16} className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles &amp; topics..."
                className="w-full pl-11 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-xl text-[#141414] placeholder-slate-400 focus:outline-none focus:border-[#2033FF] shadow-sm transition-all font-sans"
              />
            </div>
          </div>

          {/* Articles Grid with Crisp White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => {
              const photo = articlePhotos[idx % articlePhotos.length];
              return (
                <article
                  key={article.slug}
                  id={`article-card-${article.slug}`}
                  onClick={() => setSelectedArticle(article)}
                  className="cursor-pointer group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-[#141414] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 text-[#1A1A1A]"
                >
                  <div>
                    {/* Photographic Cover */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={photo}
                        alt={article.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#AFEB00] border border-white/15">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Card Body */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-[#2033FF]" />
                          {article.readTime}
                        </span>
                        <span>•</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-[#141414] group-hover:text-[#2033FF] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-[#141414] group-hover:text-[#2033FF] uppercase tracking-wider">
                      <span>Read Brief</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          03. CINEMATIC SUMMIT BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-22 bg-[#080E32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cta-summit.jpg"
            alt="Mountain Summit Sunset"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E32] via-[#080E32]/70 to-[#080E32]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#AFEB00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Direct Partner Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]">
            Apply These Frameworks to Your Enterprise.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's evaluate your commercial bottlenecks and engineer a bespoke system built for compounding market scale.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenProjectModal()}
              className="px-9 py-4 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#0F1B64] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#AFEB00]/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0A1245] border border-white/15 rounded-2xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">

            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#080E32] text-[#AFEB00] border border-white/10">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Clock size={12} className="text-[#AFEB00]" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
                  aria-label="Share article"
                >
                  <Share2 size={16} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {copiedLink && (
              <div className="mb-4 p-2.5 rounded-xl bg-[#AFEB00]/20 border border-[#AFEB00]/40 text-[#AFEB00] text-xs text-center font-mono">
                Link copied to clipboard
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400 font-mono pb-6 border-b border-white/10 mb-6">
              <span>
                By {typeof selectedArticle.author === 'object' && selectedArticle.author !== null
                  ? `${selectedArticle.author.name} (${selectedArticle.author.role})`
                  : String(selectedArticle.author || 'SGS Growth Team')}
              </span>
              <span>•</span>
              <span>{selectedArticle.publishedDate}</span>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              <p className="text-lg font-sans italic text-white/90 border-l-2 border-[#AFEB00] pl-4 py-1">
                "{selectedArticle.excerpt}"
              </p>

              {selectedArticle.keyTakeaways && selectedArticle.keyTakeaways.length > 0 && (
                <div className="p-5 rounded-xl bg-[#080E32] border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#AFEB00]">Core Takeaways</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {selectedArticle.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#AFEB00] mt-0.5 shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedArticle.contentMarkdown && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line border-t border-white/10 pt-4 font-sans">
                  {selectedArticle.contentMarkdown}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-heading font-bold uppercase tracking-wider text-white transition-colors"
              >
                Close Brief
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenProjectModal();
                }}
                className="px-7 py-2.5 rounded-xl bg-[#AFEB00] text-[#0F1B64] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#9CD100] transition-colors shadow-lg shadow-[#AFEB00]/20"
              >
                Discuss This Strategy with SGS
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
