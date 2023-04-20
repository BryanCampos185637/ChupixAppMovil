import React, {useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {StyleSheet} from 'react-native';
import {IonIcon} from './IonIcon';
import { getUrlImageRandom } from '../helpers/getUrlImageRandom';

export const CardTienda = () => {

  const isFavorite = (): boolean => {
    return Math.floor(Math.random() * 3) % 2 == 0;
  };

  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      backgroundColor={colors.white}
      marginTop={3}
      style={styles.container}
      padding={3}
      borderRadius={10}>
      <TouchableOpacity style={styles.icon}>
        <IonIcon
          name={isFavorite() ? 'heart-outline' : 'heart'}
          color={colors.black}
        />
      </TouchableOpacity>
      <Box flex={1} marginRight={5}>
        <Image
          borderRadius={10}
          source={{
            uri: getUrlImageRandom(),
          }}
          alt="Alternate Text"
          size="xl"
        />
      </Box>
      <Box flex={2}>
        <Text color={colors.black} fontSize={'2xl'}>
          Tienda
        </Text>
        <Text color={colors.black} fontSize={'md'}>
          <IonIcon size={16} color={colors.black} name="location" />
          Direccion Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <Text color={colors.black} fontSize={'md'}>
          <IonIcon size={16} color={colors.black} name="call" />
          +503 70599924
        </Text>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <IonIcon size={16} color={colors.grey} name="logo-facebook" />
          <IonIcon size={16} color={colors.grey} name="logo-instagram" />
          <IonIcon size={16} color={colors.grey} name="logo-twitter" />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  icon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
