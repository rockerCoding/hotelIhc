import { View, Text, Image, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';

const Acomodacoes = () => {

  const navigation = useNavigation()

  var photos = [
    {
      src: require('../../../../assets/Pictures/Telas/Acomodacoes/001.jpg'),
    },
    {
      src: require('../../../../assets/Pictures/Telas/Acomodacoes/002.jpg'),
    },




  ]

  const width = Dimensions.get('window').width ;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Acomodações</Text>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <Carousel
          loop
          width={width}
          height={width * 0.7 }
          autoPlay={true}
          data={photos}
          scrollAnimationDuration={1200}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1 }}>
              <Image
                source={item.src}
                resizeMode='cover'
                style={{flex: 1}}
              />
            </View>
          )}
        />

      </View>
      <View style={styles.pictureContainer}>
        <Text style={styles.contentText}>Nossos 264 quartos e suítes decorados com tom minimalista surpreendem pela modernidade e conforto. Disponibilizamos em todas as unidades internet de alta velocidade, Smart TV 43” com 41 canais a cabo, estação de trabalho, cofre eletrônico, frigobar, piso antialérgico, ducha de alta pressão, secador de cabelo, espelho cosmético, amenities especiais e telefone.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate("Quartos")}
        >
          <Text style={styles.buttonText}>Veja mais detalhes</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default Acomodacoes