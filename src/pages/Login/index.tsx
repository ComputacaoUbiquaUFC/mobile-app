import React, { useEffect, useState } from 'react';
import { View, Image ,Text, TouchableOpacity} from 'react-native';
//rota de navegacao
import { useNavigation } from '@react-navigation/native';
//rectButton adapta o botao de acordo com o sistema operacional do celular
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Login(){
  const {navigate} = useNavigation();
  function handleNavigateToLanding(){
    navigate('Landing');
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
          <Icon size={30} color="white" name="google" />
          <Text style={styles.buttonText}>Login with Google</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToLanding}
          style={[styles.button, styles.buttonSecondary]}>
          <Icon size={30} color="white" name="login" />
          <Text style={styles.buttonText}>Login in App</Text>
        </RectButton>
      </View>

    </View>
  )
}

export default Login;