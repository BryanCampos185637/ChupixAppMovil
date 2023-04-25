import React from 'react';
import {Box, FlatList, Image, Text, View} from 'native-base';
import {colors} from '../constans/colors';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {direcciones} from '../constans/direcciones';
import {IonIcon, Loading} from '../components';
import {useAuthStore, usePerfil} from '../hooks';

const heigthScreen = Dimensions.get('window').height;

export const PerfilScreen = () => {
  const {id, onLogout} = useAuthStore();
  const {foto, nombres, apellidos, email, numeroTelefono, isLoading} =
    usePerfil(id);

  if (isLoading) return <Loading />;

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
                uri: foto,
              }}
              alt="Alternate Text"
            />
            <TouchableOpacity activeOpacity={0.8} onPress={() => onLogout()}>
              <Text color={colors.red} fontSize={'md'}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </Box>

          {/* datos personales */}
          <Box
            backgroundColor={colors.white}
            rounded={10}
            padding={5}
            marginTop={5}>
            <Text fontSize={'2xl'} color={colors.grey} fontWeight={'bold'}>
              Datos generales
            </Text>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
              <Box flex={1} marginRight={5}>
                <Text fontSize={'md'} fontWeight={'bold'}>
                  {nombres} {apellidos}
                </Text>
                <Text color={colors.grey} fontSize={'md'}>
                  Nombre usuario
                </Text>
                <Text fontSize={'md'} fontWeight={'bold'} marginTop={1}>
                  {numeroTelefono}
                </Text>
                <Text color={colors.grey} fontSize={'md'}>
                  Telefono
                </Text>
              </Box>
              <Box flex={2}>
                <Text fontSize={'md'} fontWeight={'bold'}>
                  {email}
                </Text>
                <Text color={colors.grey} fontSize={'md'}>
                  Correo electronico
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Direcciones guardadas */}
          <Box
            backgroundColor={colors.white}
            rounded={10}
            padding={5}
            marginTop={5}
            h={'30%'}>
            <Text fontSize={'2xl'} color={colors.grey} fontWeight={'bold'}>
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
                      <Text color={colors.grey} fontSize={'md'}>
                        Detalle
                      </Text>
                    </Box>

                    <Box flex={1} alignItems={'flex-end'}>
                      <TouchableOpacity activeOpacity={0.8}>
                        <IonIcon name="close" color={colors.grey} />
                      </TouchableOpacity>
                    </Box>
                  </Box>
                  <View style={styles.separator} />
                </>
              )}
            />
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
    borderColor: colors.white,
    borderWidth: 1,
  },
  separator: {
    borderColor: 'rgba(174, 174, 174, 0.3)',
    borderWidth: 0.5,
  },
});
