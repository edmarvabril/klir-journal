import { Stack } from "expo-router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";
import { Provider as PaperProvider } from "react-native-paper";
import { useStyles } from "@/hooks/useStyles";
import { CustomHeader } from "@/components/CustomHeader";
import { paperTheme } from "@/styles/theme";

export default function Layout() {
  const styles = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <Stack
          screenOptions={{
            header: ({ back }) => <CustomHeader canGoBack={!!back} />,
            headerStyle: {
              backgroundColor: "tomato",
            },
          }}
        ></Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
