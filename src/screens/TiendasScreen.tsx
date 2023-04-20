import React from 'react';
import {CardTienda,} from '../components';
import {ScrollView, View} from 'native-base';

export const TiendasScreen = () => {
  return (
    <ScrollView>
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <CardTienda />
      <View style={{height: 80}} />
    </ScrollView>
  );
};
