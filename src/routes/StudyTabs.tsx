import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../pages/Menu';
import Mapa from '../pages/Mapa';
import { COLORS } from '../theme';

//icones padroes do expo
import { Ionicons } from '@expo/vector-icons';
import ListarPage from '../pages/ListarPage';

const { Navigator , Screen} = createBottomTabNavigator();

function StudyTabs(){
  return (
    <Navigator
      tabBarOptions={{
        style:{
          elevation:0,
          shadowOpacity:0,
          height:64,
        },
        tabStyle:{
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'center',
        },
        iconStyle:{
          flex:0,
          width:20,
          height:20,
        },
        labelStyle:{
          fontFamily:'Archivo_700Bold',
          fontSize:13,
          marginLeft:16,
        },
        inactiveBackgroundColor:'#fafafc',
        activeBackgroundColor:'#ebebf5',
        inactiveTintColor:'#c1bccc',
        activeTintColor:'#32264d',
      }}
    >
      <Screen 
        name="Menu" 
        component={Menu} 
        options={{
          tabBarLabel: 'Opções',
          tabBarIcon:({color, size,focused})=>{
            return (
              <Ionicons name="grid-outline" size={size} color={focused? COLORS.GREEN: color}/>
            )
          }
        }}
      />
      <Screen 
        name="Mapa" 
        component={Mapa} 
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon:({color, size , focused})=>{
            return (
              <Ionicons name="ios-map" size={size} color={focused? COLORS.GREEN: color}/>
            )
          }
        }}
      />

      <Screen 
        name="ListarPage" 
        component={ListarPage} 
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon:({color, size , focused})=>{
            return (
              <Ionicons name="list-outline" size={size} color={focused? COLORS.GREEN: color}/>
            )
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;