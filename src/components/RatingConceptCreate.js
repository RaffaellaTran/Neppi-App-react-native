import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, ScrollView, Text } from 'react-native';
import { ratingConceptUpdate, ratingConceptCreate } from '../actions';
import RatingConceptForm from './RatingConceptForm';
import { Card, CardSection, Button } from './common';

class RatingConceptCreate extends Component {
constructor(props){
  super(props)
  console.log('RatingConcept', props)
}

  onButtonPress() {
    const {name_conceptRating,author_conceptRating, cid_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating, navigation } = this.props;
    this.props.ratingConceptCreate({ name_conceptRating, cid_conceptRating: this.props.concept.concept.concept.concept.cid, author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating , navigation});

  }

  render() {
    return (
      <ScrollView >
        <CardSection>
          <RatingConceptForm {...this.props}
          />
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
  const {name_conceptRating,author_conceptRating, reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating  } = state.ratingConceptForm;
  return {name_conceptRating,author_conceptRating, reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating };
};

export default connect(mapStateToProps, {
  ratingConceptUpdate, ratingConceptCreate
})(RatingConceptCreate);
