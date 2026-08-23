import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  User,
  X,
  Share2, 
  CheckCircle2,
  Bookmark,
  Newspaper,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Rocket
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
    <div className="w-full bg-transparent text-[#092B78] pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#FF4B16] selection:text-white overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6)_0%,rgba(247,249,255,0.25)_45%,rgba(234,240,255,0.5)_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8D8FF] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#FF4B16] blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#FF4B16]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78]">
              SGS Executive Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#092B78] leading-[1.08]">
            Strategic Perspectives For <br />
            Building{" "}
            <span className="relative inline-block text-[#FF4B16]">
              What's Next
              <motion.span
                animate={{ scaleX: [0, 1, 1] }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            In-depth strategic articles on high-converting web architecture, performance demand generation, CRM implementation, and practical AI automation.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200/80">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#092B78] text-white shadow-lg shadow-[#092B78]/25 scale-105'
                      : 'bg-white/80 border border-slate-200/80 text-[#092B78] hover:bg-white hover:border-[#092B78]/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-11 pr-4 py-2.5 text-xs bg-white/90 border border-slate-200/80 rounded-full text-[#092B78] placeholder-slate-400 focus:outline-none focus:border-[#FF4B16] focus:ring-2 focus:ring-[#FF4B16]/20 transition-all shadow-sm"
            />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredArticles.map((art) => (
            <div
              key={art.slug}
              id={`insight-card-${art.slug}`}
              onClick={() => setSelectedArticle(art)}
              className="relative overflow-hidden cursor-pointer rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 hover:border-[#092B78]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_40px_rgba(9,43,120,0.04)] hover:-translate-y-1.5"
            >
              {/* Top Hover Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#092B78] via-[#FF4B16] to-[#FFA07A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#092B78] group-hover:text-[#FF4B16] transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-[#092B78]">{art.author.name}</span>
                  <span>{art.publishedDate}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#FF4B16]">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="relative overflow-hidden rounded-3xl bg-[#051336] p-8 sm:p-12 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4B16]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4B16] border border-white/10 mb-2.5 backdrop-blur-sm">
              <Rocket size={13} />
              <span>Tailored Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Looking for tailored growth insights for your enterprise?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              Our growth strategists conduct custom audits on ad pipelines, conversion leaks, and tech debt.
            </p>
          </div>
          <button
            onClick={() => onOpenProjectModal()}
            className="relative z-10 flex items-center gap-2 rounded-full bg-[#FF4B16] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] shrink-0 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Schedule a Strategic Audit</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051336]/75 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 text-[#092B78] shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#071F5B] via-[#2563EB] to-[#071F5B] rounded-t-3xl" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6 pt-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase px-3 py-0.5 rounded-full bg-[#EEF3FF] text-[#092B78] border border-[#092B78]/10">
                    {selectedArticle.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                    <Clock size={13} className="text-slate-400" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-semibold">{selectedArticle.publishedDate}</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-[#092B78] leading-tight">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-600">
                  <User size={14} className="text-[#FF4B16]" />
                  <span>By <strong className="text-[#092B78]">{selectedArticle.author.name}</strong>, {selectedArticle.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
                  title="Share article"
                  aria-label="Share article"
                >
                  <Share2 size={16} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2.5 rounded-full bg-[#EEF3FF] text-[#092B78] hover:text-[#FF4B16] hover:bg-[#C8D8FF]/50 transition-colors"
                  aria-label="Close article modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {copiedLink && (
              <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-semibold">
                Link copied to clipboard!
              </div>
            )}

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#EEF3FF] border border-[#092B78]/15 mb-8">
              <span className="text-xs uppercase font-bold text-[#092B78] tracking-wider block mb-3 flex items-center gap-2">
                <Bookmark size={15} className="text-[#FF4B16]" />
                Executive Summary & Key Takeaways
              </span>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 font-medium">
                    <CheckCircle2 size={15} className="text-[#FF4B16] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Markdown Render */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line border-b border-slate-100 pb-8 mb-8 font-sans">
              {selectedArticle.contentMarkdown}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-bold text-slate-500 hover:text-[#092B78] transition-colors"
              >
                ← Back to Insights Listing
              </button>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenProjectModal();
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#FF4B16] px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-[#FF4B16]/25 transition-all duration-300 hover:bg-[#E03E0E] active:scale-95"
              >
                <span>Discuss This Framework with SGS</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
