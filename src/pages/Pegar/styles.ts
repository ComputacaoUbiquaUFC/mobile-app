import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : COLORS.GREEN,
    justifyContent: 'space-around',
    padding: 40,
  },

  content:{
    flex:1,
    justifyContent: 'center',
  },

  title:{
    fontFamily: 'Archivo_700Bold',
    color:'#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth:180,
  },

  description:{
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
  },

  okButtonPlataform:{
    marginVertical: 20,
    backgroundColor: '#04d361',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
  },

  okButton:{
    marginBottom: 50,
    backgroundColor: '#9871f5',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
  },

  okButtonText:{
    color:'#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },

});

export default styles;