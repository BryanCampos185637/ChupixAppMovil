import React from 'react';
import {Container} from '../components';
import {Box, Button, Input, Stack, Text} from 'native-base';
import {colors} from '../constans/colors';
import {Dimensions, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <Container style={{margin: 0}}>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={25}
        padding={2}
        top={height * 0.15}>
        <Text fontSize={'5xl'} fontWeight={'bold'}>
          Inicia sesión
        </Text>
        <Stack space={4} w="100%" marginTop={5}>
          <Text fontSize={'md'} color={colors.black}>
            Correo:
          </Text>
          <Input variant="rounded" placeholder="chupix@gmail.com" type="text" />
        </Stack>
        <Stack space={4} w="100%" marginTop={5}>
          <Text fontSize={'md'} color={colors.black}>
            Contraseña:
          </Text>
          <Input variant="rounded" placeholder="************" type="password" />
        </Stack>
        <Box justifyContent={'center'} marginTop={20}>
          <Button
            backgroundColor={colors.yellow}
            borderRadius={50}
            width={width * 0.6}>
            <Text color={colors.black} fontSize={'xl'}>
              Ingresar
            </Text>
          </Button>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('CrearCuentaScreen')}>
            <Text
              fontSize={'xl'}
              color={colors.grey}
              marginTop={20}
              alignSelf={'center'}>
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Container>
  );
};
