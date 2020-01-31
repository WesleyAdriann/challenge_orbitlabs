import React from 'react';

import {RestaurantItem, RestaurantTitle} from './style';

const Restaurant = ({ name }) => (
  <RestaurantItem>
    <RestaurantTitle>{name}</RestaurantTitle>
  </RestaurantItem>
);

export default Restaurant;
