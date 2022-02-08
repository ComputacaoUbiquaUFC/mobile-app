import React, { useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import {api} from '../../services/api';
import styles from './styles';

export interface Teacher{
  id:number;
  avatar:string;
  bio:string;
  cost: number;
  name: string;
  subject: string;
  whatsapp:string;
  properties: {
    nome:string;
    endereco:string;
  }
}

interface TeacherItemProps{
  teacher: Teacher;
  favorited:boolean;
}

const EstacaoItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {

  const [isFavorited, setIsFavorited] = useState(false);

  function createNewConnection(){
    Linking.openURL(`https://maps.google.com/maps?q=${teacher.properties?.endereco}&output=embed`);
  }

  async function handleToggleFavorite(){
    /*
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if(favorites){
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited){
      const favoriteIndex = favoritesArray.findIndex((teacherItem:Teacher)=>{
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex,1);
      setIsFavorited(false);
    }else{
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray));
    */
    setIsFavorited(!isFavorited)
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source={{ uri: teacher.avatar }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.properties?.nome}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {},
             ]}
          >
            { isFavorited 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} /> 
            }
            
            
          </RectButton>

          <RectButton onPress={createNewConnection} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Ver no Mapa</Text>
          </RectButton>
        </View>
      </View>

    </View>
  )
}

export default EstacaoItem;