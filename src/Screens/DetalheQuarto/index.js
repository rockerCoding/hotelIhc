import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './styles'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { QuartoContext } from '../../Contexts/QuartoContext';

const DetalheQuarto = () => {

  

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
  const { quarto } = useContext(QuartoContext)

  return (
    <View style={{ flex: 1, backgroundColor: quarto.color }}>

      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.innerTitleContainer}>
          <Text style={styles.pageTitleText}>{quarto.nome}</Text>
        </View>
      </View>
      <View style={styles.contentContainer} onLayout={(e) => setHeightContainer(e.nativeEvent.layout.height)}>
       
      </View>
    </View>
  )
}

export default DetalheQuarto