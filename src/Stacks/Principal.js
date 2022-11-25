
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import IconIon from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home'
import BackgroundMenu from '../Components/SVG/BackgroundMenu';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Quartos from '../Screens/Quartos';
import HomeStack from './Home';
import DetalheQuarto from '../Screens/DetalheQuarto';
import Reserva from '../Screens/Reserva';

const CustomSideBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.profileContainer}>

        <View style={styles.pictureContainer}>
          <View style={styles.pictureProfileContainer}>
            <IconIon name="person-sharp" size={120} color="#3382C9" />
          </View>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={[styles.loginsButtons, styles.loginLogin]}>
            <Text style={styles.loginLoginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.loginsButtons, styles.signIn]}>
            <Text style={styles.loginLoginText}>Inscreva-se</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Text>a</Text>
      </View>
      <View style={styles.socialMediasContainer}>
        <Text>a</Text>
      </View>
    </SafeAreaView>
  )

}

const HeaderRight = () => {
  return (
    <View style={styles.rightHeaderContainer}>
      <View style={styles.insideContainer}>
        <Image
          source={require("../../assets/Pictures/lasalle_logo.png")}
          style={{ width: 100, height: 90 }}
          resizeMode="center"
        />
      </View>
    </View>
  )
}

const Principal = () => {

  const Drawer = createDrawerNavigator();
  return (

    <Drawer.Navigator
      drawerContent={(props) => <CustomSideBar {...props} />}
      /* initialRouteName="DetalheQuarto" */
      initialRouteName="HomeStack"
      screenOptions={{
        headerRight: () => <HeaderRight />,
        headerTitle: "",
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="DetalheQuarto" component={DetalheQuarto} />
      <Drawer.Screen name="Reserva" component={Reserva} />
      

    </Drawer.Navigator>

  )
}

export default Principal