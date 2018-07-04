import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RatingList from '../components/RatingList';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class RatingListWrapper extends React.Component {
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
    console.log('RatingtListWrapper', props);
}


  render() {

    return (
      <Provider store={store}>
          <ScrollView>
            <RatingList navigation={this.props.navigation} />
        </ScrollView>
      </Provider>
    );
  }
}
export default RatingListWrapper;
