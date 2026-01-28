import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { TypesSubscribeBlock } from './types'
import { styles } from './styles'

export const SubscribeBlock = ({ selectedPlan, setSelectedPlan, data, title, price, period }: TypesSubscribeBlock) => {
  return (
    <TouchableOpacity
      style={[styles.card, selectedPlan === data && styles.selectedCard]}
      onPress={() => setSelectedPlan(data)}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
      <Text style={styles.cardPeriod}>{period}</Text>

      {selectedPlan === 'year' && data === 'year' && (
        <Text style={styles.discount}>Экономия 33%</Text>
      )}
    </TouchableOpacity>
  )
}