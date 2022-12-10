import React from 'react'
import { View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles/FormInputStyles'

const FormInput = ({ iconType, labelValue, placeholderText, ...rest }) => {
   return (
      <View style={styles.inputContainer}>
         <View style={styles.iconStyle}>
            <AntDesign
               name={iconType}
               size={25}
               color="#b738fe"
            />
         </View>

         <TextInput
            style={styles.input}
            numberOfLines={1}
            value={labelValue}
            placeholder={placeholderText}
            placeholderTextColor="#676d76"
            {...rest}
         />
      </View>
   )
}

export default FormInput
