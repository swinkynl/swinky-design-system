export interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceAlt: string;
  surfaceSunken: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  onAccent: string;
  textPrimary: string;
  // Design doc lists two muted text shades without specifying which is which context;
  // textMuted = lower emphasis, textMutedStrong = higher emphasis muted.
  textMuted: string;
  textMutedStrong: string;
  border: string;
  borderSoft: string;
  success: string;
  successSoft: string;
  danger: string;
  dangerSoft: string;
}

export interface ThemeRadii {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ThemeShadows {
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
}

export interface ThemeFonts {
  display: string;
  displayWeights: { regular: string; semibold: string };
  body: string;
  bodyWeights: { regular: string; semibold: string; bold: string; extrabold: string };
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  radii: ThemeRadii;
  shadows: ThemeShadows;
  fonts: ThemeFonts;
}
