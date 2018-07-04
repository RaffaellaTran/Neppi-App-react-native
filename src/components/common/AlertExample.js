import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertExample = () => {
   const showAlert = () => {
      Alert.alert(
         'You need to...'
      )
   }//<Text style={{fontFamily: 'UbuntuRegular'}}>Alert</Text>
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text >Alert</Text>
      </TouchableOpacity>
   )
}
export {AlertExample}

const styles = StyleSheet.create ({
   button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})
