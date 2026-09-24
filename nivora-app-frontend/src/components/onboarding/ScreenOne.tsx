import { Image, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function ScreenOne({ width }: { width: number }) {
  return (
    <View style={{ width }} className="flex-1 px-6 pt-2">
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        className="w-42 h-20 mb-3 justify-start"
      >
        <Image
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
          className="w-full h-full"
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).springify()}>
        <Text className="text-4xl font-sans-extrabold text-black tracking-tight">
          A Smarter Way
        </Text>
        <Text className="text-4xl font-sans-extrabold text-black tracking-tight">
          to Find Your Next
        </Text>
        <Text className="text-4xl font-sans-extrabold text-emerald-600 tracking-tight">
          Home
        </Text>

        <Text className="text-gray-500 font-sans-medium mt-4 text-base leading-6 pr-4">
          Verified rentals, PGs, hostels, mess and flatmates — all in one place.
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.delay(400).springify()}
        className="absolute bottom-2 z-[-10]"
        style={{
          width: width,
          height: "50%",
        }}
      >
        <Image
          source={require("@/assets/images/onboarding-1.png")}
          resizeMode="cover"
          className="w-full h-full"
        />
      </Animated.View>
    </View>
  );
}
