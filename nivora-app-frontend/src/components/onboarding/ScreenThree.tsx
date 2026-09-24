import { Image, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function ScreenThree({ width }: { width: number }) {
  return (
    <View style={{ width }} className="flex-1 px-6 pt-14">
      <Animated.View entering={FadeInDown.delay(200).springify()}>
        <Text className="text-4xl font-sans-extrabold text-black tracking-tight">
          Live Better
        </Text>
        <Text className="text-4xl font-sans-extrabold text-emerald-600 tracking-tight">
          Together
        </Text>

        <Text className="text-gray-500 font-sans-medium mt-4 text-base leading-6 pr-4">
          Join a growing community of students, professionals and families
          finding better living spaces with Zeevo.
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.delay(400).springify()}
        className="absolute bottom-10 z-[-10]"
        style={{
          width: width,
          height: "55%",
        }}
      >
        <Image
          source={require("@/assets/images/onboarding-3.png")}
          resizeMode="cover"
          className="w-full h-full"
        />
      </Animated.View>
    </View>
  );
}
