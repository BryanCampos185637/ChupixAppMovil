import {createStackNavigator} from '@react-navigation/stack';
import {CarritoCompraScreen, HomeScreen, TiendasScreen} from '../screens';

const Stack = createStackNavigator();

export const MyStack = () => {

  return (
    <Stack.Navigator
    initialRouteName='TiendasScreen'
      screenOptions={{
        headerShown: false,
      }}>
         <Stack.Screen
        name="TiendasScreen"
        component={TiendasScreen}
      />
      <Stack.Screen
        name="CarritoCompraScreen"
        component={CarritoCompraScreen}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
