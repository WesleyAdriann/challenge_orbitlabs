import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-left: 16px;
  margin-bottom: 3px;
`;

export const InputStyled = styled.TextInput`
  background-color: #fff;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
`;

export const InputStyledMask = styled(TextInputMask)`
  background-color: #fff;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
`;
