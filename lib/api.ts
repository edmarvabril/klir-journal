import { Journal } from "@/types/journal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const fetchJournals = async (): Promise<Journal[]> => {
  await delay();
  const data = await AsyncStorage.getItem("journals");
  return data ? JSON.parse(data) : [];
};

export const fetchJournalById = async (
  id: string
): Promise<Journal | undefined> => {
  await delay();
  const journals = await fetchJournals();
  return journals.find((j) => j.id === id);
};

export const createJournal = async (
  journal: Omit<Journal, "id" | "date">
): Promise<Journal> => {
  await delay();
  const journals = await fetchJournals();
  const newJournal = {
    id: Date.now().toString(),
    ...journal,
    date: new Date().toLocaleDateString(),
  };
  await AsyncStorage.setItem(
    "journals",
    JSON.stringify([...journals, newJournal])
  );
  return newJournal;
};

export const deleteJournal = async (id: string): Promise<void> => {
  await delay();
  const journals = await fetchJournals();
  const updated = journals.filter((j) => j.id !== id);
  await AsyncStorage.setItem("journals", JSON.stringify(updated));
};
