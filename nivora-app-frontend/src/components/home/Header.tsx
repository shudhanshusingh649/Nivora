import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between px-5 py-2">
      {/* Left Side: Logo */}
      <Image
        source={require("@/assets/images/logo.png")}
        className="w-32 h-20"
        resizeMode="contain"
      />

      {/* Right Side: Create Post Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => console.log("Create Post page khulega")}
        className="flex-row items-center bg-[#059669] px-4 py-2 rounded-full shadow-sm shadow-emerald-200"
      >
        <Feather name="plus" size={16} color="#ffffff" />
        <Text className="font-sans-bold text-white text-[13px] ml-1.5">
          Create Post
        </Text>
      </TouchableOpacity>
    </View>
  );
}
