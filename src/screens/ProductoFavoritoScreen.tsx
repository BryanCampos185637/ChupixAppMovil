import React from 'react';
import {CardTienda, Container} from '../components';
import {ScrollView, Text, View} from 'native-base';
import {colors} from '../constans/colors';

export const ProductoFavoritoScreen = () => {
  return (
    <ScrollView>
    <Text color={colors.black} fontSize={'sm'}>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s
    </Text>
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <CardTienda />
    <View style={{height:80}}/>
  </ScrollView>
  );
};
