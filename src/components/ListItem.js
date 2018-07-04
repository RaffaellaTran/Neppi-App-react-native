import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.onRowPress = this.onRowPress.bind(this);
  }
  onRowPress() {
    this.props.onItemClick(this.props.concept);
  }
  render() {
      const {width, height} = Dimensions.get('window')
    const { name_concept, description_concept, image_concept } = this.props.concept;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card>
            <CardSection>
              <View  style={{ alignItems: 'center', flexDirection: 'row', width:200}}>
                <Image style={{ width: 150, height: 150 }} source={{uri: image_concept}}/>
                <View >
                  <Text style={styles.titleStyle}>
                    {name_concept}
                  </Text>
                  <Text style={styles.descriptionStyle}>
                    {description_concept}
                  </Text>
                </View>
              </View>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  image: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white'
  },
  titleStyle: {
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 20,
    //fontFamily: 'UbuntuBold'
  },
  descriptionStyle: {
    fontSize: 18,
    marginLeft: 15,

  // fontFamily: 'UbuntuRegular'
  }
};

export default ListItem;
