import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Linking,
  ActivityIndicator,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dados from "../../../estacoes.json";

import styles from "./styles";
import { COLORS } from "../../theme";
import PageHeader from "../../components/PageHeader";
import Mapa from '../../components/Mapa';

function Solicitar() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    
      <Mapa />
    
  );
}

export default Solicitar;
