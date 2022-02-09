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
import isCpfValido from "../../utils/validateCpf";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";
import { useAuth } from "../../contexts/auth";
import {api} from "../../services/api";
//import emailValidator from '../../middlewares/emailValidator';
//import passwordValidator from '../../middlewares/passwordValidator';
//import {api} from '../../services/api';

function Editar() {
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

  const { user , signOut } = useAuth();
  useEffect(() => {
    const getDados = async () => {
      console.log(user?.user?.id);
      const config = {
        headers: { Authorization: `Bearer ${user?.token}` }
      };
    
      await api
        .get(`/users/${user?.user?.id}` , config)
        .then((result) => {
          setName(result.data.user.nome);
          setCpf({
            masked: formataCPF(result.data.user.cpf),
            unmasked: result.data.user.cpf,
          });
          setEmail(result.data.user.email);
        })
        .catch((error) => {
          console.log(error);
        });
      
    };
    getDados();
  }, []);
  function formataCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  async function onEditarPressed() {
    if (!name) return Alert.alert("Digite seu Nome!");

    if (!validateEmail(email)) return Alert.alert("Digite um email válido!");

    if (!password) return Alert.alert("Digite uma senha válida!");

    if (password != passwordConfirmation)
      return Alert.alert("As senhas não são iguais!");

    if (!validatePassword(password))
      return Alert.alert(
        "Sua senha deve conter caracteres especiais,letras Maiusculas e minúsculas e números"
      );

    if (!isCpfValido(cpf.unmasked)) return Alert.alert("Digite um CPF válido!");
    updateUser()

  }

  async function updateUser(){
    const obj = {
      id: user?.user?.id,
      nome: name,
      cpf: cpf.unmasked,
      email: email,
      senha: password
    }
  
    await api
        .put(`/users/` , obj)
        .then(() => {
          alert('Atualizado com sucesso')
          handleToLogin()
        })
        .catch((error) => {
          console.log(error);
        });
  }
  const { navigate } = useNavigation();
  function handleNavigateToLanding() {
    navigate("Landing");
  }
  function handleGoBack() {
    navigate("Home");
  }
  function handleToLogin() {
    signOut();
    navigate("Login");
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
            <Text style={styles.inputText}>Editar seu Nome:</Text>
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
            <Text style={styles.inputText}>Editar seu CPF:</Text>
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
            <Text style={styles.inputText}>Editar seu Email:</Text>
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
            <Text style={styles.inputText}>Alterar sua senha:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={20}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <View>
            <Text style={styles.inputText}>Confirme alterar sua senha:</Text>
            <TextInput
              style={styles.inputarea}
              maxLength={20}
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              onChangeText={(text) => setPasswordConfirmation(text)}
              value={passwordConfirmation}
            />
          </View>

          <TouchableOpacity>
            <RectButton
              style={[styles.button, styles.buttonLogin]}
              onPress={onEditarPressed}
            >
              <Text style={styles.buttonText}>
                {isHandle ? (
                  <ActivityIndicator size={42} color={COLORS.WHITE} />
                ) : (
                  "SALVAR"
                )}
              </Text>
            </RectButton>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Editar;
