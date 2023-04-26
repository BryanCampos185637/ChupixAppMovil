import axios from 'axios';
import {Alert} from 'react-native';
import {useAuthStore} from '../hooks';

export const handlerError = (error: any) => {
  const {onLogout} = useAuthStore();
  let message = 'Vaya! algo fallo en la aplicación';
  if (axios.isAxiosError(error)) {
    if (error.status === 401) {
      onLogout();
      Alert.alert('Error', 'El token de la sesión a expirado');
    }

    const data = error.response?.data;
    if (data.Message) message = data.Message;
  }
  console.log(error);
  Alert.alert('Error', message);
};
