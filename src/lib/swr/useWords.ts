"use client";

import useSWR from "swr";
import { useAuth } from "./useAuth";

interface FetchWordsParams {
  profileId: string;
  limit?: number;
  offset?: number;
}

const fetchWords = async ({
  profileId,
  limit = 30,
  offset = 0,
}: FetchWordsParams) => {
  const params = new URLSearchParams({
    profileId,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const res = await fetch(`/api/words?${params}`);
  if (!res.ok) throw new Error("Failed to fetch words");
  return res.json();
};

export function useWords(profileId?: string, limit = 30, offset = 0) {
  const { userId } = useAuth();
  const id = profileId || userId;

  const { data, error, isLoading, mutate } = useSWR(
    id ? `words-${id}-${limit}-${offset}` : null,
    () => fetchWords({ profileId: id!, limit, offset })
  );

  return {
    words: data?.words,
    total: data?.total,
    limit: data?.limit,
    offset: data?.offset,
    isLoading,
    error,
    mutate,
  };
}
