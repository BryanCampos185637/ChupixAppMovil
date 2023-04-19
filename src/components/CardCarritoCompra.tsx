import React, { useRef } from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {StyleSheet} from 'react-native';
import {IonIcon} from './IonIcon';

export const CardCarritoCompra = () => {

  const urlImg = useRef('https://picsum.photos/300/300')
  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      backgroundColor={colors.white}
      marginTop={3}
      style={styles.container}
      padding={5}
      borderRadius={10}>
      <TouchableOpacity style={styles.icon}>
        <IonIcon name="close" color={colors.black} />
      </TouchableOpacity>
      <Box flex={1} marginRight={5}>
        <Image
          borderRadius={10}
          source={{
            uri: urlImg.current,
          }}
          alt="Alternate Text"
          size="xl"
        />
      </Box>
      <Box flex={2}>
        <Text color={colors.black} fontSize={'4xl'}>
          Nombre artículo
        </Text>
        <Text color={colors.black} fontSize={'sm'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
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
