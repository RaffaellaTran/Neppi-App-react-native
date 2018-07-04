import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Skills from '../components/Skills';
import { Card, CardSection, Input, Button, Loading } from '../components/common';
import { emailChanged, passwordChanged, registerUser } from '../actions';

class Register extends Component {
  static navigationOptions = {
    title: 'Insert your credentialities',
    // headerRight: (
    //   <TouchableOpacity >
    //   <Image
    //style={{ width: 39, height: 39, marginLeft: 10}}
    //source={require('Neppi/assets/images/Neppi_image.png')}/>
    //   </TouchableOpacity>
    // )
  };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, navigation } = this.props;
    this.props.registerUser(email, password, navigation);
  }
renderButton() {
  if (this.props.loading) {
    return <Loading size="large" />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Register
    </Button>
  );
}

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Text style={styles.title}>Skills</Text>
          </CardSection>
          <CardSection>
            <Skills />
          </CardSection>
          <CardSection>
            <Input
              label="Keywords"
              placeholder="insert keywords"
              value={this.props.keywords}

            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
           {this.props.error}
         </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  //  fontFamily: 'UbuntuRegular'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, registerUser })(Register);
