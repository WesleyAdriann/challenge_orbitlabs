import React from 'react';
import {Text} from 'react-native';

import {Container} from './style';

import Header from '../../components/Header';

import data from '../../utils/restaurants.json';

const Home = () => (
  <Container>
    {console.log(data.categories)}
    <Header />
    <Text>Home</Text>
  </Container>
);

export default Home;
