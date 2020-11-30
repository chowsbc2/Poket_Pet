
import { StyleSheet } from 'react-native';
import { normalize, withTheme } from 'react-native-elements';

export const colors = {
  primary: '#324098', // MD Amber 500
  primaryDark: '#6b77af', // MD Brown 300
  primaryLight: '#BDBDBD', // MD Amber 200
  outline: '#BDBDBD' // MD Gray 400
}

export const styles = StyleSheet.create({
  
  footerButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '80%',
    alignItems: "center",
  },

  body: {
    flex: 0.4,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
    padding: '5%',
  },

  footerButton: {
    borderRadius: 12,
    borderColor: colors.outline,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginHorizontal: '5%',
    backgroundColor: colors.primaryDark,

    },
  
  textStyle: {
    color: 'black',
    fontSize: 100
  },

  footerButton2: {
    borderRadius: 12,
    borderColor: colors.outline,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginHorizontal: '5%',
    backgroundColor: 'lightgray',
          
    },

    textInputContainer: {
      marginTop: '30%',
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },

    textInputBox: {
      borderColor: colors.outline,
      borderWidth: 1,
      width: '80%', 
      height: 40, 
      fontSize: 24,
      padding: 5,
    },
});