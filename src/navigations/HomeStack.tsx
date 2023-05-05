import {createStackNavigator} from '@react-navigation/stack';
import {AgregarCarrito, HomeScreen} from '../screens';
import {colors} from '../constans/colors';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.black,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AgregarCarrito" component={AgregarCarrito} />
    </Stack.Navigator>
  );
};
