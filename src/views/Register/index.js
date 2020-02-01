import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {Background, Container, TitleContainer, TitleText} from './style';

import Input from '../../components/Input';

import {handleChange} from '../../store/actions/auth';

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <>
      <Background colors={['#f27002', '#ff252e']} />
      <Container>
        <TouchableOpacity>
          <FeatherIcons name="chevron-left" color="#fff" size={46} />
        </TouchableOpacity>
        <TitleContainer>
          <TitleText>CADASTRO</TitleText>
        </TitleContainer>
        <View>
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
        </View>
      </Container>
    </>
  );
};

export default Register;
