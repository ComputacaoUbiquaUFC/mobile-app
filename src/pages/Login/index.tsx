import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Alert, View, Image ,Text, TextInput, TouchableOpacity} from 'react-native';
//rota de navegacao
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';
import { RectButton } from 'react-native-gesture-handler';
//import emailValidator from '../../middlewares/emailValidator';
//import passwordValidator from '../../middlewares/passwordValidator';
//import api from '../../services/api';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onLoginPressed(){
        if(!email)
        return Alert.alert('Digite seu usuário!');

        if(!password)
        return Alert.alert('Digite sua senha!');

        /* QUANDO A ROTA EXISTIR DE FATO
        await api.post('/Login',{
            email,
            password
        }).then(() => {
            navigate('Home');
        })*/
    }

    const {navigate} = useNavigation();
    
    function toReset(){
      navigate('ResetPass');
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={landingImg} style={styles.banner}/>
            </View>
            <KeyboardAvoidingView>
            <View>
                <TextInput
                    style={styles.inputarea} 
                    maxLength={25}  
                    placeholder='Usuário'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.inputarea} 
                    maxLength={8}
                    placeholder='Senha' 
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <View style={styles.forgotPassword}>
                    <TouchableOpacity>
                        <Text 
                            style={styles.forgot}
                            onPress={toReset}>
                                Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <RectButton 
                        style={[styles.button, styles.buttonLogin]}
                        onPress={onLoginPressed}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </RectButton>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text>Não tem uma conta? </Text>
                        <TouchableOpacity>
                            <Text style={styles.link}>Criar conta</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        </View>
    )
}

export default Login;