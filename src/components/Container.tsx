import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Box, Text} from 'native-base';
import {colors} from '../constans/colors';
import {IonIcon} from './IonIcon';

const heigthScreen = Dimensions.get('window').height;

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = ({children}: ContainerProps) => {
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
        h={['98%']}>
        {children}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 20,
    top: heigthScreen * 0.02,
  },
});
