import { useUserStore } from "@/store/userStore";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function ProfileDetails() {
  const router = useRouter();

  const { user, profile } = useUserStore();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-5 py-4 flex-row justify-between items-center bg-white border-b border-gray-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center"
        >
          <Feather name="arrow-left" size={20} color="#374151" />
        </TouchableOpacity>

        <Text className="font-sans-extrabold text-lg text-slate-900">
          My Profile
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/edit-profile")}
          className="w-10 h-10 rounded-full bg-emerald-50 items-center justify-center"
        >
          <Feather name="edit-2" size={18} color="#059669" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="items-center mt-8 mb-6">
          <View className="relative shadow-sm shadow-gray-200">
            <Image
              source={{
                uri:
                  profile?.avatar_url ||
                  "https://img.magnific.com/premium-photo/3d-illustration-cartoon-business-man-character-avatar-profile_1183071-397.jpg?semt=ais_hybrid&w=740&q=80",
              }}
              className="w-28 h-28 rounded-full bg-gray-200 border-4 border-white"
            />
          </View>
          <Text className="text-2xl font-sans-extrabold text-slate-900 mt-4 tracking-tight">
            {profile?.display_name || profile?.first_name || "User"}{" "}
          </Text>
          <Text className="text-slate-500 font-sans-medium text-[14px] mt-1">
            {profile?.bio || "-"}
          </Text>
        </View>

        <View className="px-5 space-y-4">
          <View className="bg-white rounded-3xl p-5 shadow-sm shadow-gray-100/50 border border-gray-50">
            <Text className="font-sans-bold text-[13px] text-gray-400 uppercase tracking-widest mb-4">
              Personal Information
            </Text>

            <InfoRow
              icon="user"
              label="Full Name"
              value={
                profile?.first_name || profile?.last_name
                  ? `${profile.first_name || ""} ${profile.last_name || ""}`
                  : "Not added yet"
              }
            />
            <View className="h-[1px] w-full bg-gray-50 my-3" />

            <InfoRow
              icon="mail"
              label="Email Address"
              value={user?.email || "abhishek.raj@example.com"}
            />
            <View className="h-[1px] w-full bg-gray-50 my-3" />

            <InfoRow
              icon="phone"
              label="Phone Number"
              value={user?.phone ? `+91 ${user.phone}` : "Not added yet"}
            />
            <View className="h-[1px] w-full bg-gray-50 my-3" />

            <InfoRow
              icon="map-pin"
              label="City"
              value={profile?.city || "Not added yet"}
            />
          </View>

          <View className="bg-white rounded-3xl p-5 shadow-sm shadow-gray-100/50 border border-gray-50">
            <View className="h-[1px] w-full bg-gray-50 my-3" />

            <InfoRow
              icon="calendar"
              label="Joined"
              value={
                user?.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "September 2025"
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const InfoRow = ({ icon, label, value, isCode = false }: any) => (
  <View className="flex-row items-center">
    <View className="w-10 h-10 rounded-2xl bg-gray-50 items-center justify-center mr-4">
      <Feather name={icon} size={18} color="#6B7280" />
    </View>
    <View className="flex-1">
      <Text className="font-sans-medium text-[12px] text-gray-500 mb-0.5">
        {label}
      </Text>
      <Text
        className={`text-[15px] text-slate-800 ${isCode ? "font-mono" : "font-sans-bold"}`}
      >
        {value}
      </Text>
    </View>
  </View>
);
