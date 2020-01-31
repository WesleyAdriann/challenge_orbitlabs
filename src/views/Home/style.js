import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: 100%;
  background-color: #fff;
`;

export const CategoriesContainer = styled.ScrollView`
  margin-top: 5px;
  margin: 10px 15px;
  min-height: 95px;
  flex-grow: 0;
`;

export const RestaurantsContainer = styled.ScrollView`
  flex-grow: 1;
`;
