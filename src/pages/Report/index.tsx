import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Alert,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
//rota de navegacao
import {
  NavigationRouteContext,
  useNavigation,
} from "@react-navigation/native";
import styles from "./styles";
import landingImg from "../../assets/images/bike.png";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import MaskInput from "react-native-mask-input";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import validateCpf from "../../utils/validateCpf";
import validateEmail from "../../utils/validateEmail";
import AsyncStorage from "@react-native-community/async-storage";
import { apiStation } from "../../services/api";

function Report() {
  const [isHandle, setIsHandle] = useState(false);
  const [isEstacaoDisponivel, setIsEstacaoDisponivel] = useState(false);
  const [isBikeComDefeito, setIsBikeComDefeito] = useState(false);
  const [isEstacaoNaoExiste, setIsEstacaoNaoExiste] = useState(false);
  const [isVagaDisponivel, setIsVagaDisponivel] = useState(false);
  const [estacao, setEstacao] = useState<any>({
    properties: {
      endereco: 'Sem endereço',
      id: 'sem id'
    }
  });

  useEffect(() => {
    async function getEstacao(){
      const storagedUser = await AsyncStorage.getItem('@estacao');
      console.log(storagedUser)
      if(storagedUser ){
        setEstacao(JSON.parse(storagedUser))
        console.log(storagedUser)
      }
    }
    getEstacao()
  }, []);
  
  async function updateStation(){
    var newData = estacao
    newData.properties.status_operacional = 'Indisponível'
    // newData = {...newData, properties: {...newData.properties, status_operacional: 'indisponivel'}}
    console.log(newData)
    await apiStation.put(`/estacoes/${newData.id}` , newData).then(() => {
      alert('Obrigado por reportar!')
    }).catch(error => {console.log(error)})
    setIsHandle(false);
    setIsEstacaoDisponivel(false);
    setIsBikeComDefeito(false);
    setIsEstacaoNaoExiste(false);
    setIsVagaDisponivel(false);
    navigate('Landing')
  }
  async function onReportPressed() {
    if (
      !isEstacaoDisponivel &&
      !isBikeComDefeito &&
      !isEstacaoNaoExiste &&
      !isVagaDisponivel
    )
      return Alert.alert("Selecione alguma opção!");
    setIsHandle(true);
    updateStation()
  }

  const { navigate } = useNavigation();
  function handleNavigateToLanding() {
    navigate("Landing");
  }
  function handleGoBack() {
    navigate("Home");
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <BorderlessButton onPress={handleGoBack} style={styles.backButton}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={COLORS.WHITE}
            />
          </BorderlessButton>
        </View>
        <View>
          <Image source={landingImg} style={styles.banner} />
        </View>
        <View>
          <Text style={styles.titulo}>Algum problema com essa estação?</Text>
          {estacao && <Text>{estacao.properties.endereco}</Text>}
          {estacao && <Text>Id da estacao: {estacao.id}</Text>}
        </View>
        <View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>A estação está indisponível</Text>
            <CheckBox
              value={isEstacaoDisponivel}
              onValueChange={setIsEstacaoDisponivel}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>A bike está com defeito</Text>
            <CheckBox
              value={isBikeComDefeito}
              onValueChange={setIsBikeComDefeito}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>A estação não existe</Text>
            <CheckBox
              value={isEstacaoNaoExiste}
              onValueChange={setIsEstacaoNaoExiste}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Não existe vaga disponível</Text>
            <CheckBox
              value={isVagaDisponivel}
              onValueChange={setIsVagaDisponivel}
              style={styles.checkbox}
            />
          </View>
          <TouchableOpacity>
            <RectButton
              style={[styles.button, styles.buttonLogin]}
              onPress={onReportPressed}
            >
              <Text style={styles.buttonText}>
                {isHandle ? (
                  <ActivityIndicator size={42} color={COLORS.WHITE} />
                ) : (
                  "REPORTAR"
                )}
              </Text>
            </RectButton>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Report;
