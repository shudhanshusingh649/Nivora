import { useAuth } from "@clerk/expo";
import { createClerkSupabaseClient } from "./supabase";

export const useAuthSupabase = () => {
  const { getToken } = useAuth();

  return createClerkSupabaseClient(getToken);
};
