import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSubscriptionStore } from '../stores/store';

export default function PaywallScreen() {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'year'>('month');
  const { subscribe } = useSubscriptionStore();

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
      <TouchableOpacity
        style={[styles.card, selectedPlan === 'month' && styles.selectedCard]}
        onPress={() => setSelectedPlan('month')}>
        <Text style={styles.cardTitle}>Месяц</Text>
        <Text style={styles.cardPrice}>299 ₽</Text>
        <Text style={styles.cardPeriod}>в месяц</Text>
      </TouchableOpacity>

      {/* Годовая */}
      <TouchableOpacity
        style={[styles.card, selectedPlan === 'year' && styles.selectedCard]}
        onPress={() => setSelectedPlan('year')}>
        <Text style={styles.cardTitle}>Год</Text>
        <Text style={styles.cardPrice}>2 399 ₽</Text>
        <Text style={styles.cardPeriod}>в год</Text>
        <Text style={styles.discount}>Экономия 33%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePurchase}>
        <Text style={styles.buttonText}>Купить подписку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1A1A1A',
  },
  card: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  selectedCard: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#1A1A1A',
  },
  cardPeriod: {
    color: '#666',
    marginBottom: 4,
    fontSize: 16,
  },
  discount: {
    color: '#FF3B30',
    fontWeight: '600',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});