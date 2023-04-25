import React from 'react';
import {Text} from 'native-base';
import {colors} from '../constans/colors';

interface Props {
  message: string | undefined;
}

export const ErrorFormik = ({message}: Props) => {
  return (
    <Text color={colors.red} fontSize={'sm'}>
      {message}
    </Text>
  );
};
