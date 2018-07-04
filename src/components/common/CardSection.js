import React from 'react';
import { View } from 'react-native';

//presentation for user, no lifecycle
const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };