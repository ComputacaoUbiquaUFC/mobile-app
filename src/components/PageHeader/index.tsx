import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View , Image, Text } from 'react-native';
//botao sem fundo, com com bordas
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png'; 
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { COLORS } from '../../theme';

interface PageHeaderProps{
  title:string;
  headerRight?: ReactNode;
}

const PageHeader : React.FC<PageHeaderProps> = ({title , headerRight, children})=>{

  const {navigate} = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  }

  function handleGoLogin(){
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={24} color={COLORS.WHITE}/>
        </BorderlessButton>

        <BorderlessButton onPress={handleGoLogin}>
          <Ionicons name="bicycle-outline" size={30} color={COLORS.WHITE}/>
        </BorderlessButton>
       
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
    

      {children}
    </View>
  )
}

export default PageHeader;