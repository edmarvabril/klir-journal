import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useStyles } from "../hooks/useStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/styles/theme";

export function CustomHeader({ canGoBack }: { canGoBack: boolean }) {
  const router = useRouter();
  const styles = useStyles();

  return (
    <SafeAreaView
      style={[styles.flexRow, styles.justifyBetween, styles.bgPrimary]}
    >
      <View style={[styles.flex]}>
        {canGoBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.paddingSmall, { alignItems: "flex-start" }]}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={theme.colors.background}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.textBold,
          styles.textCenter,
          styles.flex,
          styles.textLg,
          styles.textSecondary,
        ]}
      >
        KlirJournal
      </Text>
      <View style={[styles.flex]} />
    </SafeAreaView>
  );
}
