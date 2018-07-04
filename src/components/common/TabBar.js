import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import IconTab from "./IconBar";

class TabBar extends Component {
  render() {
    const {
      navigation,
      jumpToIndex,
    } = this.props;
    const {
      routes
    } = navigation.state;
//    console.log('navigation.state',navigation.state);
    let x=''
    for (i = 0; i < navigation.state.routes.length; i++) {
    x === navigation.state.routes[i].key;
    // console.log('navigation.state2: ',navigation.state.routes[i].key);
    // console.log('x:', x);
    }
    return (

          <View style={styles.tabbarcontainer}>

            <View style={styles.tabbar}>
              {routes && routes.map((route, index) => {
                const focused = index === navigation.state.routeName;
                const tabKey = route.key;
                return <View key={route.key} style={{ alignItems: 'center' }}>
                  <IconTab
                    press={() => jumpToIndex(index)}
                    key={route.key}
                    index={index}
                    focused={focused}
                  />

                  {focused &&
                       <Image source={require('Neppi/assets/images/home-active.png')} style={{height:30, width:30, position:'absolute', top:20}}/>
}</View>
              })}
            </View>
          </View>

       );
    }
}

const styles = StyleSheet.create({
  tabbarcontainer: {
    height: 35,
    backgroundColor: '#fff'
  },
  tabbar: {
    margin: 5,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
  },

});

export default TabBar;
