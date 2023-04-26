import React from 'react';
import * as Yup from 'yup';
import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';

import {Box, Button, Text} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';

import {Container, InputFormik} from '../components';
import {colors} from '../constans/colors';
import {RegisterAccount} from '../interfaces/LoginResponse';
import {useAuthStore} from '../hooks';

const {width} = Dimensions.get('window');

const initialForm: RegisterAccount = {
  nombre: '',
  apellidos: '',
  email: '',
  password: '',
  numeroTelefono: '',
  fotoPerfil: null,
};

interface Props extends StackScreenProps<any, any> {}

export const CrearCuentaScreen = ({navigation}: Props) => {
  const {onRegister} = useAuthStore();

  return (
    <Container>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={25}
          padding={2}>
          <Text fontSize={'5xl'} fontWeight={'bold'}>
            Crear cuenta
          </Text>
          <Formik
            initialValues={initialForm}
            onSubmit={onRegister}
            validationSchema={Yup.object({
              nombre: Yup.string().required('El nombre es requerido'),
              apellidos: Yup.string().required('Los apellidos es requerido'),
              numeroTelefono: Yup.string()
                .required('El télefono es requerido')
                .min(8, 'Debe contener 8 digitos')
                .max(8, 'No puede contener mas de 8 digitos'),
              email: Yup.string()
                .required('El correo es requerido')
                .email('Debe ser un correo'),
              password: Yup.string().required('La contraseña es requerida'),
            })}>
            {({handleSubmit}) => (
              <>
                <InputFormik name="nombre" label="Nombre" type="text" />
                <InputFormik name="apellidos" label="Apellidos" type="text" />
                <InputFormik
                  name="numeroTelefono"
                  label="Télefono"
                  type="text"
                  keyboardType="numeric"
                />
                <InputFormik
                  name="email"
                  label="Correo"
                  type="text"
                  keyboardType="email-address"
                />
                <InputFormik
                  name="password"
                  label="Contraseña"
                  type="password"
                />
                <Box justifyContent={'center'} marginTop={10}>
                  <Button
                    backgroundColor={colors.yellow}
                    borderRadius={50}
                    width={width * 0.6}
                    onPress={handleSubmit}>
                    <Text color={colors.black} fontSize={'xl'}>
                      Crear cuenta
                    </Text>
                  </Button>
                  <Button
                    marginTop={5}
                    variant="outline"
                    colorScheme={'gray'}
                    onPress={() => navigation.replace('LoginScreen')}
                    borderRadius={50}
                    width={width * 0.6}>
                    <Text color={colors.black} fontSize={'xl'}>
                      Iniciar sesión
                    </Text>
                  </Button>
                </Box>
              </>
            )}
          </Formik>
        </Box>
      </KeyboardAvoidingView>
    </Container>
  );
};
