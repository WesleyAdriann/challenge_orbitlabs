import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './views/Login';
import Register from './views/Register';

import Home from './views/Home';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      path: 'Login',
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      path: 'Register',
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'Home',
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = createSwitchNavigator(
  {
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(Routes);
