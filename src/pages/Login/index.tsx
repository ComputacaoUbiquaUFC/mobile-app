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
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, getUser, signed, user, loading, signOut } = useAuth();

  useEffect(() => {
    if (signed) {
      navigate("Landing");
    }
  }, [signed]);
  useEffect(() => {
    signOut
  }, []);

  const onLoginPressed = async ()  =>{
    if (!email) return Alert.alert("Digite seu usuário!");

    if (!password) return Alert.alert("Digite sua senha!");

    signIn({ email, senha: password });
  }

  const { navigate } = useNavigation();

  function toReset() {
    navigate("ResetPass");
  }

  function toCadastro() {
    navigate("Cadastro");
  }

  function handleGoBack() {
    navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewAb}>
        <BorderlessButton onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color={COLORS.WHITE} />
        </BorderlessButton>
      </View>
      <View>
        <Image source={landingImg} style={styles.banner} />
      </View>
      <KeyboardAvoidingView>
        <View>
          <TextInput
            style={styles.inputarea}
            maxLength={25}
            placeholder="Usuário"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.inputarea}
            maxLength={8}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity>
              <Text style={styles.forgot} onPress={toReset}>
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <RectButton
              style={[styles.button, styles.buttonLogin]}
              onPress={onLoginPressed}
            >
              <Text style={styles.buttonText}>
                {loading ? (
                  <ActivityIndicator size={42} color={COLORS.WHITE} />
                ) : (
                  "ENTRAR"
                )}
              </Text>
            </RectButton>
          </TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.link2}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={toCadastro}>
              <Text style={styles.link}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
