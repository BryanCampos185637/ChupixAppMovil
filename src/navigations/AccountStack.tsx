import {createStackNavigator} from '@react-navigation/stack';
import {CrearCuentaScreen, LoginScreen} from '../screens';
import {colors} from '../constans/colors';

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.black,
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CrearCuentaScreen" component={CrearCuentaScreen} />
    </Stack.Navigator>
  );
};
