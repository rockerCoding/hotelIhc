import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    
  },
  titleText :{
    color: 'white',
    fontSize: 25,
    borderColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: Dimensions.get("screen").width * 0.5,
    textAlign: 'right'
  },
  backButtonContainer: {
    marginLeft: 30
  },
  innerTitleContainer: {

    width: '50%'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitleText: {
    textAlign: 'right',
    marginRight: 20,
    fontWeight: '300',
    fontSize: 25,
    color: 'white'
  },
  
  middleContainer: {
    flex: 6,
    
    justifyContent: 'space-around',
    alignItems:'center'
  },
  pickerDateContainer: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  selectContainer: {
    
  },
  selectionQtdContainer: {
    justifyContent: 'space-around'
  },
  selectButton: {
    
    
    borderRadius: 10,
    width: '80%'
    
  },

  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    width: Dimensions.get("screen").width * 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
  }
})