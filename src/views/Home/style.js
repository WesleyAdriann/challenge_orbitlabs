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
`;

export const CategoryItem = styled.ImageBackground`
  width: 85px;
  height: 85px;
  margin: 5px;
  align-items: center;
`;

export const CategoryText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-family: 'Roboto Regular';
`;
