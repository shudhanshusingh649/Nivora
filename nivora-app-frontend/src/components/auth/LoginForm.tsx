import { useAuth, useSignIn } from "@clerk/expo";
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
    <View className="px-6 py-4">
      <Text className="text-2xl font-sans-extrabold mb-2 text-slate-900">
        {isVerifying ? "Check your inbox" : "Welcome Back"}
      </Text>
      <Text className="text-slate-500 font-sans-medium text-sm mb-6">
        {isVerifying
          ? `Enter the code sent to ${email.trim()}`
          : "Sign in to your account."}
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
          <TextInput
            className={`h-14 bg-gray-50 border rounded-xl px-4 mb-4 font-sans-medium ${error && !email ? "border-red-400" : "border-gray-200"}`}
            value={email}
            onChangeText={(v) => {
              setEmail(v);
              setError("");
            }}
            placeholder="Email Address"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            className={`h-14 bg-gray-50 border rounded-xl px-4 mb-6 font-sans-medium ${error && password.length < 8 ? "border-red-400" : "border-gray-200"}`}
            value={password}
            onChangeText={(v) => {
              setPassword(v);
              setError("");
            }}
            placeholder="Password"
            secureTextEntry
          />
        </>
      )}

      <TouchableOpacity
        onPress={isVerifying ? handleVerify : handleSignIn}
        disabled={isSubmitting}
        className={`w-full h-14 rounded-xl items-center justify-center ${isSubmitting ? "bg-emerald-400" : "bg-[#059669]"}`}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-sans-bold text-base">
            {isVerifying ? "Verify Code" : "Log In"}
          </Text>
        )}
      </TouchableOpacity>

      {isVerifying ? (
        <TouchableOpacity
          onPress={() => setIsVerifying(false)}
          className="mt-4 items-center"
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
