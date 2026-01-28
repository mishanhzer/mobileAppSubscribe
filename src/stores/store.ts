import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SubscriptionStore {
  isSubscribed: boolean;
  subscriptionType: 'month' | 'year' | null;
  subscribe: (type: 'month' | 'year') => void;
  unsubscribe: () => void;
}

export const useSubscriptionStore = create<SubscriptionStore>()(
  persist(
    (set) => ({
      isSubscribed: false,
      subscriptionType: null,
      subscribe: (type) => set({ isSubscribed: true, subscriptionType: type }),
      unsubscribe: () => set({ isSubscribed: false, subscriptionType: null }),
    }),
    {
      name: 'subscription-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);