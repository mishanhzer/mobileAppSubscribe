import { View, Text } from 'react-native';

import { styles } from './styles'
import { contentItems } from './constants'

export const PremiumContent = () => {
  return (
    <View style={styles.contentBox}>
      <Text style={styles.contentTitle}>Премиум контент:</Text>
      {contentItems.map(item => {
        return (
          <Text
            style={styles.contentItem}
            key={item.id}>
            {item.text}
          </Text>
        )
      })}
    </View>
  )
}