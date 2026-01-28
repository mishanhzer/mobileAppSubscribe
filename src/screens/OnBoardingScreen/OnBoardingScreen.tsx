import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
const welcomeImage = require('../../../assets/onBoard/welcome.png')

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

      {/* кнопка продолжить */}
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
