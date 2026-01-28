import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSubscriptionStore } from '../../stores/store'; // Импортируем store

import { TypeSubscribe } from './TypeSubscribe/TypeSubscribe'
import { PremiumContent } from './PremiumContent/PremiumContent'

import { styles } from './styles'

export default function MainScreen() {
  const navigation = useNavigation();
  const { subscriptionType, unsubscribe } = useSubscriptionStore(); // Берём из store

  const resetApp = () => {
    unsubscribe(); // Используем метод из store
    navigation.reset({
      index: 0,
      routes: [{ name: 'OnBoarding' as never }],
    });
  };

  // Форматируем тип подписки для отображения
  const subscriptionTypeText = subscriptionType === 'month'
    ? 'месячная'
    : subscriptionType === 'year'
      ? 'годовая'
      : 'неизвестно';

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>Вы внутри!</Text>

      {/* Показываем какая у вас подписка */}
      <TypeSubscribe
        subscriptionType={subscriptionType}
        subscriptionTypeText={subscriptionTypeText} />

      <Text style={styles.text}>
        Это главный экран приложения.{'\n'}Сюда попадают только пользователи с активной подпиской.
      </Text>

      {/* Какие плюшки у вас за подписку*/}
      <PremiumContent />

      <TouchableOpacity
        style={styles.button}
        onPress={resetApp}>
        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}
