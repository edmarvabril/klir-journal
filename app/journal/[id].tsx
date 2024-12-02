import { useRouter, useGlobalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import { useJournal, useJournals } from "../../hooks/useJournal";

export default function JournalDetail() {
  const router = useRouter();
  const params = useGlobalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { journal, isFetchingJournal } = useJournal(id);
  const { deleteJournal, isDeletingJournal } = useJournals();

  const handleDelete = () => {
    deleteJournal(id, {
      onSuccess: () => router.push("/"),
    });
  };

  if (isFetchingJournal) return <Text>Loading...</Text>;
  if (isDeletingJournal) return <Text>Deleting...</Text>;

  return (
    <View>
      <Text>{journal?.date}</Text>
      <Text>{journal?.title}</Text>
      <Text>{journal?.body}</Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
}
