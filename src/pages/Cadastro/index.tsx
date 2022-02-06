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
import { useAuth } from "../../contexts/auth";
import isCpfValido from "../../utils/validateCpf";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";

function Cadastro() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState({
    masked: "",
    unmasked: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { loading, createUser, user } = useAuth();

  const { navigate } = useNavigation();

  const onCadastroPressed = async () => {
    if (!name) return Alert.alert("Digite seu Nome!");

    if (!validateEmail(email)) return Alert.alert("Digite um email válido!");

    if (!password) return Alert.alert("Digite uma senha válida!");

    if (!validatePassword(password))
      return Alert.alert(
        "Sua senha deve conter caracteres especiais,letras Maiusculas e minúsculas e números"
      );

    if (password != passwordConfirmation)
      return Alert.alert("As senhas não são iguais!");

    if (!isCpfValido(cpf.unmasked)) return Alert.alert("Digite um CPF válido!");

    createUser({
      nome: name,
      cpf: cpf.unmasked,
      email: email,
      senha: password,
    });

    if (user) {
      navigate("Landing");
    }
  };
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
              maxLength={20}
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
              onPress={onCadastroPressed}
            >
              <Text style={styles.buttonText}>
                {loading ? (
                  <ActivityIndicator size={42} color={COLORS.WHITE} />
                ) : (
                  "CADASTRAR"
                )}
              </Text>
            </RectButton>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Cadastro;
