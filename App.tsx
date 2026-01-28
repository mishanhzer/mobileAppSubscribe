import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from 'react';

import OnBoardingScreen from './src/screens/OnBoardingScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import MainScreen from './src/screens/MainScreen';
import { useSubscriptionStore } from './src/stores/store';

const Stack = createNativeStackNavigator();

export default function App() {
  const { isSubscribed } = useSubscriptionStore();
  const [isReady, setIsReady] = useState(true);

  // Ждём загрузки состояния из AsyncStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          // initialRouteName={"OnBoarding"}
          initialRouteName={isSubscribed ? "Main" : "OnBoarding"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
          />
          <Stack.Screen
            name="Paywall"
            component={PaywallScreen}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});