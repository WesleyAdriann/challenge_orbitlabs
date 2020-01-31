import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: 100%;
`;

export const CategoriesContainer = styled.ScrollView`
  margin-top: 5px;
  flex-grow: 0;
`;

export const RestaurantsContainer = styled.ScrollView`
  flex-grow: 1;
`;
