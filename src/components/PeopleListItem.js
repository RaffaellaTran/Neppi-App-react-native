import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class PeopleListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      username:''
        }
    //this.onPersonPress = this.onPersonPress.bind(this);

    console.log('PEOPLE', props.person);
  }

//    onPersonPress(username) {
//      let newInput=this.props.person.username;
//   this.setState({ username: newInput }, () => {
//   this.props.onPersonPress(newInput);
// })
// console.log('USERNAME:', this.props.person.username);
// }
  // //  this.props.onItemClick(this.props.person);
  //   // call onPersonPress function here
  //   this.props.onPersonPress;
  //   //console.log('NAME: ',this.props.person.username);
  // }
  render() {
      const {width, height} = Dimensions.get('window')
    const { username, keywords, skills } = this.props.person;
    return (
      <TouchableOpacity onPress={ ()=>{this.props.onPersonPress(this.props.person.username)}}>
        <View>
          <Card>
            <CardSection>
              <View  style={{ alignItems: 'center', flexDirection: 'row', width:200}}>
                {this.props.person.imageProfile?
                  <Image style={{ borderRadius: 25, width: 50, height: 50,  }} source={{uri: this.props.person.imageProfile}}/>
                : <Image style={{ borderRadius: 25, width: 50, height: 50, backgroundColor: 'red'}} />}
                <View >
                  <Text style={styles.titleStyle}>
                    {username}
                  </Text>
                  <View >
                  <Text style={styles.descriptionStyle}>
                    {skills}
                  </Text>
                  <Text style={styles.descriptionStyle}>
                    {keywords}
                  </Text>
                  </View>
                </View>
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  image: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: 'white'
  },
  titleStyle: {
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 10,
    //fontFamily: 'UbuntuBold'
  },
  descriptionStyle: {
    fontSize: 14,
    marginLeft: 15,

  // fontFamily: 'UbuntuRegular'
  }
};

export default PeopleListItem;
