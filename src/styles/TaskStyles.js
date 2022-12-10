import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   taskContainer: {
      backgroundColor: '#2a2e3d',
      width: '90%',
      borderRadius: 5,
      height: 160,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'center',
      overflow: 'hidden',
      marginVertical: 10
   },
   taskTitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 6
   },
   taskDescription: {
      color: '#676d76',
      fontSize: 14
   },
   taskFooter: {
      borderTopColor: '#676d76',
      borderTopWidth: 0.5,
      alignItems: 'flex-start',
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingHorizontal: 20,
      paddingVertical: 10,
   },
   taskResponsible: {
      color: '#1976d2',
      fontSize: 14,
      marginBottom: 10,
   },
   taskHeader: {
      width: '100%',
      alignItems: 'flex-start',
      marginTop: 'auto',
      marginBottom: 'auto',
      padding: 20
   },
   taskActions: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopColor: '#676d76',
      width: '100%',
      borderTopWidth: 0.3,
   },
   taskActionsButtons: {
      flexDirection: 'row',
   },
   buttonEdit: {
      marginRight: 10,
      padding: 5
   },
   buttonDelete: {
      padding: 5
   },
   status: {
      padding: 5,
      borderRadius: 4,
   },
})