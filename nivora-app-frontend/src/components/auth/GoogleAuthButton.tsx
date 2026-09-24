import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useAuthSupabase } from "@/lib/auth";
import { useOAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function GoogleAuthButton() {
  useWarmUpBrowser();

  const router = useRouter();
  const authSupabase = useAuthSupabase();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (!createdSessionId || !setActive) return;

      await setActive({ session: createdSessionId });

      router.replace("/(tabs)");
    } catch (err) {
      console.log("Google OAuth Error:", err);
      Alert.alert("Google Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleGoogleLogin}
      disabled={isLoading}
      className="w-full h-14 rounded-2xl border border-gray-200 flex-row items-center justify-center bg-white shadow-sm"
    >
      {isLoading ? (
        <ActivityIndicator color="#374151" />
      ) : (
        <>
          <Image
            source={require("@/assets/icons/google.png")}
            className="w-5 h-5 mr-3"
            resizeMode="contain"
          />

          <Text className="text-slate-800 font-sans-bold text-[15px]">
            Continue with Google
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
