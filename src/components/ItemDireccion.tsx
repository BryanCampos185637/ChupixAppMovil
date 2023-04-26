import {Box, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {IonIcon} from './IonIcon';
import {colors} from '../constans/colors';
import {Direccion} from '../interfaces/Direccion';

interface Props {
  item: Direccion;
}

export const ItemDireccion = ({item}: Props) => {
  return (
    <>
      <Box padding={1} flexDirection={'row'}>
        <Box flex={2}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {item.detalleDireccion}
          </Text>
          <Text color={colors.grey} fontSize={'md'}>
            Detalle
          </Text>
        </Box>

        <Box flex={1} alignItems={'flex-end'}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log(`se elecciono el id `, item.id)}>
            <IonIcon name="close" color={colors.grey} />
          </TouchableOpacity>
        </Box>
      </Box>
      <View style={styles.separator} />
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderColor: 'rgba(174, 174, 174, 0.3)',
    borderWidth: 0.5,
  },
});
