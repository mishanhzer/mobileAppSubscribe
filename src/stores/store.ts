import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TypesSubscriptionStore} from './types'

export const useSubscriptionStore = create<TypesSubscriptionStore>()(
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