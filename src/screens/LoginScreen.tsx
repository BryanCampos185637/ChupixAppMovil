import React from 'react';
import {Dimensions} from 'react-native';

import {Box, Button, Text} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Container, InputFormik} from '../components';
import {colors} from '../constans/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {useAuthStore} from '../hooks';
import {LoginRequest} from '../interfaces/LoginResponse';

const {width} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {onLogin} = useAuthStore();

  return (
    <Container activateScroll={true}>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={25}
        padding={2}
        flex={1}>
        <Text fontSize={'5xl'} fontWeight={'bold'}>
          Iniciar sesión
        </Text>
        <Formik
          initialValues={
            {
              email: 'bryanjose.185637@gmail.com',
              password: 'ABCDabcd123$',
            } as LoginRequest
          }
          validationSchema={Yup.object({
            email: Yup.string()
              .trim()
              .required('El correo es requerido')
              .email('Debe ser un correo'),
            password: Yup.string()
              .trim()
              .required('La contraseña es requerida'),
          })}
          onSubmit={onLogin}>
          {formikProps => (
            <>
              <InputFormik
                label="Correo"
                name="email"
                type="text"
                keyboardType="email-address"
              />
              <InputFormik label="Contraseña" name="password" type="password" />
              <Box justifyContent={'center'} marginTop={20}>
                <Button
                  onPress={formikProps.handleSubmit}
                  backgroundColor={colors.yellow}
                  borderRadius={50}
                  width={width * 0.6}>
                  <Text color={colors.black} fontSize={'xl'}>
                    Ingresar
                  </Text>
                </Button>
                <Button
                  marginTop={5}
                  variant="outline"
                  colorScheme={'gray'}
                  onPress={() => navigation.replace('CrearCuentaScreen')}
                  borderRadius={50}
                  width={width * 0.6}>
                  <Text color={colors.black} fontSize={'xl'}>
                    Crear cuenta
                  </Text>
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
