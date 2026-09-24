import { create } from "zustand";

export interface User {
  id: string;
  clerk_id: string;
  email: string;
  phone: number | null;
  created_at?: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  city: string | null;
}

export interface Admin {
  id: string;
  user_id: string;
  role: string;
}

export interface Provider {
  id: string;
  user_id: string;
}

interface UserStore {
  loading: boolean;
  setLoading: (value: boolean) => void;

  user: User | null;
  setUser: (user: User | null) => void;

  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;

  admin: Admin | null;
  provider: Provider | null;

  isAdmin: boolean;
  isProvider: boolean;

  setAdmin: (admin: Admin | null) => void;
  setProvider: (provider: Provider | null) => void;

  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  loading: true,
  user: null,
  profile: null,

  admin: null,
  provider: null,

  isAdmin: false,
  isProvider: false,

  setLoading: (value) => set({ loading: value }),

  setUser: (user) => set({ user }),

  setProfile: (profile) => set({ profile }),

  setAdmin: (admin) =>
    set({
      admin,
      isAdmin: !!admin,
    }),

  setProvider: (provider) =>
    set({
      provider,
      isProvider: !!provider,
    }),

  clearUser: () =>
    set({
      loading: false,
      user: null,
      profile: null,
      admin: null,
      provider: null,
      isAdmin: false,
      isProvider: false,
    }),
}));
