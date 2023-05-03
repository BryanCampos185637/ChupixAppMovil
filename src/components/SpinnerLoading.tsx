import React from 'react';

import {Center, Text} from 'native-base';
import * as Progress from 'react-native-progress';

import {useAppStore} from '../hooks';
import {colors} from '../constans/colors';

export const SpinnerLoading = () => {
  const {stateApp} = useAppStore();
  return stateApp === 'cargando' ? (
    <Center >
      <Progress.Circle
        size={50}
        indeterminate={true}
        showsText={true}
        thickness={10}
      />
      <Text color={colors.grey}>Cargando...</Text>
    </Center>
  ) : null;
};
