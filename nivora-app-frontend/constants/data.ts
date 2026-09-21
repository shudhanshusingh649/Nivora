import { Ionicons } from "@expo/vector-icons";

export type AppTab = {
  name: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
};

// Added Home, Explore, Mess, Saved, and Profile
export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: "home-outline" },
  { name: "explore", title: "Explore", icon: "compass-outline" },
  { name: "mess", title: "Mess", icon: "restaurant-outline" },
  { name: "saved", title: "Saved", icon: "bookmark-outline" },
  { name: "profile", title: "Profile", icon: "person-outline" },
];

export const categories : Category[] = [
  { id: 1, name: 'PG & Hostel', icon: require('@/assets/icons/pg.png'), color: '#00C853' }, 
  { id: 2, name: 'Flats & Rooms', icon: require('@/assets/icons/pg.png'), color: '#2962FF' }, 
  { id: 3, name: 'Mess & Food', icon: require('@/assets/icons/pg.png'), color: '#FF9100' }, 
  { id: 4, name: 'Flatmates', icon: require('@/assets/icons/pg.png'), color: '#00BFA5' }, 
  { id: 5, name: 'Nearby Services', icon: require('@/assets/icons/pg.png'), color: '#00B8D4' }, 
  { id: 6, name: 'Map Search', icon: require('@/assets/icons/pg.png'), color: '#00C853' }, 
  { id: 7, name: 'Near Colleges', icon: require('@/assets/icons/pg.png'), color: '#00695C' }, 
  { id: 8, name: 'Verified Listings', icon: require('@/assets/icons/pg.png'), color: '#FF9100' }, 
];

