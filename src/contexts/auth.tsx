import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {api} from "../services/api";
import { Alert } from "react-native";

interface User {
  token?: string;
  user?: {
    email: string;
    senha: string;
    cpf: string;
    nome: string;
    id?: string;
  };
  email: string;
  senha: string;
  cpf: string;
  nome: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({ email, senha }: any): Promise<any>;
  signOut(): void;
  getUser(): void;
  createUser({ nome, email, cpf, senha }: any): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const myFunction = async () => {
      if (user != null) {
        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(user));
        setSigned(true);
      } else {
        await AsyncStorage.clear();
        // await AsyncStorage.removeItem("@RNAuth:user");
        setSigned(false);
      }
    };
    myFunction();
  }, [user]);

  const signIn = async ({ email, senha }: any) => {
    setLoading(true);
    await api
      .post("/sessions", {
        email,
        senha,
      })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
        Alert.alert("Usuário ou senha incorretos");
      });
  };

  const createUser = async ({ nome, cpf, email, senha }: User) => {
    setLoading(true);
    const dados = {
      nome,
      cpf,
      email,
      senha,
    };
    await api
      .post("/users/", dados)
      .then(async () => {
        await signIn({ email, senha });
        setLoading(false);
      })
      .catch(() => {
        Alert.alert("Erro no cadastro");
        setLoading(false);
      });
  };

  const getUser = async () => {
    await api
      .get("/users/1c220a32-79c5-4942-a510-acc88fb7e7d0")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed, user, loading, signIn, signOut, getUser, createUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
