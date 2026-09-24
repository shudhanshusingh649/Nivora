import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { ActivityIndicator } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

import { useUserStore } from "@/store/userStore";
import LoggedInProfile from "../../components/profile/LoggedInProfile";
import LoggedOutProfile from "../../components/profile/LoggedOutProfile";

export default function ProfileScreen() {
  const { loading: storeLoading, user } = useUserStore();
  console.log("ProfileScreen - storeLoading:", storeLoading, "user:", user);

  if (storeLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#059669" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      {user ? <LoggedInProfile /> : <LoggedOutProfile />}
    </SafeAreaView>
  );
}
