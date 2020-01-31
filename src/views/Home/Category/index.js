import React from 'react';

import {CategoryItem, CategoryText} from './style';

import {imagesCategories} from '../../../utils/images';

const Category = ({image, name}) => (
  <CategoryItem source={imagesCategories[image]} key={name}>
    <CategoryText>{name}</CategoryText>
  </CategoryItem>
);

export default Category;
