import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigations';
import {PermissionsProvider} from './src/context/PermissionsContext';

export default function App() {
  return (
    <PermissionsProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </PermissionsProvider>
  );
}
