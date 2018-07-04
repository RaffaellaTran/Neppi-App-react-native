import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../components/common';

export default class About extends Component {
  static navigationOptions ={
      title: 'About'
    };

    render() {
      return (
        <View >
        <Card>
          <CardSection>
            <Text>
              This app has been created as a support for the NEPPI course, a university course in Aalto University. The students can plan and organise their project, leave constructive feedback and 
              recognize the contribution of each team member.
            </Text>
          </CardSection>
        </Card>
        </View>

      );
    }
  }
