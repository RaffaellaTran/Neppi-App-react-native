import React, { Component } from 'react';
import { Picker, ScrollView, View, Text,Image } from 'react-native';
import { connect } from 'react-redux';
import { requestUpdate } from '../actions';
import { CardSection, Input } from './common';
import PeopleListWrapper from '../screens/PeopleListWrapper';

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work_hours: 1,

    };
  }

  componentDidMount() {
    this.props.requestUpdate({prop: 'name_concept', value: this.props.concept.concept.name_concept});
      this.props.requestUpdate({prop: 'author_concept', value: this.props.concept.person.username});
      this.props.requestUpdate({prop: 'image_request', value: this.props.concept.concept.image_concept});
  }

  render() {
    return (
      <ScrollView>
      <CardSection >
      <Input
      label='From'
      value={this.props.concept.person.username}
      edit={false}
      />
      </CardSection>
      <CardSection>
      <Text style={styles.textLabel}>To:</Text>
      <ScrollView >
          <PeopleListWrapper navigation={this.props.navigation} onPersonPress={this.props.onPersonPress} />
          </ScrollView >
      </CardSection>

      <CardSection >
      <Input
      label='Concept'

      value={this.props.concept.concept.name_concept}
      edit={false}
      />
      </CardSection>

      <CardSection>
      <Input
      label='Title'
      placeholder=''
      value={this.props.title}
      onChangeText={value => this.props.requestUpdate({ prop: 'title', value })}
      />
      </CardSection>
      <CardSection>
      <Input
      label='Description'
      placeholder='Write a short description'
      value={this.props.description_request}
      multiLine={true}
      numbLine={10}
      onChangeText={value => this.props.requestUpdate({ prop: 'description_request', value })}
      />
      </CardSection>

      <CardSection style={styles.container}>
      <Text style={{  fontSize: 16,
        paddingLeft: 20}}>Hours</Text>
      <Picker
      selectedValue={this.props.work_hours}
      style={{ flex: 1 }}
      onValueChange={value => this.props.requestUpdate({ prop: 'work_hours', value })}
      >
      <Picker.Item label='1.0' value='1.0' />
      <Picker.Item label='1.2' value='1.2' />
      <Picker.Item label='1.4' value='1.4' />
      <Picker.Item label='2.0' value='2.0' />
      <Picker.Item label='2.2' value='2.2' />
      <Picker.Item label='2.4' value='2.4' />
      <Picker.Item label='3.0' value='3.0' />
      <Picker.Item label='3.2' value='3.2' />
      <Picker.Item label='3.4' value='3.4' />
      <Picker.Item label='4.0' value='4.0' />
      <Picker.Item label='4.2' value='4.2' />
      <Picker.Item label='4.4' value='4.4' />
      <Picker.Item label='5.0' value='5.0' />
      <Picker.Item label='5.2' value='5.2' />
      <Picker.Item label='5.4' value='5.4' />
      <Picker.Item label='6.0' value='6.0' />
      <Picker.Item label='6.2' value='6.2' />
      <Picker.Item label='6.4' value='6.4' />
      <Picker.Item label='7.0' value='7.0' />
      <Picker.Item label='7.2' value='7.2' />
      <Picker.Item label='7.4' value='7.4' />
      <Picker.Item label='8.0' value='8.0' />
      <Picker.Item label='8.2' value='8.2' />
      <Picker.Item label='8.4' value='8.4' />
      <Picker.Item label='9.0' value='9.0' />
      <Picker.Item label='9.2' value='9.2' />
      <Picker.Item label='9.4' value='9.4' />
      <Picker.Item label='10.0' value='10.0' />
      </Picker>
        </CardSection>

        </ScrollView>
      );
    }
  }

  const styles = {
    container: {

      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      height: 180

    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      //  fontFamily: 'UbuntuRegular'
    },
    textLabel: {
      //  fontFamily: 'UbuntuRegular'
    }
  };

  const mapStateToProps = (state) => {
    const { name_concept, author_concept,title, work_hours, image_request, description_request, contact } = state.requestForm;
    return { name_concept,author_concept, title, work_hours, image_request, description_request, contact };
  };

  export default connect(mapStateToProps, { requestUpdate })(RequestForm);
