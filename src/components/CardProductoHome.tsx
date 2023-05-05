import React, {useCallback, useMemo} from 'react';
import {Image, Text, View} from 'native-base';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../constans/colors';
import {IonIcon} from './IonIcon';
import {useNavigation} from '@react-navigation/native';
import {Producto} from '../interfaces/Producto';
import {useCartStore} from '../hooks';
import {marcarComoFavoritosService} from '../services/productoServices';

const {width: widthScreen} = Dimensions.get('window');
interface Props {
  producto: Producto;
}

export const CardProductoHome = ({producto}: Props) => {
  const {onPrepararProducto} = useCartStore();
  const uri = useMemo(() => producto.imagenes[0].urlImagenProducto, [producto]);
  const navigation = useNavigation();

  const handlerPrepararProducto = useCallback(
    (model: Producto) => {
      onPrepararProducto(model);
      navigation.navigate('AgregarCarrito' as never);
    },
    [producto],
  );

  return (
    <View
      flexDirection={'row'}
      backgroundColor={colors.white}
      margin={2}
      padding={2}
      width={widthScreen * 0.8}
      borderRadius={5}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => marcarComoFavoritosService(producto.id)}
        activeOpacity={0.6}>
        <IonIcon name="heart" color={colors.black} />
      </TouchableOpacity>
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <Image
          borderRadius={10}
          source={{
            uri,
          }}
          alt={producto.nombreProducto}
          height={'150'}
          width={'150'}
        />
      </View>
      <View flex={1} paddingX={1}>
        <Text fontSize={'md'}>{producto.nombreProducto}</Text>
        <Text color={colors.grey} fontSize={'sm'}>
          {producto.nombreCategoria}
        </Text>
        <Text color={colors.grey} fontSize={'sm'}>
          {producto.presentacion}
        </Text>
        {producto.enOferta ? (
          <>
            <Text fontSize={'md'} fontWeight={'bold'}>
              <Text fontSize={'md'} color={colors.grey}>
                ${producto.precio.toFixed(2)}
              </Text>{' '}
              ${producto.precioOferta.toFixed(2)}
              {' Oferta '}
              <IonIcon name="flame" color="red" size={15} />
            </Text>
          </>
        ) : (
          <Text fontSize={'md'} fontWeight={'bold'}>
            ${producto.precioOferta.toFixed(2)}
          </Text>
        )}
        <TouchableOpacity
          style={styles.btnCard}
          activeOpacity={0.6}
          onPress={() => handlerPrepararProducto(producto)}>
          <Text color={colors.black} fontSize={'sm'}>
            Agregar al carrito
          </Text>
          <IonIcon name="cart" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCard: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 15,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
