import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});
const chart_wh = 250
const chart_whee = 100
const sliceColor = ['#F44336','#fff']

const DonutChart = (props)=> {


let reputationReceive=props.reputationReceive;
let reputationRemain=props.reputationRemain;
let HoursDone=props.HoursDone;
let HoursRemain=props.HoursRemain;
  let reputation = [reputationReceive, reputationRemain]
    let hours = [HoursDone, HoursRemain]


    return (

        <View style={{flexDirection:'row'}}>
          <StatusBar
            hidden={true}
          />

          <PieChart
            style={{borderColor: '#000', borderWidth:2}}
            chart_wh={chart_whee}
            series={reputation}
            sliceColor={sliceColor}
            style={{zIndex:10, top:75, left:75,position:'absolute'}}
          />

          <PieChart
            chart_wh={chart_wh}
              series={hours}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={{top:0}}
          />
        </View>

    );
  }

export {DonutChart};
