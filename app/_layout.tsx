import { Slot, Stack } from "expo-router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useStyles } from "@/hooks/useStyles";
import { CustomHeader } from "@/components/CustomHeader";

export default function Layout() {
  const styles = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <SafeAreaView style={[styles.flex]}>
          <Stack
            screenOptions={{
              header: ({ back }) => <CustomHeader canGoBack={!!back} />,
              headerStyle: {
                backgroundColor: "tomato",
              },
            }}
          />
        </SafeAreaView>
      </PaperProvider>
    </QueryClientProvider>
  );
}
