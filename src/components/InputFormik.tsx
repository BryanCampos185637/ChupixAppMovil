import {Box, Input, Text} from 'native-base';
import React from 'react';
import {colors} from '../constans/colors';
import {useFormikContext} from 'formik';
import {ErrorFormik} from './ErrorFormik';

interface Props {
  name: string;
  label: string;
  type: 'text' | 'password';
  placeholder?: string;
}

export const InputFormik = (props: Props) => {
  const {values, touched, errors, validateForm} = useFormikContext<any>();
  return (
    <Box alignItems={'flex-start'} marginTop={2}>
      <Text fontSize={'md'} color={colors.black}>
        {props.label}
      </Text>
      <Input
        variant="rounded"
        mx="1"
        w="100%"
        h={'10'}
        placeholder={props.placeholder}
        type={props.type}
        onChangeText={value => {
          values[props.name] = value;
          validateForm();
        }}
        value={values[props.name]}
      />
      {touched[props.name] && errors[props.name] && (
        <ErrorFormik message={errors[props.name]?.toString()} />
      )}
    </Box>
  );
};
