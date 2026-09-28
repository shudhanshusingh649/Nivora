import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";

export default function FloatingChatButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log("Future me chat screen khulegi")} // In future: router.push('/chat')
      className="absolute right-6 bg-[#059669] w-[56px] h-[56px] rounded-full items-center justify-center z-50"
      style={{
        // Tab bar ki height ke hisaab se isko adjust kiya hai taaki overlap na ho
        bottom: Platform.OS === "ios" ? 110 : 100,
        // Premium drop shadow
        shadowColor: "#059669",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8, // Android shadow
      }}
    >
      <Ionicons name="chatbubble-ellipses" size={26} color="#ffffff" />
    </TouchableOpacity>
  );
}
