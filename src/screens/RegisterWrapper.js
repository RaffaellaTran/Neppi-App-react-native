import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Register from './Register';
import reducers from '../reducers';

class RegisterWrapper extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerLeft: (<Image
      style={{ width: 39, height: 39, marginLeft: 10 }}
      source={require('Neppi/assets/images/Neppi_image.png') }
    />),
    headerStyle: {
      backgroundColor: '#fefefe',
      elevation: null,
    }
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <ScrollView>
            <Register navigation={this.props.navigation} />
          </ScrollView>
      </Provider>
    );
  }
}
export default RegisterWrapper;
