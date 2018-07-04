import React, { Component } from 'react';
import _ from 'lodash';
//import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import RequestForm from './RequestForm';
import { requestUpdate, requestSave, requestsFetch } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class RequestEdit extends Component {
  state={ showModal: false };
  componentWillMount() {
    _.each(this.props.request, (value, prop) => {
      this.props.requestUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {  name_concept,author_concept, title, work_hours, image_request, description_request, contact, navigation } = this.props;
    this.props.requestSave({  name_concept,author_concept, title, work_hours, image_request, description_request, contact, rid: this.props.request.rid, navigation });
  }
  onTextPress() {
    const {name_concept, author_concept,title, work_hours, image_request, description_request, contact } = this.props;
    //Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { rid } = this.props.request;
    this.props.requestsFetch({ rid });
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <Card>
      <RequestForm />
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Preview
        </Button>
      </CardSection>
      </Card>
    );
  }
}
// <CardSection>
//   <Button onPress={() => this.setState({ showModal: !this.state.showModal })} >
//   Fire Request
//   </Button>
// </CardSection>
// <Confirm
//     visible={this.state.showModal}
//     onAccept={this.onAccept.bind(this)}
//     onDecline={this.onDecline.bind(this)}
// >
//     Are you sure you want to delete this?
// </Confirm>


const mapStateToProps = (state) => {
  const {  name_concept, author_concept,title, work_hours, image_request, description_request, contact } = state.requestForm;
  return {  name_concept, author_concept,title, work_hours, image_request, description_request, contact };
};

export default connect(mapStateToProps, {
 requestUpdate, requestSave, requestsFetch
})(RequestEdit);
