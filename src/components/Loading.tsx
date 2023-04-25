import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box, Text} from 'native-base';
import {colors} from '../constans/colors';
import {Container} from './Container';

export const Loading = () => {
  return (
    <Container>
      <Box justifyContent={'center'} alignItems={'center'}>
        <ActivityIndicator />
        <Text color={colors.black}> Cargando...</Text>
      </Box>
    </Container>
  );
};
