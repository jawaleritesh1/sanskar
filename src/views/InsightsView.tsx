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
    <div className="w-full bg-transparent text-white pt-28 sm:pt-32 pb-24 font-sans selection:bg-[#AFEB00] selection:text-[#141414] overflow-x-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2033FF]/25 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-[#AFEB00]/20 blur-[140px]"
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
            <span className="h-[2px] w-8 bg-[#AFEB00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFEB00] font-heading">
              SGS Executive Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] text-white leading-[1.08]">
            Strategic Perspectives For <br />
            Building{" "}
            <span className="relative inline-block text-[#AFEB00]">
              What's Next
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            In-depth strategic articles on high-converting web architecture, performance demand generation, CRM implementation, and practical AI automation.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-heading transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#AFEB00] text-[#141414] shadow-lg shadow-[#AFEB00]/25 scale-105'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20'
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
              placeholder="Search articles &amp; topics..."
              className="w-full pl-11 pr-4 py-2.5 text-xs bg-[#060B24] border border-white/15 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-[#AFEB00] focus:ring-2 focus:ring-[#AFEB00]/20 transition-all shadow-sm"
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
              className="relative overflow-hidden cursor-pointer rounded-3xl bg-[#0B1446]/85 border border-white/10 p-7 sm:p-8 hover:border-[#AFEB00]/40 hover:bg-[#0E1A5A]/95 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 text-white"
            >
              {/* Top Hover Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#AFEB00] transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-400">
                  <span className="font-semibold text-white font-heading">{art.author.name}</span>
                  <span>{art.publishedDate}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-bold font-heading text-[#AFEB00]">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-[#AFEB00]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B1446] to-[#070D2B] p-8 sm:p-12 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2033FF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#AFEB00] border border-white/10 mb-2.5 backdrop-blur-sm font-heading">
              <Rocket size={13} />
              <span>Tailored Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Looking for tailored growth insights for your enterprise?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              Our growth strategists conduct custom audits on ad pipelines, conversion leaks, and tech debt.
            </p>
          </div>
          <button
            onClick={() => onOpenProjectModal()}
            className="relative z-10 flex items-center gap-2 rounded-full bg-[#AFEB00] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] shrink-0 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Schedule a Strategic Audit</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E32]/85 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0B1446] border border-white/15 rounded-3xl p-7 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2033FF] via-[#AFEB00] to-[#2033FF] rounded-t-3xl" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 mb-6 pt-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase px-3 py-0.5 rounded-full bg-[#070D2B] text-[#AFEB00] border border-white/10 font-heading">
                    {selectedArticle.category}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <Clock size={13} className="text-slate-400" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-slate-400 font-semibold">{selectedArticle.publishedDate}</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-300">
                  <User size={14} className="text-[#AFEB00]" />
                  <span>By <strong className="text-white font-heading">{selectedArticle.author.name}</strong>, {selectedArticle.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
                  title="Share article"
                  aria-label="Share article"
                >
                  <Share2 size={16} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors border border-white/10"
                  aria-label="Close article modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {copiedLink && (
              <div className="mb-4 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs text-center font-semibold">
                Link copied to clipboard!
              </div>
            )}

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#070D2B] border border-white/10 mb-8">
              <span className="text-xs uppercase font-bold text-white font-heading tracking-wider block mb-3 flex items-center gap-2">
                <Bookmark size={15} className="text-[#AFEB00]" />
                Executive Summary &amp; Key Takeaways
              </span>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 font-medium">
                    <CheckCircle2 size={15} className="text-[#AFEB00] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Markdown Render */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line border-b border-white/10 pb-8 mb-8 font-sans">
              {selectedArticle.contentMarkdown}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-bold font-heading text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Insights Listing
              </button>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenProjectModal();
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#AFEB00] px-7 py-3 text-xs sm:text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:bg-[#9CD600] active:scale-95"
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
