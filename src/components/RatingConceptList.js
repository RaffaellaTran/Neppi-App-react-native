import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { ratingConceptFetch } from '../actions';
import RatingConceptListItem from './RatingConceptListItem';

class RatingConceptList extends Component {
  constructor(props) {
    super(props);
    console.log('RatingConceptList', props.navigation.state.params.concept.cid);
  }

  componentWillMount() {
    this.props.ratingConceptFetch({cid_conceptRating: this.props.navigation.state.params.concept.cid});
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ ratingConcepts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(ratingConcepts);
  }
  renderRow(ratingConcept) {
    return <RatingConceptListItem ratingConcept={ratingConcept} />;
  }
  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const ratingConcepts = _.map(state.ratingConcepts, (val, crid) => {
    return { ...val, crid };
  });
  return { ratingConcepts };
};


export default connect(mapStateToProps, { ratingConceptFetch })(RatingConceptList);
