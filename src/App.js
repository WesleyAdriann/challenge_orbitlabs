import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';

import 'react-native-gesture-handler';

import store from './store';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>init</Text>
    </View>
  </Provider>
);

export default App;
