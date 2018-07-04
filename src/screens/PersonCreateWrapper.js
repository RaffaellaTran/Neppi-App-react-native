import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import PersonCreate from '../components/PersonCreate';
import reducers from '../reducers';
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class PersonCreateWrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Create profile',

    }
  render () {
    const uid = this.props.navigation.state.params? this.props.navigation.state.params.user.user.uid : '';

    return (
      <Provider store={store}>
        <ScrollView>
          <PersonCreate key={uid} navigation={this.props.navigation} uid={uid}/>
        </ScrollView>
      </Provider>
    );
  };
}
export default PersonCreateWrapper;
