import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Servicos = () => {

  const items = [
    {
      nome: 'Academia',
      descricao: "Temos academia para todos os clientes (incluso) funcionando de 07:00 da manhã as 22:00",
      src: require('../../../../assets/Pictures/Servicos/academia.jpg'),
      color: '#cdadef'
    },
    {
      nome: 'Restaurantes',
      descricao: "Restaurantes renomados com 4 estrelas Michelin",
      src: require('../../../../assets/Pictures/Servicos/restaurante.jpg'),
      color: '#feabfeab'
    },
    {
      nome: 'Piscinas',
      descricao: "Temos uma bela piscina no topo do hotel, onde nossos visitantes podem contemplar o visual da cidade",
      src: require('../../../../assets/Pictures/Servicos/piscina.jpg'),
      color: '#ffeedd'
    },
    {
      nome: 'Tour',
      descricao: "Os melhores guias da região estão preparados para lhe receber e apresentar todos os melhores locais",
      src: require('../../../../assets/Pictures/Servicos/city_tour.jpg'),
      color: '#eeddaa'
    }
  ]


  function getContrastYIQ(hexcolor) {

    var r = parseInt(hexcolor.substr(1, 2), 16);
    var g = parseInt(hexcolor.substr(3, 2), 16);
    var b = parseInt(hexcolor.substr(5, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (yiq >= 128) ? '#000' : '#FFF';
  }


  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Serviços</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {
          items.map((item, index) => {

            return (
              <View style={[styles.cardContainer]} key={index}>

                <View style={[styles.cardContentContainer, { flexDirection: index % 2 == 1 ? 'row' : 'row-reverse' }]}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={item.src}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.descricaoContainer}>
                    <View 
                      style={[styles.insideContainer, 
                      {
                        marginLeft: index % 2 == 0 ? 30 : 0,
                        marginRight: index % 2 == 1 ? 10 : 0,
                        backgroundColor: item.color
                      }]}>
                      <View style={[styles.cardTitleContainer, {alignItems: index % 2 == 1 ? 'flex-start' : 'flex-end'}]}>
                        <Text style={{ color: getContrastYIQ(item.color), fontWeight: '600' }}>{item.nome}</Text>
                      </View>
                      <View style={styles.descricaoContentContainer}>
                        <Text style={[styles.textDescricao, { color: getContrastYIQ(item.color) }]}>{item.descricao}</Text>
                      </View>
                    </View>

                  </View>
                </View>

              </View>
            )
          })
        }
      </View>

    </View>
  )
}

export default Servicos