import { Theme } from '../types';

function shadow(offsetY: number, radius: number, opacity: number, elevation: number) {
  return {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: offsetY },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation,
  };
}

export const midnightGold: Theme = {
  name: 'midnight-gold',
  colors: {
    background: '#2B3A4A',
    surface: '#374A5C',
    surfaceAlt: '#3A4C5E',
    surfaceSunken: '#2F3E4E',
    accent: '#D4A24C',
    accentHover: '#E0B05E',
    accentSoft: '#4A4030',
    onAccent: '#2B3A4A',
    textPrimary: '#F2EFE9',
    textMuted: '#A9B6C1',
    textMutedStrong: '#C7D0D8',
    border: 'rgba(255,255,255,0.14)',
    borderSoft: 'rgba(255,255,255,0.08)',
    success: '#5FC495',
    successSoft: 'rgba(95,196,149,0.16)',
    // Placeholders: design doc says to reuse the base system's real
    // --color-danger / --color-danger-soft values, which aren't in this handoff doc.
    danger: '#C1666B',
    dangerSoft: 'rgba(193,102,107,0.16)',
  },
  radii: { sm: 6, md: 10, lg: 14, xl: 24 },
  shadows: {
    sm: shadow(6, 16, 0.3, 3),
    md: shadow(10, 24, 0.35, 6),
    lg: shadow(24, 60, 0.3, 12),
  },
  fonts: {
    display: 'Lora',
    displayWeights: { regular: '500', semibold: '600' },
    body: 'NunitoSans',
    bodyWeights: { regular: '400', semibold: '600', bold: '700', extrabold: '800' },
  },
};
