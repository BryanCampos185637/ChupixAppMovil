import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const URL_BASE = 'https://chupix.bsite.net/api/v1/';

export const ChupixApiFormData = async (props: ChupixFormDataProps) => {
  return axios({
    method: props.method,
    url: URL_BASE + props.url,
    data: props.data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
    },
  });
};

const ChupixApi = axios.create({
  baseURL: URL_BASE,
});

// Todo: configurar interceptores
ChupixApi.interceptors.request.use(async (config: any) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
  };
  return config;
});

export default ChupixApi;

interface ChupixFormDataProps {
  method: 'post' | 'put' | 'delete' | 'get';
  url: string;
  data?: FormData;
}
