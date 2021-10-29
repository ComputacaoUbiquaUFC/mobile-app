import React from 'react';
import { View , ImageBackground, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function Pegar() {

  const {goBack} = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  function handleNavigateToWeb(){
    Linking.openURL('https://proffylevir.vercel.app/give-classes');
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Pegar</Text>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Voltar</Text>
      </RectButton>
    </View>
  );
}

export default Pegar;