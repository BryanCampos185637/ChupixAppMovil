import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorsApp} from '../helpers/colors';
import {PermissionsContext} from '../context/PermissionsContext';
import {BlackButton} from '../components';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={{color: colorsApp.negro, fontSize: 20}}>
        Esta aplicación necesita acceso a la ubicación GPS
      </Text>
      <Text style={{color: colorsApp.negro, fontSize: 20, fontWeight: 'bold'}}>
        Estado: {permissions.locationStatus}
      </Text>
      <BlackButton title="ACTIVAR GPS" onPress={askLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
