// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const welcomeImage = require('../../assets/onBoard/welcome.png')

export default function OnBoardingSсreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Image
        source={welcomeImage}
        style={styles.image}
        resizeMode='contain' />

      <Text style={styles.descr}>
        Откройте все возможности приложения с премиум-подпиской
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Paywall')}
      >
        <Text
          style={styles.buttonText}>
          Продолжить
        </Text>
      </TouchableOpacity>

      <StatusBar
        style="auto"
        backgroundColor="#5f00ee" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  descr: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
})

