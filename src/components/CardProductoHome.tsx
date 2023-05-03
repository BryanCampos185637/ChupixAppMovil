import {Image, Text, View} from 'native-base';
import React, {useMemo} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../constans/colors';
import {getUrlImageRandom} from '../helpers/getUrlImageRandom';
import {IonIcon} from './IonIcon';
import {useNavigation} from '@react-navigation/native';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

export const CardProductoHome = () => {
  const uri = useMemo(() => getUrlImageRandom(), [heightScreen]);
  const navigation = useNavigation();
  return (
    <View
      flexDirection={'row'}
      backgroundColor={colors.white}
      margin={2}
      padding={2}
      width={widthScreen * 0.8}
      borderRadius={5}>
      <View flex={1}>
        <Image
          borderRadius={10}
          source={{
            uri,
          }}
          alt="Alternate Text"
          size="xl"
        />
      </View>
      <View flex={2} paddingX={1}>
        <Text fontSize={'xl'}>Producto name</Text>
        <Text color={colors.grey} fontSize={'sm'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text fontSize={'xl'} fontWeight={'bold'}>
          $10.90
        </Text>
        <TouchableOpacity
          style={styles.btnCard}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('AgregarCarritoStack' as never)}>
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
});
