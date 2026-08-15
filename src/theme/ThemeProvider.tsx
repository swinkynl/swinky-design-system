import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from '../tokens/types';
import { swinkels } from '../tokens/themes/swinkels';

const ThemeContext = createContext<Theme>(swinkels);

export function ThemeProvider({ theme, children }: { theme: Theme; children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
