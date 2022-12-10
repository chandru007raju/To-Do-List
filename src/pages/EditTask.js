import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import { store } from '../services/firebaseConfig'
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/EditTaskStyles';

const EditTask = ({ navigation, route }) => {
   const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
   const [titleEdit, setTitleEdit] = useState(route.params.title)
   const [statusEdit, setStatusEdit] = useState(route.params.status)

   const idTask = route.params.id

   function editTask(id) {
      store.collection("tasks").doc(id).update({
         description: descriptionEdit,
         title: titleEdit,
         status: statusEdit
      })
      navigation.navigate('Home')
   }

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#17181f" />

         <Text style={styles.label}>Título</Text>
         <TextInput
            style={styles.inputText}
            onChangeText={(text) => setTitleEdit(text)}
            value={titleEdit}
         />

         <Text style={styles.label}>Descrição</Text>
         <TextInput
            style={styles.inputText}
            onChangeText={(text) => setDescriptionEdit(text)}
            value={descriptionEdit}
         />

         <Text style={styles.label}>Status</Text>
         <View style={styles.selectContainer}>
            <Picker
               style={styles.select}
               selectedValue={statusEdit}
               onValueChange={(itemValue) => setStatusEdit(itemValue)}
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
            onPress={() => { editTask(idTask) }}
         >
            <Text style={styles.iconButton}>EDITAR</Text>
         </TouchableOpacity>
      </View >
   )
}

export default EditTask
