import React from 'react'
import Principal from './src/Stacks/Principal'

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthProvider from './src/Contexts/AuthContext'
import QuartoProvider from './src/Contexts/QuartoContext';

const App = () => {
  return (
    <PaperProvider>

      <NavigationContainer>
        <AuthProvider>
          <QuartoProvider>
            <Principal />
          </QuartoProvider>
        </AuthProvider>
      </NavigationContainer>

    </PaperProvider>
  )
}



export default App