import {Text, View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../constans/colors';

interface Props {
  color?: string;
  space?: number;
}

export const LoadingFlatList = ({color = colors.black, space = 100}: Props) => {
  return (
    <View flex={1} justifyContent={'center'} alignItems={'center'}>
      <ActivityIndicator />
      <Text fontSize={'sm'} color={color}>
        Cargando
      </Text>
      <View h={space} />
    </View>
  );
};
