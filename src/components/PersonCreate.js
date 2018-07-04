import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { personUpdate, personCreate, personsFetch } from '../actions';
import PersonForm from './PersonForm';
import { CardSection, Button } from './common';

class PersonCreate extends Component {
constructor(props) {
  super(props);
     this.state = {
        selected: [],
        skill:''
     }
  console.log('personCreate', props);
     this.onSkillPress = this.onSkillPress.bind(this);
}
componentDidMount() {
  this.props.personUpdate({prop: 'selected', value: this.state.selected});
}
  onButtonPress() {
    const { uid, imageProfile, keywords, skills, username , navigation } = this.props;
    this.props.personCreate({ uid, imageProfile, keywords, skills: this.state.selected, username, navigation });
    console.log('cliccato',this.state.selected);
  }
  onSkillPress(skill){
    this.setState({
      selected: this.state.selected.concat(skill),
      //selected.push(username);

    });
  }
  render() {
    return (
      <View>
        <PersonForm {...this.props} onSkillPress={this.onSkillPress}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </View>
      );
    }
  }

const mapStateToProps = (state) => {
  const {selected}=state;
  const { imageProfile, keywords, skills, username  } = state.personForm;
  return { imageProfile, keywords, username, skills, selected };
};

  export default connect(mapStateToProps, {
    personUpdate, personCreate, personsFetch
  })(PersonCreate);
