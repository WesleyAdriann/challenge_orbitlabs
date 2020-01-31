import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import {
  Container,
  CategoriesContainer,
  CategoryItem,
  CategoryOverlay,
  CategoryText,
} from './style';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {getCategories} from '../../services/api_categories';
import {getRestaurants} from '../../services/api_restaurants';

import {
  setCategories,
  setRestaurants,
  handleLoading,
} from '../../store/actions/home';

import {imagesCategories} from '../../utils/images';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.home.categories);
  const restaurants = useSelector(state => state.home.restaurants);
  const isLoading = useSelector(state => state.home.isLoading);

  useEffect(() => {
    dispatch(handleLoading(true));
    Promise.all([getCategories(), getRestaurants()])
      .then(([categories, restaurants]) => {
        dispatch(setCategories(categories));
        dispatch(setRestaurants(restaurants));
        dispatch(handleLoading(false));
      });
  }, [dispatch]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Header />
      <CategoriesContainer horizontal>
        {
          categories.map(category => (
            <CategoryItem source={imagesCategories[category.image]}>
              <CategoryText>{category.name}</CategoryText>
            </CategoryItem>
          ))
        }
      </CategoriesContainer>
    </Container>
  );
};

export default Home;
