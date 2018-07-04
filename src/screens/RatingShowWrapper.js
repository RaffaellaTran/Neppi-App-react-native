import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RatingShowDetails from '../components/RatingShowDetails';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class RatingShowWrapper extends React.Component {
  static navigationOptions = {
    title: 'RatingShow'
  };
  constructor(props) {
    super(props);
    this.state = {
      rating: props.navigation.state.params.rating,
      request: props.navigation.state.params.request
    };
}

  render() {

    return (
      <Provider store={store}>
        <ScrollView>
          <RatingShowDetails
            navigation={this.props.navigation}
            rating={this.state.rating} request={this.state.request}
          />
        </ScrollView>
      </Provider>
    );
  }
}
export default RatingShowWrapper;
