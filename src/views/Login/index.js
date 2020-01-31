import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, TitleContainer, TitleText, ButtonsContainer} from './style';

import Input from '../../components/Input';

import {handleChange} from '../../store/actions/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  console.log(user);
  return (
    <Container colors={['#f27002', '#ff252e']}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Ionicons name="md-close" color="#fff" size={46} />
      </TouchableOpacity>
      <TitleContainer>
        <TitleText>LOGIN</TitleText>
      </TitleContainer>
      <View>
        <Input
          value={user.email}
          label="Email"
          onChange={text => dispatch(handleChange('email', text))}
          placeholder="email@email.com"
        />
        <Input
          value={user.password}
          onChange={text => dispatch(handleChange('password', text))}
          label="Senha"
          placeholder="*****"
          secureTextEntry
        />
      </View>
      <ButtonsContainer>
        <Text>Confirmar</Text>
        <Text>Cadastrar</Text>
      </ButtonsContainer>
    </Container>
  );
};

export default Login;
