import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabs } from "../../constants/data";
import { colors, components } from "../../constants/theme";

const tabBar = components.tabBar;

type TabIconProps = {
  focused: boolean;
  icon: keyof typeof Ionicons.glyphMap;
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View className="items-center justify-center h-full">
      <View
        className={clsx(
          "items-center justify-center rounded-full w-12 h-12 transition-all duration-200",
          // Tailwind class se light green background diya active state pe
          focused ? "bg-emerald-50" : "bg-transparent",
        )}
      >
        <Ionicons
          name={focused ? (icon.replace("-outline", "") as any) : icon}
          size={24}
          // Active hone par Dark Green (#059669), inactive par Gray
          color={focused ? "#059669" : colors.muted}
        />
      </View>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
