import React from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Platform,
} from 'react-native';

import {
  Box,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'native-base';

import {colors} from '../constans/colors';
import {SpinnerLoading} from './SpinnerLoading';

const heigthScreen = Dimensions.get('window').height;

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  activateScroll?: boolean;
  topFather?: number;
}

export const Container = ({
  children,
  style,
  topFather = 0.02,
  activateScroll = false,
}: ContainerProps) => {
  return (
    <>
      <KeyboardAvoidingView
        flex={1}
        backgroundColor={colors.black}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
        {activateScroll ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            backgroundColor={colors.light}
            borderTopRadius={'3xl'}
            style={[
              {...styles.subContainer, top: heigthScreen * topFather},
              {...(style as any)},
            ]}
            h={'100%'}>
            {children}
            <SpinnerLoading />
          </ScrollView>
        ) : (
          <Box
            backgroundColor={colors.light}
            borderTopRadius={'3xl'}
            style={[
              {...styles.subContainer, top: heigthScreen * topFather},
              {...(style as any)},
            ]}
            h={'100%'}>
            {children}
            <SpinnerLoading />
          </Box>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingTop:5,
    paddingHorizontal: 20,
  },
});
