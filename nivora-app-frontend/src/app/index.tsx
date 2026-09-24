import { useUserStore } from "@/store/userStore";
import { Redirect } from "expo-router";

export default function Index() {
  const { loading, user } = useUserStore();

  if (loading) return null;

  if (!user) return <Redirect href="/Onboarding" />;

  return <Redirect href="/(tabs)" />;
}
