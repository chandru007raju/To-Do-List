import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#17181f',
      alignItems: 'center',
      justifyContent: 'center',
   },
   imageLogin: {
      width: '65%',
      height: 250,
      marginBottom: 20
   },
   title: {
      marginBottom: 25,
      fontSize: 16,
      color: '#fff',
   },
   createAccountButton: {
      position: 'absolute',
      bottom: 15
   },
   createAccountButtonText: {
      color: '#fff',
      fontSize: 14,
      letterSpacing: 1
   },
   buttonContainer: {
      marginTop: 10,
      width: '90%',
      height: 50,
      backgroundColor: '#b738fe',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom: 50
   },
   buttonTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
   }
})