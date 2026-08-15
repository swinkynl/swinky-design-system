import React from 'react';
import { Pressable, PressableProps, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, variant = 'primary', style, ...props }: ButtonProps) {
  const theme = useTheme();
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      {...props}
      style={(state) => [
        styles.base,
        {
          backgroundColor: isPrimary ? theme.colors.accent : theme.colors.surfaceAlt,
          borderColor: theme.colors.border,
          borderRadius: theme.radii.md,
        },
        theme.shadows.sm,
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      <Text
        style={{
          color: isPrimary ? theme.colors.onAccent : theme.colors.textPrimary,
          fontFamily: theme.fonts.body,
          fontWeight: theme.fonts.bodyWeights.bold as any,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
