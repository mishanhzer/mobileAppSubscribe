export interface TypesSubscriptionStore {
  isSubscribed: boolean;
  subscriptionType: 'month' | 'year' | null;
  subscribe: (type: 'month' | 'year') => void;
  unsubscribe: () => void;
}