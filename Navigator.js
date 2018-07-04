import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, TabNavigator, TabBarBottom } from 'react-navigation';
import { createReduxBoundAddListener,
         createReactNavigationReduxMiddleware
       } from 'react-navigation-redux-helpers';
import Splash from './src/screens/Splash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './src/screens/Settings';
import LoginWrapper from './src/screens/LoginWrapper';
import RegisterWrapper from './src/screens/RegisterWrapper';
import About from './src/screens/About';
import Information from './src/screens/Information';
import RatingListWrapper from './src/screens/RatingListWrapper';
import RequestCreateWrapper from './src/screens/RequestCreateWrapper';
import ConceptList from './src/components/ConceptList';
import ConceptCreateWrapper from './src/screens/ConceptCreateWrapper';
import ConceptEditWrapper from './src/screens/ConceptEditWrapper';
import ConceptShowWrapper from './src/screens/ConceptShowWrapper';
import ConceptShowDetails from './src/components/ConceptShowDetails';
import Homepage from './src/screens/Homepage';
import ProfileWrapper from './src/screens/ProfileWrapper';
import TabBar from './src/components/common/TabBar';
import RatingCreateWrapper from './src/screens/RatingCreateWrapper';
import RatingConceptCreateWrapper from './src/screens/RatingConceptCreateWrapper';
import PersonCreateWrapper from './src/screens/PersonCreateWrapper';
import PeopleListWrapper from './src/screens/PeopleListWrapper';
import PersonEditWrapper from './src/screens/PersonEditWrapper';
import RequestShowWrapper from './src/screens/RequestShowWrapper';
import RatingShowWrapper from './src/screens/RatingShowWrapper';

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);
const addListener = createReduxBoundAddListener('root');

export const Login = StackNavigator({
  Splash: { screen: Splash },
  RegisterWrapper: { screen: RegisterWrapper },
  LoginWrapper: { screen: LoginWrapper },
  PersonCreateWrapper: { screen: PersonCreateWrapper },
});
export const Home = StackNavigator({
  Homepage: { screen: Homepage, path: 'homepage/', },
  ConceptList: { screen: ConceptList },
  ConceptCreateWrapper: { screen: ConceptCreateWrapper },
  ConceptEditWrapper: { screen: ConceptEditWrapper },
  ConceptShowWrapper: { screen: ConceptShowWrapper },
  ConceptShowDetails: { screen: ConceptShowDetails },
  RequestCreateWrapper: { screen: RequestCreateWrapper },
  RatingCreateWrapper: { screen: RatingCreateWrapper },
  RatingConceptCreateWrapper: { screen: RatingConceptCreateWrapper },
  PeopleListWrapper: { screen: PeopleListWrapper },

});

export const Prof = StackNavigator({
  ProfileWrapper: { screen: ProfileWrapper },
  RatingListWrapper: { screen: RatingListWrapper },
    PersonEditWrapper: { screen: PersonEditWrapper },
    RequestShowWrapper: { screen: RequestShowWrapper },
    RatingShowWrapper: { screen: RatingShowWrapper }
});

export const Sett = StackNavigator({
  Settings: { screen: Settings },
  About: { screen: About },
  Information: { screen: Information }
});

export const Navigator = new StackNavigator({
  loginFlow: { screen: Login },
  mainFlow: {
    screen: TabNavigator({
      Homepage: { screen: Home },
      Profile: { screen: Prof },
      Settings: { screen: Sett }
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;

          if (routeName === 'Homepage') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
            md = 'md-home';
          } else if (routeName === 'Profile') {
            iconName = `ios-person${focused ? '' : '-outline'}`;
            md = 'md-person';
          } else if (routeName === 'Settings') {
            iconName = `ios-settings${focused ? '' : '-outline'}`;
            md = 'md-settings';
          }

          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#0000ff',
        inactiveTintColor: 'gray',
        showLabel: false,
        labelStyle: {
          fontSize: 19,
        },
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
    }
  )
}
}, { headerMode: 'none' });

class Nav extends Component {
  render() {
    return (
      <Navigator
      navigation={
        addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener,
        }
      )
    }
      />
  );
}
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(Nav);
