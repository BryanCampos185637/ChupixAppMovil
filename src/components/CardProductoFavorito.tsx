import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {IonIcon} from './IonIcon';
import {getUrlImageRandom} from '../helpers/getUrlImageRandom';

export const CardProductoFavorito = () => {
  return (
    <Box
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={colors.white}
      marginX={1}
      marginY={1}
      style={styles.container}
      padding={2}
      borderRadius={10}>
      <TouchableOpacity style={styles.icon}>
        <IonIcon name={'heart'} color={colors.grey} />
      </TouchableOpacity>
      <Box flex={1}>
        <Image
          source={{
            uri: getUrlImageRandom(),
          }}
          alt="Alternate Text"
          size={150}
          borderRadius={100}
        />
      </Box>
      <Box flex={2} alignItems={'center'}>
        <Text color={colors.black} fontSize={'2xl'}>
          Nombre producto
        </Text>
        <Text color={colors.black} fontSize={'md'}>
          Restaurant
        </Text>
        <Text color={colors.black} fontSize={'2xl'}>
          $9.80
        </Text>
      </Box>
      <TouchableOpacity style={styles.btnCard} activeOpacity={0.8}>
        <Text color={colors.black} fontSize={'sm'}>
          Agregar al carrito
        </Text>
        <IonIcon name="cart" size={20} color={colors.black} />
      </TouchableOpacity>
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
  btnCard: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 25,
  },
});
