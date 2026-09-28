import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthSheet from "../auth/AuthSheet";
import GoogleAuthButton from "../auth/GoogleAuthButton";

export default function LoggedOutProfile() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-[#f0fbf5]"
      style={{ paddingTop: insets.top }} // Status bar ke neeche se start hoga
    >
      {/* Header Section - Compact */}
      <View className="px-6 py-4">
        <Text className="text-3xl font-sans-extrabold text-slate-900 tracking-tight">
          Your Profile
        </Text>
        <Text className="text-slate-500 font-sans-medium text-[14px] mt-1 leading-5 pr-4">
          Join our community to find, manage, and book your perfect space
          effortlessly.
        </Text>
      </View>

      {/* Hero Image - Flex-1 ensures it automatically adjusts height without pushing content down */}
      <View className="flex-1 w-full relative justify-end">
        <Image
          source={require("../../../assets/images/logout-profile.png")}
          className="w-full h-[120%]" // Image thodi badi dikhegi par overflow hide ho jayega
          resizeMode="cover"
        />
      </View>

      {/* Bottom Content Card - Static, No Scroll */}
      <View
        className="bg-white rounded-t-[36px] px-6 pt-6 shadow-sm shadow-gray-300"
        // 110px padding bottom isliye di hai taaki apka floating tab bar buttons ke upar na aaye
        style={{ paddingBottom: 110 }}
      >
        {/* Clean CTA Area */}
        <View className="items-center mb-6 px-2">
          <View className="w-14 h-14 bg-emerald-50 rounded-[18px] items-center justify-center mb-4 border border-emerald-100">
            <Feather name="unlock" size={24} color="#059669" />
          </View>

          <Text className="text-[20px] font-sans-extrabold text-slate-900 text-center mb-2 tracking-tight">
            Unlock the Best of Zeevo
          </Text>

          <Text className="text-slate-500 font-sans-medium text-[13.5px] text-center leading-[20px]">
            Sign in to save favorites, chat with owners, and manage your stays
            seamlessly.
          </Text>
        </View>

        {/* Buttons Section - Tightly packed */}
        <View className="gap-3">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowAuthModal(true)}
            className="w-full bg-[#059669] h-14 rounded-2xl flex-row items-center justify-center shadow-sm shadow-emerald-200"
          >
            <Feather name="mail" size={18} color="white" />
            <Text className="text-white font-sans-bold text-[15px] ml-2">
              Continue with Email
            </Text>
          </TouchableOpacity>

          <GoogleAuthButton />
        </View>
      </View>

      {/* Auth Modal Container */}
      <Modal
        visible={showAuthModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowAuthModal(false)}
      >
        <AuthSheet onClose={() => setShowAuthModal(false)} />
      </Modal>
    </View>
  );
}
