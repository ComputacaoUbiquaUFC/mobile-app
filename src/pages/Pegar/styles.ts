import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor :'#f0f0f7',
  },
  map: {
    width: 380,
    height: 300,
  },
  containerSecondary:{
    paddingVertical: 30,
  },
  rectButtonView: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  content:{
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical : 10,
  },
  contentIcon: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingRight:15,
    color:COLORS.GREEN,
  },

  contentTitle:{
    color:COLORS.GREEN,
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
  },
  contentText:{
    color:COLORS.PURPLE,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
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
    alignContent: 'center',
    borderRadius: 8,
    width:210,
  },
  okButtonReport:{
    marginBottom: 50,
    backgroundColor: COLORS.RED,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    alignContent: 'center',
    borderRadius: 8,
    width:210,
  },

  okButtonText:{
    color:'#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
  backButtonText:{
    color:COLORS.PURPLE,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
  containerButtons: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default styles;