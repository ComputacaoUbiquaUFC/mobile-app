import React, { useEffect, useState } from 'react';
import { View , ScrollView, Text , TextInput, ActivityIndicator, Alert} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import EstacaoItem, { Teacher } from '../../components/EstacaoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme';
import { useAuth } from '../../contexts/auth';

function Menu(){

  const { navigate } = useNavigation();
  const [isFiltersVisible , setIsFiltersVisible] = useState(false);
  const { signOut, loading } = useAuth()

  function toEditar() {
    navigate("Editar");
  }

  function toReport() {
    navigate("Report");
  }

  const deleteAsyncStorage = () =>{
    signOut()
    navigate("Login")
  }
  async function showAsyncStorage(){
    const data = await AsyncStorage.getItem('@RNAuth:user');
    if(data)
      alert(data)
  }

  
  return (
    
   <View style={styles.container}>
     <PageHeader title="Menu de opções" />
      <View>

      <View style={styles.containerButtons}>
        <RectButton style={styles.submitButton} onPress={toEditar}>
          <Text style={styles.submitButtonText}>
            Editar
          </Text>
        </RectButton>
        <RectButton style={styles.submitButton} onPress={toReport}>
          <Text style={styles.submitButtonText}>
            Reportar
          </Text>
        </RectButton>
      </View>
      <View style={styles.containerButtons}>
        <RectButton style={styles.submitButton}  onPress={deleteAsyncStorage}>
          <Text style={styles.submitButtonText}>
          {loading ? (
                  <ActivityIndicator size={42} color={COLORS.WHITE} />
                ) : (
                  "SAIR"
                )}
          </Text>
        </RectButton>
        <RectButton style={styles.submitButton} onPress={showAsyncStorage}>
          <Text style={styles.submitButtonText}>
            Async Storage
          </Text>
        </RectButton>
      </View>

      </View>
   </View>
  );
}

export default Menu;