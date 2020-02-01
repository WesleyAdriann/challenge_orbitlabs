import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, Button, ScrollView, Alert} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {Container, TitleContainer, TitleText, ButtonsContainer} from './style';

import Input from '../../components/Input';

import {handleChange} from '../../store/actions/auth';
import {validEmail} from '../../utils/validEmail';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const inputs = [
    {
      label: 'Nome',
      value: user.name,
      placeholder: 'Digite seu nome',
      onChange: text => dispatch(handleChange('name', text)),
      test: user.name.match(/(\d+)/),
      erroMessage: 'O campo Nome, não pode ter numeros',
    },
    {
      label: 'Telefone',
      value: user.phone,
      placeholder: '(  )      -',
      onChange: text => dispatch(handleChange('phone', text)),
      phoneMask: true,
      test: user.phone.length < 14,
      erroMessage: 'Preencha seu telefone corretamente',
    },
    {
      label: 'Email',
      value: user.email,
      placeholder: 'email@email.com',
      onChange: text => dispatch(handleChange('email', text)),
      test: validEmail(user.email),
      erroMessage: 'O email informado é inválido',
    },
    {
      label: 'Senha',
      value: user.password,
      placeholder: '*****',
      onChange: text => dispatch(handleChange('password', text)),
      secureTextEntry: true,
      test: user.password.length < 6,
      erroMessage: 'Sua senha deve ter no minimo 6 caracteres',
    },
    {
      label: 'Confirmar Senha',
      value: user.confirmPassword,
      placeholder: '*****',
      onChange: text => dispatch(handleChange('confirmPassword', text)),
      secureTextEntry: true,
      test: user.password !== user.confirmPassword,
      erroMessage: 'As suas senhas devem iguais',
    },
  ];

  const handleSubmit = () => {
    const emptyInputs = inputs.filter(input => !input.value).map(input => input.label);
    if (emptyInputs.length) {
      return Alert.alert(
        'Erro',
        `Os campos ${emptyInputs.join(', ')} devem ser preenchidos.`,
        [{text: 'Ok'}],
      );
    }
    const errors = inputs.filter(input => input.test).map(input => input.erroMessage);
    if (errors.length) {
      return Alert.alert(
        'Erro',
        `Suas informações possuem alguns erros: \n${errors.join('; \n')}.`,
        [{text: 'Ok'}],
      );
    }
  };

  return (
    <Container colors={['#f27002', '#ff252e']}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FeatherIcons name="chevron-left" color="#fff" size={46} />
      </TouchableOpacity>
      <TitleContainer>
        <TitleText>CADASTRO</TitleText>
      </TitleContainer>
      <ScrollView>
        {inputs.map(input => (
          <Input
            label={input.label}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            phoneMask={input.phoneMask}
            secureTextEntry={input.secureTextEntry}
          />
        ))}
      </ScrollView>
      <ButtonsContainer>
        <Button title="Confirmar" color="#D06600" onPress={handleSubmit} />
      </ButtonsContainer>
    </Container>
  );
};

export default Register;
