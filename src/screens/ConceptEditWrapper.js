import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import ConceptList from '../components/ConceptList';
import ConceptEdit from '../components/ConceptEdit';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class ConceptEditWrapper extends React.Component {
  constructor (props) {
super(props);
this.state = { concept: props.navigation.state.params.concept };

}

  static navigationOptions = {
    title: 'ConceptEdit',
    headerBackTitle: null
  };

  render() {

    return (
      <Provider store ={store}>
          <ScrollView>
            <ConceptEdit navigation={this.props.navigation} concept={this.state.concept} />
        </ScrollView>
      </Provider>
    );
  };
}
export default ConceptEditWrapper;
