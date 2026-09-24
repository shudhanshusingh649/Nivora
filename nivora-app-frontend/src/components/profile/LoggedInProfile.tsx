import { useAuth } from "@clerk/expo";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import { useUserStore } from "@/store/userStore";

export default function LoggedInProfile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const { user, profile, isAdmin, isProvider } = useUserStore();

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 py-6 flex-row justify-between items-start">
        <View>
          <Text className="text-3xl font-sans-extrabold text-slate-900 tracking-tight">
            Profile
          </Text>
        </View>
        <TouchableOpacity className="mt-1 relative">
          <Feather name="bell" size={22} color="#374151" />
          <View className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          router.push("/profile-details");
        }}
        className="px-6 py-5 flex-row items-center"
      >
        <View className="relative">
          <Image
            source={{
              uri:
                profile?.avatar_url ||
                "https://img.magnific.com/premium-photo/3d-illustration-cartoon-business-man-character-avatar-profile_1183071-397.jpg?semt=ais_hybrid&w=740&q=80",
            }}
            className="w-[68px] h-[68px] rounded-full bg-gray-200"
          />
        </View>
        <View className="flex-1 ml-4 justify-center">
          <Text className="text-[19px] font-sans-extrabold text-slate-900 leading-6">
            {profile?.display_name || profile?.first_name || "User"}
          </Text>
          <Text
            className="text-slate-500 font-sans-medium text-[13px] mt-0.5"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {user?.email}
          </Text>

          <View className="bg-emerald-50 border border-emerald-100 rounded-full px-2 py-1 mt-1.5 flex-row items-center self-start">
            <MaterialCommunityIcons
              name="check-decagram"
              size={12}
              color="#059669"
            />
            <Text className="text-emerald-700 font-sans-bold text-[10px] ml-1">
              Verified User
            </Text>
          </View>
        </View>
        <Feather name="chevron-right" size={22} color="#9CA3AF" />
      </TouchableOpacity>

      <View className="mx-6 mb-5 bg-white rounded-[20px] flex-row items-center justify-between py-4 px-4 shadow-sm shadow-gray-200/50 border border-gray-100">
        <StatItem count="12" label="Saved" />
        <View className="w-[1px] h-8 bg-gray-100" />
        <StatItem count="3" label="Inquiries" />
        <View className="w-[1px] h-8 bg-gray-100" />
        <StatItem count="5" label="Reviews" />
      </View>

      <View className="px-6 mb-6">
        {isAdmin && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log("Admin Panel khulega")}
            className="w-full bg-indigo-600 h-14 rounded-2xl flex-row items-center justify-center mb-3 shadow-sm shadow-indigo-200"
          >
            <Feather name="shield" size={18} color="white" />
            <Text className="text-white font-sans-bold text-base ml-2">
              Admin Panel
            </Text>
          </TouchableOpacity>
        )}

        {isProvider ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log("Provider Dashboard khulega")}
            className="w-full bg-slate-900 h-14 rounded-2xl flex-row items-center justify-center shadow-sm shadow-slate-300"
          >
            <Feather name="pie-chart" size={18} color="white" />
            <Text className="text-white font-sans-bold text-base ml-2">
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log("List Property page khulega")}
            className="w-full bg-[#059669] h-14 rounded-2xl flex-row items-center justify-center shadow-sm shadow-emerald-200"
          >
            <Feather name="home" size={18} color="white" />
            <Text className="text-white font-sans-bold text-base ml-2">
              List Property
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Animated.View
        entering={FadeInDown.duration(400).springify()}
        className="px-6 pb-12"
      >
        <View className="bg-white rounded-3xl p-2 shadow-sm shadow-gray-200/50 border border-gray-100">
          <ActionItem icon="heart" title="Saved Listings" />
          <ActionItem icon="clock" title="Recent Searches" />
          <ActionItem icon="settings" title="Settings" />
          <ActionItem icon="help-circle" title="Help & Support" />

          <ActionItem
            icon="log-out"
            title="Log Out"
            onPress={() => signOut()}
            isLast
            hideChevron
            customColor="#DC2626"
          />
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const StatItem = ({ count, label }: { count: string; label: string }) => (
  <View className="flex-1 items-center">
    <Text className="text-xl font-sans-extrabold text-slate-900">{count}</Text>
    <Text className="text-slate-500 font-sans-medium text-[12px] mt-0.5">
      {label}
    </Text>
  </View>
);

const ActionItem = ({
  icon,
  title,
  isLast,
  hideChevron,
  onPress,
  customColor,
}: any) => {
  const colorClass = customColor ? `text-[${customColor}]` : "text-slate-800";
  const iconColor = customColor || "#374151";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`flex-row items-center px-4 py-4 ${!isLast ? "border-b border-gray-50" : ""}`}
    >
      <Feather name={icon} size={20} color={iconColor} />
      <View className="flex-1 ml-4">
        <Text
          className={`font-sans-bold text-[14px] ${customColor ? "text-red-600" : "text-slate-800"}`}
        >
          {title}
        </Text>
      </View>
      {!hideChevron && (
        <Feather name="chevron-right" size={18} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );
};
