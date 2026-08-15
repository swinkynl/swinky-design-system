import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface CardProps extends ViewProps {
  elevation?: 'sm' | 'md' | 'lg';
}

export function Card({ elevation = 'md', style, children, ...props }: CardProps) {
  const theme = useTheme();

  return (
    <View
      {...props}
      style={[
        styles.base,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.borderSoft,
          borderRadius: theme.radii.lg,
        },
        theme.shadows[elevation],
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    padding: 16,
  },
});
