import { decode } from "base64-arraybuffer";
import * as FileSystem from "expo-file-system/legacy";

export const uploadAvatar = async (
  authSupabase: any,
  clerkId: string,
  imageUri: string,
) => {
  try {
    console.log("Uploading image:", imageUri);

    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const ext = imageUri.split(".").pop() || "jpg";
    const fileName = `${clerkId}/avatar.${ext}`;

    const { error } = await authSupabase.storage
      .from("avatars")
      .upload(fileName, decode(base64), {
        contentType: `image/${ext}`,
        upsert: true,
      });

    if (error) {
      console.log("Storage Upload Error:", error);
      throw error;
    }

    const { data } = authSupabase.storage
      .from("avatars")
      .getPublicUrl(fileName);

    console.log("Avatar URL:", data.publicUrl);

    return `${data.publicUrl}?t=${Date.now()}`;
  } catch (err) {
    console.log("Avatar Upload Failed:", err);
    throw err;
  }
};

export const updateProfile = async (
  authSupabase: any,
  profileId: string,
  data: any,
) => {
  const { data: updatedProfile, error } = await authSupabase
    .from("user_profiles")
    .update(data)
    .eq("id", profileId)
    .select()
    .single();

  if (error) throw error;

  return updatedProfile;
};

export const createProfile = async (
  authSupabase: any,
  userId: string,
  data: any,
) => {
  const { data: createdProfile, error } = await authSupabase
    .from("user_profiles")
    .insert({ user_id: userId, ...data })
    .select()
    .single();

  if (error) throw error;

  return createdProfile;
};

export const updatePhone = async (
  authSupabase: any,
  userId: string,
  phone: string | null,
) => {
  const { data, error } = await authSupabase
    .from("users")
    .update({ phone })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
};
