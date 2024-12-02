import { Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { Journal } from "@/types/journal";
import { useStyles } from "@/hooks/useStyles";

export function JournalCard({ journal }: { journal: Journal }) {
  const router = useRouter();
  const styles = useStyles();

  return (
    <Card
      elevation={0}
      style={[
        styles.marginSmall,
        styles.border,
        styles.rounded,
        styles.bgSecondary,
      ]}
      onPress={() => router.push(`/journal/${journal.id}`)}
    >
      <Card.Title
        titleStyle={[styles.textPrimary, styles.textBold]}
        subtitleStyle={[styles.textSecondary]}
        title={journal.title}
        subtitle={journal.date}
      />
      <Card.Content>
        <Card.Content>
          <Text style={[styles.textPrimary]} numberOfLines={2}>
            {journal.body}
          </Text>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}
