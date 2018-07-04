import React, {Component} from 'react';
import { Text, View, Switch, StyleSheet, ScrollView, TouchableOpacity, Linking,Image, Alert,AppState } from 'react-native';
//import PushNotification from 'react-native-push-notification';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Header, Button, Card, CardSection, ImageRound} from '../components/common';
import AddImage from '../components/common/AddImage';
import ImagePicker from 'react-native-image-crop-picker';
//import PushController from '../components/PushController';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    //titleStyle: { fontFamily: 'UbuntuRegular' },
    headerLeft: (<Image style={{ width: 39, height: 39 }} source={require('Neppi/assets/images/Neppi_image.png')}/>),
    headerStyle: {
      backgroundColor: '#fefefe',
      elevation: null,
      }
    }

  constructor() {
    super()
    this.handleAppStateChange= this.handleAppStateChange.bind(this);
    this.state = {
      value: 0,
      SwitchOnValueHolder :  false,
    }

}

    componentDidMount() {
      AppState.addEventListener('change', this.handleAppStateChange);
    }
    componentWillUnmount() {
      AppState.removeEventListener('change', this.handleAppStateChange);
    }
    handleAppStateChange(appState) {
      this.setState({
        SwitchOnValueHolder: appState
      })
      if(appState===true) {
        Alert.alert("Notification is On.");
        //   PushNotification.localNotificationSchedule({
        // message: "My Notification Message", // (required)
        // date: new Date(Date.now()) // in 60 secs
        //});

      }else{ Alert.alert("Notification is Off."); }}

      render() {
        return (
          <View>
            <Card>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Information')}
                  >
                  <Text  style={styles.text}> Neppi helpline </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.button}
                  onPress={()=> Linking.openURL('https://neppi.aalto.fi')}
                  >
                  <Text style={styles.text}> Neppis web </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.button}
                  onPress={()=> Linking.openURL('http://www.collectiveone.org/#/app/inits/')}
                  >
                  <Text style={styles.text}> CollectiveOne websites </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('About')}
                  >
                  <Text style={styles.text}> About </Text>
                </TouchableOpacity>

              <View style={styles.notification}>
                <Text style={styles.textNofic}>Notification </Text>
                <Switch
                  onValueChange={(value) => this.handleAppStateChange(value)}
                  value={this.state.SwitchOnValueHolder}
                  />
              </View>
          </Card>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      button: {
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 5,
        borderBottomWidth: 1,
      },
    notification:{
      backgroundColor: 'white',
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 5,
      flexDirection:'row',
      borderBottomWidth: 1,
      justifyContent: 'space-between'
    },
      text1:{
      //  fontFamily: 'UbuntuRegular'
      },
      textNofic:{
      //  fontFamily: 'UbuntuRegular',
        marginLeft: 10
      }
    })
