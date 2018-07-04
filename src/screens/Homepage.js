import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView, TouchableOpacity, StatusBar,Button, StyleSheet} from 'react-native';
import {StackNavigator,NavigationActions} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ConceptList from '../components/ConceptList';
import reducers from '../reducers';
import { Header} from '../components/common';
import ConceptEditWrapper from './ConceptEditWrapper';
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class Homepage extends Component {


//fontFamily: 'UbuntuRegular'
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    console.log('Home', props.navigation);
    }
    componentWillReceiveProps(nextProps) {
        if ( nextProps.token == undefined || _.isNil(nextProps.token) ) {

            let action = NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({routeName: 'Auth'})
                ]
            });

            nextProps.navigation.dispatch(action);
        }

    }


  render() {
    const userName = this.props.navigation.state.params ? this.props.navigation.state.params.person.username: '';
    const person = this.props.navigation.state.params ? this.props.navigation.state.params.person: '';
    return (
      <View >
        <Header headerText={'Hi Anna'}></Header>
        <View >
          <StatusBar backgroundColor='white' barStyle='dark-content'/>
          <Provider store={store} >
            <ScrollView>
              <ConceptList navigation={this.props.navigation}/>
            </ScrollView>
          </Provider>
        </View>
        <View style={{ position: 'absolute',
        top:5,
       right: 5}} >

          <TouchableOpacity style={styles.viewStyle}
            onPress={() => this.props.navigation.navigate('ConceptCreateWrapper', {person})}
            >
            <Text style={{color: 'white', fontSize: 30}}>+</Text>
          </TouchableOpacity>
        </View>
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
    top:70,
    width:80,
    height:80,
    backgroundColor:'#0000ff',
    borderRadius:100,

  }})
