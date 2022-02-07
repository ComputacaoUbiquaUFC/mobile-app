import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    map: {
      height: '86%'
    },

    search: {
        height: '14%',
        
    },
    distance:{
      height: 20
    },
    reportButton: {
      width: 65,
      height:65,
      backgroundColor: COLORS.RED,
      alignItems: 'center',
      borderRadius: 50,
      justifyContent: 'center',
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    textButtonReport: {
      color: COLORS.WHITE
    }
});

export default styles;