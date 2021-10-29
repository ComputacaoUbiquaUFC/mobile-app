import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'
//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
   padding:40,
   backgroundColor: COLORS.GREEN,
  },

  topBar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

  topBarText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
  },

  title:{
    fontFamily: 'Archivo_700Bold',
    color:'#fff',
    fontSize:24,
    lineHeight:32,
    maxWidth:160,
    marginVertical:20,
  }

});

export default styles;