import styled from 'styled-components/native';

export const RestaurantItem = styled.View`
  border-top-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const RestaurantTitle = styled.Text`
  color: #d06600;
  font-size: 20px;
`;

export const RestaurantText = styled.Text`
  color: #717171;
  font-size: 12px;
`;

export const RestaurantInformation = styled.View`
  flex-grow: 1;
`;

export const Informations = styled.View`
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InformationsText = styled(RestaurantText)`
  width: 50%;
  flex-grow: 1;
  margin: 5px 0;
  font-size: 12px;
`;

export const RestaurantImage = styled.Image`
  width: 100px;
  height: 80px;
  margin-right: 10px;
`;

export const RatingIcon = styled.View`
  border-radius: 10px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.rating};
  justify-content: center;
  align-items: center;
`;

export const RatingText = styled.Text`
  color: #fff;
`;
