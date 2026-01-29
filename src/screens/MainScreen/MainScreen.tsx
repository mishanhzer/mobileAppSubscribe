import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSubscriptionStore } from '../../stores/store';

import { Header } from './components/Header/Header'
import { TypeSubscribe } from './components/TypeSubscribe/TypeSubscribe'
import { PremiumContent } from './components/PremiumContent/PremiumContent'
import { ButtonExit } from './components/ButtonExit/ButtonExit'

import { styles } from './styles'

export default function MainScreen() {
  const navigation = useNavigation();
  const { subscriptionType, unsubscribe } = useSubscriptionStore();

  const resetApp = () => {
    unsubscribe();
    navigation.reset({
      index: 0,
      routes: [{ name: 'OnBoarding' as never }],
    });
  };

  // Форматируем тип подписки для отображения
  const subscriptionTypeText = subscriptionType === 'month'
    ? ' месячная'
    : subscriptionType === 'year'
      ? ' годовая'
      : ' неизвестно';

  return (
    <View style={styles.container}>
      <Header />

      {/* Показываем какая у вас подписка */}
      <TypeSubscribe
        subscriptionType={subscriptionType}
        subscriptionTypeText={subscriptionTypeText} />

      <Text style={styles.text}>
        Это главный экран приложения.{'\n'}
        Сюда попадают только пользователи с активной подпиской.
      </Text>

      {/* Какие плюшки у вас за подписку*/}
      <PremiumContent />

      {/* Кнопка - Выйти */}
      <ButtonExit resetApp={resetApp} />
    </View>
  );
}
