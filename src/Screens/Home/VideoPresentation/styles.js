import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    /* height: Dimensions.get("screen").height  */
    height: Dimensions.get("screen").height * 0.80
  },
  video: {
    flex: 1

  },
  sobreposicao: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(1,1,1,0.5)',
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 20
  }
})