import React from 'react';
import {Container} from './Container';
import {ActivityIndicator} from 'react-native';
import {Text} from 'native-base';
import {colors} from '../constans/colors';

export const Loading = () => {
  return (
    <Container style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
      <Text color={colors.black}> Cargando...</Text>
    </Container>
  );
};
