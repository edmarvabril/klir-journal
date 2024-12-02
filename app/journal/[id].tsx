import { useRouter, useGlobalSearchParams } from "expo-router";
import { View } from "react-native";
import { useJournal, useJournals } from "../../hooks/useJournal";
import { Card, Button, Text } from "react-native-paper";
import { useStyles } from "@/hooks/useStyles";
import { Loader } from "@/components/Loader";

export default function JournalDetail() {
  const { id } = useGlobalSearchParams();
  const router = useRouter();
  const styles = useStyles();
  const { journal, isFetchingJournal } = useJournal(id as string);
  const { deleteJournal, isDeletingJournal } = useJournals();

  const handleDelete = () => {
    deleteJournal(id as string, {
      onSuccess: () => router.push("/"),
    });
  };

  if (isFetchingJournal) return <Loader />;

  return (
    <View style={[styles.flex, styles.marginMedium]}>
      <Card>
        <Card.Title title={journal?.title} subtitle={journal?.date} />
        <Card.Content>
          <Text>{journal?.body}</Text>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={handleDelete}
        loading={isDeletingJournal}
        disabled={isDeletingJournal}
        style={[styles.bgAccent, styles.marginTopMedium]}
      >
        {isDeletingJournal ? "Deleting..." : "Delete"}
      </Button>
    </View>
  );
}
