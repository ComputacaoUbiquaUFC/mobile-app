import React, { useEffect, useState } from 'react';
import { View,ScrollView, ActivityIndicator } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EstacaoItem from '../../components/EstacaoItem';
import {features} from '../../../estacoes.json'

import styles from './styles';
import { apiStation } from '../../services/api';
import { COLORS } from '../../theme';

function ListarPage(){
  const [stations, setStations] = useState<any|null>(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function userLocation() {
      const { data } = await apiStation.get('/estacoes');
      setStations(data);
      setLoading(false);
    }
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
     <PageHeader title="Todas as Estações"/>
    { loading ? (
            <View style={styles.middle}>
            <ActivityIndicator size={42} color={COLORS.GREEN} />
            </View>
           ) :
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
}

    </View>
  )
}

export default ListarPage;