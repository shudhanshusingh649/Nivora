import { TouchableOpacity, Text } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

interface ActionButtonProps {
  isLastScreen: boolean;
  onNext: () => void;
  onStart: () => void;
}

export default function ActionButton({ isLastScreen, onNext, onStart }: ActionButtonProps) {
  return (
    <Animated.View entering={FadeInRight.duration(300)}>
      {isLastScreen ? (
        <TouchableOpacity 
          onPress={onStart}
          className="bg-emerald-900 px-8 py-4 rounded-full flex-row items-center shadow-lg shadow-emerald-900/50"
        >
          <Text className="text-white font-bold text-base mr-2">Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          onPress={onNext}
          className="bg-emerald-900 w-14 h-14 rounded-full items-center justify-center shadow-lg shadow-emerald-900/50"
        >
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}