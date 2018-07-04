import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { requestsFetch } from '../actions';
import RequestListItem from './RequestListItem';

class RequestList extends Component {
  constructor(props){
    super(props);
    console.log('requestList', props);
    this.onConceptItemClick = this.onConceptItemClick.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount() {
    this.props.requestsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ requests }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(requests);
  }

  onConceptItemClick(request) {
    console.log('RequestList.js');
    console.log(request);
    this.props.navigation.navigate('RequestShowWrapper', {request});
  }

  renderRow(request) {
    return (
      <View >
      <RequestListItem onItemClick={this.onConceptItemClick} request={request} />
        </View>);
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
  const requests = _.map(state.requests, (val, rid) => {
    return { ...val, rid };
  });
  return { requests };
};


export default connect(mapStateToProps, { requestsFetch })(RequestList);
