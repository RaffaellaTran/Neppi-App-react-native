import React from 'react';
import {View, ScrollView, Dimensions ,Text,Image, TouchableHighlight }  from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button, CardSection} from '../components/common';
import Login from './Login';
import ConceptEdit from '../components/ConceptEdit';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class LoginWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

  }
  static navigationOptions = {
    title: 'Insert your credentialities',
    headerLeft: (<Image style={{ width: 39, height: 39, marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>),
    headerStyle: {
      backgroundColor: '#fefefe',
      elevation: null,
    }
  }

  render() {

    return (
      <View>
      <Provider store ={store}>
      <ScrollView>
      <Login navigation={this.props.navigation}/>
      </ScrollView>

      </Provider>
      </View>
    );
  };
}
export default LoginWrapper;
