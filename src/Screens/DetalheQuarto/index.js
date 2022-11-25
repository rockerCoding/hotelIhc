import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './styles'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { QuartoContext } from '../../Contexts/QuartoContext';
import CarouselParalax from '../../Components/CarouselParalax';

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
const DetalheQuarto = () => {

  const navigation = useNavigation()
  const [heightContainer, setHeightContainer] = useState(0)
  const { quarto, chooseTypeRoom } = useContext(QuartoContext)

  const backNav = () => {
    chooseTypeRoom(null)
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: quarto?.cor }}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButtonContainer}
          onPress={() => backNav()}
        >
          <MaterialIcons name="arrow-back-ios" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.innerTitleContainer}>
          <Text style={styles.pageTitleText}>{quarto?.nome}</Text>
        </View>
      </View>

      <View style={[styles.contentContainer]} onLayout={(e) => setHeightContainer(e.nativeEvent.layout.height)}>
        <CarouselParalax photos={quarto?.fotos} />
        <View style={{ margin: 20 }}>
          <Text style={[styles.submenuText]}>Descrição</Text>
          <View>
            <Text style={styles.descriptionText}>{quarto?.descricao}</Text>
          </View>
          <View>
            <Text style={[styles.submenuText]}>Preços</Text>
            <Text>Preços a partir de {quarto?.preco} R$ *</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.obsText}>* Preços válidos para quarto somente com cama de casal</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Reserva")}>
          <MaterialIcons name="schedule" size={30} color="white" />
          <Text style={styles.buttonText} >Reserve já</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default DetalheQuarto