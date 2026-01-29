import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
})