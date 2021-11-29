import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Linking,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dados from "../../../estacoes.json";

import styles from "./styles";
import { COLORS } from "../../theme";
import PageHeader from "../../components/PageHeader";

interface DadosProps {
  geometry: {
    type: string;
    coordinates: number[];
  };
  type: string;
  properties: {
    qtd_bikes_disp_1: string;
    statusInterno: string;
    status_operacional: string;
    qtd_bikes_total: string;
    nome: string;
    endereco: string;
    qtd_bikes_disp_2: string;
    estacao: string;
    id: number;
    status_online: string;
  };
}

const newData = {
  geometry: { type: "Point", coordinates: [-38.510347, -3.7321944] },
  type: "Feature",
  properties: {
    qtd_bikes_disp_1: "1",
    statusInterno: "Est_Normal 1",
    status_operacional: "EO",
    qtd_bikes_total: "11",
    nome: "Praça Luíza Távora",
    endereco:
      "Avenida Santos Dumont, 1546, ao lado da Coord. do Gov. do Estado do Ceará",
    qtd_bikes_disp_2: "1",
    estacao: "Coord. do Gov. do Estado do Ceará",
    id: 1,
    status_online: "I",
  },
};

function Pegar() {
  const { goBack } = useNavigation();
  const [isHandle, setIsHandle] = useState(false);
  const [stations, setStations] = useState<DadosProps>(newData);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    setStations(newData);
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleNavigateToWeb() {
    Linking.openURL("https://proffylevir.vercel.app/give-classes");
  }

  function handlePegar() {
    setIsHandle(true);
    setTimeout(() => {
      setIsHandle(false);
      setConfirmation(true);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Solicitar uma Bike" />
      <View>
        {isHandle && <ActivityIndicator size={42} color={COLORS.PURPLE} />}

        {confirmation ? (
          <View style={styles.containerSecondary}>
          <View style={styles.content}>
            <View style={styles.contentIcon}>
              <Icon size={120} color={COLORS.GREEN} name="bike-fast" />
            </View>
            <Text style={styles.contentText}>
              Em deslocamento para o local
            </Text>
          </View>
        </View>
        ) : (
          <View style={styles.containerSecondary}>
            <View style={styles.content}>
              <View style={styles.contentIcon}>
                <Icon size={30} color={COLORS.GREEN} name="google-maps" />
                <Text style={styles.contentTitle}>Endereço: </Text>
              </View>
              <Text style={styles.contentText}>
                {stations.properties.endereco}
              </Text>
            </View>
            <View style={styles.content}>
              <View style={styles.contentIcon}>
                <Icon
                  size={30}
                  color={COLORS.GREEN}
                  name="map-search-outline"
                />
                <Text style={styles.contentTitle}>Estação: </Text>
              </View>
              <Text style={styles.contentText}>
                {stations.properties.estacao}
              </Text>
            </View>
            <View style={styles.content}>
              <View style={styles.contentIcon}>
                <Icon size={30} color={COLORS.GREEN} name="bike" />
                <Text style={styles.contentTitle}>Bikes disponíveis: </Text>
              </View>
              <Text style={styles.contentText}>
                {stations.properties.qtd_bikes_total}
              </Text>
            </View>
            <RectButton onPress={handlePegar} style={styles.okButton}>
              <Text style={styles.okButtonText}>Solicitar</Text>
            </RectButton>
          </View>
        )}

        <RectButton onPress={handleNavigateBack}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Pegar;
