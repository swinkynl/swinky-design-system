import { Theme } from '../types';

function shadow(offsetX: number, offsetY: number, elevation: number) {
  return {
    shadowColor: '#1A1A1A',
    shadowOffset: { width: offsetX, height: offsetY },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation,
  };
}

// PLACEHOLDER VALUES — the handoff doc only describes this base theme in words
// ("warm coral primary, teal secondary, sunshine yellow accent, warm cream background")
// and points to a separate full Swinkels design-system guide for real hex values.
// Replace every color below once that source is available.
export const swinkels: Theme = {
  name: 'swinkels',
  colors: {
    background: '#FFF8EE',
    surface: '#FFFFFF',
    surfaceAlt: '#FFEFD9',
    surfaceSunken: '#FFF1DC',
    accent: '#FF7A59',
    accentHover: '#FF8F73',
    accentSoft: '#FFE0D6',
    onAccent: '#2B1B14',
    textPrimary: '#2B1B14',
    textMuted: '#8A7666',
    textMutedStrong: '#5E4E42',
    border: '#2B1B14',
    borderSoft: 'rgba(43,27,20,0.4)',
    success: '#2FB27A',
    successSoft: 'rgba(47,178,122,0.16)',
    danger: '#C1666B',
    dangerSoft: 'rgba(193,102,107,0.16)',
  },
  radii: { sm: 6, md: 10, lg: 14, xl: 24 },
  shadows: {
    sm: shadow(3, 3, 3),
    md: shadow(4, 4, 6),
    lg: shadow(6, 6, 12),
  },
  fonts: {
    display: 'Fredoka',
    displayWeights: { regular: '500', semibold: '600' },
    body: 'Nunito',
    bodyWeights: { regular: '400', semibold: '600', bold: '700', extrabold: '800' },
  },
};
