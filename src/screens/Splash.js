import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Spinner, YellowBox } from 'react-native';
import * as firebase from 'firebase';
import config from '../../config';


class Splash extends Component {
  state= { loggedIn: false };

  static navigationOptions ={
    header: null
  };

  componentWillMount() {
  !firebase.apps.length ? config : firebase.app();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }
);
setTimeout(() => {
  switch (this.state.loggedIn) {
    case true:
    return (
      this.props.navigation.navigate('Homepage')
    );
    case false:
    return (
      this.props.navigation.navigate('LoginWrapper')
    );

    default:
    return <Spinner size='large' />;
  }
}, 2000
);
}

render() {
  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated','Possible Unhandled Promise Rejection',
    'Warning: componentWillUpdate is deprecated','Setting a timer','Remote debugger'
  ]);
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <View>

        <Image style={styles.image} source={require ('Neppi/assets/images/Neppi_image.png')}/>

        <Text style={styles.title}>
          NeppiProject
        </Text>
      </View>
      <Image source={require('Neppi/assets/images/aalto_logo.png')}/>

    </View>
  );
}
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    marginBottom: 10
  },
  aalto_logo: {
    marginTop: 100,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  title: {
    color: 'black',
    fontSize: 35,
  // fontFamily: 'UbuntuBold'
  }
});

export default Splash;
