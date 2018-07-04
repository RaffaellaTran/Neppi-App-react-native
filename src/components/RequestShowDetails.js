import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Picker, ScrollView, Text, Dimensions, Image } from 'react-native';
import { requestUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import RatingListWrapper from '../screens/RatingListWrapper';
import RatingCreateWrapper from '../screens/RatingCreateWrapper';

class RequestShowDetails extends Component {
  state={ showModal: false };
  componentWillMount() {
    _.each(this.props.request, (value, prop) => {
      this.props.requestUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name_concept,author_concept, title, work_hours, image_request, description_request, contact, navigation } = this.props;
    this.props.requestCreate({ name_concept, author_concept,title, work_hours, image_request, description_request, contact, navigation });
  }

  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <ScrollView>
        <CardSection >
          <Image
            style={{ width: width-30, height:200, marginLeft: 10 }}
            source={require('Neppi/assets/images/waterfall.jpg')}
          />
        </CardSection>
        <CardSection >
          <Text style={styles.title}>Name request: {this.props.request.name_concept}</Text>
        </CardSection>
        <CardSection >
          <Text style={styles.description}>Title: {this.props.request.title}</Text>
        </CardSection>
        <CardSection >
          <Text style={styles.description}>
            Description: {this.props.request.description_request}
          </Text>
        </CardSection>
        <CardSection >
          <Text style={styles.description}>Work hours: {this.props.request.work_hours}</Text>
        </CardSection>
        <CardSection>
        <Text style= {styles.title}> Evaluation </Text>
          </CardSection>
        <CardSection>
          <RatingListWrapper navigation={this.props.navigation}/>
        </CardSection>
        <Button onPress={() => this.props.navigation.navigate('RatingCreateWrapper', request={request:this.props.request} )}>
        <Text>Evaluation Concept</Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = {
  title: {
    fontSize: 25,
    alignSelf: 'center',
    paddingVertical: 20,
    backgroundColor:'#fff',
    flex:1
  },
  description: {
    fontSize: 18,
  }
};

const mapStateToProps = (state) => {
  const { name_concept, author_concept,title, work_hours, image_request, description_request, contact } = state.requestForm;
  return { name_concept,author_concept, title, work_hours, image_request, description_request, contact };
};

export default connect(mapStateToProps, {
  requestUpdate
})(RequestShowDetails);
