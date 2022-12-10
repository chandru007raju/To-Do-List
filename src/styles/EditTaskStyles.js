import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#17181f',
      alignItems: 'center',
      justifyContent: 'center'
   },
   label: {
      width: '90%',
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
   },
   inputText: {
      width: '90%',
      marginTop: 5,
      padding: 10,
      height: 50,
      borderRadius: 4,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30,
      backgroundColor: '#2a2e3d',
      color: '#fff'
   },
   buttonNewTask: {
      width: '90%',
      height: 50,
      backgroundColor: '#b738fe',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
   },
   iconButton: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
   },
   selectContainer: {
      width: '90%',
      alignSelf: 'center',
      marginTop: 10,
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 30,
      backgroundColor: '#2a2e3d',
   },
   select: {
      backgroundColor: '#2a2e3d',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 40,
   },
   selectItem: {
      color: '#b738fe'
   },
})
