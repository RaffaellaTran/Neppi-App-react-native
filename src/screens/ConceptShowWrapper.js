import React from 'react';
import {View, ScrollView, Dimensions ,Text, Image,TouchableOpacity }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Header, Button} from '../components/common';
import ConceptShowDetails from '../components/ConceptShowDetails';
import ConceptEdit from '../components/ConceptEdit';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class ConceptShowWrapper extends React.Component {
  static navigationOptions = {
    title: 'ConceptShow',
    headerBackTitle: null,
  };
  constructor (props) {
    super(props);
    this.state = { concept: props.navigation.state.params };
}


  render() {
    let { concept, person } = this.state;
    return (
      <Provider store={store}>
          <ScrollView>

          <ConceptShowDetails navigation={this.props.navigation} concept={this.state.concept} />

          <View style={{ marginTop:10, flexDirection: 'row' }}>
          <Button onPress={ () => this.props.navigation.navigate('ConceptEditWrapper',concept={ concept } )}>
          <Text>Edit concept</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('RequestCreateWrapper', concept={ concept } )}>
          <Text>Send a proof of work</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('RatingConceptCreateWrapper', concept={concept} )}>
          <Text>Evaluation Concept</Text>
          </Button>
          </View>
        </ScrollView>
      </Provider>
    );
  }
}
export default ConceptShowWrapper;
