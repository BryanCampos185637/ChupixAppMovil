import React from 'react';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';
import {Dimensions, StyleSheet} from 'react-native';
import {colorsApp} from '../helpers/colors';

const heigthScreen = Dimensions.get('window').height;

export const PerfilScreen = () => {
  const imgPerfil =
    'https://ctxt.es/images/cache/800x540/nocrop/images%7Ccms-image-000020424.jpg';
  return (
    <Box flex={1} backgroundColor={colors.black}>
      <Box flexDirection={'row'} style={{paddingLeft: 20, top: 10}}>
        <Text color={colors.white} fontSize={'3xl'}>
          Chupix
        </Text>
      </Box>
      <Box
        backgroundColor={colors.ligth}
        borderTopRadius={'3xl'}
        style={styles.subContainer}
        h={['80%']}>
        {/* foto de perfil */}
        <Box style={styles.containerPerfilImage}>
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
            marginTop={10}>
            <Text fontSize={'3xl'}>Datos generales</Text>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
              <Box flex={1} marginRight={5}>
                <Text fontSize={'xl'} fontWeight={'bold'}>
                  Bryan Campos
                </Text>
                <Text color={colorsApp.gris} fontSize={'md'}>
                  Nombre usuario
                </Text>
                <Text fontSize={'xl'} fontWeight={'bold'}>
                  +503 70599923
                </Text>
                <Text color={colorsApp.gris} fontSize={'md'}>
                  Telefono
                </Text>
              </Box>
              <Box flex={2}>
                <Text fontSize={'xl'} fontWeight={'bold'}>
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
            marginTop={5}>
            <Text fontSize={'3xl'}>Direcciones guardadas</Text>
          </Box>
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
});
