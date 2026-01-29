import { View, Text } from "react-native"

import { styles } from './styles'

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>Вы внутри!</Text>
    </View>
  )
}