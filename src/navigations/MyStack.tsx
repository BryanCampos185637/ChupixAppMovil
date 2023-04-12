import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LoadingScreen,
  MapScreen,
  PermissionsScreen,
} from '../screens';
import {useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';

const Stack = createStackNavigator();

export const MyStack = () => {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: '#fffffe',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <>
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </>
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};
