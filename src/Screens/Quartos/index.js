import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './styles'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { QuartoContext } from '../../Contexts/QuartoContext';

const Quartos = () => {

  const opcoes = [
    {
      tipo: 1,
      nome: "Suite Standart",
      fotos: [
        require('../../../assets/Pictures/Quartos/Standart/000.jpg'),
        require('../../../assets/Pictures/Quartos/Standart/001.jpg'),
        require('../../../assets/Pictures/Quartos/Standart/002.jpg'),
        require('../../../assets/Pictures/Quartos/Standart/003.jpg'),
        require('../../../assets/Pictures/Quartos/Standart/004.jpg'),
      ],
      descricao: "Cama de casal ou até 3 de  Solteiro  •  Televisor Smart TV 43”  •  TV a cabo  •  Workstation  •  Telefone  •  Cofre  •  Acesso Wi-fi à internet banda larga  •  Ar condicionado central  •  Frigobar  •  Secador de cabelo •  Espelho cosmético •  Telefone no banheiro. Alguns apartamentos possuem vista para o prisma do prédio e outros para a cidade, conforme as fotos na galeria acima.",
      cor: '#48D1CC',
      preco: 200
    },
    {
      tipo: 2,
      nome: "Suite Luxo",
      fotos: [
        require('../../../assets/Pictures/Quartos/Luxo/000.jpg'),
        
      ],
      descricao: "Cama de casal • Abundante luz natural • Varanda com vista frontal e lateral para o mar  • Televisor Smart TV 43” • TV a cabo • Workstation • Telefone • Cofre • Acesso à internet banda larga • Ar condicionado central • Frigobar • Maquina de café expresso Illy • Secador de cabelo • Espelho cosmético • Telefone no banheiro.",
      cor: '#20B2AA',
      preco: 200
    },
    {
      tipo: 3,
      nome: "Presidencial",
      fotos: [
        require('../../../assets/Pictures/Quartos/Presidencial/000.jpg'),
        
      ],
      descricao: "Cama de casal • Abundante luz natural • Acesso exclusivo ao mar  • Televisor Smart TV 43” • TV a cabo • Workstation • Telefone • Cofre • Acesso à internet banda larga • Ar condicionado central • Frigobar • Maquina de café expresso Illy • Secador de cabelo • Espelho cosmético • Telefone no banheiro.",
      cor: '#008B8B',
      preco: 200
    },
    {
      tipo: 4,
      nome: "Bangalô",
      fotos: [
        require('../../../assets/Pictures/Quartos/Bangalo/000.jpg'),
        
      ],
      descricao: "uarto com cama de casal • Espaçosa sala de estar loft style • Sala de jantar, reunião ou camarim com banheiro exclusivo • Abundante luz natural • Varanda com vista total para o mar • Televisor Smart TV 43” • Canais de TV a cabo • Workstation • Telefone • Cofre • Acesso à internet banda larga • Ar condicionado central • Frigobar • Máquina de café Nespresso • Secador de cabelo • Banheiro de mármore com luz natural • Banheira de hidromassagem com vista para o mar • Box com chuveiro • Lavabo ",
      cor: '#008B8B',
      preco: 200
    },
    
   
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
  const { quarto, chooseTypeRoom } = useContext(QuartoContext)

  useEffect(() => {
    if(quarto != null) navigation.navigate("DetalheQuarto")
  }, [quarto])

  const Item = ({ item, index }) => {
    console.log(item)

    const isLeft = index % 2 == 0

    const start = isLeft ? { x: 0, y: 0 } : { x: 1, y: 0 }
    const end = isLeft ? { x: 1, y: 0 } : { x: 0, y: 0 }

    return (
      <TouchableOpacity style={[styles.card, { height: heightContainer / opcoes.length }]} 
        onPress={() => chooseTypeRoom(item)}
        
      >
        <View style={[styles.tipoQuartoContainer,
        {
          alignItems: isLeft ? 'flex-end' : 'flex-start',
          paddingLeft: isLeft ? 20 : 0,
          paddingRight: isLeft ? 0 : 20,


        }]}>
          <LinearGradient colors={['rgba(255, 255, 255, 0)', '#fff']}
            start={start} end={end}
            style={{
              width: Dimensions.get("screen").width * 0.90,
              height: heightContainer / 15,
              justifyContent: 'center',
              alignItems: isLeft ? 'flex-end' : 'flex-start',
              paddingLeft: isLeft ? 0 : 10,
              paddingRight: isLeft ? 10 : 0,
            }}
          >
            <Text style={styles.titleText}>
              {item.nome}
            </Text>
          </LinearGradient>
        </View>

        <Image
          source={item.fotos[0]}
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