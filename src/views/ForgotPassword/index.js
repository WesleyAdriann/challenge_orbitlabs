import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {handleChange, setUsers, clearInputs} from '../../store/actions/auth';

import {Container, TitleText, TitleContainer, ButtonsContainer} from './style';
import Input from '../../components/Input';

import {validEmail} from '../../utils/validEmail';
import {setItem} from '../../services/storage';

const ForgotPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const users = useSelector(state => state.auth.users);

  const inputs = [
    {
      label: 'Email',
      value: user.email,
      placeholder: 'email@email.com',
      onChange: text => dispatch(handleChange('email', text)),
      test: validEmail(user.email),
      erroMessage: 'O email informado é inválido',
    },
    {
      label: 'Nova Senha',
      value: user.password,
      placeholder: '*****',
      onChange: text => dispatch(handleChange('password', text)),
      secureTextEntry: true,
      test: user.password.length < 6,
      erroMessage: 'Sua senha deve ter no minimo 6 caracteres',
    },
    {
      label: 'Confirmar Nova Senha',
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
    const [usedEmail] = users.filter(registeredUser => registeredUser.email === user.email);
    if (usedEmail) {
      const newUsers = [...users];
      const index = newUsers.indexOf(usedEmail);
      newUsers[index] = {
        ...newUsers[index],
        password: user.password,
        confirmPassword: user.confirmPassword,
      };
      setItem('users', newUsers)
        .then(() => {
          dispatch(setUsers(newUsers));
          dispatch(clearInputs());
          Alert.alert('Sucesso', 'Sua senha foi alterada com sucesso', [
            {
              text: 'Ok',
              onPress: () => navigation.push('Login'),
            },
          ]);
        })
        .catch(() => {
          Alert.alert(
            'Erro',
            'Ops... Ocorreu um erro inesperado, tente novamente.',
            [{text: 'Ok'}],
          );
        });
    } else {
      Alert.alert('', 'Email não registrado.', [
        {text: 'Ok'},
        {
          text: 'Me cadastrar',
          onPress: () => navigation.push('Register'),
        },
      ]);
    }
  };

  return (
    <Container colors={['#f27002', '#ff252e']}>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <FeatherIcons name="chevron-left" color="#fff" size={46} />
      </TouchableOpacity>
      <TitleContainer>
        <TitleText>RECUPERAR CONTA</TitleText>
      </TitleContainer>
      <ScrollView>
        {inputs.map(input => (
          <Input
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            onChange={input.onChange}
            secureTextEntry={input.secureTextEntry}
            value={input.value}
          />
        ))}
      </ScrollView>
      <ButtonsContainer>
        <Button title="Confirmar" color="#D06600" onPress={handleSubmit} />
      </ButtonsContainer>
    </Container>
  );
};

export default ForgotPassword;
