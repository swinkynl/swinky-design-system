import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export function Input({ style, ...props }: TextInputProps) {
  const theme = useTheme();

  return (
    <TextInput
      placeholderTextColor={theme.colors.textMuted}
      {...props}
      style={[
        styles.base,
        {
          backgroundColor: theme.colors.surfaceSunken,
          borderColor: theme.colors.border,
          borderRadius: theme.radii.md,
          color: theme.colors.textPrimary,
          fontFamily: theme.fonts.body,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
  },
});
