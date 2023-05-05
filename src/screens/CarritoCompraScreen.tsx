import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CardCarritoCompra, Container, IonIcon} from '../components';
import {Box, Button, Text, FlatList} from 'native-base';
import {colors} from '../constans/colors';
import {useCartStore} from '../hooks';
import {useEffect} from 'react';

const heigthScreen = Dimensions.get('window').height;

export const CarritoCompraScreen = () => {
  const {listaProductosAcomprar} = useCartStore();
  const [calculosTotal, setCalculosTotal] = useState({
    subTotal: 0,
    totalDescuento: 0,
    total: 0,
  });

  useEffect(() => {
    let subTotal = 0,
      totalDescuento = 0;

    listaProductosAcomprar.map(item => {
      subTotal += item.totalProducto * item.precioActual;
      totalDescuento += item.descuento;
    });

    setCalculosTotal({
      totalDescuento,
      subTotal,
      total: subTotal - totalDescuento,
    });
  }, [listaProductosAcomprar]);

  return (
    <>
      <Container activateScroll={false}>
        <Text color={colors.black} fontSize={'3xl'}>
          Carrito de compra
        </Text>

        <FlatList
          data={listaProductosAcomprar}
          keyExtractor={item => `compra_${item.idProducto}`}
          renderItem={({item}) => <CardCarritoCompra compra={item} />}
          ListEmptyComponent={
            <Box
              justifyContent={'center'}
              alignItems={'center'}
              alignContent={'center'}
              backgroundColor={colors.white}
              rounded={5}
              padding={4}>
              <Text fontSize={'3xl'}>
                Carrito de compras vacio <IonIcon name="sad-outline" />{' '}
              </Text>
            </Box>
          }
        />
        <View style={{height: 100}} />
      </Container>
      <Box
        justifyContent={'space-between'}
        backgroundColor={colors.brown}
        style={styles.containerTotal}
        h={'25%'}>
        <Box flexDirection={'row'}>
          <Box flex={2}>
            <Text fontSize={'2xl'} color={colors.grey2}>
              Sub total (+):
            </Text>
            <Text fontSize={'2xl'} color={colors.grey2}>
              Descuentos (-):
            </Text>
            <Text fontSize={'2xl'} color={colors.white}>
              Total a pagar: (+)
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={'2xl'} color={colors.grey2}>
              ${calculosTotal.subTotal.toFixed(2)}
            </Text>
            <Text fontSize={'2xl'} color={colors.grey2}>
              ${calculosTotal.totalDescuento.toFixed(2)}
            </Text>
            <Text fontSize={'2xl'} color={colors.white}>
              ${calculosTotal.total.toFixed(2)}
            </Text>
          </Box>
        </Box>
        <Box justifyContent={'center'} marginTop={5}>
          <Button backgroundColor={colors.yellow} borderRadius={50}>
            <Text color={colors.black} fontSize={'xl'}>
              Realizar compra
            </Text>
          </Button>
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  containerTotal: {
    position: 'relative',
    zIndex: 999,
    padding: 25,
    borderTopLeftRadius: 50,
    opacity: 0.94,
  },
});
