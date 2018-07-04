import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class RequestListItem extends Component {

  constructor(props) {
    super(props);
    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    this.props.onItemClick(this.props.request);
  }

  render() {
    const { title } = this.props.request;
    return (
      <TouchableOpacity onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
            Request:  {title}
            </Text>
          </CardSection>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default RequestListItem;
