import React from 'react';
import {
  CardProductoHome,
  Container,
  ContainerHome,
  LoadingFlatList,
} from '../components';
import {FlatList, Text, View} from 'native-base';
import {useAuthStore, useProductos} from '../hooks';
import {colors} from '../constans/colors';
import {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const {
    promociones,
    bebidas,
    favoritos,
    paginaActual,
    totalPaginas,
    paginaActualfavorito,
    totalPaginasFavorito,
    totalPaginasBebidas,
    paginaActualBebidas,
    obtenerBebidas,
    peticionSimultanea,
    obtenerProductosEnPromocion,
    obtenerProductosFavoritos,
  } = useProductos();

  useEffect(() => {
    peticionSimultanea();
  }, []);

  const {state} = useAuthStore();
  return (
    <ScrollView>
      <Container style={{paddingHorizontal: 0}}>
        <View marginLeft={5}>
          <Text fontSize={'3xl'}>Inicio</Text>
          <Text fontSize={'md'}>Bienvenido {state.email}</Text>
        </View>
        {/* promociones del dia */}
        <ContainerHome titulo="Promoción">
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={promociones}
            renderItem={({item}) => <CardProductoHome producto={item} />}
            keyExtractor={item => `promocion_dia_${item.id}`}
            onEndReached={obtenerProductosEnPromocion}
            onEndReachedThreshold={0.4}
            ListFooterComponent={() =>
              paginaActual.current < totalPaginas.current ? (
                <LoadingFlatList color={colors.white} />
              ) : (
                <></>
              )
            }
            ListEmptyComponent={<LoadingFlatList color={colors.white} />}
          />
        </ContainerHome>

        {/* Bebidas */}
        <ContainerHome titulo="Bebidas">
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={bebidas}
            renderItem={({item}) => <CardProductoHome producto={item} />}
            keyExtractor={item => `bebida_${item.id}`}
            onEndReached={obtenerBebidas}
            onEndReachedThreshold={0.4}
            ListFooterComponent={() =>
              paginaActualBebidas.current < totalPaginasBebidas.current ? (
                <LoadingFlatList color={colors.white} />
              ) : (
                <></>
              )
            }
            ListEmptyComponent={<LoadingFlatList color={colors.white} />}
          />
        </ContainerHome>

        {/* Sugerencias */}
        <ContainerHome titulo="Favoritos">
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={favoritos}
            renderItem={({item}) => <CardProductoHome producto={item} />}
            keyExtractor={item => `fav_${item.id}`}
            onEndReached={obtenerProductosFavoritos}
            onEndReachedThreshold={0.4}
            ListFooterComponent={() =>
              paginaActualfavorito.current < totalPaginasFavorito.current ? (
                <LoadingFlatList color={colors.white} />
              ) : (
                <></>
              )
            }
            ListEmptyComponent={<LoadingFlatList color={colors.white} />}
          />
        </ContainerHome>
      </Container>
    </ScrollView>
  );
};
