import { useAuthSupabase } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import { useUser } from "@clerk/expo";
import { useEffect } from "react";

export const useSyncUser = () => {
  const { user, isLoaded } = useUser();
  const authSupabase = useAuthSupabase();

  const { setUser, setProfile, setAdmin, setProvider, setLoading, clearUser } =
    useUserStore();

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      clearUser();
      return;
    }

    const sync = async () => {
      setLoading(true);

      const { data: existingUser, error } = await authSupabase
        .from("users")
        .select("*")
        .eq("clerk_id", user.id)
        .maybeSingle();

      let dbUser = existingUser;

      if (!dbUser) {
        const { data: newUser, error: insertError } = await authSupabase
          .from("users")
          .insert({
            clerk_id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            phone: user.primaryPhoneNumber?.phoneNumber ?? null,
          })
          .select()
          .single();

        if (insertError) {
          console.log("User insert error:", insertError);
          setLoading(false);
          return;
        }

        dbUser = newUser;

        await authSupabase.from("user_profiles").insert({
          user_id: dbUser.id,
          first_name: user.firstName ?? "",
          last_name: user.lastName ?? "",
          display_name: user.fullName ?? "",
          avatar_url: user.imageUrl ?? null,
          bio: "",
          city: "",
        });
      }

      setUser(dbUser);

      const { data: profile } = await authSupabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", dbUser.id)
        .maybeSingle();

      setProfile(profile ?? null);

      const { data: admin } = await authSupabase
        .from("admins")
        .select("*")
        .eq("user_id", dbUser.id)
        .single();

      setAdmin(admin ?? null);

      const { data: provider } = await authSupabase
        .from("providers")
        .select("*")
        .eq("user_id", dbUser.id)
        .single();

      setProvider(provider ?? null);

      setLoading(false);
    };

    sync();
  }, [isLoaded, user]);
};
