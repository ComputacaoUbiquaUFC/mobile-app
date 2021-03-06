import React, { useEffect, useState } from 'react';
import { View, Image ,Text, TouchableOpacity} from 'react-native';
//rota de navegacao
import { useNavigation } from '@react-navigation/native';
//rectButton adapta o botao de acordo com o sistema operacional do celular
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';


function Landing(){
  const {navigate} = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  function handleNavigateToPegar(){
    navigate('Pegar');
  }
  
  function handleNavigateToStudyPages(){
    navigate('Study');
  }
  
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Olá João , {'\n'}
        <Text style={styles.titleBold}>Escolha uma das opções</Text>
      </Text>
      
      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>Menu</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToPegar} 
          style={[styles.button, styles.buttonSecondary]}>
          <Text style={styles.buttonText}>Solicitar</Text>
        </RectButton>
      </View>

    </View>
  )
}

export default Landing;