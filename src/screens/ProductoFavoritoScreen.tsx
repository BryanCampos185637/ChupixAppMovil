import React from 'react';
import {CardProductoFavorito} from '../components';
import {Box, FlatList, View} from 'native-base';
import {direcciones} from '../constans/direcciones';

export const ProductoFavoritoScreen = () => {
  return (
    <Box flex={1}>
      <FlatList
      marginTop={2}
        data={direcciones}
        renderItem={() => <CardProductoFavorito />}
        keyExtractor={item => `producto_favorito_${item.id}`}
        numColumns={2}
        ListFooterComponent={()=><View style={{height:100}}/>}
      />
    </Box>
  );
};
