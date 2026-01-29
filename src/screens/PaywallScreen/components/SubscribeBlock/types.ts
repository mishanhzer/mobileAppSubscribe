type SubscriptionPlan = 'year' | 'month';

export interface TypesSubscribeBlock {
  selectedPlan: 'month' | 'year'
  setSelectedPlan: (plan: SubscriptionPlan) => void;
  data: 'month' | 'year'
  title: string
  price: string
  period: string
}