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

function Report() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState({
    masked: "",
    unmasked: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isHandle, setIsHandle] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [isEstacaoDisponivel, setIsEstacaoDisponivel] = useState(false);
  const [isBikeComDefeito, setIsBikeComDefeito] = useState(false);
  const [isEstacaoNaoExiste, setIsEstacaoNaoExiste] = useState(false);
  const [isVagaDisponivel, setIsVagaDisponivel] = useState(false);
  /*({
    isEstacaoDisponivel: false,
    isBikeComDefeito: false,
    isEstacaoNaoExiste: false,
    isVagaDisponivel: false
  });
  */

  async function onReportPressed() {
    if (
      !isEstacaoDisponivel &&
      !isBikeComDefeito &&
      !isEstacaoNaoExiste &&
      !isVagaDisponivel
    )
      return Alert.alert("Selecione alguma opção!");
    setIsHandle(true);
    setTimeout(() => {
      setIsHandle(false);
      Alert.alert('Obrigado por reportar')
      setIsEstacaoDisponivel(false);
      setIsBikeComDefeito(false);
      setIsEstacaoNaoExiste(false);
      setIsVagaDisponivel(false);
      navigate("Menu");
    }, 3000);
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
            <Text style={styles.label}>A bike esta com defeito</Text>
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

          {/*
          <View>
            <Text style={styles.inputText}>Confirme sua senha:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={8}
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              onChangeText={(text) => setPasswordConfirmation(text)}
              value={passwordConfirmation}
            />
          </View>
          */}
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
