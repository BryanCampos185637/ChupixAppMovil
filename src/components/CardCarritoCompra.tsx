import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {StyleSheet} from 'react-native';
import {IonIcon} from './IonIcon';
import {Compra} from '../interfaces/Compra';
import {useCartStore} from '../hooks';
interface Props {
  compra: Compra;
}

export const CardCarritoCompra = (model: Props) => {
  const {compra} = model;
  const {onEliminarDeCarrito} = useCartStore();

  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      backgroundColor={colors.white}
      marginTop={3}
      style={styles.container}
      padding={3}
      borderRadius={10}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => onEliminarDeCarrito(compra.idProducto)}>
        <IonIcon name="close" color={colors.black} />
      </TouchableOpacity>
      <Box flex={1} marginRight={5}>
        <Image
          borderRadius={10}
          source={{
            uri: compra.urlImage,
          }}
          alt={compra.nombreProducto}
          size="xl"
        />
      </Box>
      <Box flex={2}>
        <Text color={colors.black} fontSize={'2xl'}>
          {compra.nombreProducto}
        </Text>
        <Text color={colors.black} fontSize={'sm'}>
          {compra.presentacion}
        </Text>
        <Text color={colors.black} fontSize={'sm'}>
          Total: {compra.totalProducto}
        </Text>
        <Text color={colors.black} fontSize={'sm'}>
          Precio: ${compra.precioActual.toFixed(2)}
        </Text>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          SubTotal: ${compra.subTotal.toFixed(2)}
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
