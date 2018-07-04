import React, { Component } from 'react';
import { Picker, ScrollView,CheckBox, Dimensions,Text, Slider,Image, ListView , View, Switch, AppState} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as firebase from 'firebase';
import { ratingConceptFormUpdate,ratingConceptFetch } from '../actions';
import { CardSection, Input, MenuTopDown, SliderComponent,Button } from './common';
import { MenuProvider } from 'react-native-popup-menu';

class RatingConceptForm extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange= this.handleAppStateChange.bind(this);
    this.state = {
      slider_valueRating: 1,
      checkRating: false,
      valueRating: 0,
      SwitchOnValueHolder :  false,
    };
    console.log('RATINGCONCEPT',props.concept.concept.concept.concept.cid);
  }

  componentWillMount() {
  //  this.props.ratingConceptFetch();
  //  this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
  //  this.createDataSource(nextProps);
  }


  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
     this.props.ratingConceptUpdate({prop: 'description_conceptRating', value: this.props.concept.concept.concept.concept.description_concept});
     this.props.ratingConceptUpdate({prop: 'author_conceptRating', value: this.props.concept.concept.concept.concept.author_concept});
     this.props.ratingConceptUpdate({prop: 'reviewer_conceptRating', value: this.props.concept.concept.concept.person.username});
     this.props.ratingConceptUpdate({prop: 'cid_conceptRating', value: this.props.concept.concept.concept.concept.cid});
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  handleAppStateChange(appState){
    this.setState({
      SwitchOnValueHolder: appState
    })
  }

    // createDataSource({ ratingConcepts }) {
    //   const ds = new ListView.DataSource({
    //     rowHasChanged: (r1, r2) => r1 !== r2
    //   });
    //   this.dataSource = ds.cloneWithRows(ratingConcepts);
    // }

      //  alert('value: '+ this.state.check)

    // getItems(itemsRef){
    //   this.setState({
    //     itemDataSou
    //   })
    // }
    // change(value) {
    //   this.setState(() => {
    //     return {
    //       value: parseFloat(value),
    //     };
    //   });
    // }
    render() {
        const {width, height} = Dimensions.get('window')
      //const {value} = this.state;
      return (
        <ScrollView>
        <View  style={{ alignItems: 'center', flexDirection: 'row', width:200}}>
          <Image style={{ width, height: 200 }} source={{uri: this.props.concept.concept.concept.concept.image_concept}}/>
          </View >
        <CardSection>
        <Input
        label='From'
        value={this.props.concept.concept.concept.person.username}
        // onChangeText={value => this.props.ratingConceptUpdate({ prop: 'author_conceptRating', value })}
        edit={false}
        />
        </CardSection>
        <CardSection>
        <Input
        label='Author'
        value={this.props.concept.concept.concept.concept.author_concept}
        // onChangeText={value => this.props.ratingConceptUpdate({ prop: 'author_conceptRating', value })}
        edit={false}
        />
        </CardSection>
        <CardSection>
        <Input
        label='Concept'
        value={this.props.concept.concept.concept.concept.name_concept}
        // onChangeText={value => this.props.ratingConceptUpdate({ prop: 'name_conceptRating', value })}
        edit={false}
        />
        </CardSection>

        <CardSection>
        <Input
        label='Description'
        multiLine={true}
        numbLine= {10}
        value={this.props.concept.concept.concept.concept.description_concept}
        // onChangeText={value => this.props.ratingConceptUpdate({ prop: 'description_conceptRating', value })}
        edit={false}
        />
        </CardSection>

        { !this.state.SwitchOnValueHolder && <CardSection>
          <View style={styles.container}>
          <Slider
          step={0.1}
          minimumValue={1}
          maximumValue={5}
          value={this.state.slider_valueRating}
          onValueChange={value => this.props.ratingConceptUpdate({ prop: 'slider_valueRating', value })}
          />
          <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-between'}}>
          <Text style={styles.text}>pass</Text>
          <Text style={styles.text}>good</Text>
          <Text style={styles.text}>great</Text>
          </View>
          </View>
          </CardSection>}

          <CardSection  style={styles.switch}>

          <Text style={styles.textSwitch}>Leave comment</Text>
          <Switch
          onValueChange={(value) => {this.handleAppStateChange(value),this.props.ratingConceptUpdate({ prop: 'checkRating', value })}}
          value={this.state.SwitchOnValueHolder}
          />

          </CardSection>
          {this.state.SwitchOnValueHolder &&

            <CardSection>
            <Input
            label="Comment:"
            placeholder="Write a short comment"
            value={this.props.comment_ratingConcept}
            multiLine={true}
            numbLine={10}
            onChangeText={value => this.props.ratingConceptUpdate({ prop: 'comment_ratingConcept', value })}
            />
            </CardSection>

          }
          </ScrollView>

    );
  }
}
// edit={false}
const styles = {

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  //  fontFamily: 'UbuntuRegular'
  },
  textLabel:{
      //fontFamily: 'UbuntuRegular'
      fontSize: 20
  },
  textSwitch:{
    fontSize:20,
    marginTop:5
  },
  switch: {
      justifyContent: 'space-between'
  }
};

const mapStateToProps = (state) => {
  const { name_conceptRating,cid_conceptRating,author_conceptRating,reviewer_conceptRating, description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating } = state.ratingConceptForm;
  const ratingConcepts = _.map(state.ratingConcepts, (val, uid) => {
    return { ...val, uid };
  });
  return { name_conceptRating, cid_conceptRating,author_conceptRating,reviewer_conceptRating,description_conceptRating, comment_ratingConcept, slider_valueRating, checkRating};
};

export default connect(mapStateToProps, { ratingConceptFormUpdate, ratingConceptFetch})(RatingConceptForm);
