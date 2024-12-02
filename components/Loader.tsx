import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useStyles } from "../hooks/useStyles";
import { theme } from "@/styles/theme";

export function Loader() {
  const styles = useStyles();

  return (
    <View style={[styles.flex, styles.justifyCenter, styles.alignCenter]}>
      <ActivityIndicator
        animating={true}
        color={theme.colors.primary}
        size="large"
      />
    </View>
  );
}
