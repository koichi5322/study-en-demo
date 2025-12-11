"use client";
import { createClient } from "../supabase/client";
import useSWR from "swr";

const supabase = createClient();

const fetchUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};

export function useAuth() {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR("auth-user", fetchUser);

  return {
    userId: user?.id,
    user,
    isLoading,
    error,
    mutate,
  };
}
