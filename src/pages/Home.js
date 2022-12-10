import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { store } from '../services/firebaseConfig'
import { useNavigation } from '@react-navigation/core';
import Task from '../components/Task'
import SearchInput from '../components/SearchInput';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles/HomeStyles';

const Home = ({ userEmail }) => {
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")

  const navigation = useNavigation()

  function deleteTask(id) {
    store.collection("tasks").doc(id).delete();
  }

  const loadAllTasks = async () => {
    const firebaseTasks = store.collection("tasks");
    const { docs } = await firebaseTasks.where("userEmail", "==", userEmail).get();
    const tasksArray = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    setTasks(tasksArray)
  };

  const taskSearch = tasks.filter(task => task.title.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    const userTasks = async () => {
      await loadAllTasks();
    }
    userTasks();
  }, [tasks])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#17181f" />

      <SearchInput
        onChangeTextSearch={(s) => setSearch(s)}
        valueSearch={search}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={taskSearch}
        renderItem={({ item }) => {
          return (
            <View
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  description: item.description,
                  title: item.title,
                  responsible: item.responsible,
                })
              }>

              <Task
                title={item.title}
                status={item.status}
                description={item.description}
                responsible={item.responsible}
                onPressDelete={() => {
                  deleteTask(item.id)
                }}
                onPressEdit={() =>
                  navigation.navigate("EditTask", {
                    id: item.id,
                    description: item.description,
                    title: item.title,
                    responsible: item.responsible,
                    status: item.status,
                  })
                }
              />
            </View>
          )
        }}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('AddTask')}
      >
        <AntDesign
          name="plus"
          size={25}
          color="#fff"
        />
      </TouchableOpacity>

    </View>
  )
}

export default Home
