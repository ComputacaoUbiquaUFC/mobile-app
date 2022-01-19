import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : COLORS.GREEN,
    justifyContent: 'center',
    padding: 10,
  },

  banner:{
    width:'100%',
    height: 580,
    resizeMode: 'contain',
  },

  title:{
    fontFamily: 'Poppins_600SemiBold',
    color:'#fff',
    fontSize: 25,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center'
  },

  titleBold:{
     fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer:{
    marginVertical: 30,
    paddingVertical: 15,
    justifyContent: 'center',
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

  buttonPrimary:{
    backgroundColor: '#d11f1f',
    justifyContent: 'space-between',
    alignItems : 'center',
    width: '100%',
  },

  buttonSecondary:{
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

  totalConnections:{
    fontFamily: 'Poppins_400Regular',
    color: '#b4c2ff',
    fontSize: 12,
    lineHeight:20,
    maxWidth: 140,
    marginTop : 40,
  },
});

export default styles;