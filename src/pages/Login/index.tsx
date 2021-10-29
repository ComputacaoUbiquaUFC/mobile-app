import React, { useEffect, useState } from 'react';
import { View, Image ,Text, TouchableOpacity} from 'react-native';
//rota de navegacao
import { useNavigation } from '@react-navigation/native';
//rectButton adapta o botao de acordo com o sistema operacional do celular
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';


function Login(){
  const {navigate} = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res=>{
      const {total} = res.data;
      setTotalConnections(total);
    })
  }, [])

  function handleNavigateToGiveClassesPage(){
    navigate('Pegar');
  }

  function handleNavigateToLanding(){
    navigate('Landing');
  }
  
  function handleNavigateToStudyPages(){
    navigate('Study');
  }
  
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem vindo , {'\n'}
        <Text style={styles.titleBold}>Faça login na aplicação</Text>
      </Text>
      
      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToLanding}
          style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>
      </View>

    </View>
  )
}

export default Login;