import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : COLORS.GREEN,
    justifyContent: 'center',
    padding: 40,
  },

  banner:{
    width:'100%',
    height: 200,
    resizeMode: 'contain',
  },

  inputarea: {
    fontSize: 16,
    color: COLORS.BLACK,
    padding: 15,
    width: '95%',
    borderWidth: 1,
    backgroundColor : COLORS.WHITE,
    borderColor: '#000',
    marginHorizontal: 10,
    marginBottom: 7,
    borderRadius: 10,
    height: 50,
    textAlignVertical: 'top'
  },

  inputText: {
    fontSize: 15,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK_SECONDARY,
    paddingHorizontal: 15,
  },

  button:{
    height: 50,
    width : '100%',
    backgroundColor :'#333',
    marginHorizontal: 10,
    borderRadius : 10,
    padding: 20,
    justifyContent: 'center',
    flexDirection : 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  buttonLogin:{
    backgroundColor: '#218f2c',
    justifyContent: 'center',
    alignItems : 'center', 
    width: '95%',
  },

  buttonText:{
    fontFamily: 'Archivo_700Bold',
    color: COLORS.WHITE,
    fontSize: 16
  },

  backButton: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35
  }

});

export default styles;
