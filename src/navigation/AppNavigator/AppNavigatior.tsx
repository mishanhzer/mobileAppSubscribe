import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';
import PaywallScreen from '../../screens/PaywallScreen/PaywallScreen';
import MainScreen from '../../screens/MainScreen/MainScreen';

import { useSubscriptionStore } from '../../stores/store';

const Stack = createNativeStackNavigator();

export const AppNavigator: React.FC = () => {
  const { isSubscribed } = useSubscriptionStore();

  return (
    <Stack.Navigator
      initialRouteName={isSubscribed ? "Main" : "OnBoarding"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};