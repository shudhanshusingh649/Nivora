import { View, Text } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { featuresData } from '../../constants/onboarding';

export default function ScreenTwo({ width }: { width: number }) {
  return (
    <View style={{ width }} className="flex-1 px-6 pt-4">
      
      {/* 1. NEW TOP BADGE & TYPOGRAPHY */}
      <Animated.View entering={FadeInDown.delay(100).springify()}>
        <View className="bg-emerald-100/60 self-start px-3 py-1.5 rounded-full mb-4">
          <Text className="text-emerald-700 font-sans-extrabold text-[10px] tracking-widest uppercase">
            Why Choose Us
          </Text>
        </View>

        <Text className="text-4xl font-sans-extrabold text-black tracking-tight">More Than</Text>
        <Text className="text-4xl font-sans-extrabold text-emerald-600 tracking-tight">Just Rentals</Text>
        
        <Text className="text-gray-500 font-sans-medium mt-3 text-sm leading-5 pr-4">
          Everything you need for a comfortable living experience, all tailored to your lifestyle.
        </Text>
      </Animated.View>
      
      {/* 2. PREMIUM VERTICAL LIST LAYOUT */}
      <View className="mt-8 flex-1">
        {featuresData.map((feature, index) => (
          <Animated.View 
            key={feature.id}
            entering={FadeInRight.delay(300 + (index * 120)).springify().damping(15)} 
            className="flex-row items-center mb-6"
          >
            {/* Left Side: Large Soft Icon Container */}
            <View className="w-14 h-14 bg-[#f4fbf8] rounded-2xl items-center justify-center border border-emerald-100/50 shadow-sm shadow-emerald-50">
              <Ionicons name={feature.icon} size={24} color="#059669" />
            </View>
            
            {/* Right Side: Text Block */}
            <View className="flex-1 ml-4 justify-center">
              <Text className="text-black font-sans-extrabold text-base mb-0.5 tracking-tight">
                {feature.title}
              </Text>
              <Text className="text-gray-500 font-sans-medium text-xs leading-4 pr-2">
                {feature.desc}
              </Text>
            </View>
          </Animated.View>
        ))}
      </View>

    </View>
  );
}