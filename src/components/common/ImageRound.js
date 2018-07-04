import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image } from 'react-native';

const ImageRound = () => {
  return (
    <View style = { styles.MainContainer }>
    <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}}
    style={{width: 150, height: 150, borderRadius: 100}} />
    </View>
  );
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    }

  });

export {ImageRound};
