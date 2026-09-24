import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function createClerkSupabaseClient(
  getToken: (options?: { template?: string }) => Promise<string | null>,
) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    accessToken: async () => {
      return await getToken({
        template: "supabase",
      });
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
