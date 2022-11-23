import { View, Text, Button, ScrollView, Image } from 'react-native'
import React from 'react'

import VideoPresentation from './VideoPresentation';
import History from './History';
import Acomodacoes from './Acomodacoes';
import Localizacao from './Localizacao';
import Servicos from './Servicos';

const Home = () => {

  return (
    <ScrollView style={{ flex: 1 }}>
      <VideoPresentation />
      <History />
      <Acomodacoes />
      <Localizacao />
      <Servicos />
    </ScrollView>
  )
}

export default Home