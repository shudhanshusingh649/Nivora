import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backgroundColor?: string;
  textColor?: string;
  rightComponent?: React.ReactNode;
}

export default function Header({
  title,
  showBack = false,
  backgroundColor = "#059669",
  textColor = "#ffffff",
  rightComponent,
}: HeaderProps) {
  // Yeh hook screen ke safe area (notch/status bar) ki exact height deta hai
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      style={{
        // MAGIC YAHAN HAI: Notch ki height padding me add ki,
        // toh content safe area me rahega par background upar tak jayega.
        paddingTop: insets.top + 10,
        backgroundColor: backgroundColor,
      }}
      className="pb-4 px-4 flex-row items-center justify-between z-50 shadow-sm"
    >
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      {/* 1. LEFT SIDE: Back Button */}
      <View className="w-10 items-start justify-center">
        {showBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="w-10 h-10 justify-center -ml-2"
          >
            <Feather name="arrow-left" size={24} color={textColor} />
          </TouchableOpacity>
        )}
      </View>

      {/* 2. CENTER: Title */}
      <View className="flex-1 items-center justify-center">
        {title && (
          <Text
            className="font-sans-extrabold text-[17px] tracking-tight"
            style={{ color: textColor }}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
      </View>

      {/* 3. RIGHT SIDE: Custom Component */}
      <View
        className={`${rightComponent ? "w-24" : "w-12"} items-end justify-center`}
      >
        {rightComponent}
      </View>
    </View>
  );
}
