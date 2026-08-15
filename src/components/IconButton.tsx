import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface IconButtonProps extends PressableProps {
  active?: boolean;
  children: ReactNode;
}

export function IconButton({ active = false, children, style, ...props }: IconButtonProps) {
  const theme = useTheme();

  return (
    <Pressable
      {...props}
      style={(state) => [
        styles.base,
        {
          backgroundColor: active ? theme.colors.accentSoft : 'transparent',
          borderRadius: theme.radii.md,
        },
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
