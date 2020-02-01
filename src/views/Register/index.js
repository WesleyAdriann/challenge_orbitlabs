import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Button, ScrollView} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {
  Background,
  Container,
  TitleContainer,
  TitleText,
  ButtonsContainer,
} from './style';

import Input from '../../components/Input';

import {handleChange} from '../../store/actions/auth';

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <Container colors={['#f27002', '#ff252e']}>
      <TouchableOpacity>
        <FeatherIcons name="chevron-left" color="#fff" size={46} />
      </TouchableOpacity>
      <TitleContainer>
        <TitleText>CADASTRO</TitleText>
      </TitleContainer>
      <ScrollView>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={user.name}
          onChange={text => dispatch(handleChange('name', text))}
        />
        <Input
          label="Telefone"
          placeholder="(  )      -     "
          value={user.phone}
          onChange={text => dispatch(handleChange('phone', text))}
          phoneMask
        />
        <Input
          label="Email"
          placeholder="email@email.com"
          value={user.email}
          onChange={text => dispatch(handleChange('email', text))}
        />
        <Input
          label="Senha"
          placeholder="*****"
          value={user.password}
          onChange={text => dispatch(handleChange('password', text))}
          secureTextEntry
        />
        <Input
          label="Confirmar Senha"
          placeholder="*****"
          value={user.confirmPassword}
          onChange={text => dispatch(handleChange('confirmPassword', text))}
          secureTextEntry
        />
      </ScrollView>
      <ButtonsContainer>
        <Button title="Confirmar" color="#D06600" />
      </ButtonsContainer>
    </Container>
  );
};

export default Register;
