import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface BadgeProps {
  label: string;
  tone?: 'accent' | 'success' | 'danger' | 'neutral';
}

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const theme = useTheme();

  const toneMap = {
    accent: { bg: theme.colors.accentSoft, text: theme.colors.accent },
    success: { bg: theme.colors.successSoft, text: theme.colors.success },
    danger: { bg: theme.colors.dangerSoft, text: theme.colors.danger },
    neutral: { bg: theme.colors.surfaceAlt, text: theme.colors.textMuted },
  } as const;
  const { bg, text } = toneMap[tone];

  return (
    <View style={[styles.base, { backgroundColor: bg, borderRadius: theme.radii.sm }]}>
      <Text
        style={{
          color: text,
          fontFamily: theme.fonts.body,
          fontWeight: theme.fonts.bodyWeights.semibold as any,
          fontSize: 12,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
});
