import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView, TouchableOpacity, StatusBar,Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import PeopleList from '../components/PeopleList';
import reducers from '../reducers';

export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state= {user: props.navigation.state.params,
                }
    console.log('Home', props);
    }

//fontFamily: 'UbuntuRegular'
  static navigationOptions = {
    title: 'ContactListWrapper',
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <View >
          <Provider store={store} >
            <ScrollView>
              <PeopleList navigation={this.props.navigation}/>
            </ScrollView>
          </Provider>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'#0000ff',
    borderRadius:100,

  }})
