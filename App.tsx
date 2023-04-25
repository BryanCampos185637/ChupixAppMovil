import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {MyTabs} from './src/navigations/MyTabs';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
