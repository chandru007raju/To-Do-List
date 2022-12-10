import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import HomeTasks from './src/pages/Home'
import Profile from './src/pages/Profile'
import EditTask from './src/pages/EditTask'
import firebase from './src/services/firebaseConfig'
import AddTask from './src/pages/AddTask';
import { LogBox } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

LogBox.ignoreAllLogs();

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export default function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    setLoggedUser(firebaseUser)
  })

  function HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTasks"
          options={{
            headerShown: false,
            headerLeft: () => {
              return null;
            },
            tabBarLabel: () => { return null },
            tabBarIcon: () => {
              return <AntDesign name='profile' size={22} color='#fff' />
            },
            tabBarStyle: {
              backgroundColor: '#202128',
              borderTopColor: 'transparent'
            },
          }}
        >
          {(props) => <HomeTasks userEmail={loggedUser?.email} />}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          options={{
            headerShown: false,
            headerLeft: () => {
              return null;
            },
            tabBarLabel: () => { return null },
            tabBarIcon: () => {
              return <AntDesign name='user' size={22} color='#fff' />
            },
            tabBarStyle: {
              backgroundColor: '#202128',
              borderTopColor: 'transparent'
            },
          }}
          component={Profile}
        />

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
            headerLeft: () => {
              return null;
            },
          }}
        />

        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{
            headerStyle: {
              backgroundColor: '#17181f',
              elevation: 0
            },
            headerTintColor: '#fff',
            title: 'Editar tarefa'
          }}
        />

        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerStyle: {
              backgroundColor: '#17181f',
              elevation: 0
            },
            headerTintColor: '#fff',
            title: 'Adicionar tarefa'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

