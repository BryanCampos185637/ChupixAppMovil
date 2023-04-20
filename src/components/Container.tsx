import React from 'react';
import {Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {colors} from '../constans/colors';

const heigthScreen = Dimensions.get('window').height;

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export const Container = ({children, style}: ContainerProps) => {
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
        style={[styles.subContainer, {...(style as any)}]}
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
