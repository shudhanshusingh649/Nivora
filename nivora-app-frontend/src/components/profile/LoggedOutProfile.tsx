import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import AuthSheet from "../auth/AuthSheet";
import GoogleAuthButton from "../auth/GoogleAuthButton";

export default function LoggedOutProfile() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-[#f0fbf5]"
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View className="px-6 pt-12 pb-6">
        <Text className="text-3xl font-sans-extrabold text-slate-900 tracking-tight mb-2">
          Your Profile
        </Text>
        <Text className="text-slate-500 font-sans-medium text-[15px] leading-6 pr-8">
          Join our community to find, manage, and book your perfect space
          effortlessly.
        </Text>
      </View>

      <View className="h-52 w-full items-center justify-end relative">
        <Image
          source={require("../../../assets/images/logout-profile.png")}
          className="w-full h-full absolute top-0"
          resizeMode="cover"
        />
      </View>

      <Animated.View
        entering={FadeInDown.duration(500).springify().damping(18)}
        className="bg-white rounded-t-[36px] px-6 pt-8 pb-12 -mt-8 shadow-sm shadow-gray-300"
      >
        <View className="items-center mb-8 px-2 mt-2">
          <View className="w-16 h-16 bg-emerald-50 rounded-[20px] items-center justify-center mb-5 border border-emerald-100">
            <Feather name="unlock" size={28} color="#059669" />
          </View>

          <Text className="text-[22px] font-sans-extrabold text-slate-900 text-center mb-2.5 tracking-tight">
            Unlock the Best of Zeevo
          </Text>

          <Text className="text-slate-500 font-sans-medium text-[14px] text-center leading-[22px]">
            Sign in to save your favorite listings, view contact details, chat
            with owners, and pick up right where you left off.
          </Text>
        </View>

        <View className="space-y-4 flex flex-col gap-2">
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

        <View className="flex-row items-center justify-center mt-8 px-2 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-50 pb-20">
          <Ionicons name="shield-checkmark" size={20} color="#059669" />
          <Text className="text-gray-500 font-sans-medium text-[12px] ml-2 leading-4 flex-1">
            Join thousands of students and professionals securely finding their
            stays with Zeevo.
          </Text>
        </View>
      </Animated.View>

      <Modal
        visible={showAuthModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowAuthModal(false)}
      >
        <AuthSheet onClose={() => setShowAuthModal(false)} />
      </Modal>
    </ScrollView>
  );
}
