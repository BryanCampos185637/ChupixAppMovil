import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { colors } from '../constans/colors';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={colors.black} />
      <Text style={{color: colors.black}}>Cargando</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
