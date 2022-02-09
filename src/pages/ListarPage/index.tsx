import React, { useEffect, useState } from 'react';
import { View,ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EstacaoItem from '../../components/EstacaoItem';
import {features} from '../../../estacoes.json'

import styles from './styles';
import { apiStation } from '../../services/api';

function ListarPage(){
  const [stations, setStations] = useState<any|null>(null);
  useEffect(() => {
    async function userLocation() {
      const { data } = await apiStation.get('/estacoes');
      setStations(data);
    }
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
     <PageHeader title="Todas as Estações"/>

     <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,  
        paddingBottom: 16,
      }}
     >
      {stations && stations.map((item:any) => 
          <EstacaoItem
            key={item.id}
            teacher={item}
            favorited={true}
          />
        )
      }
     </ScrollView>

    </View>
  )
}

export default ListarPage;