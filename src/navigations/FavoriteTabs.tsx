import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProductoFavoritoScreen, TiendasScreen} from '../screens';

const Tab = createMaterialTopTabNavigator();

export const FavoriteTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProductoFavoritoScreen"
        component={ProductoFavoritoScreen}
      />
      <Tab.Screen name="TiendasScreen" component={TiendasScreen} />
    </Tab.Navigator>
  );
};
