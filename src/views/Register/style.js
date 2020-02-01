import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Background = styled(LinearGradient)`
  width: ${width}px;
  height: 100%;
  padding: 15px 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Container = styled.ScrollView`
  width: ${width}px;
  height: 100%;
  padding: 15px 20px;
`;

export const TitleContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'Roboto';
`;
