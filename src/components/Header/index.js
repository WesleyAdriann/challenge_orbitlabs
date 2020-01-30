import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Container, Title, OcticonsStyled} from './style';

const Header = () => (
  <Container colors={['#D06600', '#E69A09']}>
    <MaterialIcons name="menu" size={40} color="#FFF" />
    <Title>Restaurantes</Title>
    <OcticonsStyled name="settings" size={36} color="#FFF" />
  </Container>
);

export default Header;
