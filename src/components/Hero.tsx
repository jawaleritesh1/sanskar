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
            className="relative min-h-screen overflow-hidden bg-transparent text-[#092B78] pt-16 sm:pt-20 pb-12"
        >
            {/* Background Glows & Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7)_0%,rgba(247,249,255,0.3)_45%,rgba(234,240,255,0.6)_100%)]" />

                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C8D8FF] blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#FF4B16] blur-[140px]"
                />
            </div>

            {/* Decorative SVG Curves */}
            <motion.div style={{ y: curveY }} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" className="absolute right-[-5%] top-0 h-[80%] sm:h-[84%] w-[72%]">
                    <path d="M 850 0 C 1050 90 1250 60 1600 0 L 1600 1000 C 1400 870 1120 850 850 1000 C 1080 760 1130 500 850 0 Z" fill="#092B78" />
                    <path d="M 1050 0 C 1250 75 1400 35 1600 0 L 1600 42 C 1410 100 1250 130 1080 65 Z" fill="#FF4B16" />
                    <path d="M 900 0 C 1120 100 1320 75 1600 10" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />
                    <path d="M 900 850 C 1130 760 1360 790 1600 650 L 1600 680 C 1360 850 1130 830 920 900 Z" fill="#FF4B16" />
                </svg>
            </motion.div>

            {/* Dot Pattern */}
            <div className="pointer-events-none absolute left-8 top-[68px] z-[3] grid grid-cols-4 gap-3 opacity-35">
                {Array.from({ length: 20 }).map((_, index) => (
                    <motion.span
                        key={index}
                        animate={{ opacity: [0.15, 0.6, 0.15] }}
                        transition={{ duration: 2.5, delay: index * 0.05, repeat: Infinity }}
                        className="h-1 w-1 rounded-full bg-[#092B78]"
                    />
                ))}
            </div>

            {/* Hero Content */}
            <motion.div style={{ y: contentY }} className="relative z-20 mx-auto max-w-[1440px] px-6 pt-2 lg:px-12 lg:pt-4">
                <div className="grid min-h-[580px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
                    {/* Left Content */}
                    <div className="relative z-20 max-w-[720px]">
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex items-center gap-4">
                            <span className="h-[2px] w-10 bg-[#FF4B16]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#092B78] sm:text-sm">
                                Growing Brands. Delivering Results.
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="max-w-[760px] text-[44px] font-bold leading-[1.04] tracking-[-0.04em] text-[#092B78] sm:text-[54px] md:text-[60px] lg:text-[62px] xl:text-[68px]"
                        >
                            Digital Solutions <br />
                            That{" "}
                            <span className="relative inline-block text-[#FF4B16]">
                                Drive Growth
                                <motion.span
                                    animate={{ scaleX: [0, 1, 1] }}
                                    transition={{ duration: 1.1, delay: 1 }}
                                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#FF4B16]/30"
                                />
                            </span>{" "}
                            <br />
                            & Create Impact
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.25 }}
                            className="mt-7 max-w-[600px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
                        >
                            We help businesses build a powerful digital presence, streamline operations, and achieve measurable results through innovative strategies and cutting-edge technology.
                        </motion.p>

                        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => handleNav("/services")}
                                className="group flex items-center gap-3 rounded-full bg-[#092B78] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#092B78]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#071F5B] hover:shadow-2xl"
                            >
                                Explore Services
                                <ArrowRight size={18} className="text-[#FF4B16] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => handleNav("/about")}
                                className="group flex items-center gap-3 rounded-full border border-[#092B78]/30 bg-white/80 px-7 py-4 text-sm font-semibold text-[#092B78] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                            >
                                About SGS
                                <ArrowRight size={18} className="text-[#FF4B16] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative mt-8 block h-[340px] sm:h-[420px] lg:mt-0 lg:h-[580px]">
                        <motion.div style={{ y: imageY, x: visualX }} className="relative h-full w-full lg:absolute lg:inset-0">
                            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/60 bg-slate-100 shadow-2xl shadow-[#092B78]/20 lg:absolute lg:right-[-4%] lg:top-[4%] lg:h-[500px] lg:w-[92%] lg:rounded-[48%_0_45%_20%]">
                                <img
                                    src="/assets/images/sgs-office.webp"
                                    alt="Sanskar Growth Solutions Office"
                                    className="h-full w-full object-cover object-center"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "/assets/logo/logo.png";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#092B78]/25 via-transparent to-white/10" />
                            </div>



                            {/* Floating Orange Orb */}
                            <motion.div
                                animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-3 top-3 h-10 w-10 rounded-full bg-[#FF4B16] shadow-xl shadow-[#FF4B16]/30 lg:right-[6%] lg:top-[16%] lg:h-12 lg:w-12"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Value Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="relative z-30 mt-8 sm:mt-10 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md p-2 sm:p-3 grid grid-cols-2 lg:grid-cols-4 gap-2"
                >
                    {valueItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -2 }}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                                    idx < 3 ? 'lg:border-r lg:border-slate-200/80' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FF] border border-[#092B78]/10 shadow-xs">
                                    <Icon size={19} className="text-[#FF4B16]" />
                                </div>
                                <span className="text-xs font-bold leading-tight text-[#092B78] sm:text-sm">{item.title}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </motion.div>
        </section>
    );
}
