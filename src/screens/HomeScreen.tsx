import React from 'react';
import {Dimensions} from 'react-native';
import {
  CardProductoHome,
  Container,
  ContainerHome,
  LoadingFlatList,
} from '../components';
import {FlatList, Text, View} from 'native-base';
import {direcciones} from '../constans/direcciones';
import {useAuthStore} from '../hooks';
import {colors} from '../constans/colors';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

export const HomeScreen = () => {
  const {state} = useAuthStore();
  return (
    <Container style={{paddingHorizontal: 0}}>
      <View marginLeft={5}>
        <Text fontSize={'3xl'}>Inicio</Text>
        <Text fontSize={'md'}>Bienvenido {state.email}</Text>
      </View>
      {/* promociones del dia */}
      <ContainerHome titulo="Promociones del día">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={direcciones}
          renderItem={() => <CardProductoHome />}
          keyExtractor={item => `promocion_dia_${item.id}`}
          ListFooterComponent={() => <LoadingFlatList color={colors.white} />}
        />
      </ContainerHome>

      {/* Lo mas pedido */}
      <ContainerHome titulo="Lo mas pedido">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={direcciones}
          renderItem={() => <CardProductoHome />}
          keyExtractor={item => `lo_mas_pedido_${item.id}`}
          ListFooterComponent={() => <LoadingFlatList color={colors.white} />}
        />
      </ContainerHome>

      {/* Sugerencias */}
      <ContainerHome titulo="Sugerencias">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={direcciones}
          renderItem={() => <CardProductoHome />}
          keyExtractor={item => `sugerencia_${item.id}`}
          ListFooterComponent={() => <LoadingFlatList color={colors.white} />}
        />
      </ContainerHome>
    </Container>
  );
};
