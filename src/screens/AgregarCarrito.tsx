import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, IonIcon} from '../components';
import {Box, Image, Text, View} from 'native-base';
import {colors} from '../constans/colors';
import {getUrlImageRandom} from '../helpers/getUrlImageRandom';
import {useCounterProduct} from '../hooks';
import {useNavigation} from '@react-navigation/native';

const dimensions = Dimensions.get('window');

export const AgregarCarrito = () => {
  const {decrement, increment, counter, total, unitaryPrice} =
    useCounterProduct(1.34);
  const uri = useMemo(() => getUrlImageRandom(), [unitaryPrice]);
  const navigation = useNavigation();

  return (
    <Container topFather={0.2}>
      <Box style={styles.containerPerfilImage}>
        {/* foto de perfil */}
        <Box alignItems={'center'}>
          <Image
            style={styles.perfilImage}
            size={250}
            borderRadius={200}
            source={{
              uri,
            }}
            alt={uri}
          />
          {/* detalle */}
          <Text fontSize={'4xl'}>Nombre del artículo</Text>
          <Text fontSize={'md'} color={colors.grey2}>
            Nombre tienda
          </Text>
          <Text fontSize={'5xl'}> ${total.toFixed(2)} </Text>
          <Text fontSize={'md'} color={colors.grey2}>
            Total a pagar
          </Text>
          <View
            backgroundColor={colors.white}
            borderRadius={15}
            w={'100%'}
            marginTop={3}
            padding={3}>
            <Text fontSize={'xl'} color={colors.grey2} fontWeight={'bold'}>
              Presentación
            </Text>
            <Text fontSize={'md'} color={colors.grey2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              efficitur sem, quis tincidunt nisi. Sed quis tincidunt mi
            </Text>
          </View>
          {/* contador */}
          <View
            justifyContent={'center'}
            flexDirection={'row'}
            backgroundColor={colors.brown}
            borderRadius={25}
            w={dimensions.width * 0.35}
            padding={1}
            marginTop={3}>
            <TouchableOpacity
              onPress={decrement}
              activeOpacity={0.6}
              style={styles.buttonCounter}>
              <IonIcon name="remove" color={colors.white} />
            </TouchableOpacity>
            <View flex={2} justifyContent={'center'} alignItems={'center'}>
              <Text fontSize={'3xl'} color={colors.white}>
                {counter}
              </Text>
            </View>

            <TouchableOpacity
              onPress={increment}
              activeOpacity={0.6}
              style={styles.buttonCounter}>
              <IonIcon name="add" color={colors.white} />
            </TouchableOpacity>
          </View>
          {/* agregar al carrito */}
          <View w={dimensions.width * 0.8} marginTop={5}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.buttonAdd}
              onPress={() =>
                navigation.navigate('CarritoCompraScreen' as never)
              }>
              <Text fontSize={'xl'}>Agregar al carrito</Text>
              <IonIcon name="cart" />
            </TouchableOpacity>
          </View>
        </Box>
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerPerfilImage: {
    top: -115,
  },
  perfilImage: {
    borderColor: colors.white,
    borderWidth: 1,
  },
  buttonCounter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    flexDirection: 'row',
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 5,
  },
});
