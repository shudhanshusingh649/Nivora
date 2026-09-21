import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { categories } from '../../constants/data';

export default function CategoryGrid() {
  return (
    <View className="px-4 pt-4 flex-row flex-wrap justify-between gap-y-4">
      {categories.map((item, index) => (
        <Animated.View 
          key={item.id} 
          entering={FadeInDown.delay(index * 50).springify().damping(16)}
          className="w-[23.5%]"
        >
          <TouchableOpacity 
            activeOpacity={0.7} 
            className="w-full bg-white rounded-3xl p-3 items-start justify-center"
            style={{ 
              minHeight: 90,
              shadowColor: '#64748B', 
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.08, 
              shadowRadius: 10, 
              elevation: 3 
            }} 
          >
            <View 
              style={{ backgroundColor: `${item.color}15`, borderRadius: 12, marginBottom: 2 }} 
            >
              <Image 
                source={item.icon} 
                className="w-6 h-6 m-1" 
                resizeMode="contain" 
                style={{ tintColor: item.color }} 
              />
            </View>
            
            {/* Title - Left Aligned */}
            <Text 
              className="text-black font-sans-extrabold text-[11px] text-left leading-[14px]"
              numberOfLines={2}
            >
              {item.name}
            </Text>
            
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
}