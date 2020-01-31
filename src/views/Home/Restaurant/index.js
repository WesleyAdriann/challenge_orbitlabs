import React from 'react';

import {
  RestaurantItem,
  RestaurantTitle,
  RestaurantImage,
  Row,
  RestaurantText,
  RestaurantInformation,
  RatingIcon,
  RatingText,
} from './style';

import {imagesRestaurants} from '../../../utils/images';

const distanceConverter = distance => {
  if (distance >= 1000) {
    return `${distance / 1000} km`;
  }
  return `${distance} m`;
};

const ratingColor = rating => {
  if (rating >= 9) {
    return '#3CCD36';
  } else if (rating >= 8) {
    return '#93CD36';
  } else if (rating >= 7) {
    return '#CBCD36';
  }
  return '#CD6136';
};

const Restaurant = ({name, image, comment, type, price, distance, neigborhood, rating}) => (
  <RestaurantItem>
    <Row>
      <RestaurantImage source={imagesRestaurants[image]} resizeMethod="scale" />
      <RestaurantInformation>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantText>{type}</RestaurantText>
        <RestaurantText>{price}</RestaurantText>
        <RestaurantText>
          {distanceConverter(parseInt(distance, 10))}
        </RestaurantText>
        <RestaurantText>{neigborhood}</RestaurantText>
      </RestaurantInformation>
      <RatingIcon rating={ratingColor(parseFloat(rating))}>
        <RatingText>{rating}</RatingText>
      </RatingIcon>
    </Row>
    <Row>
      <RestaurantText>{comment}</RestaurantText>
    </Row>
  </RestaurantItem>
);

export default Restaurant;
