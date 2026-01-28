type SubscriptionPlan = 'year' | 'month';

export interface TypesSubscribeBlock {
  selectedPlan: 'month' | 'year'
  setSelectedPlan: (plan: SubscriptionPlan) => void;
  // setSelectedPlan: React.Dispatch<React.SetStateAction<"year" | "month">>
  data: string
  title: string
  price: string
  period: string
}