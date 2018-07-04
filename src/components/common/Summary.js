import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Button from './Button';
const Summary = () => {
  //  {props.children}
  //style={{ fontFamily: 'UbuntuRegular'}}
  return (
    <View style= {styles.SummerStyle}>
        <Text >Concept: Design</Text>
        <Text >Work hour(s): Design</Text>
        <Text >Description: Design</Text>

    </View>
    //() => onPress={Linking.openURL(url)} da aggiungere tra le graffe
  );
};

const styles = {
  SummerStyle: {
    flex: 1
  }
};

export {Summary};
