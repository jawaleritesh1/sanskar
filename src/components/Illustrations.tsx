import React from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// HERO ILLUSTRATION — Unified Growth Engine Pipeline
// ═══════════════════════════════════════════════════════════════════════════
export const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Background circles */}
    <circle cx="260" cy="220" r="180" stroke="white" strokeWidth="0.5" opacity="0.06" />
    <circle cx="260" cy="220" r="130" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <circle cx="260" cy="220" r="80" stroke="#C4272E" strokeWidth="0.5" opacity="0.15" />

    {/* Central hub */}
    <rect x="220" y="185" width="80" height="70" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
    <text x="260" y="213" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">SGS</text>
    <text x="260" y="228" textAnchor="middle" fill="#C4272E" fontSize="8" fontFamily="monospace">ENGINE</text>
    <rect x="234" y="237" width="52" height="5" rx="2" fill="#C4272E" fillOpacity="0.8" />

    {/* Attract node — top left */}
    <circle cx="120" cy="100" r="38" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.8" />
    <circle cx="120" cy="100" r="24" fill="#C4272E" fillOpacity="0.2" stroke="#C4272E" strokeWidth="1" />
    <path d="M112 100l8-12 8 12" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="120" cy="108" r="3" fill="white" fillOpacity="0.8" />
    <text x="120" y="148" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.7">ATTRACT</text>

    {/* Convert node — top right */}
    <circle cx="400" cy="100" r="38" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.8" />
    <circle cx="400" cy="100" r="24" fill="#C4272E" fillOpacity="0.2" stroke="#C4272E" strokeWidth="1" />
    <rect x="389" y="90" width="22" height="16" rx="2" stroke="white" strokeWidth="1.2" fill="none" />
    <path d="M392 94h16 M392 98h10" stroke="white" strokeWidth="0.8" opacity="0.7" />
    <text x="400" y="148" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.7">CONVERT</text>

    {/* Scale node — bottom center */}
    <circle cx="260" cy="360" r="38" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.8" />
    <circle cx="260" cy="360" r="24" fill="#C4272E" fillOpacity="0.2" stroke="#C4272E" strokeWidth="1" />
    <path d="M250 368l10-16 10 16" stroke="white" strokeWidth="1.2" fill="none" />
    <path d="M254 364l6-8 6 8" stroke="#C4272E" strokeWidth="1" fill="none" />
    <text x="260" y="408" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.7">SCALE</text>

    {/* Connecting lines with animated dashes */}
    <path d="M155 118 L220 190" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />
    <path d="M365 118 L300 190" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />
    <path d="M260 255 L260 322" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />

    {/* Flow arrows */}
    <path d="M155 118 L175 138" stroke="#C4272E" strokeWidth="1.2" opacity="0.6" />
    <path d="M365 118 L345 138" stroke="#C4272E" strokeWidth="1.2" opacity="0.6" />
    <path d="M260 275 L260 305" stroke="#C4272E" strokeWidth="1.2" opacity="0.6" />

    {/* Data flow particles */}
    <circle cx="170" cy="135" r="2.5" fill="#C4272E" opacity="0.8" />
    <circle cx="350" cy="135" r="2.5" fill="#C4272E" opacity="0.8" />
    <circle cx="260" cy="295" r="2.5" fill="#C4272E" opacity="0.8" />

    {/* Satellite elements — Marketing */}
    <rect x="52" cy="60" width="36" height="24" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" y="56" />
    <rect x="56" y="62" width="28" height="2" rx="1" fill="#C4272E" fillOpacity="0.4" />
    <rect x="56" y="68" width="18" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="56" y="74" width="22" height="2" rx="1" fill="white" fillOpacity="0.15" />

    {/* Satellite — Web platform */}
    <rect x="432" y="56" width="36" height="24" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" />
    <rect x="436" y="62" width="28" height="2" rx="1" fill="#C4272E" fillOpacity="0.4" />
    <rect x="436" y="68" width="18" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="436" y="74" width="12" height="2" rx="1" fill="white" fillOpacity="0.15" />

    {/* Satellite — CRM */}
    <rect x="310" y="376" width="36" height="24" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" />
    <rect x="314" y="382" width="28" height="2" rx="1" fill="#C4272E" fillOpacity="0.4" />
    <rect x="314" y="388" width="16" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="314" y="394" width="22" height="2" rx="1" fill="white" fillOpacity="0.15" />

    {/* Decorative outer dots */}
    <circle cx="60" cy="200" r="3" fill="#C4272E" opacity="0.25" />
    <circle cx="460" cy="260" r="3" fill="#C4272E" opacity="0.25" />
    <circle cx="180" cy="380" r="2" fill="white" opacity="0.15" />
    <circle cx="340" cy="50" r="2" fill="white" opacity="0.15" />
    <circle cx="100" cy="300" r="4" fill="#C4272E" opacity="0.12" />
    <circle cx="420" cy="330" r="4" fill="white" opacity="0.08" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════
// ATTRACT ILLUSTRATION — Magnet + Funnel
// ═══════════════════════════════════════════════════════════════════════════
export const AttractIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Magnet body */}
    <path d="M70 40 Q100 10 130 40 L130 90 Q100 70 70 90 Z" fill="#C4272E" fillOpacity="0.15" stroke="#C4272E" strokeWidth="1.2" />
    <rect x="65" y="85" width="16" height="30" rx="2" fill="#C4272E" fillOpacity="0.3" />
    <rect x="119" y="85" width="16" height="30" rx="2" fill="#0F1C2E" fillOpacity="0.5" />

    {/* Magnetic field lines */}
    <path d="M62 80 Q40 60 62 40" stroke="#C4272E" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
    <path d="M55 85 Q28 60 55 35" stroke="#C4272E" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.3" />
    <path d="M138 80 Q160 60 138 40" stroke="#C4272E" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />

    {/* Incoming dots (leads) */}
    <circle cx="30" cy="30" r="4" fill="#C4272E" opacity="0.6" />
    <circle cx="170" cy="25" r="3" fill="#0F1C2E" opacity="0.5" />
    <circle cx="20" cy="70" r="3" fill="#C4272E" opacity="0.4" />
    <circle cx="180" cy="65" r="4" fill="#C4272E" opacity="0.5" />
    <circle cx="45" cy="15" r="2.5" fill="#0F1C2E" opacity="0.4" />
    <circle cx="155" cy="50" r="2.5" fill="#0F1C2E" opacity="0.35" />

    {/* Arrow lines showing attraction */}
    <path d="M35 32 L60 48" stroke="#C4272E" strokeWidth="0.7" opacity="0.4" />
    <path d="M165 28 L138 45" stroke="#C4272E" strokeWidth="0.7" opacity="0.4" />
    <path d="M175 67 L142 75" stroke="#C4272E" strokeWidth="0.7" opacity="0.4" />

    {/* Analytics bar chart */}
    <rect x="60" y="132" width="8" height="20" rx="1" fill="#C4272E" fillOpacity="0.3" />
    <rect x="72" y="126" width="8" height="26" rx="1" fill="#C4272E" fillOpacity="0.5" />
    <rect x="84" y="120" width="8" height="32" rx="1" fill="#C4272E" fillOpacity="0.7" />
    <rect x="96" y="128" width="8" height="24" rx="1" fill="#0F1C2E" fillOpacity="0.4" />
    <rect x="108" y="118" width="8" height="34" rx="1" fill="#C4272E" fillOpacity="0.8" />
    <rect x="120" y="112" width="8" height="40" rx="1" fill="#C4272E" />
    <line x1="55" y1="152" x2="135" y2="152" stroke="#0F1C2E" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════
// CONVERT ILLUSTRATION — Speed + Landing Page
// ═══════════════════════════════════════════════════════════════════════════
export const ConvertIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Browser window */}
    <rect x="25" y="15" width="150" height="105" rx="5" fill="white" fillOpacity="0.06" stroke="#0F1C2E" strokeWidth="1" />
    <rect x="25" y="15" width="150" height="18" rx="5" fill="#0F1C2E" fillOpacity="0.6" />
    <circle cx="37" cy="24" r="3" fill="#C4272E" opacity="0.8" />
    <circle cx="48" cy="24" r="3" fill="white" opacity="0.3" />
    <circle cx="59" cy="24" r="3" fill="white" opacity="0.3" />
    <rect x="75" y="21" width="60" height="6" rx="3" fill="white" fillOpacity="0.1" />

    {/* Page content */}
    <rect x="35" y="42" width="60" height="6" rx="1" fill="#0F1C2E" fillOpacity="0.6" />
    <rect x="35" y="52" width="45" height="4" rx="1" fill="#0F1C2E" fillOpacity="0.25" />
    <rect x="35" y="60" width="55" height="4" rx="1" fill="#0F1C2E" fillOpacity="0.2" />

    {/* CTA button on page */}
    <rect x="35" y="72" width="40" height="14" rx="2" fill="#C4272E" />

    {/* Form fields */}
    <rect x="110" y="42" width="55" height="12" rx="2" fill="#0F1C2E" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="0.5" opacity="0.4" />
    <rect x="110" y="60" width="55" height="12" rx="2" fill="#0F1C2E" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="0.5" opacity="0.4" />
    <rect x="110" y="78" width="55" height="12" rx="2" fill="#0F1C2E" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="0.5" opacity="0.4" />
    <rect x="110" y="96" width="55" height="14" rx="2" fill="#C4272E" fillOpacity="0.15" stroke="#C4272E" strokeWidth="0.8" />

    {/* Speed gauge */}
    <circle cx="100" cy="140" r="16" fill="none" stroke="#0F1C2E" strokeWidth="1.5" opacity="0.2" strokeDasharray="70 30" />
    <circle cx="100" cy="140" r="16" fill="none" stroke="#C4272E" strokeWidth="2" strokeDasharray="62 38" strokeLinecap="round" />
    <line x1="100" y1="140" x2="108" y2="130" stroke="#C4272E" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="100" cy="140" r="2.5" fill="#C4272E" />

    {/* Lightning bolt for speed */}
    <path d="M56 132 L50 140 L55 140 L52 150 L60 139 L55 139 Z" fill="#C4272E" opacity="0.7" />

    {/* Conversion rate arrow */}
    <path d="M145 150 L155 130" stroke="#C4272E" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M151 130 L155 130 L155 134" stroke="#C4272E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════
// SCALE ILLUSTRATION — Automation + CRM Pipeline
// ═══════════════════════════════════════════════════════════════════════════
export const ScaleIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pipeline flow */}
    <path d="M20 80 Q50 40 80 80 Q110 120 140 80 Q160 50 180 80" stroke="#C4272E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M20 80 Q50 40 80 80 Q110 120 140 80 Q160 50 180 80" stroke="#C4272E" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4" opacity="0.3" />

    {/* Flow nodes */}
    <circle cx="20" cy="80" r="8" fill="white" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="1" />
    <circle cx="20" cy="80" r="4" fill="#C4272E" opacity="0.8" />

    <circle cx="80" cy="80" r="8" fill="white" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="1" />
    <circle cx="80" cy="80" r="4" fill="#C4272E" opacity="0.8" />

    <circle cx="140" cy="80" r="8" fill="white" fillOpacity="0.08" stroke="#0F1C2E" strokeWidth="1" />
    <circle cx="140" cy="80" r="4" fill="#C4272E" opacity="0.8" />

    <circle cx="180" cy="80" r="10" fill="#C4272E" fillOpacity="0.2" stroke="#C4272E" strokeWidth="1" />
    <path d="M176 80 L184 80 M180 76 L180 84" stroke="#C4272E" strokeWidth="1.5" />

    {/* WhatsApp notification bubble */}
    <rect x="10" y="20" width="50" height="28" rx="4" fill="#0F1C2E" fillOpacity="0.6" stroke="#0F1C2E" strokeWidth="0.5" />
    <path d="M30 48 L25 55 L36 48" fill="#0F1C2E" fillOpacity="0.6" />
    <circle cx="24" cy="34" r="6" fill="#25D366" opacity="0.8" />
    <rect x="34" y="30" width="20" height="3" rx="1" fill="white" fillOpacity="0.5" />
    <rect x="34" y="36" width="14" height="2" rx="1" fill="white" fillOpacity="0.3" />

    {/* CRM Card */}
    <rect x="120" y="15" width="65" height="40" rx="4" fill="white" fillOpacity="0.06" stroke="#0F1C2E" strokeWidth="0.8" />
    <rect x="126" y="22" width="30" height="4" rx="1" fill="#0F1C2E" fillOpacity="0.5" />
    <rect x="126" y="30" width="50" height="3" rx="1" fill="#0F1C2E" fillOpacity="0.2" />
    <rect x="126" y="37" width="20" height="3" rx="1" fill="#0F1C2E" fillOpacity="0.15" />
    <rect x="126" y="44" width="24" height="6" rx="2" fill="#C4272E" fillOpacity="0.3" />
    <circle cx="174" cy="28" r="6" fill="#C4272E" fillOpacity="0.2" stroke="#C4272E" strokeWidth="0.8" />
    <path d="M171 28 L173 30 L177 26" stroke="#C4272E" strokeWidth="1" />

    {/* Growth arrow */}
    <path d="M50 140 L80 115 L110 125 L140 105 L170 95" stroke="#C4272E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M165 97 L172 93 L168 100" stroke="#C4272E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    
    {/* Gear icon */}
    <circle cx="100" cy="135" r="10" fill="none" stroke="#0F1C2E" strokeWidth="1" opacity="0.3" />
    <circle cx="100" cy="135" r="5" fill="none" stroke="#C4272E" strokeWidth="1" opacity="0.5" />
    <rect x="98" y="122" width="4" height="5" rx="1" fill="#0F1C2E" opacity="0.3" />
    <rect x="98" y="143" width="4" height="5" rx="1" fill="#0F1C2E" opacity="0.3" />
    <rect x="87" y="133" width="5" height="4" rx="1" fill="#0F1C2E" opacity="0.3" />
    <rect x="108" y="133" width="5" height="4" rx="1" fill="#0F1C2E" opacity="0.3" />
  </svg>
);
