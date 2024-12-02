import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const useStyles = () =>
  StyleSheet.create({
    // Flex utilities
    flex: {
      flex: 1,
    },
    flexRow: {
      flexDirection: "row",
    },
    flexColumn: {
      flexDirection: "column",
    },
    justifyCenter: {
      justifyContent: "center",
    },
    justifyBetween: {
      justifyContent: "space-between",
    },
    justifyEnd: {
      justifyContent: "flex-end",
    },
    alignCenter: {
      alignItems: "center",
    },
    alignEnd: {
      alignItems: "flex-end",
    },

    // Text utilities
    textCenter: {
      textAlign: "center",
    },
    textBold: {
      fontWeight: "bold",
    },

    // Font size utilities
    textXs: {
      fontSize: 12,
    },
    textSm: {
      fontSize: 14,
    },
    textMd: {
      fontSize: 16,
    },
    textLg: {
      fontSize: 18,
    },
    textXL: {
      fontSize: 24,
    },

    // Spacing utilities
    marginSmall: {
      margin: 8,
    },
    marginVerticalSmall: {
      marginVertical: 8,
    },
    marginHorizontalSmall: {
      marginHorizontal: 8,
    },
    marginMedium: {
      margin: 16,
    },
    marginTopMedium: {
      marginTop: 16,
    },
    marginBottomMedium: {
      marginTop: 16,
    },
    paddingSmall: {
      padding: 8,
    },
    paddingMedium: {
      padding: 16,
    },

    // Backgrounds
    bgPrimary: {
      backgroundColor: theme.colors.primary,
    },
    bgSecondary: {
      backgroundColor: theme.colors.secondary,
    },
    bgAccent: {
      backgroundColor: theme.colors.accent1,
    },
    bgWhite: {
      backgroundColor: theme.colors.background,
    },

    // Text colors
    textPrimary: {
      color: theme.colors.textPrimary,
    },
    textSecondary: {
      color: theme.colors.textSecondary,
    },
    textAccent1: {
      color: theme.colors.accent1,
    },
    textAccent2: {
      color: theme.colors.accent2,
    },

    // Borders and Dividers
    border: {
      borderColor: theme.colors.divider,
      borderWidth: 1,
    },
    rounded: {
      borderRadius: 8,
    },

    // Buttons
    buttonPrimary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
    },
    buttonSecondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.textPrimary,
    },
  });
