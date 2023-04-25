import axios from 'axios';
import {Alert} from 'react-native';

export const handlerError = (error: any) => {
  let message = 'Vaya! algo fallo en la aplicación';
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    if (data.Message) message = data.Message;
  }
  console.log(error);
  Alert.alert('Error', message);
};
