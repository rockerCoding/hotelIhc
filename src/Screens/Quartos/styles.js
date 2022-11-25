import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerTitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: '50%'
  },
  pageTitleText: {
    textAlign: 'right',
    marginRight: 10,
    fontWeight: '200',
    fontSize: 15,
    color: 'white'
  },
  titleText: {
    textAlign: 'right',
    
    fontWeight: '200',
    letterSpacing: 2,
    fontSize: 20
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
  backButtonContainer:{
    marginLeft: 30
    
    
  },


  tipoQuartoContainer: {
    width: '100%',
    
    position: 'absolute',
    bottom: 15,
    zIndex: 10
  },
  tipoQuartoContainerText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '300',
    letterSpacing: 5
  }
})