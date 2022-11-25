import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.8,
    backgroundColor: '#3382C9',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  pictureContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  titleTextContainer: {
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: 5,
    marginTop: 20,
    alignSelf: 'flex-end'
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    alignSelf: 'flex-end'
  },
  contentText: {
    color: 'white',
    textAlign: 'justify'
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end'
  },
  button: {
    width: '50%',
    height: '70%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: 'white'
  }



})