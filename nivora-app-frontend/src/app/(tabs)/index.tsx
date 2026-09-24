import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { ScrollView, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

import CategoryGrid from "../../components/home/CategoryGrid";
import Header from "../../components/home/Header";
import HeroBanner from "../../components/home/HeroBanner";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f3fdf9]">
      <StatusBar style="dark" />
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <HeroBanner />
        <CategoryGrid />

        <View className="mt-8 px-6"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
