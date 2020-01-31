import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: 100%;
`;

export const CategoriesContainer = styled.ScrollView`
  width: 100%;
  height: 160px;
  margin-top: 5px;
`;
