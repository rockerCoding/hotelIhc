import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'

const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Sobre</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text>Com uma das vistas mais lindas do Rio de Janeiro, o H Niterói Hotel é a melhor escolha para a sua estada na cidade. Com localização estratégica, infraestrutura completa, tecnologia de ponta, serviços de excelência, quartos confortáveis e suítes com varanda com vista surpreendente para o Pão de açúcar.</Text>
      </View>
      <View style={styles.pictureContainer}>
        <Image
          source={require('../../../../assets/Pictures/sugar-loaf.png')}
          style={styles.imageSugarLoaf}
          resizeMode="contain"
        />
      </View>

    </View>
  )
}

export default History