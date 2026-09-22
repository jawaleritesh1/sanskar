import React from "react";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

interface HeroProps {
    onNavigate?: (path: string) => void;
}

const valueItems = [
    { icon: Target, title: "Strategic Approach" },
    { icon: BarChart3, title: "Data-Driven Results" },
    { icon: Users, title: "Client Focused" },
    { icon: Sparkles, title: "Innovation First" },
];

const stats = [
    { value: "50+", label: "Happy Clients" },
    { value: "100+", label: "Projects Completed" },
    { value: "5+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Hero({ onNavigate }: HeroProps) {
    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 900], [0, 80]);
    const curveY = useTransform(scrollY, [0, 900], [0, -45]);
    const contentY = useTransform(scrollY, [0, 900], [0, -25]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
    const visualX = useTransform(smoothX, [-500, 500], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleNav = (path: string) => {
        if (onNavigate) onNavigate(path);
        else window.location.href = path;
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen overflow-hidden bg-[#080E32] text-white pt-24 sm:pt-28 pb-16"
        >
            {/* Background Glows & Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Reference style top-right electric blue ambient aura */}
                <div className="absolute -top-24 right-[-5%] h-[450px] w-[450px] rounded-full bg-[#2033FF] blur-[120px] opacity-35" />
                <div className="absolute top-1/3 -left-40 h-[480px] w-[480px] rounded-full bg-[#0F1B64] blur-[140px] opacity-60" />
                <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-[#AFEB00]/20 blur-[140px]"
                />
            </div>

            {/* Decorative SVG Curves */}
            <motion.div style={{ y: curveY }} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-75">
                <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" className="absolute right-[-5%] top-0 h-[85%] sm:h-[90%] w-[72%]">
                    <path d="M 850 0 C 1050 90 1250 60 1600 0 L 1600 1000 C 1400 870 1120 850 850 1000 C 1080 760 1130 500 850 0 Z" fill="#0B1446" />
                    <path d="M 1050 0 C 1250 75 1400 35 1600 0 L 1600 42 C 1410 100 1250 130 1080 65 Z" fill="#AFEB00" />
                    <path d="M 900 0 C 1120 100 1320 75 1600 10" fill="none" stroke="#2033FF" strokeWidth="2.5" opacity="0.6" />
                    <path d="M 900 850 C 1130 760 1360 790 1600 650 L 1600 680 C 1360 850 1130 830 920 900 Z" fill="#2033FF" opacity="0.5" />
                </svg>
            </motion.div>

            {/* Dot Pattern */}
            <div className="pointer-events-none absolute left-8 top-[90px] z-[3] grid grid-cols-4 gap-3 opacity-25">
                {Array.from({ length: 20 }).map((_, index) => (
                    <motion.span
                        key={index}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2.5, delay: index * 0.05, repeat: Infinity }}
                        className="h-1 w-1 rounded-full bg-[#2033FF]"
                    />
                ))}
            </div>

            {/* Hero Content */}
            <motion.div style={{ y: contentY }} className="relative z-20 mx-auto max-w-[1440px] px-6 pt-2 lg:px-12 lg:pt-4">
                <div className="grid min-h-[580px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
                    {/* Left Content */}
                    <div className="relative z-20 max-w-[720px]">
                        {/* Eyebrow / Reference Badge */}
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                IN CONTEXT
                            </span>
                            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#AFEB00] text-[#141414] text-xs font-extrabold uppercase tracking-[0.16em] shadow-lg shadow-[#AFEB00]/25">
                                PERFORMANCE
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="max-w-[760px] text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[54px] md:text-[60px] lg:text-[64px] font-heading"
                        >
                            Turn ad spend into{" "}
                            <span className="text-[#AFEB00] drop-shadow-[0_0_25px_rgba(175,235,0,0.35)]">
                                real growth.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.25 }}
                            className="mt-6 max-w-[600px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 font-sans"
                        >
                            Data-led campaigns, engineered to compound. Sanskar Growth Solutions builds full-funnel digital growth systems that convert high-intent buyers and scale enterprise revenue.
                        </motion.p>

                        {/* CTAs matching reference: Lime Start Scaling + Border See Results */}
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => handleNav("/contact")}
                                className="group flex items-center gap-3 rounded-full bg-[#AFEB00] px-7 py-3.5 text-sm font-bold text-[#141414] shadow-xl shadow-[#AFEB00]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9CD600] hover:shadow-2xl active:scale-95"
                            >
                                Start scaling
                                <ArrowRight size={18} className="text-[#141414] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => handleNav("/work")}
                                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40"
                            >
                                See results
                                <ArrowRight size={18} className="text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                            </button>
                        </motion.div>

                        {/* Reference Hero Key Stats */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.55 }}
                            className="mt-12 flex items-center gap-8 sm:gap-12 pt-8 border-t border-white/10"
                        >
                            <div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-[#AFEB00] font-heading">
                                    +187%
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                                    avg. leads
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10" />
                            <div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                                    14 days
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                                    to launch
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
                            <div className="hidden sm:block">
                                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                                    98%
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                                    satisfaction rate
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative mt-4 block h-[360px] sm:h-[440px] lg:mt-0 lg:h-[540px]">
                        <motion.div style={{ y: imageY, x: visualX }} className="relative h-full w-full lg:absolute lg:inset-0">
                            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0B1446] shadow-2xl shadow-[#080E32]/80 lg:absolute lg:right-[-2%] lg:top-[4%] lg:h-[480px] lg:w-[94%] lg:rounded-[42%_0_42%_20%]">
                                <img
                                    src="/assets/images/sgs-office.webp"
                                    alt="Sanskar Growth Solutions Office"
                                    className="h-full w-full object-cover object-center opacity-85 brightness-95 contrast-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "/assets/logo/logo.png";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#080E32]/80 via-transparent to-[#2033FF]/20" />
                            </div>

                            {/* Floating Lime Energy Orb */}
                            <motion.div
                                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-3 top-3 h-12 w-12 rounded-full bg-[#AFEB00] shadow-2xl shadow-[#AFEB00]/50 lg:right-[6%] lg:top-[14%] flex items-center justify-center font-extrabold text-[#141414] text-xs"
                            >
                                SGS
                            </motion.div>

                            {/* Floating Mini Dark Glass Performance Metric */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-3 left-4 rounded-2xl bg-[#0B1446]/95 border border-white/15 p-4 shadow-2xl backdrop-blur-xl max-w-[220px]"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#AFEB00] animate-ping" />
                                    <span className="text-xs font-semibold text-slate-300">Live ROI Multiplier</span>
                                </div>
                                <div className="text-xl font-bold text-white font-heading mt-1.5">+4.8x ROAS</div>
                                <div className="text-[10px] text-slate-400 mt-0.5">Automated compounding cycle</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Value Strip in Dark Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="relative z-30 mt-12 rounded-2xl bg-[#0B1446]/80 border border-white/10 shadow-2xl backdrop-blur-xl p-2 sm:p-3 grid grid-cols-2 lg:grid-cols-4 gap-2"
                >
                    {valueItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -2 }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 ${
                                    idx < 3 ? 'lg:border-r lg:border-white/10' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2033FF]/15 border border-[#2033FF]/30 text-[#AFEB00]">
                                    <Icon size={19} className="text-[#AFEB00]" />
                                </div>
                                <span className="text-xs font-bold leading-tight text-white sm:text-sm font-sans">{item.title}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </motion.div>
        </section>
    );
}
