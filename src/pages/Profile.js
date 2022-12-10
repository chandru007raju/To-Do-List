import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import firebase, { auth } from '../services/firebaseConfig'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles/ProfileStyles'

export default function Profile({ navigation }) {
   const [loggedUser, setLoggedUser] = useState(null)

   firebase.auth().onAuthStateChanged((firebaseUser) => {
      setLoggedUser(firebaseUser)
   })

   const handleSignOut = () => {
      auth.signOut()
         .then(() => {
            navigation.replace('Login')
         })
   };

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#17181f" />

         <Image
            style={styles.profileImage}
            source={require('../../assets/profile2.png')}
         />


         <View style={styles.userEmailContainer}>
            <View style={styles.userEmailIcon} >
               <AntDesign
                  name="mail"
                  size={22}
                  color="#b738fe"
               />
            </View>

            <View style={styles.userEmailData}>
               <Text style={styles.userEmailLabel}>
                  E-mail
               </Text>

               <Text style={styles.userEmail}>
                  {loggedUser?.email}
               </Text>
            </View>
         </View>

         <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignOut}
         >
            <Text style={styles.buttonTitle}>
               SAIR
            </Text>
         </TouchableOpacity>
      </View>
   )
}

