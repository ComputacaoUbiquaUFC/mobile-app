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

function Cadastro() {
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

  async function onCadastroPressed() {
    
    if (!name) return Alert.alert("Digite seu Nome!");

    if (!validateEmail(email)) return Alert.alert("Digite um email válido!");

    if (!password)
      return Alert.alert("Digite uma senha válida!");

    if (password != passwordConfirmation)
      return Alert.alert("As senhas não são iguais!");

    if (!isCpfValido(cpf.unmasked)) return Alert.alert("Digite um CPF válido!");

    setIsHandle(true)
    setTimeout(() => {
        setIsHandle(false);
        navigate("Landing");
      }, 3000);
    

    /* QUANDO A ROTA EXISTIR DE FATO
        await api.post('/Cadastro',{
            name,
            cpf: cpf.unmasket,
            email,
            password
        }).then(() => {
            navigate('Home');
        })*/
  }

  function validateEmail(email: string) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  function isCpfValido(strCPF: String) {
    var Soma;
    var Resto;
    Soma = 0;
    var i;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
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
          <View>
            <Text style={styles.inputText}>Digite seu Nome:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={50}
              placeholder="Nome"
              autoCapitalize="words"
              autoCompleteType="name"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>

          <View>
            <Text style={styles.inputText}>Digite seu CPF:</Text>
            <MaskInput
              value={cpf.masked}
              style={styles.inputarea}
              keyboardType="numeric"
              maxLength={14}
              onChangeText={(masked, unmasked) => {
                setCpf({ masked: masked, unmasked: unmasked });
              }}
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
            />
          </View>

          <View>
            <Text style={styles.inputText}>Digite seu Email:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={25}
              placeholder="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View>
            <Text style={styles.inputText}>Crie uma senha:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={8}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

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

          <TouchableOpacity>
            <RectButton
              style={[styles.button, styles.buttonLogin]}
              onPress={onCadastroPressed}
            >
              <Text style={styles.buttonText}>
              {isHandle ? <ActivityIndicator size={42} color={COLORS.WHITE} /> : 'CADASTRAR'}
              </Text>
            </RectButton>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Cadastro;
