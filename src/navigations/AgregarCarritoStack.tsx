import {createStackNavigator} from '@react-navigation/stack';
import {AgregarCarrito} from '../screens';

const Stack = createStackNavigator();

export const AgregarCarritoStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
         <Stack.Screen
        name="AgregarCarrito"
        component={AgregarCarrito}
      />
    </Stack.Navigator>
  );
};
