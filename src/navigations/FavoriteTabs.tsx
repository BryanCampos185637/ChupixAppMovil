import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProductoFavoritoScreen, TiendasScreen} from '../screens';
import {Container} from '../components';
import { colors } from '../constans/colors';

const Tab = createMaterialTopTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.ligth,
        },
        tabBarPressColor: colors.grey,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="ProductoFavoritoScreen"
        component={ProductoFavoritoScreen}
        options={{
          tabBarLabel: 'Productos',
        }}
      />
      <Tab.Screen
        name="TiendasScreen"
        component={TiendasScreen}
        options={{tabBarLabel: 'Tiendas'}}
      />
    </Tab.Navigator>
  );
};

export const FavoriteTabs = () => {
  return (
    <Container>
      <Menu />
    </Container>
  );
};
