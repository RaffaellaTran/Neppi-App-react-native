import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import Profile from '../screens/Profile';
import reducers from '../reducers';

class ProfileWrapper extends React.Component{
  constructor (props) {
super(props);
}

static navigationOptions = {
  title: 'My Profile',
//  titleStyle: { fontFamily: 'UbuntuRegular'},
  headerLeft: (<Image style={{ width: 39, height: 39, marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>),
  headerStyle: {
    backgroundColor: '#fefefe',
  
  }
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store ={store}>
          <ScrollView>
            <Profile navigation={this.props.navigation}  />

        </ScrollView>
      </Provider>
    );
  };
}
export default ProfileWrapper;
