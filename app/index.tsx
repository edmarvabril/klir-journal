import { View, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useJournals } from "../hooks/useJournal";
import { Card, FAB, Text } from "react-native-paper";
import { Journal } from "@/types/journal";
import { JournalCard } from "@/components/JournalCard";
import { useStyles } from "@/hooks/useStyles";

export default function Home() {
  const { journals, isFetchingJournals } = useJournals();
  const router = useRouter();
  const styles = useStyles();

  if (isFetchingJournals) return <Text>Loading...</Text>;

  const renderJournalItem = ({ item }: { item: Journal }) => (
    <JournalCard journal={item} />
  );

  return (
    <View style={[styles.flex, styles.marginMedium]}>
      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={renderJournalItem}
      />
      <FAB
        style={localStyles.fab}
        icon="plus"
        onPress={() => router.push("/journal/create")}
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
