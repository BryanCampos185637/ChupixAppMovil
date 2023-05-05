import {Text, View} from 'native-base';
import React from 'react';
import {colors} from '../constans/colors';

interface Props {
  titulo: string;
  children: JSX.Element | JSX.Element[];
}
export const ContainerHome = ({titulo, children}: Props) => {
  return (
    <View backgroundColor={colors.brown} marginBottom={2}>
      <Text
        color={colors.white}
        fontSize={'3xl'}
        fontWeight={'bold'}
        marginLeft={2}>
        {titulo}
      </Text>
      {children}
      <View height={1} />
    </View>
  );
};
