import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/Landing';
import Pegar from '../pages/Pegar';
import StudyTabs from './StudyTabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen name="Home" component={Home}/>
        <Screen name="Login" component={Login}/>
        <Screen name="Cadastro" component={Cadastro}/>
        <Screen name="Landing" component={Landing}/>
        <Screen name="Pegar" component={Pegar}/>
        <Screen name="Study" component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;