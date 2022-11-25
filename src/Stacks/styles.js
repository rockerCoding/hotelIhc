import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rightHeaderContainer: {
    marginRight: 30,
    flex: 1
  },
  insideContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profileContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureContainer: {
    flex: 4,
    width: '100%',
    height: '100%',
  },
  pictureProfileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 6,
    backgroundColor: 'white'
  }, 
  socialMediasContainer: {
    flex: 1,
    backgroundColor: 'blue'
  },
  loginsButtons: {
    width: Dimensions.get("screen").width * 0.32,
    height: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  loginLogin: {
    backgroundColor: '#FCAC18'
  }, 
  loginLoginText: {
    color: 'white',
  },
  signIn: {
    backgroundColor: '#3382C9',
    borderWidth: 0.5,
    borderColor: 'white',
    borderStyle: 'solid'
  }

})