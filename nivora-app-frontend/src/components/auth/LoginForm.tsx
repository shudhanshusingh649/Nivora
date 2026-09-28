import { useAuth, useSignIn } from "@clerk/expo";
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
  "We couldn't sign you in. Try again.";

export default function LoginForm({
  onSwitchToSignUp,
  onClose,
}: {
  onSwitchToSignUp: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const { isLoaded } = useAuth();
  const { signIn } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password show/hide state
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      return setError("Enter a valid email address.");
    if (password.length < 8)
      return setError("Your password must be at least 8 characters.");

    setError("");
    setIsSubmitting(true);
    try {
      const result = await signIn!.password({
        emailAddress: email.trim().toLowerCase(),
        password,
      });

      if (result.error) return setError(getErrorMessage(result.error));

      if (signIn!.status === "complete") {
        await signIn!.finalize();
        onClose();
        router.replace("/(tabs)");
        return;
      }

      if (signIn!.status === "needs_second_factor") {
        setIsVerifying(true);
        return;
      }
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
      const result = await signIn!.emailCode.verifyCode({ code });
      if (result.error) return setError(getErrorMessage(result.error));

      if (signIn!.status === "complete") {
        await signIn!.finalize();
        onClose();
        router.replace("/(tabs)");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) return null;

  return (
    <View className="px-6 pb-8">
      {/* 1. Zeevo Logo Added here */}
      <View className="items-center mb-6 -mt-4">
        <Image
          source={require("@/assets/images/logo.png")} // path dekh lena bhai
          className="w-40 h-20"
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-sans-extrabold mb-2 text-slate-900">
        {isVerifying ? "Check your inbox" : "Welcome Back"}
      </Text>
      <Text className="text-slate-500 font-sans-medium text-sm mb-6">
        {isVerifying
          ? `Enter the code sent to ${email.trim()}`
          : "Sign in to your account to continue."}
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
          {/* Email Field with Label */}
          <View>
            <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
              Email Address
            </Text>
            <TextInput
              className={`h-14 bg-gray-50 border rounded-2xl px-4 font-sans-medium text-[15px] ${error && !email ? "border-red-400" : "border-gray-200"}`}
              value={email}
              onChangeText={(v) => {
                setEmail(v);
                setError("");
              }}
              placeholder="e.g. johndoe@gmail.com"
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Password Field with Label & Eye Icon */}
          <View>
            <Text className="font-sans-bold text-[13px] text-gray-600 mb-2 ml-1">
              Password
            </Text>
            <View
              className={`flex-row items-center h-14 bg-gray-50 border rounded-2xl px-4 ${error && password.length < 8 ? "border-red-400" : "border-gray-200"}`}
            >
              <TextInput
                className="flex-1 font-sans-medium text-[15px]"
                value={password}
                onChangeText={(v) => {
                  setPassword(v);
                  setError("");
                }}
                placeholder="Enter your password"
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

      {/* Login Button */}
      <TouchableOpacity
        onPress={isVerifying ? handleVerify : handleSignIn}
        disabled={isSubmitting}
        className={`w-full h-14 rounded-2xl items-center justify-center shadow-sm ${isSubmitting ? "bg-emerald-400 shadow-none" : "bg-[#059669] shadow-emerald-200"}`}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-sans-bold text-[15px]">
            {isVerifying ? "Verify Code" : "Log In"}
          </Text>
        )}
      </TouchableOpacity>

      {/* Footer Links */}
      {isVerifying ? (
        <TouchableOpacity
          onPress={() => setIsVerifying(false)}
          className="mt-6 items-center"
        >
          <Text className="font-sans-bold text-slate-600">
            Use a different account
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onSwitchToSignUp}
          className="mt-6 items-center"
        >
          <Text className="font-sans-medium text-gray-500">
            Don't have an account?{" "}
            <Text className="text-[#059669] font-sans-bold">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
