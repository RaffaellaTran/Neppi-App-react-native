import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ListView, View, Text, Dimensions } from 'react-native';
import { personsFetch } from '../actions';
import PeopleListItem from './PeopleListItem';
import {Button , Card} from './common';
const width = Dimensions.get('window').width;

class PeopleList extends Component {
  constructor(props){
    super(props);
    console.log('PEOPLELIST', props);
     this.onPersonPress = this.onPersonPress.bind(this);
  }
  componentWillMount() {
    this.props.personsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ persons }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(persons);
  }

  onPersonPress() {
    this.props
  }

  renderRow(person) {

    return (
      <View >
      <PeopleListItem onPersonPress={this.props.onPersonPress} person={person} />
    </View>);
  }



  render() {
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
    );
  }
}
const styles = {
  listView: {
  flexDirection: 'row',
  flexWrap: 'wrap'
},
card: {
  width: (width / 2) - 15,
  marginLeft: 10,
  marginTop: 10
}
}

const mapStateToProps = state => {
  const persons = _.map(state.persons, (val, cid) => {
    return { ...val, cid };
  });
  return { persons };
};


export default connect(mapStateToProps, { personsFetch })(PeopleList);
