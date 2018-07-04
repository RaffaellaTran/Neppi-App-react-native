import React, { Component } from 'react';
import { Dimensions, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { requestUpdate, requestCreate } from '../actions';
import RequestForm from './RequestForm';
import { Card, CardSection, Button } from './common';

class RequestCreate extends Component {
 constructor(props) {
   super(props);
   this.state = {
     username: '',
     selected: [],
     input: ''
   };

   console.log('REQUESTCREATE:', props);
   this.onPersonPress = this.onPersonPress.bind(this);
 }


 componentDidMount() {
   this.props.requestUpdate({prop: 'selected', value: this.state.selected});
 }


  onButtonPress() {
    const {name_concept,author_concept, title, work_hours, image_request, description_request, contact, concept, navigation } = this.props;
    this.props.requestCreate({ name_concept,author_concept, title, work_hours: work_hours||1, image_request,select:this.state.selected, description_request, contact, concept, navigation, });
 console.log('cliccato',this.state.selected);
    // requestCreate(ppl: this.state.selected)
  }
  onPersonPress(username){
    this.setState({
      selected: this.state.selected.concat(username),
      //selected.push(username);
    //  input:username
    });
    //alert ('cliccato',this.state.selected)
    // check if the person is in the array (indexOf)
    // if it is --> remove from array (unselect him)
    // (newArr = this.state.selected.slice, newArr.push --> this.setState{selected: newArr})
    // if not --> add it to array
  }
  render() {
        const {width, height} = Dimensions.get('window')
    return (
      <ScrollView >
          <CardSection style={{height, marginBottom: 20}}>
        <RequestForm {...this.props} onPersonPress={this.onPersonPress}/>
            </CardSection>
            <CardSection >
            <Button onPress={this.onButtonPress.bind(this)}>
            Confirm
            </Button>
            </CardSection>
      </ScrollView>
      );
    }
  }
const mapStateToProps = (state) => {
  const {selected}=state;
  const {name_concept, author_concept,title, work_hours, image_request, description_request, contact } = state.requestForm;
  return {name_concept,author_concept, title, work_hours, image_request, description_request,selected, contact};
};

  export default connect(mapStateToProps, {
    requestUpdate, requestCreate
  })(RequestCreate);
