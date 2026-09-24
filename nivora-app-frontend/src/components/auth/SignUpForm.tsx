import { useAuthSupabase } from "@/lib/auth";
import { useAuth, useSignUp } from "@clerk/expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async () => {
    if (!firstName.trim() || !lastName.trim())
      return setError("Enter your first and last name.");
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
        firstName: firstName.trim(),
        lastName: lastName.trim(),
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
    <View className="px-6 py-4">
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
          className={`h-14 rounded-xl border bg-gray-50 px-4 text-center text-2xl tracking-[0.5em] text-slate-900 mb-6 ${error ? "border-red-400" : "border-gray-200"}`}
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
        <>
          <View className="flex-row justify-between mb-4">
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={(v) => {
                setFirstName(v);
                setError("");
              }}
              className="w-[48%] h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 font-sans-medium"
            />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(v) => {
                setLastName(v);
                setError("");
              }}
              className="w-[48%] h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 font-sans-medium"
            />
          </View>
          <TextInput
            className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 mb-4 font-sans-medium"
            placeholder="Email Address"
            value={email}
            onChangeText={(v) => {
              setEmail(v);
              setError("");
            }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 mb-6 font-sans-medium"
            placeholder="Password (8+ characters)"
            value={password}
            onChangeText={(v) => {
              setPassword(v);
              setError("");
            }}
            secureTextEntry
          />
        </>
      )}

      <TouchableOpacity
        onPress={isVerifying ? handleVerify : handleSignUp}
        disabled={isSubmitting}
        className={`w-full h-14 rounded-xl items-center justify-center ${isSubmitting ? "bg-emerald-400" : "bg-[#059669]"}`}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-sans-bold text-base">
            {isVerifying ? "Verify Email" : "Sign Up"}
          </Text>
        )}
      </TouchableOpacity>

      {isVerifying ? (
        <TouchableOpacity
          onPress={() => setIsVerifying(false)}
          className="mt-4 items-center"
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
