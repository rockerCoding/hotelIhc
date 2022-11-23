import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Quartos = () => {

  const opcoes = [
    {
      nome: 'Suite Standart',
      cor: '#ccbbee',
      src: require('../../../assets/Pictures/Quartos/Standart/preview.jpg')
    },
    {
      nome: 'Suite Luxo',
      cor: '#ffbb1e',
      src: require('../../../assets/Pictures/Quartos/Luxo/preview.jpg')
    },
    {
      nome: 'Bangalo',
      cor: '#cc33ee',
      src: require('../../../assets/Pictures/Quartos/Bangalo/preview.jpg')
    },
    {
      nome: 'Presidencial',
      cor: '#000000',
      src: require('../../../assets/Pictures/Quartos/Presidencial/preview.jpg')
    }
  ]

  function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
    }
    throw new Error('Bad Hex');
  }

  const navigation = useNavigation()
  const [heightContainer, setHeightContainer] = useState(0)

  const Item = ({ item, index }) => {

    const isLeft = index % 2 == 0

    const start = isLeft ? { x: 0, y: 0 } : { x: 1, y: 0 }
    const end = isLeft ? { x: 1, y: 0 } : { x: 0, y: 0 }

    return (
      <TouchableOpacity style={[styles.card, { height: heightContainer / opcoes.length }]} >
        <View style={[styles.tipoQuartoContainer,
        {
          alignItems: isLeft ? 'flex-end' : 'flex-start',
          paddingLeft: isLeft ? '20px' : '0px',
          paddingRight: isLeft ? '0px' : '20px',


        }]}>
          <LinearGradient colors={['rgba(255, 255, 255, 0)', '#fff']}
            start={start} end={end}
            style={{
              width: Dimensions.get("screen").width * 0.90,
              height: heightContainer / 15,
              justifyContent: 'center',
              alignItems: isLeft ? 'flex-end' : 'flex-start',
              paddingLeft: isLeft ? '0px' : '10px',
              paddingRight: isLeft ? '10px' : '0px',
            }}
          >
            <Text style={styles.titleText}>
              {item.nome}
            </Text>
          </LinearGradient>
        </View>

        <Image
          source={item.src}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.innerTitleContainer}>
          <Text style={styles.pageTitleText}>Acomodações</Text>
        </View>
      </View>
      <View style={styles.contentContainer} onLayout={(e) => setHeightContainer(e.nativeEvent.layout.height)}>
        {
          opcoes.map((item, index) => {
            return (
              <Item item={item} index={index} key={index} />
            )
          })
        }
      </View>
    </View>
  )
}

export default Quartos