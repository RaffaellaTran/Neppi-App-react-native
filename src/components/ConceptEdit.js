import React, { Component } from 'react';
import _ from 'lodash';
import { Picker, View, Text ,ScrollView, Dimensions} from 'react-native';
//import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import ConceptFormEdit from './ConceptFormEdit';
import { conceptUpdate, conceptSave, conceptDelete } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class ConceptEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      selected: [],
      input: ''
    };
    console.log('CONCEPTEDIT', props.concept);
       this.onPersonPress = this.onPersonPress.bind(this);
}
onPersonPress(username){
  this.setState({
selected: this.state.selected.concat(username),
   //selected.push(username);
    input:username
  });}
  componentWillMount() {
    _.each(this.props.concept.concept, (value, prop) => {
      this.props.conceptUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name_concept,author_concept,  image_concept,keyword_concept,description_concept, cid, navigation } = this.props;
    this.props.conceptSave({ name_concept, author_concept, image_concept,keyword_concept,description_concept, cid: this.props.concept.cid,select:this.state.selected,  navigation });
  }
  // onTextPress() {
  //   const { name_concept,image_concept,keyword_concept,description_concept } = this.props;
  //   //Communications.text(phone, `Your upcoming shift is on ${shift}`);
  // }


  render() {
        const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>
          <CardSection  style={{height}}>
      <ConceptFormEdit {...this.props} onPersonPress={this.onPersonPress}/>
              </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

      </ScrollView>
    );
  }
}

// <CardSection>
//   <Button onPress={() => this.setState({ showModal: !this.state.showModal })} >
//   Fire Concept
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
  const { name_concept, author_concept,image_concept,keyword_concept,description_concept } = state.conceptForm;
  return { name_concept, author_concept,image_concept,keyword_concept,description_concept };
};

export default connect(mapStateToProps, {
 conceptUpdate, conceptSave
})(ConceptEdit);
