import React from 'react';
import {Container} from '../components';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Box, Button, Input, Stack, Text} from 'native-base';
import {colors} from '../constans/colors';
import {StackScreenProps} from '@react-navigation/stack';

const {width} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

export const CrearCuentaScreen = ({navigation}: Props) => {
  return (
    <Container>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={25}
        padding={2}>
        <Text fontSize={'5xl'} fontWeight={'bold'}>
          Crear cuenta
        </Text>
        <Stack space={4} w="100%" marginTop={3}>
          <Text fontSize={'md'} color={colors.black}>
            Nombres:
          </Text>
          <Input variant="rounded" placeholder="Nombre Nombre" type="text" />
        </Stack>
        <Stack space={4} w="100%" marginTop={3}>
          <Text fontSize={'md'} color={colors.black}>
            Apellidos:
          </Text>
          <Input variant="rounded" placeholder="Apellido Apellido" type="text" />
        </Stack>
        <Stack space={4} w="100%" marginTop={3}>
          <Text fontSize={'md'} color={colors.black}>
            Telefono:
          </Text>
          <Input variant="rounded" placeholder="00000000" type="text" />
        </Stack>
        <Stack space={4} w="100%" marginTop={5}>
          <Text fontSize={'md'} color={colors.black}>
            Correo:
          </Text>
          <Input variant="rounded" placeholder="chupix@gmail.com" type="text" />
        </Stack>
        <Stack space={4} w="100%" marginTop={3}>
          <Text fontSize={'md'} color={colors.black}>
            Contraseña:
          </Text>
          <Input variant="rounded" placeholder="************" type="password" />
        </Stack>
        <Box justifyContent={'center'} marginTop={10}>
          <Button
            backgroundColor={colors.yellow}
            borderRadius={50}
            width={width * 0.6}>
            <Text color={colors.black} fontSize={'xl'}>
              Crear cuenta
            </Text>
          </Button>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}>
            <Text
              fontSize={'xl'}
              color={colors.grey}
              marginTop={10}
              alignSelf={'center'}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Container>
  );
};
