import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerTitleContainer: {

    width: '50%'
  },
  pageTitleText: {
    textAlign: 'right',
    marginRight: 20,
    fontWeight: '300',
    fontSize: 25,
    color: 'white'
  },
  titleText: {
    textAlign: 'right',

    fontWeight: '200',
    letterSpacing: 2,
    fontSize: 17
  },

  contentContainer: {
    flex: 8,
  },

  card: {
    width: Dimensions.get('screen').width,
  },
  cardOver: {
    backgroundColor: '#cadada',
    opacity: 1,
    flex: 1
  },
  backButtonContainer: {
    marginLeft: 30


  },


  tipoQuartoContainer: {
    width: '100%',

    position: 'relative',
    bottom: 15,
    zIndex: 10
  },
  tipoQuartoContainerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 5
  },

  submenuText: {
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: '50%',
    letterSpacing: 3,
    fontWeight: '300',
    fontSize: 20,
    color: 'white'
  },
  descriptionText: {
    textAlign: 'justify'
  },

  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgb(155, 216, 0)',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
    width: Dimensions.get("screen").width * 0.8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5
  },
  buttonText: {
    color: 'white',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 17
  },
  obsText: {
    fontSize: 10,

  }






})