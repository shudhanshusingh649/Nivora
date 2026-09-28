import Header from "@/components/Header";
import { useAuthSupabase } from "@/lib/auth";
import {
  createProfile,
  updatePhone,
  updateProfile,
  uploadAvatar,
} from "@/services/profile.service";
import { useUserStore } from "@/store/userStore";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfile() {
  const router = useRouter();
  const authSupabase = useAuthSupabase();

  const { user, profile, setProfile, setUser } = useUserStore();

  const [firstName, setFirstName] = useState(profile?.first_name || "");
  const [lastName, setLastName] = useState(profile?.last_name || "");
  const [displayName, setDisplayName] = useState(profile?.display_name || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [city, setCity] = useState(profile?.city || "");
  const [phone, setPhone] = useState(user?.phone?.toString() || "");
  const [avatar, setAvatar] = useState(
    profile?.avatar_url ||
      "https://img.magnific.com/premium-photo/3d-illustration-cartoon-business-man-character-avatar-profile_1183071-397.jpg?semt=ais_hybrid&w=740&q=80",
  );

  const [isSaving, setIsSaving] = useState(false);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Gallery access is required to change profile picture!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!user) {
      alert("You need to be logged in to update your profile.");
      return;
    }

    setIsSaving(true);

    try {
      let avatarUrl = profile ? profile.avatar_url || avatar : avatar;

      if (avatar.startsWith("file://")) {
        avatarUrl = await uploadAvatar(authSupabase, user.clerk_id, avatar);
      }

      const profileData = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        display_name: displayName.trim(),
        bio,
        city,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const updatedProfile = profile
        ? await updateProfile(authSupabase, profile.id, profileData)
        : await createProfile(authSupabase, user.id, profileData);

      const updatedUser = await updatePhone(
        authSupabase,
        user.id,
        phone || null,
      );

      setProfile(updatedProfile);
      setUser(updatedUser);

      alert("Profile updated successfully!");

      router.back();
    } catch (err: any) {
      console.log(err);
      alert(err.message || "Profile update failed.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header
        title="Edit Profile"
        showBack={true}
        rightComponent={
          <TouchableOpacity
            onPress={handleSave}
            disabled={isSaving}
            className="py-2 px-4 bg-white rounded-full items-center justify-center shadow-sm shadow-emerald-200"
          >
            {isSaving ? (
              <ActivityIndicator size="small" color="#059669" />
            ) : (
              <Text className="font-sans-bold text-emerald-600 text-[13px]">
                Save
              </Text>
            )}
          </TouchableOpacity>
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View className="items-center mt-6 mb-8">
            <TouchableOpacity
              onPress={pickImage}
              activeOpacity={0.8}
              className="relative"
            >
              <Image
                source={{ uri: avatar }}
                className="w-28 h-28 rounded-full bg-gray-100 border-4 border-white shadow-sm shadow-gray-200"
              />
              <View className="absolute bottom-0 right-0 bg-emerald-600 w-9 h-9 rounded-full items-center justify-center border-4 border-white shadow-sm">
                <Feather name="camera" size={14} color="#ffffff" />
              </View>
            </TouchableOpacity>
            <Text className="text-gray-500 font-sans-medium text-[12px] mt-3">
              Tap to change profile picture
            </Text>
          </View>

          <View className="px-5 space-y-5">
            <View className="flex-row justify-between space-x-3">
              <View className="flex-1">
                <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                  First Name
                </Text>
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="John"
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14 font-sans-medium text-[15px] text-slate-900"
                />
              </View>
              <View className="flex-1">
                <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                  Last Name
                </Text>
                <TextInput
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Doe"
                  className="bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14 font-sans-medium text-[15px] text-slate-900"
                />
              </View>
            </View>

            <View>
              <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                Display Name
              </Text>
              <TextInput
                value={displayName}
                onChangeText={setDisplayName}
                placeholder="How should we call you?"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14 font-sans-medium text-[15px] text-slate-900"
              />
            </View>

            <View>
              <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                Email Address
              </Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 h-14 opacity-70">
                <Feather
                  name="lock"
                  size={16}
                  color="#9CA3AF"
                  className="mr-3"
                />
                <TextInput
                  value={user?.email || ""}
                  editable={false}
                  className="flex-1 font-sans-medium text-[15px] text-gray-500 ml-2"
                />
              </View>
              <Text className="text-[10px] font-sans-medium text-gray-400 mt-1.5 ml-1">
                Email address cannot be changed.
              </Text>
            </View>

            <View>
              <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                Phone Number
              </Text>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter 10-digit number"
                keyboardType="numeric"
                maxLength={10}
                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14 font-sans-medium text-[15px] text-slate-900"
              />
            </View>

            <View>
              <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                City
              </Text>
              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="e.g. Bangalore, Mumbai"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 h-14 font-sans-medium text-[15px] text-slate-900"
              />
            </View>

            <View>
              <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
                Bio
              </Text>
              <TextInput
                value={bio}
                onChangeText={setBio}
                placeholder="Write a short bio about yourself..."
                multiline
                textAlignVertical="top"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 min-h-[100px] font-sans-medium text-[15px] text-slate-900"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
