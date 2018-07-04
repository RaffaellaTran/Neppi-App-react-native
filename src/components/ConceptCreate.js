import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, ScrollView, Text, View, Dimensions } from 'react-native';
import { conceptUpdate, conceptCreate } from '../actions';
import ConceptForm from './ConceptForm';
import { Card, CardSection, Button } from './common';

class ConceptCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      selected: [],
      input: ''
    };
      console.log('CONCEPTCREATE',  props);
       this.onPersonPress = this.onPersonPress.bind(this);
}
    onPersonPress(username){
      this.setState({
   selected: this.state.selected.concat(username),
       //selected.push(username);
        input:username
      });}
      componentDidMount() {
        this.props.conceptUpdate({prop: 'selected', value: this.state.selected});
      }
  onButtonPress() {
    const { name_concept,author_concept, image_concept,keyword_concept,description_concept, navigation } = this.props;
    this.props.conceptCreate({ name_concept,author_concept, image_concept,keyword_concept,description_concept,select:this.state.selected, navigation });
  }
  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>
        <CardSection  style={{height}}>
          <ConceptForm {...this.props} onPersonPress={this.onPersonPress}/>
        </CardSection>
        <CardSection style={{ width: width-10}}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </ScrollView>
    );
  }}

const mapStateToProps = (state) => {
  const {selected}=state;
  const { name_concept,author_concept, image_concept, keyword_concept,description_concept, } = state.conceptForm;
  return { name_concept,author_concept, image_concept,selected, keyword_concept,description_concept };
};

export default connect(mapStateToProps, {
  conceptUpdate, conceptCreate
})(ConceptCreate);
