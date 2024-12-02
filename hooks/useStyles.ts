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
    textGray: {
      color: "#6b7280",
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

    // Borders
    border: {
      borderWidth: 1,
      borderColor: "#ccc",
    },
    rounded: {
      borderRadius: 8,
    },

    // Backgrounds
    bgWhite: {
      backgroundColor: "#fff",
    },
    bgGray: {
      backgroundColor: "#f3f4f6",
    },
  });
