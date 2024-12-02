import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useStyles } from "../hooks/useStyles";
import { theme } from "@/styles/theme";

const { height } = Dimensions.get("window");

export function EmptyListComponent({ message }: { message: string }) {
  const styles = useStyles();

  return (
    <View
      style={[
        styles.flex,
        styles.justifyCenter,
        styles.alignCenter,
        localStyles.container,
      ]}
    >
      <MaterialIcons name="note-add" size={64} color={theme.colors.secondary} />
      <Text
        style={[
          styles.textMd,
          styles.textPrimary,
          styles.textCenter,
          styles.marginTopMedium,
        ]}
      >
        {message}
      </Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    height: height / 1.5,
  },
});
