import React, { useState } from 'react';
import { View , ScrollView, Text , TextInput} from 'react-native';
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
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const { signOut } = useAuth()

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res=>{
      if(res){
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher)=>{
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds); 
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });
  
  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit(){
    loadFavorites();
    const response = await api.get('classes',{
      params: {
        subject, 
        week_day,
        time,
      }
    })
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  function toEditar() {
    navigate("Editar");
  }

  function toReport() {
    navigate("Report");
  }

  async function deleteAsyncStorage(){
    await AsyncStorage.removeItem('@estacao');
    await signOut
    navigate("Login")
  }

  
  return (
    
   <View style={styles.container}>
     <PageHeader title="Menu de opções" />
      <View>

      <View style={styles.containerButtons}>
        <RectButton style={styles.submitButton} onPress={toEditar}>
        <Ionicons name="arrow-back-outline" size={24} color={COLORS.WHITE}/>
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
        <RectButton style={styles.submitButton}>
          <Text style={styles.submitButtonText} onPress={deleteAsyncStorage}>
            Deletar AsyncStorage
          </Text>
        </RectButton>
        <RectButton style={styles.submitButton}>
          <Text style={styles.submitButtonText}>
            Botão 2
          </Text>
        </RectButton>
      </View>

      </View>
   </View>
  );
}

export default Menu;