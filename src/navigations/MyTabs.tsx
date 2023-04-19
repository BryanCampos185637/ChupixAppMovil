import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CarritoCompraScreen,
  HomeScreen,
  PerfilScreen,
} from '../screens';
import {Platform} from 'react-native';
import {IonIcon} from '../components';
import { FavoriteTabs } from './FavoriteTabs';
import { colors } from '../constans/colors';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName='PerfilScreen'
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow,
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          backgroundColor: colors.black, // 'rgba(255,255,255,0.82)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => <IonIcon name="home" color={color} />,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({color}) => <IonIcon name="cart" color={color} />,
        }}
        name="CarritoCompraScreen"
        component={CarritoCompraScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color}) => <IonIcon name="heart" color={color} />,
        }}
        name="FavoriteTabs"
        component={FavoriteTabs}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => <IonIcon name="person" color={color} />,
        }}
        name="PerfilScreen"
        component={PerfilScreen}
      />
    </Tab.Navigator>
  );
};
