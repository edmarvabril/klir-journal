import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  fetchJournals,
  createJournal,
  deleteJournal,
  fetchJournalById,
} from "../lib/api";
import { Journal } from "@/types/journal";

export const useJournals = () => {
  const queryClient = useQueryClient();

  const { data: journals, isLoading: isFetchingJournals } = useQuery<Journal[]>(
    "journals",
    fetchJournals
  );

  const createMutation = useMutation<
    Journal,
    unknown,
    Omit<Journal, "id" | "date">
  >(createJournal, {
    onSuccess: () => {
      queryClient.invalidateQueries("journals");
    },
  });

  const deleteMutation = useMutation<void, unknown, string>(deleteJournal, {
    onSuccess: () => {
      queryClient.invalidateQueries("journals");
    },
  });

  return {
    journals,
    isFetchingJournals,
    createJournal: createMutation.mutate,
    isCreatingJournal: createMutation.isLoading,
    deleteJournal: deleteMutation.mutate,
    isDeletingJournal: deleteMutation.isLoading,
  };
};

export const useJournal = (id: string) => {
  const { data: journal, isLoading: isFetchingJournal } = useQuery(
    ["journal", id],
    () => fetchJournalById(id)
  );

  return {
    journal,
    isFetchingJournal,
  };
};
