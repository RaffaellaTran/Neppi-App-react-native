import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { ratingFetch, requestsFetch } from '../actions';
import RatingListItem from './RatingListItem';

class RatingList extends Component {
  constructor(props){
    super(props);
    console.log('ratingList', props);
  //  this.onConceptItemClick = this.onConceptItemClick.bind(this);
        this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.props.ratingFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ ratings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(ratings);
  }

  // onConceptItemClick(rating,request) {
  //
  //   this.props.navigation.navigate('RatingShowWrapper', {rating}, {request});
  // }

  renderRow(rating) {
    return <RatingListItem onItemClick={this.onConceptItemClick} rating={rating} />;
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
  const ratings = _.map(state.ratings, (val, ratid) => {
    return { ...val, ratid };
  });
  return { ratings };
};


export default connect(mapStateToProps, { ratingFetch })(RatingList);
