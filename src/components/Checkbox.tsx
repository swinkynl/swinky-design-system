import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={[
        styles.base,
        {
          borderRadius: theme.radii.sm,
          borderColor: checked ? theme.colors.accent : theme.colors.border,
          backgroundColor: checked ? theme.colors.accent : 'transparent',
        },
      ]}
    >
      {checked && <View style={[styles.dot, { backgroundColor: theme.colors.onAccent }]} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
});
