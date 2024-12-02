import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useStyles } from "../hooks/useStyles";
import { MaterialIcons } from "@expo/vector-icons";

export function CustomHeader({ canGoBack }: { canGoBack: boolean }) {
  const router = useRouter();
  const styles = useStyles();

  return (
    <View
      style={[
        styles.flexRow,
        styles.justifyBetween,
        styles.bgWhite,
        styles.paddingMedium,
      ]}
    >
      <View style={[styles.flex]}>
        {canGoBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.paddingSmall, { alignItems: "flex-start" }]}
          >
            <MaterialIcons name="arrow-back" size={24} color="#6200ea" />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[styles.textBold, styles.textCenter, styles.flex, styles.textLg]}
      >
        KlirNotes
      </Text>
      <View style={[styles.flex]} />
    </View>
  );
}
