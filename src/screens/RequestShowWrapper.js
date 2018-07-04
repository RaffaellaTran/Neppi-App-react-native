import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import RequestShowDetails from '../components/RequestShowDetails';
import RequestEdit from '../components/RequestEdit';
import reducers from '../reducers';

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RequestShowWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = { request: props.navigation.state.params.request };
}

  static navigationOptions = {
    title: 'Proof of work sent'
  };
  render() {
    let {request} = this.state;
    return (
      <Provider store ={store}>
          <ScrollView>
          <RequestShowDetails navigation={this.props.navigation} request={this.state.request} />
        </ScrollView>
      </Provider>
    );
  };
}
export default RequestShowWrapper;
