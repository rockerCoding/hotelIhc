import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.85
  },
  video: {
     flex: 1,
     
  }, 
  sobreposicao: {
    height: Dimensions.get("screen").height * 0.85,
    width: '100%',
    backgroundColor: 'rgba(1,1,1,0.5)',
    position: 'absolute',
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: '2rem'
  }
})