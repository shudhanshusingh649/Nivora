import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function AuthSheet({ onClose }: { onClose: () => void }) {
  const [activeView, setActiveView] = useState<"login" | "signup">("login");

  return (
    <KeyboardAvoidingView
      // iOS pe padding best chalti hai, Android par height
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <View className="flex-row justify-end px-6 py-4 z-10">
        <TouchableOpacity
          onPress={onClose}
          className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
        >
          <Feather name="x" size={18} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* Keyboard aane par bhi user sab kuch dekh paye isliye ScrollView use kiya hai */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled" // Keyboard khule hue pe bhi bahar click ho jaye
      >
        {activeView === "login" ? (
          <LoginForm
            onSwitchToSignUp={() => setActiveView("signup")}
            onClose={onClose}
          />
        ) : (
          <SignUpForm
            onSwitchToLogin={() => setActiveView("login")}
            onClose={onClose}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
