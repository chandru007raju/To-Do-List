import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ActivityIndicator, Keyboard } from 'react-native'
import FormInput from '../components/FormInput'
import { auth, store } from '../services/firebaseConfig'
import { useNavigation } from '@react-navigation/core';
import AlertError from "../components/AlertError";
import { styles } from "../styles/LoginStyles";

const Login = () => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   const navigation = useNavigation()

   const handleSignIn = async () => {
      setLoading(true)

      Keyboard.dismiss()

      try {
         await auth.signInWithEmailAndPassword(email, password)
            .then((cred) => {
               store.collection("users").doc(cred.user.uid).set({
                  email
               })
            })
            .then(() => {
               navigation.replace('Home')
            })
      } catch (e) {
         switch (e.code) {
            case "auth/wrong-password":
               setError("Ops, sua senha está incorreta...");
               break;
            case "auth/user-not-found":
               setError("Esse usuário não existe...");
               break;
            default:
               setError("Erro inesperado...");
         }
      }

      setLoading(false)
   }

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#17181f" />

         <Image
            style={styles.imageLogin}
            source={require('../../assets/login.png')}
         />

         <FormInput
            placeholderText="E-mail"
            iconType="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail.trim())}
         />

         <FormInput
            placeholderText="Senha"
            iconType="lock"
            secureTextEntry={true}
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
         />

         <TouchableOpacity
            onPress={handleSignIn}
            style={styles.buttonContainer}
         >
            <Text style={styles.buttonTitle}>
               ENTRAR
            </Text>
         </TouchableOpacity>

         {loading === true ?
            <ActivityIndicator size="large" color="#fff" />
            :
            null
         }

         <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.createAccountButton}
         >
            <Text style={styles.createAccountButtonText}>
               Não possui uma conta? Cadastre-se!
            </Text>
         </TouchableOpacity>

         {error ?
            <AlertError
               error={error}
               onPressCloseError={() => setError(null)}
            />
            :
            null
         }
      </View>
   )
}

export default Login
