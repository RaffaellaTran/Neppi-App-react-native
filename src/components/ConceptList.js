import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ListView, View, Text, Dimensions } from 'react-native';
import { conceptsFetch, passConcept } from '../actions';
import ListItem from './ListItem';
import {Button , Card} from './common';
const width = Dimensions.get('window').width;

class ConceptList extends Component {
  constructor(props){
    super(props);
      console.log('CONCEPTLIST',props);
    this.onConceptItemClick = this.onConceptItemClick.bind(this);
  }
  componentWillMount() {
    this.props.conceptsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ concepts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(concepts);
  }

  onConceptItemClick(concept ) {
    console.log('ConceptList.js', this.props.navigation.state.params.person);

    this.props.navigation.navigate('ConceptShowWrapper', {concept, person:  this.props.navigation.state.params.person});
  }

  renderRow(concept) {

    return (
      <View >
      <ListItem onItemClick={this.onConceptItemClick} concept={concept}/>
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
  const concepts = _.map(state.concepts, (val, cid) => {
    return { ...val, cid };
  });
  return { concepts };
};


export default connect(mapStateToProps, { conceptsFetch, passConcept })(ConceptList);
