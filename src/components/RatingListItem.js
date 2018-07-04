import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Input } from './common';

class RatingListItem extends Component {
  constructor(props) {
    super(props);
    console.log('RatingList',props );
    // this.onRowPress = this.onRowPress.bind(this);
  }

  // onRowPress() {
  //     this.props.onItemClick(this.props.rating, this.props.request);
  // }
  choose(){
   if (this.props.rating.slider_value<=1.6){
   return  (
<Text style={styles.titleStyle}> Evaluation: PASS</Text>
  );
   } else if (this.props.rating.slider_value>=3.4) {
     return  (
<Text style={styles.titleStyle}> Evaluation: GOOD</Text>
);
   }else{
     return  (
<Text style={styles.titleStyle}> Evaluation: GREAT</Text>
  );
   }
 }
  render() {
    const { comment_rating, check, slider_value } = this.props.rating;
    return (


        <View >
        {
          check &&<Text style={styles.titleStyle}>Comment: {comment_rating}</Text>

        }
      {
        !check &&
        this.choose()
        }
          </View>


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

export default RatingListItem;
