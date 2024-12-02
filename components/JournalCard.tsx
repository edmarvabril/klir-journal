import { Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { Journal } from "@/types/journal";
import { useStyles } from "@/hooks/useStyles";

export function JournalCard({ journal }: { journal: Journal }) {
  const router = useRouter();
  const styles = useStyles();

  return (
    <Card
      style={[styles.marginSmall]}
      onPress={() => router.push(`/journal/${journal.id}`)}
    >
      <Card.Title title={journal.title} subtitle={journal.date} />
      <Card.Content>
        <Card.Content>
          <Text numberOfLines={2}>{journal.body}</Text>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}
