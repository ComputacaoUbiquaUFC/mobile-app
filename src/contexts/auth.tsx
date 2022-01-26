import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

interface User {
  user: string;
  email: string;
  senha: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({ email, senha }: any): Promise<any>;
  signOut(): void;
  getUser(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  /*
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storagedUser != null && storagedToken != null) {
        setUser(JSON.parse(storagedUser));
        setSigned(true);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);
  */

  useEffect(() => {
    async function myFunction(){
      if(signed == false){
        await AsyncStorage.clear();
        await AsyncStorage.removeItem("@RNAuth:user");
        await AsyncStorage.removeItem("@RNAuth:token");
        setUser(null);
        setSigned(false);
      }
    }
    myFunction()
  }, [signed])

  const signIn = async ({ email, senha }: any) => {
    setSigned(false);
    await api
            .post("/sessions", {
              email,
              senha,
            })
            .then(async (response) => {
              
              setSigned(true);
              await AsyncStorage.setItem(
                "@RNAuth:user",
                JSON.stringify(response.data)
              );
              await AsyncStorage.setItem("@RNAuth:token", response.data.token);
              setUser(response.data);

            })
            .catch(async (error) => {
              setSigned(false)
              await AsyncStorage.clear();
              setUser(null);
              alert("usuario ou senha incorretos");
            })
   
  }

  const getUser = async () => {
    await api
      .get("/users/1c220a32-79c5-4942-a510-acc88fb7e7d0")
      .then((response) => {
        //alert('oi')
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed, user, loading, signIn, signOut, getUser }}
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
