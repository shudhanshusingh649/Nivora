import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function HeroBanner() {
  return (
    <View className="px-5 mb-5 z-10">
      <View className="rounded-[28px] overflow-hidden">
        <ImageBackground
          source={require("../../../assets/images/hero-building.png")}
          resizeMode="cover"
          className="w-full justify-center"
          style={{ height: 180 }}
        >
          <View className="absolute top-4 px-6 w-[80%] z-10">
            <Text className="text-[23px] font-sans-extrabold text-black tracking-tight leading-[28px]">
              Better People{"\n"}Brighter Places{" "}
              <Text className="text-emerald-500">♡</Text>
            </Text>
            <Text className="text-gray-700 font-sans-medium text-[13px] italic mt-2.5 leading-5">
              Find verified PGs, flats, {"\n"}rooms and more — {"\n"}all in one
              place.
            </Text>
          </View>
        </ImageBackground>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          console.log("Search page par redirect karein!");
        }}
        className="bg-white rounded-full flex-row items-center px-4 h-[56px] mx-4 z-30"
        style={{
          marginTop: -28,
          elevation: 10,
          shadowColor: "#64748B",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.12,
          shadowRadius: 16,
        }}
      >
        <Ionicons name="search" size={22} color="#6B7280" />

        <Text
          className="flex-1 ml-3 font-sans-medium text-[14px] text-gray-400"
          numberOfLines={1}
        >
          Search PGs, flats, areas, or landmarks...
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log("Filter open karo!")}
          className="w-10 h-10 rounded-full bg-emerald-50 items-center justify-center"
        >
          <Ionicons name="options" size={20} color="#059669" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
