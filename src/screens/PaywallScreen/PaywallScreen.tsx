import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSubscriptionStore } from '../../stores/store';

import { SubscribeBlock } from './components/SubscribeBlock/SubscribeBlock'

import { styles } from './styles'

export default function PaywallScreen() {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'year'>('month');
  const { subscribe } = useSubscriptionStore();

  // Это я бы лучше вынес в кастомку
  const handlePurchase = () => {
    subscribe(selectedPlan);

    Alert.alert(
      'Успешно! 🎉',
      `Вы оформили ${selectedPlan === 'month' ? 'месячную' : 'годовую'} подписку`,
      [
        {
          text: 'Перейти в приложение',
          onPress: () => navigation.navigate('Main' as never),
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите подписку</Text>

      {/* Месячная */}
      <SubscribeBlock
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        data={'month'}
        title={'Месяц'}
        price={'299 ₽'}
        period={'в месяц'} />

      {/* Годовая */}
      <SubscribeBlock
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        data={'year'}
        title={'Год'}
        price={'2 399 ₽'}
        period={'в год'} />

      {/* Кнопка - Купить подписку */}
      <TouchableOpacity
        style={styles.button}
        onPress={handlePurchase}>
        <Text style={styles.buttonText}>Купить подписку</Text>
      </TouchableOpacity>
    </View>
  );
}
