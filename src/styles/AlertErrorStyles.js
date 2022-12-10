import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   alertContainer: {
      width: '90%',
      height: 35,
      backgroundColor: '#ffe4e4',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'absolute',
      top: 20,
      borderWidth: 0.5,
      borderColor: '#b85352'
   },
   alertText: {
      color: '#b85352'
   },
   alertIcon: {
      height: '100%',
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
   }
})