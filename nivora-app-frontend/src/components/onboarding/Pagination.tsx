import { View } from "react-native";
import Animated, {
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

interface PaginationProps {
  screens: any[];
  currentIndex: number;
}

const Dot = ({ isActive }: { isActive: boolean }) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isActive ? 24 : 8, { duration: 300 }),
      backgroundColor: withTiming(isActive ? "#059669" : "#E5E7EB", {
        duration: 300,
      }),
    };
  });

  return <Animated.View style={rStyle} className="h-2 rounded-full mx-1" />;
};

export default function Pagination({ screens, currentIndex }: PaginationProps) {
  return (
    <View className="flex-row items-center">
      {screens.map((_, index) => (
        <Dot key={index} isActive={currentIndex === index} />
      ))}
    </View>
  );
}
