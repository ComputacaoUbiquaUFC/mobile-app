import React, { useEffect, useState } from 'react';
import { View, Image ,Text, TouchableOpacity} from 'react-native';
//rota de navegacao
import { useNavigation } from '@react-navigation/native';
//rectButton adapta o botao de acordo com o sistema operacional do celular
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Home(){
  const {navigate} = useNavigation();
  function handleNavigateToLanding(){
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Bem vindo!
      </Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
        <RectButton 
            style={[styles.button, styles.buttonSecondary]}
            onPress={handleNavigateToLanding}>
            <Text style={styles.buttonText}>CRIAR CONTA</Text>
          </RectButton>
          <RectButton 
            style={[styles.button, styles.buttonSecondary]}
            onPress={handleNavigateToLanding}>
            <Text style={styles.buttonText}>JÁ TENHO CONTA</Text>
          </RectButton>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Home;