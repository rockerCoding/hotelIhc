import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Localizacao = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/Pictures/mapa2.jpg')}
        style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
        resizeMode="cover"

      />

      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Localização</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={[styles.card, styles.upCard]}>
          <Text style={styles.cardText}>Localizado no nobre bairro do Ingá, ao lado de Icaraí, próximo as melhores soluções para quem está na cidade a trabalho ou a lazer. O Hotel situa-se perto dos principais acessos ao centro de Niterói, do Rio de Janeiro e Região dos Lagos.</Text>
        </View>
        <View style={[styles.card, styles.downCard]}>
          <Text style={styles.cardText}>24,7 km do Aeroporto Santos Dumont   •  28,4 km do Aeroporto Galeão Tom Jobim   •  24,5 km do Centro do Rio   •   3,3 km do Centro de Niterói  •   30 km do Pão de Açúcar e do Cristo Redentor  •  20,7 km do Maracanã  •  2,2 km da Praia de Icaraí</Text>
        </View>
      </View>
    </View>
  )
}

export default Localizacao