import React from 'react';
import {View, ScrollView, Dimensions ,Text,Image, TouchableHighlight }  from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import RequestList from '../components/RequestList';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RequestListWrapper extends React.Component {
  constructor(props){
super(props);
this.state = {};
// console.log('RequestListWrapper', props);
}
static navigationOptions = {
  title: 'Proof of work',
  //titleStyle:{  fontFamily: 'UbuntuRegular'},
  headerLeft: (<Image
    style={{ width: 39, height: 39, marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>),
  headerStyle: {
    backgroundColor: '#fefefe',
    elevation: null,
  }
  }

  render() {

    return (
      <Provider store ={store}>
          <ScrollView>
            <RequestList navigation={this.props.navigation}/>
        </ScrollView>
      </Provider>
    );
  };
}
export default RequestListWrapper;
