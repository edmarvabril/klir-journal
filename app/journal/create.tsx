import { useState } from "react";
import { View } from "react-native";
import { useJournals } from "../../hooks/useJournal";
import { TextInput, Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { useStyles } from "@/hooks/useStyles";

export default function CreateJournal() {
  const router = useRouter();
  const styles = useStyles();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { createJournal, isCreatingJournal } = useJournals();

  const handleSubmit = () => {
    createJournal(
      { title, body },
      {
        onSuccess: () => router.push("/"),
      }
    );
  };

  return (
    <View style={[styles.flex, styles.paddingMedium]}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={[styles.marginBottomMedium]}
      />
      <TextInput
        label="Body"
        value={body}
        onChangeText={setBody}
        multiline
        numberOfLines={5}
        style={[styles.marginBottomMedium]}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={isCreatingJournal}
        disabled={isCreatingJournal}
      >
        {isCreatingJournal ? "Saving..." : "Save"}
      </Button>
    </View>
  );
}
