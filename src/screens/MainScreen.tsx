import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSubscriptionStore } from '../stores/store'; // Импортируем store

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

      {/* Показываем тип подписки */}
      <View style={styles.subscriptionInfo}>
        <Text style={styles.subscriptionText}>
          Ваша подписка: <Text style={styles.subscriptionHighlight}>{subscriptionTypeText}</Text>
        </Text>
        {subscriptionType === 'year' && (
          <Text style={styles.discountBadge}>🎁 Экономия 33%!</Text>
        )}
      </View>

      <Text style={styles.text}>
        Это главный экран приложения.{'\n'}Сюда попадают только пользователи с активной подпиской.
      </Text>

      <View style={styles.contentBox}>
        <Text style={styles.contentTitle}>Премиум контент:</Text>
        <Text style={styles.contentItem}>• Эксклюзивные материалы</Text>
        <Text style={styles.contentItem}>• Без рекламы</Text>
        <Text style={styles.contentItem}>• Расширенные функции</Text>
        <Text style={styles.contentItem}>• Приоритетная поддержка</Text>
        <Text style={styles.contentItem}>• Обновления первыми</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={resetApp}>
        <Text style={styles.buttonText}>Выйти (тест)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  subscriptionInfo: {
    backgroundColor: '#F0F8FF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  subscriptionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  subscriptionHighlight: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  discountBadge: {
    backgroundColor: '#34C759',
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
  },
  contentBox: {
    backgroundColor: '#F0F8FF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
    width: '100%',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#007AFF',
  },
  contentItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});