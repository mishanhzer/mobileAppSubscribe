import { View, Text } from 'react-native';

import { TypesTypeSubscribe } from './types'
import { styles } from './styles'

export const TypeSubscribe = ({ subscriptionType, subscriptionTypeText }: TypesTypeSubscribe) => {
  return (
    <View style={styles.subscriptionInfo}>
      <Text style={styles.subscriptionText}>
        Ваша подписка:
        <Text
          style={styles.subscriptionHighlight}>
          {subscriptionTypeText}
        </Text>
      </Text>
      {subscriptionType === 'year' && (
        <Text style={styles.discountBadge}>🎁 Экономия 33%!</Text>
      )}
    </View>
  )
}

