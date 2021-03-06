import React, { useState } from 'react';
import { View,ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EstacaoItem, { Teacher } from '../../components/EstacaoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

function Favorites(){
  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res=>{
      if(res){
        const favoritedTeachers = JSON.parse(res);
        
        setFavorites(favoritedTeachers); 
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });
  return (
    <View style={styles.container}>
     <PageHeader title="Favoritos"/>

     <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,  
        paddingBottom: 16,
      }}
     >
      {favorites.map((teacher:Teacher) => {
        return (
          <EstacaoItem
            key={teacher.id}
            teacher={teacher}
            favorited={true}
          />
        )
      })}
     </ScrollView>

    </View>
  )
}

export default Favorites;