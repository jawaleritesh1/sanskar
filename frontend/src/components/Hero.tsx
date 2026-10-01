import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
    onNavigate?: (path: string) => void;
}

const stats = [
    { value: "50+", label: "Businesses Empowered" },
    { value: "3x", label: "Average Growth in Leads" },
    { value: "4.8/5", label: "Client Satisfaction" },
];

export default function Hero({ onNavigate }: HeroProps) {
    const handleNav = (path: string) => {
        if (onNavigate) onNavigate(path);
        else window.location.href = path;
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28"
        >
            {/* Full-bleed Photographic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-skyline.jpg"
                    alt="Sanskar Growth Solutions Skyline Office"
                    className="h-full w-full object-cover object-center brightness-[0.9] contrast-[1.05]"
                />
                {/* Cinematic Editorial Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
            </div>

            {/* Floating Top-Right Badge: BIGGER BUSINESSES BRIGHTER INDIA */}
            <div className="absolute top-28 sm:top-32 right-6 sm:right-12 z-20 hidden md:block">
                <div className="border border-white/20 bg-black/40 backdrop-blur-md px-4 py-3 rounded-none text-right">
                    <div className="text-[11px] font-bold tracking-[0.25em] text-white/90 leading-tight uppercase font-heading">
                        BIGGER<br />
                        BUSINESSES<br />
                        BRIGHTER<br />
                        INDIA
                    </div>
                </div>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-12 w-full">
                <div className="max-w-3xl">
                    {/* Top Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-[#AFEB00] mb-5 font-mono"
                    >
                        <span className="h-[2px] w-6 bg-[#AFEB00]" />
                        <span>Your Growth. Our Mission.</span>
                    </motion.div>

                    {/* Bold Space Grotesk Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-heading font-bold leading-[1.04] tracking-tight text-white"
                    >
                        Digital Growth<br />
                        for <span className="text-[#AFEB00]">Ambitious</span><br />
                        Enterprises.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="mt-6 text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-xl font-sans font-normal"
                    >
                        One strategic partner delivering integrated technology, marketing, branding, business media, consulting, and AI solutions to build, grow, and scale your business.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
                    >
                        <button
                            onClick={() => handleNav("/contact")}
                            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#AFEB00] hover:bg-[#9CD100] text-[#141414] font-heading font-bold text-xs sm:text-sm px-7 py-3.5 shadow-xl shadow-[#AFEB00]/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                            <span>Start a Conversation</span>
                            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => handleNav("/work")}
                            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/30 bg-black/25 backdrop-blur-md text-white font-heading font-semibold text-xs sm:text-sm px-6 py-3.5 hover:bg-white/15 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                            <span>See Our Work</span>
                            <div className="flex items-center justify-center w-5 h-5 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                                <Play size={10} className="fill-white ml-0.5" />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Stats Strip */}
            <div className="relative z-10 border-t border-white/15 bg-black/60 backdrop-blur-md py-6">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Stats List */}
                    <div className="flex flex-wrap items-center gap-8 sm:gap-14">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-baseline gap-2.5 sm:gap-3">
                                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#AFEB00]">
                                    {stat.value}
                                </span>
                                <span className="text-xs sm:text-[13px] text-slate-300 font-sans max-w-[120px] leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Accent Slogan */}
                    <div className="flex items-center gap-3 self-start md:self-auto">
                        <div className="h-[2px] w-8 bg-[#AFEB00]" />
                        <span className="text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase font-heading">
                            INDIAN BUSINESSES GLOBAL AMBITIONS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
