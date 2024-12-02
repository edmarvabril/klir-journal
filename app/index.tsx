import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { useJournals } from "../hooks/useJournal";
import { Card, FAB, Text } from "react-native-paper";
import { Journal } from "@/types/journal";
import { JournalCard } from "@/components/JournalCard";
import { useStyles } from "@/hooks/useStyles";
import { theme } from "@/styles/theme";
import { Loader } from "@/components/Loader";
import { EmptyListComponent } from "@/components/EmptyListComponent";

export default function Home() {
  const { journals, isFetchingJournals } = useJournals();
  const router = useRouter();
  const styles = useStyles();

  if (isFetchingJournals) return <Loader />;

  const renderJournalItem = ({ item }: { item: Journal }) => (
    <JournalCard journal={item} />
  );

  return (
    <View style={[styles.flex, styles.marginMedium, styles.bgWhite]}>
      <StatusBar barStyle="light-content" />

      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={renderJournalItem}
        ListEmptyComponent={
          <EmptyListComponent
            message={`No journal entries found.\nStart writing your first note!`}
          />
        }
      />
      <FAB
        style={[localStyles.fab, styles.buttonPrimary]}
        icon="plus"
        onPress={() => router.push("/journal/create")}
        size="medium"
        color={theme.colors.textSecondary}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
