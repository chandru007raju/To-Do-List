import React from 'react'
import { View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles/SearchInputStyles'

const SearchInput = ({ valueSearch, onChangeTextSearch }) => {
   return (
      <View style={styles.inputSection}>
         <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
               <AntDesign
                  name="search1"
                  size={16}
                  color="#858585"
               />
            </View>

            <TextInput
               style={styles.input}
               value={valueSearch}
               onChangeText={onChangeTextSearch}
               placeholder="Pesquisar atividade"
               placeholderTextColor="#858585"
            />
         </View>
      </View>
   )
}

export default SearchInput

