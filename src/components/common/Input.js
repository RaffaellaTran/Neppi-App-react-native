import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, edit,multiLine, numbLine,input }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

    return (
      <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
        <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
          editable={edit}
        onChangeText={onChangeText}
        multiline = {multiLine}
        numberOfLines = {numbLine}
        ref={input}
        />

      </View>
    );
  };
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height:50
  //  fontFamily: 'UbuntuRegular'
  },
    labelStyle: {
      fontSize: 16,
      paddingLeft: 20,
      flex: 1,
      //fontFamily: 'UbuntuRegular'
    },
      containerStyle: {
        flex: 1,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
      },
};
export { Input };
