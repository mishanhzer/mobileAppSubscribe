import React from 'react';

import { View } from 'react-native';

import { RootNavigation } from './src/navigation/RootNavigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}