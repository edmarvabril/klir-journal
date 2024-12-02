import { DefaultTheme } from "react-native-paper";

export const theme = {
  colors: {
    primary: "#4A5568", // Blue Gray
    secondary: "#A0C4A8", // Sage Green
    background: "#F7F5F2", // Soft Beige
    textPrimary: "#333333", // Dark Charcoal
    textSecondary: "#F7F5F2", // Cool Gray
    accent1: "#FF6B6B", // Coral Pink
    accent2: "#63B3ED", // Sky Blue
    divider: "#E2E8F0", // Light Gray
    success: "#38A169", // Mint Green
    warning: "#ECC94B", // Golden Yellow
  },
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.accent1,
    background: theme.colors.background,
    text: theme.colors.textPrimary,
    surface: theme.colors.secondary,
    placeholder: theme.colors.textSecondary,
  },
};
