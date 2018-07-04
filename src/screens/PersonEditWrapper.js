import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import PersonEdit from '../components/PersonEdit';
import reducers from '../reducers';

class PersonEditWrapper extends React.Component{
  constructor (props) {
super(props);
}

  static navigationOptions = {
    title: 'PersonEdit'
  };
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store ={store}>
          <ScrollView>
            <PersonEdit navigation={this.props.navigation}  />

        </ScrollView>
      </Provider>
    );
  };
}
export default PersonEditWrapper;
