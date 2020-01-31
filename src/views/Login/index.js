import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, TitleContainer, TitleText, ButtonsContainer} from './style';

import Input from '../../components/Input';

const Login = ({navigation}) => (
  <Container colors={['#f27002', '#ff252e']}>
    <TouchableOpacity onPress={() => navigation.push('Home')}>
      <Ionicons name="md-close" color="#fff" size={46} />
    </TouchableOpacity>
    <TitleContainer>
      <TitleText>LOGIN</TitleText>
    </TitleContainer>
    <View>
      <Input
        label="Email"
        placeholder="email@email.com"
      />
    </View>
    <ButtonsContainer>
      <Text>Confirmar</Text>
      <Text>Cadastrar</Text>
    </ButtonsContainer>
  </Container>
);

export default Login;
