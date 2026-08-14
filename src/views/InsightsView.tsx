import React, { useState } from 'react';
import { ArrowRight, Search, BookOpen, Clock, User, X, Share2, CheckCircle2, Bookmark, Newspaper } from 'lucide-react';
import { insightsData } from '../data/insightsData';
import { InsightArticle } from '../types';

interface InsightsViewProps {
  initialArticleSlug?: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: (service?: string) => void;
}

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
    <div className="w-full bg-[#0B0F19] text-[#F1F5F9] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Newspaper className="w-3.5 h-3.5 text-[#F97316]" />
            SGS EXECUTIVE INSIGHTS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Ideas for businesses building what's next.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            In-depth strategic articles on high-converting web architecture, performance demand generation, CRM implementation, and practical AI automation.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-800">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#F97316] text-white shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
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
              className="cursor-pointer rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-7 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 border border-slate-700">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{art.author.name}</span>
                  <span className="text-slate-400">{art.publishedDate}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-white">
              Looking for tailored growth insights for your enterprise?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Our growth strategists conduct custom audits on ad pipelines, conversion leaks, and tech debt.
            </p>
          </div>
          <button
            onClick={() => onOpenProjectModal()}
            className="px-6 py-3 rounded-xl bg-[#F97316] text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 shadow-md shadow-orange-500/20 shrink-0"
          >
            Schedule a Strategic Audit →
          </button>
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 px-2 py-0.5 rounded bg-slate-800">
                    {selectedArticle.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{selectedArticle.publishedDate}</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  <span>By <strong className="text-white">{selectedArticle.author.name}</strong>, {selectedArticle.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Share article"
                  aria-label="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close article modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {copiedLink && (
              <div className="mb-4 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs text-center">
                Link copied to clipboard!
              </div>
            )}

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-8">
              <span className="text-xs uppercase font-bold text-orange-400 tracking-wider block mb-2 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                Executive Summary & Key Takeaways
              </span>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Markdown Render */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line border-b border-slate-800 pb-8 mb-8">
              {selectedArticle.contentMarkdown}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                ← Back to Insights Listing
              </button>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenProjectModal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <span>Discuss This Framework with SGS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
