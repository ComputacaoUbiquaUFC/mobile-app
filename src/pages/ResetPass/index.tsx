import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Alert, View, Image ,Text, TextInput, TouchableOpacity} from 'react-native';
//rota de navegacao
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import styles from './styles';
import landingImg from '../../assets/images/bike.png';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

function Reset(){

    const [email, setEmail] = useState('');

    async function onResetPressed(){
        if(!email)
        return Alert.alert('Digite o e-mail!');
    }

    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewAb}>
                <BorderlessButton onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color={COLORS.WHITE}
                    />
                </BorderlessButton>
            </View>
            <View>
                <Image source={landingImg} style={styles.banner}/>
                <Text style={styles.title}>
                    Resetar senha 
                </Text>
            </View>
            <KeyboardAvoidingView>
            <View>
                <TextInput
                    style={styles.inputarea} 
                    maxLength={25}  
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <View style={styles.forgotText}>
                        <Text style={styles.forgot}>Um link para resetar a senha será enviado.</Text>
                </View>
                <TouchableOpacity>
                    <RectButton 
                        style={[styles.button, styles.buttonSend]}
                        onPress={onResetPressed}>
                        <Text style={styles.buttonText}>ENVIAR</Text>
                    </RectButton>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
    )
}

export default Reset;