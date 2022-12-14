import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Quartos from '../Screens/Quartos';
import Reserva from '../Screens/Reserva'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quartos" component={Quartos} />
      <Stack.Screen name="Reserva" component={Reserva} />
      
    </Stack.Navigator>
  );
}

export default HomeStack