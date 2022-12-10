import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles/AlertErrorStyles'

export default function AlertError({ error, onPressCloseError }) {
   return (
      <View style={styles.alertContainer}>
         <View style={styles.alertIcon}>
            <AntDesign
               name="warning"
               size={20}
               color="#b85352"
            />
         </View>

         <Text style={styles.alertText}>{error}</Text>

         <TouchableOpacity
            onPress={onPressCloseError}
            style={styles.alertIcon}
         >
            <AntDesign
               name="closecircle"
               size={20}
               color="#b85352"
            />
         </TouchableOpacity>
      </View>
   )
}
