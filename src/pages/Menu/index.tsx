import React, { useState } from 'react';
import { View , ScrollView, Text , TextInput} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import EstacaoItem, { Teacher } from '../../components/EstacaoItem';
import {Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/core';

function Menu(){

  const [isFiltersVisible , setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

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


  return (
    
   <View style={styles.container}>
     <PageHeader title="Menu de opções" />

     <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,  
        paddingBottom: 16,
      }}
     >
       {teachers.map((teacher:Teacher) => {
         return (
          <EstacaoItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}  
          />
          )
       })} 
     </ScrollView>
   </View>
  );
}

export default Menu;