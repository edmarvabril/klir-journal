import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useJournals } from "../../hooks/useJournal";
import { useRouter } from "expo-router";

export default function CreateJournal() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const { createJournal, isCreatingJournal } = useJournals();

  const handleSubmit = () => {
    createJournal(
      { title, body },
      {
        onSuccess: () => router.push("/"),
      }
    );
  };

  if (isCreatingJournal) return <Text>Saving...</Text>;

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Body" value={body} onChangeText={setBody} />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}
