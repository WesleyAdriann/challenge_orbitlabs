import React from 'react';
import {View} from 'react-native';

import {
  RestaurantItem,
  RestaurantTitle,
  RestaurantTitleText,
  RestaurantImage,
  Row,
  RestaurantText,
  RestaurantInformation,
  Informations,
  InformationsText,
  RatingIcon,
  RatingText,
} from './style';

import {imagesRestaurants} from '../../../utils/images';

const distanceConverter = distance => {
  if (distance >= 1000) {
    const distanceKm = (distance / 1000).toString().replace('.', ',');
    return `${distanceKm} km`;
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
        <RestaurantTitle>
          <RestaurantTitleText>{name}</RestaurantTitleText>
        </RestaurantTitle>
        <Informations>
          <InformationsText>{type}</InformationsText>
          <InformationsText>{'$'.repeat(price)}</InformationsText>
        </Informations>
        <Informations>
          <InformationsText>
            {distanceConverter(parseInt(distance, 10))}
          </InformationsText>
          <InformationsText>{neigborhood}</InformationsText>
        </Informations>
      </RestaurantInformation>
      <RatingIcon rating={ratingColor(parseFloat(rating))}>
        <RatingText>
          {parseFloat(rating)
            .toFixed(1)
            .toString()
            .replace('.', ',')}
        </RatingText>
      </RatingIcon>
    </Row>
    <Row>
      <RestaurantText>{comment}</RestaurantText>
    </Row>
  </RestaurantItem>
);

export default Restaurant;
