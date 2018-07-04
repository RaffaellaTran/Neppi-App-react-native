import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Picker, ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { conceptUpdate, conceptCreate } from '../actions';
import RatingConceptListWrapper from '../screens/RatingConceptListWrapper';
import { Card, CardSection, Button } from './common';

class ConceptShowDetails extends Component {

  constructor(props) {
    super(props);
   
  }

  componentWillMount() {
    console.log('Details' ,this.props);
    _.each(this.props.concept.concept, (value, prop) => {
      this.props.conceptUpdate({ prop, value });
    });
  }

  selectPeople() {
{ let sel= this.props.concept.concept.select;
  for (let i in sel ) {
    return  (
        <View style={{flexDirection: 'column'}}>
            <Text>{sel[i]}</Text>
        </View>);
    }}
    
}

  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>
        <CardSection >
           <Image style={{ width: width-30, height:200,marginLeft: 10}} source={{uri: this.props.concept.concept.image_concept}}/>
        </CardSection>
        <CardSection >
            <Text style={styles.title}>Concept: {this.props.concept.concept.name_concept}</Text>
        </CardSection>
        <CardSection >
          <Text style={styles.description}>Author: {this.props.concept.concept.author_concept}</Text>
        </CardSection>
        <CardSection >
            <Text style={styles.description}>Description: {this.props.concept.concept.description_concept}</Text>
        </CardSection>
        <CardSection >
            <Text style={styles.description}>Keyword: {this.props.concept.concept.keyword_concept}</Text>
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
            <Text style={styles.array}>People invited: {this.props.concept.concept.select}</Text>
        </CardSection>
        <CardSection>
            <RatingConceptListWrapper navigation={this.props.navigation}/>
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
  },
  array:{
      fontSize: 18,

  }
}
const mapStateToProps = (state) => {
  const { name_concept,author_concept, image_concept, keyword_concept,description_concept, } = state.conceptForm;
  return { name_concept,author_concept, image_concept, keyword_concept,description_concept };
};

export default connect(mapStateToProps, {
  conceptUpdate
})(ConceptShowDetails);
