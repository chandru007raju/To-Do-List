import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import { store } from '../services/firebaseConfig'
import { Picker } from '@react-native-picker/picker';
import firebase from '../services/firebaseConfig'
import { styles } from '../styles/AddTaskStyles';

const AddTask = ({ navigation }) => {
   const [description, setDescription] = useState('')
   const [title, setTitle] = useState('')
   const [status, setStatus] = useState('Pendente')
   const [loggedUser, setLoggedUser] = useState(null)

   firebase.auth().onAuthStateChanged((firebaseUser) => {
      setLoggedUser(firebaseUser)
   })

   async function createTask() {
      await store.collection("tasks").add({
         description: description,
         title: title,
         userEmail: loggedUser.email,
         status: status
      })

      navigation.navigate('Home')

      setDescription('')
      setTitle('')
   }

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#17181f" />

         <Text style={styles.label}>Título</Text>
         <TextInput
            style={styles.inputText}
            onChangeText={(text) => setTitle(text)}
            value={title}
         />

         <Text style={styles.label}>Descrição</Text>
         <TextInput
            style={styles.inputText}
            onChangeText={(text) => setDescription(text)}
            value={description}
         />

         <Text style={styles.label}>Status</Text>
         <View style={styles.selectContainer}>
            <Picker
               style={styles.select}
               selectedValue={status}
               onValueChange={(itemValue) =>
                  setStatus(itemValue)}
            >
               <Picker.Item
                  style={styles.selectItem}
                  label="Pendente"
                  value="Pendente"
                  key={"Pendente"}
               />

               <Picker.Item
                  style={styles.selectItem}
                  label="Andamento"
                  value="Andamento"
                  key={"Andamento"}
               />

               <Picker.Item
                  style={styles.selectItem}
                  label="Finalizada"
                  value="Finalizada"
                  key={"Finalizada"}
               />

               <Picker.Item
                  style={styles.selectItem}
                  label="Cancelada"
                  value="Cancelada"
                  key={"Cancelada"}
               />
            </Picker>
         </View>

         <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => { createTask() }}
         >
            <Text style={styles.iconButton}>ADICIONAR</Text>
         </TouchableOpacity>
      </View >
   )
}

export default AddTask
