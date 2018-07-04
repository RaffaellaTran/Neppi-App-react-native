import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, ScrollView, Text } from 'react-native';
import { ratingUpdate, ratingCreate } from '../actions';
import RatingForm from './RatingForm';
import { Card, CardSection, Button } from './common';

class RatingCreate extends Component {

  onButtonPress() {
    const {request_title, request_description,work_hours, comment_rating, slider_value, check, navigation } = this.props;
    this.props.ratingCreate({ request_title, request_description,work_hours, comment_rating, slider_value, check , navigation});
  }
  render() {
    return (
      <ScrollView >
        <CardSection>
          <RatingForm {...this.props} />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Send
          </Button>
        </CardSection>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  const {request_title, request_description,work_hours, comment_rating, slider_value, check } = state.ratingForm;
  return {request_title, request_description,work_hours, comment_rating, slider_value, check };
};

export default connect(mapStateToProps, {
  ratingUpdate, ratingCreate
})(RatingCreate);
