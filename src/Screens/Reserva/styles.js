import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  
  middleContainer: {
    flex: 6,
    
    justifyContent: 'space-around',
    alignItems:'center'
  },
  pickerDateContainer: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: '#FCAC18',
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
    
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },

  bottomContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  }
})