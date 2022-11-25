import { Dimensions, StyleSheet } from "react-native";

const primaryColor = 'white'

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.8,

  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleText: {
    color: primaryColor,
    fontSize: 20,
    alignSelf: 'flex-end',

  },
  textContainer: {
    width: '60%',
    marginRight: 20,
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    borderStyle: 'solid',

  },

  contentContainer: {
    flex: 5,
    position: 'relative'
  },
  card: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  upCard: {
    top: 10, left: 10,
  },
  downCard: {
    bottom: 20, right: 10,
  },
  cardText: {
    fontSize: 10,
    textAlign: 'justify'
  }



})