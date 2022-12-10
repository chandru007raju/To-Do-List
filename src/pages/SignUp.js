import React, { useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, StatusBar, Image, Keyboard } from 'react-native'
import FormInput from '../components/FormInput'
import { auth, store } from '../services/firebaseConfig'
import { useNavigation } from '@react-navigation/core';
import AlertError from "../components/AlertError";
import { styles } from "../styles/SignUpStyles";

const SignUp = () => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   const navigation = useNavigation()

   const handleSignUp = async () => {
      setLoading(true)

      Keyboard.dismiss()

      try {
         await auth.createUserWithEmailAndPassword(email, password)
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
            case "auth/email-already-in-use":
               setError("Esse e-mail já está sendo usado...");
               break;
            case "auth/invalid-email":
               setError("E-mail inválido...");
               break;
            case "auth/weak-password":
               setError("Sua senha deve possuir pelo menos 6 caracteres...");
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
            source={require('../../assets/signup2.png')}
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
            onPress={handleSignUp}
            style={styles.buttonContainer}
         >
            <Text style={styles.buttonTitle}>
               CRIAR CONTA
            </Text>
         </TouchableOpacity>

         {loading === true ?
            <ActivityIndicator size="large" color="#fff" />
            :
            null
         }

         <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.createAccountButton}
         >
            <Text style={styles.createAccountButtonText}>
               Já possui conta? Faça seu login!
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

export default SignUp
