import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
  },
  carouselControllerContainer: {
    
    position: 'absolute',
    
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselControllerContainerLeft: {
    left: 0
  },
  carouselControllerContainerRight: {
    right: 0
  },
  obsText: {
    marginBottom: 5,
  }

})
