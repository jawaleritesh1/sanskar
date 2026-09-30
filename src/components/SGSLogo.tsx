import React from 'react';

interface SGSLogoProps {
  variant?: 'primary' | 'horizontal' | 'monogram';
  theme?: 'dark' | 'light';
  className?: string;
  height?: number | string;
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OFFICIAL SGS BRAND LOGO
 * - /logo/logo.png: Full logo with wordmark
 * - /logo/logosmall.png: Monogram with upward growth arrow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const SGSLogo: React.FC<SGSLogoProps> = ({
  variant = 'horizontal',
  className = '',
  height = 72
}) => {
  if (variant === 'monogram') {
    return (
      <img
        src="/logo/logosmall.png"
        alt="Sanskar Growth Solutions"
        style={{ height }}
        className={`w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <img
      src="/logo/logo.png"
      alt="Sanskar Growth Solutions"
      style={{ height }}
      className={`w-auto object-contain ${className}`}
    />
  );
};

