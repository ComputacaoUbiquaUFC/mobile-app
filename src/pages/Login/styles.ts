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
    marginTop : 40,
    gap: 15,
    justifyContent: 'center',
  },

  button:{
    height: 90,
    width : '100%',
    backgroundColor :'#333',
    borderRadius : 8,
    padding: 24,
    justifyContent : 'space-between',
    flexDirection : 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  buttonPrimary:{
    backgroundColor: '#d11f1f',
    justifyContent: 'space-evenly',
    alignItems : 'center',
    width: '100%',
  },

  buttonSecondary:{
    backgroundColor: '#1f34d1',
    justifyContent: 'space-evenly',
    alignItems : 'center',
    width: '100%',
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