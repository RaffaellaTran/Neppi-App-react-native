import React, { Component } from 'react';
import { ScrollView, Text, Slider, Image, ListView, Switch, View, AppState } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ratingFormUpdate, ratingFetch } from '../actions';
import { CardSection, Input } from './common';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      slider_value: 1,
      check: false,
      value: 0,
      SwitchOnValueHolder: false,
    };
  }

  componentWillMount() {
    this.props.ratingFetch();
    this.createDataSource(this.props);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.props.ratingUpdate({ prop: 'request_title', value: this.props.request.title });
    this.props.ratingUpdate({ prop: 'request_description', value: this.props.request.description_request });
    this.props.ratingUpdate({ prop: 'request_hours', value: this.props.request.work_hours });
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    this.setState({
      SwitchOnValueHolder: appState
    });
  }

    createDataSource({ ratings }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(ratings);
    }

    render() {
      return (
        <ScrollView>

        <CardSection>
        <View style={{ flex:1, alignItems: 'center', flexDirection: 'row' }}>
        <Input
        label="From"
          value={this.props.request.author_concept}
        />
        </View>
        </CardSection>
        <CardSection>
        <Input
        label="To"
          value={this.props.request.select[0]}
        />
        </CardSection>
        <CardSection>
        <Input
        label='Title'
        placeholder=''
        value={this.props.request.title}
        />
        </CardSection>
        <CardSection>
        <Input
        label='Description'
        placeholder=''
        value={this.props.request.description_request}
        multiLine={true}
        numbLine={10}
        />
        </CardSection>

        <CardSection>
        <Input
        label='Hours'
        placeholder=''
        value={this.props.request.work_hours}
        multiLine
        numbLine={10}
        />
        </CardSection>

        { !this.state.SwitchOnValueHolder && <CardSection>
          <View style={styles.container}>
          <Slider
          step={0.1}
          minimumValue={1}
          maximumValue={5}
          value={this.state.slider_value}
          onValueChange={value => this.props.ratingUpdate({ prop: 'slider_value', value })}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>pass</Text>
          <Text style={styles.text}>good</Text>
          <Text style={styles.text}>great</Text>
          </View>
          </View>
          </CardSection>}


          <CardSection style={styles.switch}>
          <Text style={styles.textSwitch}>need more work</Text>
          <Switch
          onValueChange={
            (value) => {this.handleAppStateChange(value),
              this.props.ratingUpdate({ prop: 'check', value });
            }}
          value={this.state.SwitchOnValueHolder}
          />

          </CardSection>
          {this.state.SwitchOnValueHolder &&

            <CardSection>
            <Input
            label="Comment:"
            placeholder="Please specify in case the work is not passable. Write a note"
            value={this.props.comment_rating}
            multiLine={true}
            numbLine={10}
            onChangeText={value => this.props.ratingUpdate({ prop: 'comment_rating', value })}
            />
            </CardSection>

          }
          </ScrollView>
        );
      }
    }
    
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
      textLabel: {
        fontSize: 16,
        paddingLeft: 20,
        flex: 1,
        //fontFamily: 'UbuntuRegular'
      },
      textSwitch: {
        fontSize: 20,
        marginTop: 5
      },
      switch: {
          justifyContent: 'space-between'
      }
    };

    const mapStateToProps = (state) => {
      const { request_title, request_description,work_hours, comment_rating, slider_value, check } = state.ratingForm;
      const ratings = _.map(state.ratings, (val, uid) => {
        return { ...val, uid };
      });
      return { request_title, request_description,work_hours, comment_rating, slider_value, check, ratings };
    };

    export default connect(mapStateToProps, { ratingFormUpdate, ratingFetch })(RatingForm);
