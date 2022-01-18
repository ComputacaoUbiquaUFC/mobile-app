import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

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
    borderRadius: 10,
    height: 50,
    textAlignVertical: 'top',
    marginBottom: 7
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
    marginVertical: 0.3,
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

  forgotPassword: {
    width: '97%',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginVertical: 5
  },

  forgot: {
    fontSize: 16,
    color: COLORS.WHITE,
  },

  row: {
    fontSize: 17,
    flexDirection: 'row',
    padding: 15,
    color: COLORS.WHITE,
    justifyContent: 'center',
    marginTop: 4,
  },

  link2: {
    color: COLORS.WHITE,
    fontSize: 16
  },

  link: {
    fontSize: 16,
    fontFamily: 'Archivo_700Bold', 
    justifyContent: 'center',
    color: COLORS.WHITE,
  },

  backButton: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35
  },

  viewAb: {
    position: 'absolute',
    top: 60,
    left: 50
  }

});

export default styles;
