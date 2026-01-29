import { View, Text } from 'react-native';

import { styles } from './styles'

export const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text>Загрузка...</Text>
    </View>
  )
}
