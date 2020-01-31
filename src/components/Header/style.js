import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';

export const Container = styled(LinearGradient)`
  height: 80px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'Roboto Regular';
  color: #fff;
  font-size: 26px;
`;

export const OcticonsStyled = styled(Octicons)`
  transform: rotate(90deg);
`;
