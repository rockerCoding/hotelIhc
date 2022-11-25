import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.8,
    backgroundColor: '#FCAC18',
    padding: 25
  },
  imageSugarLoaf: {
    width: '90%',
    height: '90%'
  },
  titleContainer: {
    flex: 3,

    },
  contentContainer: {
    flex: 3,
    
  }, 
  pictureContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextContainer: {
    width: '50%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: 5,
    marginTop: 20
  },
  titleText: {
    color: 'white',
    fontSize: 50
  }



})