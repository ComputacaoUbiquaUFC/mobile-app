import React, { useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
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

const EstacaoItem: React.FC<any> = ({teacher, favorited}) => {

  const [isFavorited, setIsFavorited] = useState(false);

  function createNewConnection(){
    Linking.openURL(`https://maps.google.com/maps?q=${teacher.properties?.endereco}&output=embed`);
  }

  async function handleToggleFavorite(){
    setIsFavorited(!isFavorited)
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.properties?.nome}</Text>
          {teacher.properties?.status_operacional === 'Indisponível' ? <>
          <Text style={styles.subject}>{teacher.properties?.endereco}</Text>
          <Text style={styles.subject}>A estação está Indisponível</Text>
          </> : <>
          <Text style={styles.subject}>{teacher.properties?.endereco}</Text>
          <Text style={styles.subject}>Bikes disponíveis: {teacher.properties?.qtd_bikes_total}</Text>
          </> }
          
        </View>
      </View>

      <Text style={styles.bio}></Text>

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
              ?  <Ionicons name="warning" size={21} color={ COLORS.WHITE}/>
              : <Ionicons name="ios-map" size={21} color={ COLORS.GREEN}/>
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