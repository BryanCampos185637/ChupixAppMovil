import ChupixApi, {ChupixApiFormData} from '../api/ChupixApi';
import {
  LoginRequest,
  LoginResponse,
  VerificarToken,
} from '../interfaces/LoginResponse';

export const refreshTokenService = async (model: VerificarToken) => {
  console.log('Se ejecuto el servicio refreshTokenService');
  const {data} = await ChupixApi.post<LoginResponse>(
    'Account/RefreshToken',
    model,
  );
  return data;
};

export const loginService = async (model: LoginRequest) => {
  console.log('Se ejecuto el servicio loginService');
  const {data} = await ChupixApi.post<LoginResponse>('Account/Login', model);
  return data;
};

export const registerService = async (model: FormData) => {
  console.log('Se ejecuto el servicio registerService');
  const {data} = await ChupixApiFormData({
    method: 'post',
    url: 'Account/Register',
    data: model,
  });
  return {...data} as LoginResponse;
};
