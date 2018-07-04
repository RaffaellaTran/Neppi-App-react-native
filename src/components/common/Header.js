//import library
import React from 'react';
import { Text, View, Image } from 'react-native';
//component

const Header = (props) => {
  // for not resign every time style
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Image style={{ width: 39, height: 39, marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection:'row',
    backgroundColor: '#F8F8F8',

    height: 60,
   paddingTop: 15,
    //shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
//shadow for Android is elevation
    elevation: 4,
    position: 'relative'

  },
  textStyle: {
    alignItems:'center',
    marginTop:10,
    marginLeft: 100,
    fontSize: 20,
  }
};

export { Header };
