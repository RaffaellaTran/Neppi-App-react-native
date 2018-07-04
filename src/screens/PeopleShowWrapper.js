import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import reducers from '../reducers';
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class PersonShowWrapper extends React.Component{
  constructor (props) {
    super(props);
    this.state = { person: props};
}

  static navigationOptions = {
    title: 'PersonShow',
    headerBackTitle: null
  };
  render() {   
    let {person} = this.state;
    return (
      <Provider store ={store}>
        <ScrollView>
          <PersonShowDetails navigation={this.props.navigation} person={this.state.person} />
        </ScrollView>
      </Provider>
    );
  };
}
export default PersonShowWrapper;
