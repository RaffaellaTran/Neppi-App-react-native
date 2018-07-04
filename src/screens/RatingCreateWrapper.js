import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RatingCreate from '../components/RatingCreate';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RatingCreateWrapper extends React.Component {
  static navigationOptions = {
    title: 'Evaluation',
  }
  constructor(props) {
    super(props);
    this.state = { request: props.navigation.state.params.request };
  }

  render() {

    return (
      <Provider store={store}>
        <ScrollView>
          <RatingCreate navigation={this.props.navigation} request={this.state.request} />
        </ScrollView>
      </Provider>
    );
  }
}
export default RatingCreateWrapper;
