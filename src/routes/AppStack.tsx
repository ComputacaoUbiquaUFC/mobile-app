import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/Landing';
import Pegar from '../pages/Pegar';
import StudyTabs from './StudyTabs';
import Home from '../pages/Home';
import Login from '../pages/Login';

import Cadastro from '../pages/Cadastro';
import ResetPass from '../pages/ResetPass';
import Editar from '../pages/Editar';
import Report from '../pages/Report';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen name="Home" component={Home}/>
        <Screen name="Login" component={Login}/>
        <Screen name="Cadastro" component={Cadastro}/>
        <Screen name="ResetPass" component={ResetPass}/>
        <Screen name="Landing" component={Landing}/>
        <Screen name="Pegar" component={Pegar}/>
        <Screen name="Editar" component={Editar}/>
        <Screen name="Study" component={StudyTabs}/>
        <Screen name="Report" component={Report}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;