import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RatingConceptCreate from '../components/RatingConceptCreate';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RatingConceptCreateWrapper extends React.Component {
  static navigationOptions = {
    title: 'Evaluation',
  }
constructor(props) {
  super(props);
  this.state = { concept: props.navigation.state.params };
}

  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <RatingConceptCreate navigation={this.props.navigation} concept={this.state} />
        </ScrollView>
      </Provider>
    );
  }
}
export default RatingConceptCreateWrapper;
