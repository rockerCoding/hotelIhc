import { Dimensions, StyleSheet } from "react-native";

const primaryColor = 'white'

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.85,
    backgroundColor: 'orange'
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleText: {
    color: primaryColor,
    fontSize: 50,
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
  row: {
    flex: 1,
    backgroundColor: 'red',
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'column',

  },
  cardTitleContainer: {
    width: '100%',
    padding: 2,
    justifyContent: 'center',
    
  },
  cardContentContainer: {
    flex: 1,

  },
  imageContainer: {
    width: '50%',

  },
  descricaoContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textDescricao: {
    fontSize: 8,
    textAlign: 'justify'
  },
  descricaoContentContainer: {
    flex: 1
  },
  insideContainer: {
    height: '75%',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  }

})