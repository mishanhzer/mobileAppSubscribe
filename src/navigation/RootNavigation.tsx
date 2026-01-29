import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from './AppNavigator/AppNavigatior';
import { Loading } from '../components/Loading/Loading';

export const RootNavigation: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};