/**
 * KIVENTA Apple HIG Design Tokens & Theme Definitions
 */

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primaryBackground: string;
  secondaryBackground: string;
  cardBackground: string;
  glassSurface: string;
  glassSurfaceHover: string;
  glassBorder: string;
  glassBorderHover: string;
  glassShadow: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  accent: string;
  accentHover: string;
  accentGradientStart: string;
  accentGradientEnd: string;
  accentSoft: string;
  separator: string;
  subtleBorder: string;
  success: string;
  warning: string;
  error: string;
  priorityUrgent: string;
  priorityHigh: string;
  priorityMedium: string;
  priorityLow: string;
  priorityNone: string;
  navBackground: string;
  pillBackground: string;
  glowColor: string;
}

export const LightColors: ThemeColors = {
  primaryBackground: '#F5F5F9',
  secondaryBackground: '#EBEBF2',
  cardBackground: '#FFFFFF',
  glassSurface: 'rgba(255, 255, 255, 0.72)',
  glassSurfaceHover: 'rgba(255, 255, 255, 0.88)',
  glassBorder: 'rgba(255, 255, 255, 0.85)',
  glassBorderHover: 'rgba(0, 122, 255, 0.35)',
  glassShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.08)',
  textPrimary: '#111113',
  textSecondary: '#424248',
  textTertiary: '#767680',
  textQuaternary: '#A1A1A8',
  accent: '#0071E3',
  accentHover: '#0077ED',
  accentGradientStart: '#0071E3',
  accentGradientEnd: '#5E5CE6',
  accentSoft: 'rgba(0, 113, 227, 0.10)',
  separator: 'rgba(0, 0, 0, 0.08)',
  subtleBorder: 'rgba(0, 0, 0, 0.07)',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  priorityUrgent: '#FF3B30',
  priorityHigh: '#FF9500',
  priorityMedium: '#5856D6',
  priorityLow: '#34C759',
  priorityNone: '#8E8E93',
  navBackground: 'rgba(245, 245, 249, 0.82)',
  pillBackground: 'rgba(0, 0, 0, 0.04)',
  glowColor: 'rgba(0, 113, 227, 0.20)',
};

export const DarkColors: ThemeColors = {
  primaryBackground: '#08080A',
  secondaryBackground: '#121216',
  cardBackground: '#16161B',
  glassSurface: 'rgba(22, 22, 28, 0.72)',
  glassSurfaceHover: 'rgba(30, 30, 38, 0.85)',
  glassBorder: 'rgba(255, 255, 255, 0.12)',
  glassBorderHover: 'rgba(10, 132, 255, 0.45)',
  glassShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 1px rgba(255, 255, 255, 0.15)',
  textPrimary: '#FFFFFF',
  textSecondary: '#E0E0EA',
  textTertiary: '#9898A6',
  textQuaternary: '#5E5E6E',
  accent: '#0A84FF',
  accentHover: '#2997FF',
  accentGradientStart: '#0A84FF',
  accentGradientEnd: '#6865F5',
  accentSoft: 'rgba(10, 132, 255, 0.14)',
  separator: 'rgba(255, 255, 255, 0.10)',
  subtleBorder: 'rgba(255, 255, 255, 0.08)',
  success: '#30D158',
  warning: '#FF9F0A',
  error: '#FF453A',
  priorityUrgent: '#FF453A',
  priorityHigh: '#FF9F0A',
  priorityMedium: '#5E5CE6',
  priorityLow: '#30D158',
  priorityNone: '#8E8E93',
  navBackground: 'rgba(10, 10, 12, 0.80)',
  pillBackground: 'rgba(255, 255, 255, 0.06)',
  glowColor: 'rgba(10, 132, 255, 0.28)',
};

export const Radii = {
  sm: '8px',
  md: '14px',
  lg: '20px',
  xl: '28px',
  xxl: '36px',
  pill: '9999px',
};

export const Shadows = {
  subtle: '0 2px 8px rgba(0, 0, 0, 0.04)',
  card: '0 12px 32px rgba(0, 0, 0, 0.08)',
  floating: '0 20px 48px rgba(0, 0, 0, 0.16)',
  glow: '0 0 40px rgba(10, 132, 255, 0.35)',
};
