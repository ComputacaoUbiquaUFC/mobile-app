import React, { useState } from 'react';
import { View,ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EstacaoItem from '../../components/EstacaoItem';
import {features} from '../../../estacoes.json'

import styles from './styles';

function ListarPage(){
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
      {features.map((teacher:any) => {
        return (
          <EstacaoItem
            key={teacher.properties.id}
            teacher={teacher}
            favorited={true}
          />
        )
      })}
     </ScrollView>

    </View>
  )
}

export default ListarPage;