import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Header, Button, Card, CardSection, ImageRound} from '../components/common';

export default class Information extends Component {
  static navigationOptions ={
      title: 'Information',
    };
//style={{fontFamily: 'UbuntuRegular'}}
    render() {
      return (

        <Card>
          <CardSection>
            <Text >
             This section will illustrate and help to use the app.
            </Text>
          </CardSection>
        </Card>


      );
    }
  }
