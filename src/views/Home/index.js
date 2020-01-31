import React from 'react';
import {Text} from 'react-native';

import {Container} from './style';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

const Home = () => (
  <Container>
    <Loading status />
    <Header />
    <Text>Home</Text>
  </Container>
);

export default Home;
