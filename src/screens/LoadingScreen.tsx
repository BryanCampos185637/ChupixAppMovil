import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colorsApp} from '../helpers/colors';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={colorsApp.negro} />
      <Text style={{color: colorsApp.negro}}>Cargando</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.blanco,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
