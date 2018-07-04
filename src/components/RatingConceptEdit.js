import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import RatingConceptForm from './RatingConceptForm';
import { ratingConceptUpdate, ratingConceptSave, ratingConceptDelete } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class RatingConceptEdit extends Component {
  state={ showModal: false };
  componentWillMount() {
    _.each(this.props.ratingConcept, (value, prop) => {
      this.props.ratingConceptUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {  name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating } = this.props;
    this.props.ratingConceptSave({  name_conceptRating, description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating, crid: this.props.ratingConcept.crid });
  }
  onTextPress() {
    const {name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating } = this.props;
    //Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }


  render() {
    return (
      <Card>
      <RatingConceptForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Confirm
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const {  name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating } = state.ratingConceptForm;
  return {  name_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating };
};

export default connect(mapStateToProps, {
 ratingConceptUpdate, ratingConceptSave, ratingConceptDelete
})(RatingConceptEdit);
