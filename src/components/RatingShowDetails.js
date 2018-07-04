import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Picker, ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { ratingUpdate, ratingCreate } from '../actions';

import { Card, CardSection, Button } from './common';

class RatingShowDetails extends Component {
  state={ showModal: false };
  componentWillMount() {
    console.log('Details' ,this.props.rating);
    _.each(this.props.rating, (value, prop) => {
      this.props.ratingUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { comment_rating, slider_value, navigation } = this.props;
    this.props.ratingCreate({ comment_rating, slider_value, navigation });
  }
  // <RatingShow {...this.props} />
  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>
      
        <CardSection >
<Image style={{  marginLeft: 10}} source={require('Neppi/assets/images/Neppi_image.png')}/>
</CardSection>
      <CardSection >
        <Text style={styles.title}>Comment: {this.props.rating.comment_rating}</Text>
        </CardSection>
        <CardSection >
  <Text style={styles.description}>Value: {this.props.rating.slider_value}</Text>
  </CardSection>
      </ScrollView>
    );
  }
}

const styles={
  title:{
    fontSize: 30,
      alignSelf: 'center',
      paddingVertical: 20
  },
  description:{
    fontSize: 18,

  }
}
const mapStateToProps = (state) => {
  //console.log(state)
  const { comment_rating, slider_value } = state.ratingForm;
  return { comment_rating, slider_value };
};

export default connect(mapStateToProps, {
  ratingUpdate
})(RatingShowDetails);
