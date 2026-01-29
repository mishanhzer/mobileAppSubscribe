import { Text, TouchableOpacity } from 'react-native';

import { TypesButtonExit } from './types'
import { styles } from './styles'

export const ButtonExit = ({ resetApp }: TypesButtonExit) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={resetApp}>
      <Text style={styles.buttonText}>Выйти</Text>
    </TouchableOpacity>
  )
}