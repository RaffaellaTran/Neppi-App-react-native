import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';
import { connect } from 'react-redux';
import { CardSection, Button, DonutChart } from '../components/common';
import { personsFetch } from '../actions';
import RequestListWrapper from './RequestListWrapper';

class Profile extends Component {

  constructor( props){
    super(props);
  }
  static navigationOptions = {
    title: 'My Profile',
    headerLeft: (<Image style={{ width: 39, height: 39, marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>),
    headerStyle: {
      backgroundColor: '#fefefe',
      elevation: null,
    }
  }
  componentWillMount() {
    this.props.personsFetch();}
  render() {
    const {reputationReceive, reputationRemain, HoursRemain, HoursDone} = this.props;

    return (
      <ScrollView style={styles.container}>
        <CardSection>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Image style={{ width: 150, height: 150 ,borderRadius: 75, marginHorizontal: 10 }} source={require('Neppi/assets/images/profile.jpg')}/>
          <View >
            <Text style={styles.titleStyle}>
              Raffaella
            </Text>
            <Text style={styles.keywordStyle}>
              Keywords:
            </Text>
          </View >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonEditWrapper' )}>
            <Image style={{width: 50, height: 50, marginLeft:30  }} source={require('Neppi/assets/images/edit.png')} />
          </TouchableOpacity>
        </View>
        </CardSection>

        <Text style={styles.title}> Hourly quota:</Text>
        <CardSection style={{alignItems:'center', alignSelf:'center'}}>
      <DonutChart
      reputationReceive= {60}
      reputationRemain={65}
      HoursRemain={100}
      HoursDone={35}/>
      </CardSection>

        <Text style= {styles.titleStyle}> History </Text>
        <CardSection style={{flexDirection:'column'}}>
        <Text style= {styles.title}> Request </Text>
        <ScrollView>
          <RequestListWrapper navigation={this.props.navigation}/>
          </ScrollView>
          </CardSection>
      </ScrollView>
    );
  }}

  const styles = StyleSheet.create({
    viewStyle:{
      flexDirection: 'row',
      marginVertical: 10
    },
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    title: {
      fontSize: 15,
      alignSelf: 'center',
      alignContent: 'center',
      marginVertical: 10,
    //  fontFamily: 'UbuntuBold'
    },
    gauge: {
      position: 'absolute',
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gaugeText: {
      backgroundColor: 'transparent',
      color: '#000',
      fontSize: 24,
    //  fontFamily: 'UbuntuRegular'
    },
    pieText:{
      //fontFamily: 'UbuntuRegular'
    },
    keywordStyle: {
      fontSize: 18,
      marginLeft: 15,
  //    fontFamily: 'UbuntuRegular'
    },
    titleStyle: {
      fontSize: 25,
      marginLeft: 15,
      marginBottom:20,
  //    fontFamily: 'UbuntuBold'
    },
  })

  export default connect(null, { personsFetch })(Profile);
