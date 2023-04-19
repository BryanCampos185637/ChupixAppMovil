import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CardCarritoCompra, Container} from '../components';
import {Box, Button, ScrollView, Text} from 'native-base';
import {colors} from '../constans/colors';

const heigthScreen = Dimensions.get('window').height;

export const CarritoCompraScreen = () => {
  return (
    <>
      <Container>
        <ScrollView>
          <Text color={colors.black} fontSize={'4xl'}>
            Carrito de compra
          </Text>
          <Text color={colors.black} fontSize={'sm'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <CardCarritoCompra />
          <View style={{height:100}}/>
        </ScrollView>
      </Container>
      <Box
        justifyContent={'space-between'}
        backgroundColor={colors.brown}
        style={styles.containerTotal}
        h={'30%'}>
        <Box flexDirection={'row'}>
          <Box flex={2}>
            <Text fontSize={'3xl'} color={colors.grey2}>
              Sub total (+):
            </Text>
            <Text fontSize={'3xl'} color={colors.grey2}>
              Costo envío (+):
            </Text>
            <Text fontSize={'3xl'} color={colors.grey2}>
              Descuentos (-):
            </Text>
            <Text fontSize={'3xl'} color={colors.white}>
              Total a pagar: (+)
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={'3xl'} color={colors.grey2}>
              $500.00
            </Text>
            <Text fontSize={'3xl'} color={colors.grey2}>
              $500.00
            </Text>
            <Text fontSize={'3xl'} color={colors.grey2}>
              $0.00
            </Text>
            <Text fontSize={'3xl'} color={colors.white}>
              $500.00
            </Text>
          </Box>
        </Box>
        <Box justifyContent={'center'} marginTop={5}>
          <Button backgroundColor={colors.yellow} borderRadius={50}>
            <Text color={colors.black} fontSize={'xl'}>Realizar compra</Text>
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
    opacity:0.94
  },
});