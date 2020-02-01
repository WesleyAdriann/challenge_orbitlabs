import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Button, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  TitleContainer,
  TitleText,
  ForgotPassword,
  ForgotPasswordText,
  ButtonsContainer,
  RegisterText,
} from './style';

import Input from '../../components/Input';
import Loading from '../../components/Loading';

import {validEmail} from '../../utils/validEmail';
import {handleChange, handleLoading, setUsers, clearInputs} from '../../store/actions/auth';
import {setUser} from '../../store/actions/home';
import {getItem} from '../../services/storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const users = useSelector(state => state.auth.users);
  const isLoading = useSelector(state => state.auth.isLoading);

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
      label: 'Senha',
      value: user.password,
      placeholder: '****',
      onChange: text => dispatch(handleChange('password', text)),
      secureTextEntry: true,
      test: user.password.length < 6,
      erroMessage: 'Sua senha deve ter no minimo 6 caracteres',
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
    if (!usedEmail) {
      return Alert.alert('Erro', 'Usuario não cadastrado', [
        {text: 'Ok'},
        {
          text: 'Me cadastrar',
          onPress: () => navigation.push('Register'),
        },
      ]);
    }
    if (usedEmail.password === user.password) {
      dispatch(setUser(usedEmail));
      dispatch(clearInputs());
      Alert.alert('Bem-Vindo', `Bem-Vindo ${usedEmail.name}`, [
        {text: 'Ok', onPress: () => navigation.push('Home')},
      ]);
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos', [
        {text: 'Ok'},
        {
          text: 'Recuperar senha',
          onPress: () => navigation.push('ForgotPassword'),
        },
      ]);
    }
  };

  useEffect(() => {
    dispatch(handleLoading(true));
    getItem('users')
      .then(registeredUser => {
        dispatch(setUsers(registeredUser));
      })
      .catch(err => {
        if (err.message !== 'item not exist') {
          Alert.alert(
            'Erro',
            'Ops... ocorreu um erro ao carregar os usuarios, tente novamente',
            [{text: 'Ok'}],
          );
        }
      })
      .finally(() => {
        dispatch(handleLoading(false));
      });
  }, [dispatch]);

  return (
    <Container colors={['#f27002', '#ff252e']}>
      <Loading isLoading={isLoading} />
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Ionicons name="md-close" color="#fff" size={46} />
      </TouchableOpacity>
      <TitleContainer>
        <TitleText>LOGIN</TitleText>
      </TitleContainer>
      <View>
        {inputs.map(input => (
          <Input
            key={input.label}
            value={input.value}
            label={input.label}
            onChange={input.onChange}
            placeholder={input.placeholder}
            secureTextEntry={input.secureTextEntry}
          />
        ))}
        <ForgotPassword onPress={() => navigation.push('ForgotPassword')}>
          <ForgotPasswordText>ESQUECI MINHA SENHA</ForgotPasswordText>
        </ForgotPassword>
      </View>
      <ButtonsContainer>
        <Button title="Confirmar" color="#D06600" onPress={handleSubmit} />
        <TouchableOpacity onPress={() => navigation.push('Register')}>
          <RegisterText>ME CADASTRAR</RegisterText>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};

export default Login;
