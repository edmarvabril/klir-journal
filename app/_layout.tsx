import { StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
