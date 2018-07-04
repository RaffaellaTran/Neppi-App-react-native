import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RequestCreate from '../components/RequestCreate';
import reducers from '../reducers';

class RequestCreateWrapper extends React.Component {
  static navigationOptions={
    title: 'Proof of work'
  }
  constructor(props) {
    super(props);
    this.state = { concept: props.navigation.state.params.concept.concept, person: props.navigation.state.params.concept.person,   };
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <ScrollView>
          <RequestCreate concept={this.state} person={this.state} navigation={this.props.navigation} />
        </ScrollView>
      </Provider>
    );
  }
}
export default RequestCreateWrapper;
