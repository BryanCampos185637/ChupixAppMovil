import React from 'react';
import {Box, Button, Image, ScrollView, Text, View} from 'native-base';
import {colors} from '../constans/colors';
import {Dimensions, StyleSheet} from 'react-native';
import {Container, IonIcon, ItemDireccion} from '../components';
import {useAuthStore, usePerfil} from '../hooks';

const heigthScreen = Dimensions.get('window').height;

export const PerfilScreen = () => {
  const {id, onLogout} = useAuthStore();
  const {foto, nombres, apellidos, email, numeroTelefono, direcciones} =
    usePerfil(id);

  return (
    <ScrollView flex={1} backgroundColor={colors.ligth}>
      <Container topFather={0.2}>
        <Box style={styles.containerPerfilImage}>
          {/* foto de perfil */}
          <Box alignItems={'center'}>
            <Image
              style={styles.perfilImage}
              size={250}
              borderRadius={200}
              source={{
                uri: foto
                  ? foto
                  : 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif',
              }}
              alt={`${nombres} ${apellidos}`}
            />
            <Button
              marginTop={3}
              flexDirection={'row'}
              variant="outline"
              colorScheme={'gray'}
              onPress={onLogout}
              borderRadius={50}
              alignItems={'center'}>
              <Text color={colors.red} fontSize={'md'} alignSelf={'center'}>
                Cerrar sesión
                <IonIcon
                  name="arrow-back-circle"
                  size={16}
                  color={colors.red}
                />
              </Text>
            </Button>
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
            marginTop={5}>
            <Text fontSize={'2xl'} color={colors.grey} fontWeight={'bold'}>
              Direcciones guardadas
            </Text>
            {direcciones.map(item => (
              <ItemDireccion key={`direccion_${item.id}`} item={item} />
            ))}
          </Box>
        </Box>
      </Container>
      <View style={styles.space} />
    </ScrollView>
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
  space: {
    height: 100,
  },
});
