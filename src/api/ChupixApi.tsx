import axios from 'axios';
const VITE_URL_BASE = 'https://chupix.bsite.net/api/v1/';

export const ChupixApiFormData = (props: ChupixFormDataProps) => {
  return axios({
    method: props.method,
    url: VITE_URL_BASE + props.url,
    data: props.data,
    headers: {
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const ChupixApi = axios.create({
  baseURL: VITE_URL_BASE,
});

// Todo: configurar interceptores
ChupixApi.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    //Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return config;
});

export default ChupixApi;

interface ChupixFormDataProps {
  method: 'post' | 'put' | 'delete' | 'get';
  url: string;
  data?: FormData;
}
