import React from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OFFICIAL SGS BRAND GEOMETRIC GRAPHIC MOTIFS (Brand Guidelines Page 5)
 * 1. SgsDomesGraphic: Stacked geometric semicircles / domes
 * 2. SgsTripleOvals: Three vertical lime pills / capsules indicating growth
 * 3. SgsNestedSquare: Concentric nested squares (Electric Blue, Lime, Midnight)
 * 4. SgsDiagonalRibbon: 45° angular geometric facets
 * 5. SgsQuadrantGrid: 2x2 geometric quadrant / checkerboard block
 * ═══════════════════════════════════════════════════════════════════════════
 */

// 1. Stacked Semicircles / Domes
export const SgsDomesGraphic: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Top Dome */}
    <path
      d="M10 50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50H10Z"
      fill="#2033FF"
    />
    {/* Bottom Dome */}
    <path
      d="M10 95C10 72.9086 27.9086 55 50 55C72.0914 55 90 72.9086 90 95H10Z"
      fill="#2033FF"
    />
  </svg>
);

// 2. Triple Lime Ovals (Energy & Ascending Growth)
export const SgsTripleOvals: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 48
}) => (
  <svg
    width={(height * 80) / 100}
    height={height}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="5" y="10" width="18" height="80" rx="9" fill="#AFEB00" />
    <rect x="31" y="5" width="18" height="90" rx="9" fill="#AFEB00" />
    <rect x="57" y="10" width="18" height="80" rx="9" fill="#AFEB00" />
  </svg>
);

// 3. Concentric Nested Squares
export const SgsNestedSquare: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Electric Blue Frame */}
    <rect width="100" height="100" fill="#2033FF" />
    {/* Middle Lime Charge Square */}
    <rect x="18" y="18" width="64" height="64" fill="#AFEB00" />
    {/* Midnight Core */}
    <rect x="34" y="34" width="32" height="32" fill="#0F1B64" />
    {/* Inner White Dot / Square */}
    <rect x="44" y="44" width="12" height="12" fill="#FFFFFF" />
  </svg>
);

// 4. Diagonal Ribbon / Growth Facet
export const SgsDiagonalRibbon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="100" height="100" fill="#0F1B64" />
    {/* Top Right Triangle */}
    <polygon points="100,0 100,50 50,0" fill="#2033FF" />
    {/* Middle Diagonal Ribbon */}
    <polygon points="0,20 80,100 40,100 0,60" fill="#2033FF" />
    {/* Bottom Left Triangle */}
    <polygon points="0,80 20,100 0,100" fill="#AFEB00" />
  </svg>
);

// 5. 2x2 Geometric Quadrant / Checkerboard Block
export const SgsQuadrantGrid: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Top Left: White */}
    <rect x="0" y="0" width="50" height="50" fill="#FFFFFF" />
    {/* Top Right: Midnight */}
    <rect x="50" y="0" width="50" height="50" fill="#0F1B64" />
    {/* Bottom Left: Midnight */}
    <rect x="0" y="50" width="50" height="50" fill="#0F1B64" />
    {/* Bottom Right: Electric Blue */}
    <rect x="50" y="50" width="50" height="50" fill="#2033FF" />
  </svg>
);

// Strip of all 5 Brand Motifs for visual dividers and headers
export const SgsBrandMotifsStrip: React.FC<{ className?: string; motifSize?: number }> = ({
  className = '',
  motifSize = 36
}) => (
  <div className={`flex items-center gap-3.5 sm:gap-4 ${className}`} aria-hidden="true">
    <SgsDomesGraphic size={motifSize} className="rounded-lg shadow-sm" />
    <SgsTripleOvals height={motifSize} className="rounded-lg" />
    <SgsNestedSquare size={motifSize} className="rounded-lg shadow-sm" />
    <SgsDiagonalRibbon size={motifSize} className="rounded-lg shadow-sm" />
    <SgsQuadrantGrid size={motifSize} className="rounded-lg shadow-sm" />
  </div>
);
