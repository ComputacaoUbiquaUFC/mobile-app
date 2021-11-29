import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

//pesquisar sobre styles components 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor :'#f0f0f7',
  },

  teacherList:{
    marginTop: -40,
  },


  searchForm:{
    marginBottom: 24,
  },

  label:{
    color: '#d4c2ff', 
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock:{
    width: '48%',
  }, 

  input:{
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton:{
    width: 130,
    backgroundColor: COLORS.GREEN_SECONDARY,
    height:76,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 10,
  },

  submitButtonText:{
    color : '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },

  containerButtons: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default styles; 