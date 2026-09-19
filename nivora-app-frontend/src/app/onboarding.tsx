import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// Components
import ScreenOne from "../../components/onboarding/ScreenOne";
import ScreenTwo from "../../components/onboarding/ScreenTwo";
import ScreenThree from "../../components/onboarding/ScreenThree";
import Pagination from "../../components/onboarding/Pagination";
import ActionButton from "../../components/onboarding/ActionButton";

const SafeAreaView = styled(RNSafeAreaView);

const { width } = Dimensions.get("window");
const SCREENS = [{ id: "1" }, { id: "2" }, { id: "3" }];

export default function Onboarding() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < SCREENS.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: width * (currentIndex + 1),
        y: 0,
        animated: true,
      });
    }
  };

  const handleScrollEnd = (event: any) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(Math.max(0, Math.min(nextIndex, SCREENS.length - 1)));
  };

  const handleSkipOrStart = () => {
    router.push({ pathname: "/Auth" });
  };

  const renderScreen = (item: (typeof SCREENS)[0]) => {
    switch (item.id) {
      case "1":
        return <ScreenOne key={item.id} width={width} />;
      case "2":
        return <ScreenTwo key={item.id} width={width} />;
      case "3":
        return <ScreenThree key={item.id} width={width} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Skip Button */}
      {currentIndex < SCREENS.length - 1 && (
        <View className="flex-row justify-end px-6 py-4">
          <TouchableOpacity onPress={handleSkipOrStart}>
            <Text className="text-gray-600 font-sans-bold text-base">Skip</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content: Swipeable Screens */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onMomentumScrollEnd={handleScrollEnd}
        className="flex-1"
      >
        {SCREENS.map(renderScreen)}
      </ScrollView>

      {/* Footer: Pagination & Button */}
      <View className="px-6 pb-10 pt-4 flex-row items-center justify-between">
        <Pagination screens={SCREENS} currentIndex={currentIndex} />
        <ActionButton
          isLastScreen={currentIndex === SCREENS.length - 1}
          onNext={handleNext}
          onStart={handleSkipOrStart}
        />
      </View>
    </SafeAreaView>
  );
}
