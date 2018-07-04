import React, { Component } from 'react';
import _ from 'lodash';
//import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import RatingForm from './RatingForm';
import { ratingUpdate, ratingSave, ratingDelete } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class RatingEdit extends Component {
  state={ showModal: false };
  componentWillMount() {
    _.each(this.props.rating, (value, prop) => {
      this.props.ratingUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {  request_title, request_description,work_hours, comment_rating, slider_value, check } = this.props;
    this.props.ratingSave({  request_title, request_description,work_hours, comment_rating, slider_value, check, ratid: this.props.rating.ratid });
  }
  onTextPress() {
    const {request_title, request_description,work_hours, comment_rating, slider_value, check } = this.props;
    //Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { ratid } = this.props.rating;
    this.props.ratingDelete({ ratid });
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <Card>
      <RatingForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
          Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })} >
          Fire Rating
          </Button>
        </CardSection>
        <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
        >
            Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const {  request_title, request_description,work_hours, comment_rating, slider_value, check } = state.ratingForm;
  return {  request_title, request_description,work_hours, comment_rating, slider_value, check };
};

export default connect(mapStateToProps, {
 ratingUpdate, ratingSave, ratingDelete
})(RatingEdit);
