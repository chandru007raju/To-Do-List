import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#17181f',
   },
   profileImage: {
      width: '90%',
      height: 300,
      marginBottom: 20
   },
   userEmailContainer: {
      width: '90%',
      height: 65,
      backgroundColor: '#2a2e3d',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      overflow: 'hidden',
   },
   userEmailIcon: {
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   userEmailData: {
      alignItems: 'flex-start',
      justifyContent: 'center'
   },
   userEmailLabel: {
      fontSize: 12,
      color: '#858585',
   },
   userEmail: {
      fontSize: 15,
      color: '#fff',
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
      marginBottom: 20,
   },
   buttonTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
   }
})