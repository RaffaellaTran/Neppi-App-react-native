import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Input } from './common';

class RatingConceptListItem extends Component {

  constructor(props){
    super(props);
    console.log('ratingConceptItem',props);
    this.choose= this.choose.bind(this);
    //  this.onRowPress = this.onRowPress.bind(this);
  }
  // onRowPress() {
  //   Actions.ratingConceptEdit({ rating: this.props.ratingConcept });
  // }
  //se check è vero -> comment se è falso-> rating
 choose(){
  if (this.props.ratingConcept.slider_valueRating<=1.6){
  return  (<Text style={styles.titleStyle}> Evaluation: PASS</Text>);
  } else if (this.props.ratingConcept.slider_valueRating>=3.4) {
    return  (<Text style={styles.titleStyle}> Evaluation: GOOD</Text>);
  }else{
    return  (<Text style={styles.titleStyle}> Evaluation: GREAT</Text>);
  }
}

  render() {
    const { name_conceptRating,cid_conceptRating, author_conceptRating,reviewer_conceptRating,description_conceptRating, checkRating, comment_ratingConcept, slider_valueRating } = this.props.ratingConcept;
    return (
      <TouchableWithoutFeedback >
        <View>
          <CardSection style={{flexDirection: 'column-reverse'}}>
            <Text style={styles.titleStyle}>
        From:{this.props.ratingConcept.reviewer_conceptRating}
            </Text>
          {
            checkRating &&   <Text style={styles.titleStyle}>Comment: {comment_ratingConcept}</Text>
          }

        {!checkRating &&
      this.choose()
          }
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    marginVertical: 5,
    //fontFamily: 'UbuntuRegular'
  }
};

export default RatingConceptListItem;
