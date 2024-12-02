import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import { useJournals } from "../hooks/useJournal";

export default function Home() {
  const { journals, isFetchingJournals } = useJournals();

  if (isFetchingJournals) return <Text>Loading...</Text>;

  return (
    <View>
      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/journal/${item.id}`}>
            <View>
              <Text>{item.date}</Text>
              <Text>{item.title}</Text>
            </View>
          </Link>
        )}
      />
      <Link href="/journal/create">
        <Text>Create New Entry</Text>
      </Link>
    </View>
  );
}
