import React from 'react';
import {Box, FlatList, Image, Text, View} from 'native-base';
import {colors} from '../constans/colors';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {colorsApp} from '../helpers/colors';
import {direcciones} from '../constans/direcciones';
import {IonIcon} from '../components';

const heigthScreen = Dimensions.get('window').height;

export const PerfilScreen = () => {
  const imgPerfil =
    'https://ctxt.es/images/cache/800x540/nocrop/images%7Ccms-image-000020424.jpg';
  return (
    <Box flex={1} backgroundColor={colors.black}>
      <Box
        flexDirection={'row'}
        style={{paddingHorizontal: 20, top: 10}}
        justifyContent={'space-between'}>
        <Text color={colors.white} fontSize={'3xl'} alignSelf={'center'}>
          Chupix
        </Text>
        <Image
          source={require('../assets/logo.png')}
          size={50}
          borderRadius={45}
          alt="logo app"
        />
      </Box>
      <Box
        backgroundColor={colors.ligth}
        borderTopRadius={'3xl'}
        style={styles.subContainer}
        h={['80%']}>
        <Box style={styles.containerPerfilImage}>
          {/* foto de perfil */}
          <Box alignItems={'center'}>
            <Image
              style={styles.perfilImage}
              size={250}
              borderRadius={200}
              source={{
                uri: imgPerfil,
              }}
              alt="Alternate Text"
            />
          </Box>

          {/* datos personales */}
          <Box
            backgroundColor={colorsApp.blanco}
            rounded={10}
            padding={5}
            marginTop={5}>
            <Text fontSize={'3xl'} color={colorsApp.gris} fontWeight={'bold'}>
              Datos generales
            </Text>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
              <Box flex={1} marginRight={5}>
                <Text fontSize={'md'} fontWeight={'bold'}>
                  Bryan Campos
                </Text>
                <Text color={colorsApp.gris} fontSize={'md'}>
                  Nombre usuario
                </Text>
                <Text fontSize={'md'} fontWeight={'bold'} marginTop={1}>
                  +503 70599923
                </Text>
                <Text color={colorsApp.gris} fontSize={'md'}>
                  Telefono
                </Text>
              </Box>
              <Box flex={2}>
                <Text fontSize={'md'} fontWeight={'bold'}>
                  bryanjose.185637@gmail.com
                </Text>
                <Text color={colorsApp.gris} fontSize={'md'}>
                  Correo electronico
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Direcciones guardadas */}
          <Box
            backgroundColor={colorsApp.blanco}
            rounded={10}
            padding={5}
            marginTop={5}
            h={'30%'}>
            <Text fontSize={'3xl'} color={colorsApp.gris} fontWeight={'bold'}>
              Direcciones guardadas
            </Text>
            <FlatList
              data={direcciones}
              keyExtractor={item => `direction_${item.id}`}
              renderItem={({item}) => (
                <>
                  <Box padding={1} flexDirection={'row'}>
                    <Box flex={2}>
                      <Text fontSize={'md'} fontWeight={'bold'}>
                        {item.DetalleDireccion}
                      </Text>
                      <Text color={colorsApp.gris} fontSize={'md'}>
                        Detalle
                      </Text>
                    </Box>

                    <Box flex={1} alignItems={'flex-end'}>
                      <TouchableOpacity activeOpacity={0.8}>
                        <IonIcon name="close" color={colorsApp.gris} />
                      </TouchableOpacity>
                    </Box>
                  </Box>
                  <View style={styles.separator} />
                </>
              )}
            />
          </Box>
          <View style={{height: 100}} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 20,
    top: heigthScreen * 0.2,
  },
  containerPerfilImage: {
    top: -115,
  },
  perfilImage: {
    borderColor: colorsApp.blanco,
    borderWidth: 1,
  },
  separator: {
    borderColor: colorsApp.gris,
    borderWidth: 0.5,
  },
});
