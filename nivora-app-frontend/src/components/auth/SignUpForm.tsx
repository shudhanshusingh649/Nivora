import { useAuthSupabase } from "@/lib/auth";
import { useAuth, useSignUp } from "@clerk/expo";
import { Feather } from "@expo/vector-icons"; // Eye icon ke liye
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const getErrorMessage = (error: any) =>
  error?.errors?.[0]?.message ??
  error?.message ??
  "We couldn't create your account. Try again.";

export default function SignUpForm({
  onSwitchToLogin,
  onClose,
}: {
  onSwitchToLogin: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const { isLoaded } = useAuth();
  const { signUp } = useSignUp();
  const authSupabase = useAuthSupabase();

  // firstName aur lastName ki states hata di hain
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password show/hide karne ki state
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      return setError("Enter a valid email address.");
    if (password.length < 8)
      return setError("Your password must be at least 8 characters.");

    setError("");
    setIsSubmitting(true);
    try {
      const result = await signUp!.create({
        emailAddress: email.trim().toLowerCase(),
        password,
        // firstName aur lastName yahan se bhi hata diya hai
      });

      if (result.error) return setError(getErrorMessage(result.error));

      const verification = await signUp!.verifications.sendEmailCode();
      if (verification.error)
        return setError(getErrorMessage(verification.error));

      setIsVerifying(true);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = async () => {
    if (!/^\d{6}$/.test(code))
      return setError("Enter the 6-digit verification code.");
    setError("");
    setIsSubmitting(true);
    try {
      const result = await signUp!.verifications.verifyEmailCode({ code });
      if (result.error) return setError(getErrorMessage(result.error));

      await signUp!.finalize();

      const clerkId = signUp!.createdUserId;

      if (!clerkId) {
        throw new Error("Clerk user ID not found.");
      }

      const { error: userError } = await authSupabase.from("users").insert({
        clerk_id: clerkId,
        email: email.trim().toLowerCase(),
        phone: null,
      });

      if (userError) {
        if (userError.code !== "23505") {
          throw userError;
        }
      }

      onClose();
      router.replace("/(tabs)");
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) return null;

  return (
    <View className="px-6 pb-8">
      {/* Zeevo Logo */}
      <View className="items-center mb-6 -mt-4">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-40 h-20"
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-sans-extrabold mb-2 text-slate-900">
        {isVerifying ? "Check your inbox" : "Create Account"}
      </Text>
      <Text className="text-slate-500 font-sans-medium text-sm mb-6">
        {isVerifying
          ? `We sent a 6-digit verification code to ${email.trim()}`
          : "Join thousands finding their perfect place."}
      </Text>

      {!!error && (
        <View className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3">
          <Text className="font-sans-medium text-sm text-red-600">{error}</Text>
        </View>
      )}

      {isVerifying ? (
        <TextInput
          className={`h-14 rounded-2xl border bg-gray-50 px-4 text-center text-2xl tracking-[0.5em] text-slate-900 mb-6 ${error ? "border-red-400" : "border-gray-200"}`}
          value={code}
          onChangeText={(value) => {
            setCode(value.replace(/\D/g, "").slice(0, 6));
            setError("");
          }}
          placeholder="000000"
          placeholderTextColor="#9ca3af"
          keyboardType="number-pad"
          maxLength={6}
          autoFocus
        />
      ) : (
        <View className="gap-5 mb-8">
          {/* Naya Email Field Labels ke sath */}
          <View>
            <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
              Email Address
            </Text>
            <TextInput
              className={`h-14 bg-gray-50 border rounded-2xl px-4 font-sans-medium text-[15px] ${error && !email ? "border-red-400" : "border-gray-200"}`}
              placeholder="e.g. abhishek@zeevo.com"
              value={email}
              onChangeText={(v) => {
                setEmail(v);
                setError("");
              }}
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Naya Password Field Label aur Eye Icon ke sath */}
          <View>
            <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
              Password
            </Text>
            <View
              className={`flex-row items-center h-14 bg-gray-50 border rounded-2xl px-4 ${error && password.length < 8 ? "border-red-400" : "border-gray-200"}`}
            >
              <TextInput
                className="flex-1 font-sans-medium text-[15px]"
                placeholder="Create a strong password"
                value={password}
                onChangeText={(v) => {
                  setPassword(v);
                  setError("");
                }}
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPassword(!showPassword)}
                className="p-2 -mr-2"
              >
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={18}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={isVerifying ? handleVerify : handleSignUp}
        disabled={isSubmitting}
        className={`w-full h-14 rounded-2xl items-center justify-center shadow-sm ${isSubmitting ? "bg-emerald-400 shadow-none" : "bg-[#059669] shadow-emerald-200"}`}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-sans-bold text-[15px]">
            {isVerifying ? "Verify Email" : "Sign Up"}
          </Text>
        )}
      </TouchableOpacity>

      {/* Bottom Links */}
      {isVerifying ? (
        <TouchableOpacity
          onPress={() => setIsVerifying(false)}
          className="mt-6 items-center"
        >
          <Text className="font-sans-bold text-slate-600">
            Use a different email
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onSwitchToLogin}
          className="mt-6 items-center"
        >
          <Text className="font-sans-medium text-gray-500">
            Already have an account?{" "}
            <Text className="text-[#059669] font-sans-bold">Log In</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
