import React from 'react';
import { View,ScrollView, Text, TouchableOpacity } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
//tyle={{fontFamily: 'UbuntuRegular'}}
  const MenuTopDown = () => (
      <Menu>
        <MenuTrigger text='Concept' />
        <MenuOptions style={{ maxHeight: 200, flex: 1}}>
          <MenuOption onSelect={() => alert(`Design`)} text='Design' />
          <MenuOption onSelect={() => alert(`Prototype`)} >
            <Text s>Prototype</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Add new`)} text='Add new' />
        </MenuOptions>
      </Menu>
  );
export {MenuTopDown};
