import React, { Component } from 'react';
import _ from 'lodash';
import { Picker, View, Text ,ScrollView, Dimensions} from 'react-native';
//import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import PersonForm from './PersonForm';
import { personUpdate, personSave, personDelete } from '../actions';
import { Card, CardSection, Confirm, Button } from './common';

class PersonEdit extends Component {
  componentWillMount() {
    _.each(this.props.person, (value, prop) => {
      this.props.personUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { imageProfile,keywords, skills,username, navigation, uid } = this.props;
    this.props.personSave({ imageProfile, keywords, skills, username ,navigation, uid: this.props.person.uid });
  }
  // onTextPress() {
  //   const { name_person,image_person,keyword_person,description_person } = this.props;
  //   //Communications.text(phone, `Your upcoming shift is on ${shift}`);
  // }

  render() {
        const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>

      <PersonForm {...this.props}/>

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
//   Fire Person
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
  const { imageProfile,keywords, username,skills } = state.personForm;
  return {imageProfile, keywords,username, skills };
};

export default connect(mapStateToProps, {
 personUpdate, personSave
})(PersonEdit);
