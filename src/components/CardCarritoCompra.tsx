import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {StyleSheet} from 'react-native';
import {IonIcon} from './IonIcon';
import {getUrlImageRandom} from '../helpers/getUrlImageRandom';

export const CardCarritoCompra = () => {
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
        <IonIcon name="close" color={colors.black} />
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
      <Box flex={2} >
        <Text color={colors.black} fontSize={'2xl'}>
          Nombre artículo
        </Text>
        <Text color={colors.black} fontSize={'sm'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          $18.00
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
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
    right: 5,
    top: 5,
  },
});
