import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ConceptCreate from '../components/ConceptCreate';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class ConceptCreateWrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Create Concept',
    headerBackTitle: null,
    }

  render () {
    return (
      <Provider store ={store}>
        <ScrollView>
          <ConceptCreate navigation={this.props.navigation}/>
        </ScrollView>
      </Provider>
    );
  };
}
export default ConceptCreateWrapper;
