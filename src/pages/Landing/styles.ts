import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : COLORS.GREEN,
    justifyContent: 'center',
    padding: 40,
  },

  banner:{
    width:'100%',
    height: 250,
    resizeMode: 'contain',
  },

  title:{
    fontFamily: 'Poppins_400Regular',
    color:'#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40,
  },

  titleBold:{
     fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer:{
    flexDirection : 'row',
    marginTop : 40,
    justifyContent: 'space-between',
  },

  button:{
    height: 80,
    width : '48%',
    backgroundColor :'#333',
    borderRadius : 8,
    padding: 24,
    justifyContent : 'space-between',
  },

  buttonPrimary:{
    backgroundColor: '#218f2c',
    justifyContent: 'space-evenly',
    alignItems : 'center',
  },

  buttonSecondary:{
    backgroundColor: '#218f2c',
    justifyContent: 'space-evenly',
    alignItems : 'center',
  },

  buttonText:{
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
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