import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#17181f',
   },
   listTab: {
      width: '90%',
      backgroundColor: 'red',
      padding: 15,
      alignSelf: 'center'
   },
   btnTab: {
      width: '20%',
      backgroundColor: 'blue',
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: 'yellow',
      padding: 10,
      justifyContent: 'center'
   },
   buttonNewTask: {
      position: 'absolute',
      width: 50,
      height: 50,
      bottom: 10,
      right: 20,
      backgroundColor: '#b738fe',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
   },
   iconButton: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold'
   },
   tasks: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5
   },
   deleteTask: {
      justifyContent: 'center',
      paddingLeft: 15,
   },
   descriptionTask: {
      width: '75%',
      alignItems: 'flex-start',
      backgroundColor: "#f5f5f5cf",
      padding: 12,
      paddingHorizontal: 20,
      borderRadius: 50,
      marginBottom: 5,
      marginRight: 15,
      color: "#282b2db5",
   },
   button: {
      width: '50%',
      backgroundColor: 'blue',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
   },
   label: {
      width: '90%',
      marginTop: 20,
      fontSize: 16,
      marginLeft: 20,
      color: '#1976d2'
   },
   inputText: {
      width: '90%',
      marginTop: 10,
      padding: 10,
      height: 50,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 4,
      marginLeft: 'auto',
      marginRight: 'auto'
   },
   input: {
      width: '90%',
      alignSelf: 'center',
      padding: 10,
      fontSize: 16,
      color: '#292929',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#1976d2',
      borderRadius: 4
   },
})
