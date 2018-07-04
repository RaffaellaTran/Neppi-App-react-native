import React, {Component} from 'react';
import {
     Image,
     TouchableOpacity,
     View
} from 'react-native';

class IconTab extends Component {
    render() {
        let icon;
        const {press, focused, index} = this.props;
    //    console.log('this.props',this.props);
        if (index === 0) {
           icon = require('Neppi/assets/images/home-inactive.png');
        } else if (index === 1) {
           icon = require('Neppi/assets/images/profile-inactive.png');
        } else if (index === 2) {
           icon = require('Neppi/assets/images/settings-inactive.png');
        }
/*
        const { routeName } = navigation.state;
          let iconName;

          if (routeName === 'Homepage') {
            iconName= focused ? require('./assets/images/home-active.png') : require('./assets/images/home-inactive.png');

          } else if (routeName === 'Profile') {
            iconName= focused ? require('./assets/images/profile-active.png') : require('./assets/images/profile-inactive.png');

          } else if (routeName === 'Request') {
            iconName= focused ? require('./assets/images/profile-active.png') : require('./assets/images/profile-inactive.png');

          } else if (routeName === 'Settings') {
            iconName= focused ? require('./assets/images/settings-active.png') : require('./assets/images/settings-inactive.png');
          }*/
        return (
            <TouchableOpacity onPress={press}>
                <Image source={icon} style={{height:30, width:30}} resizeMode={'contain'}/>
            </TouchableOpacity>
        );
     }
  }
 export default IconTab;
