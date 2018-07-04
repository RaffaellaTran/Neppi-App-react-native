import React from 'react';
import { ScrollView, Text,View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RatingConceptList from '../components/RatingConceptList';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RatingConceptListWrapper extends React.Component {
  static navigationOptions = {
    title: 'Proof of work',
    //titleStyle:{  fontFamily: 'UbuntuRegular'},
    headerStyle: {
      backgroundColor: '#fefefe',
      elevation: null,
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('RatingtConceptListWrapper', props);
}


  render() {

    return (
      <View>
        <Text style={{fontSize: 18}}>Reviews</Text>
      <Provider store={store}>
          <ScrollView>
            <RatingConceptList navigation={this.props.navigation}/>
        </ScrollView>
      </Provider>
      </View>
    );
  }
}
export default RatingConceptListWrapper;
