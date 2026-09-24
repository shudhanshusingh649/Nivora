import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between px-5 py-2">
      <Image
        source={require("@/assets/images/logo.png")}
        className="w-32 h-20"
        resizeMode="contain"
      />

      <View className="flex-row items-center space-x-5">
        <TouchableOpacity activeOpacity={0.6} className="flex-row items-center">
          <Ionicons name="location-outline" size={18} color="#059669" />
          <Text className="font-sans-bold text-gray-800 text-[14px] mx-1 tracking-tight">
            Bangalore
          </Text>
          <Ionicons name="chevron-down" size={14} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          className="w-10 h-10 rounded-full border border-gray-100 bg-[#f9fafb] items-center justify-center relative"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
            elevation: 1,
          }}
        >
          <Ionicons name="notifications-outline" size={20} color="#1F2937" />

          <View className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-[1.5px] border-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
