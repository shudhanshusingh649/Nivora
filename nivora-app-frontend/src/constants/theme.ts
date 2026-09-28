export const colors = {
  background: "#f4fbf8", // Halka green app background ke liye
  foreground: "#059669", // Dark Emerald Green (Active Icons ke liye)
  card: "#ffffff",
  muted: "#9CA3AF", // Gray color (Inactive Icons ke liye)
  mutedForeground: "rgba(0, 0, 0, 0.6)",
  primary: "#ffffff", // Tab bar ka background ab WHITE hoga
  accent: "#ecfdf5", // Halka Green (Active tab ke piche ka gol background)
  border: "rgba(0, 0, 0, 0.05)",
  success: "#16a34a",
  destructive: "#dc2626",
  subscription: "#059669",
} as const;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  30: 120,
} as const;

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    radius: spacing[8],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
  },
} as const;

export const theme = {
  colors,
  spacing,
  components,
} as const;
