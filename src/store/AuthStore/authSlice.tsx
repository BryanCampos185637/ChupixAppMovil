import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {LoginResponse} from '../../interfaces/LoginResponse';

export interface AuthState {
  id: string;
  rol: string;
  email: string;
  token: string;
  refreshToken: string;
  foto: string;
  stateLogin: 'autenticado' | 'verificando' | 'no-autenticado';
  errorMessage: string;
}

const initialState: AuthState = {
  stateLogin: 'verificando',
  errorMessage: '',
  id: '',
  rol: '',
  email: '',
  token: '',
  refreshToken: '',
  foto: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}: PayloadAction<LoginResponse>) => {
      state.id = payload.id;
      state.rol = payload.rol;
      state.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.foto = payload.foto;
      state.stateLogin = 'autenticado';
      state.errorMessage = '';
    },
    logout: state => {
      state.stateLogin = 'no-autenticado';
      state.errorMessage = '';
      state.id = '';
      state.rol = '';
      state.email = '';
      state.token = '';
      state.refreshToken = '';
      state.foto = '';
    },
    addMessage: (state, {payload}: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
    removeMessage: state => {
      state.errorMessage = '';
    },
    changeState: (
      state,
      {
        payload,
      }: PayloadAction<'autenticado' | 'verificando' | 'no-autenticado'>,
    ) => {
      state.stateLogin = payload;
    },
  },
});

export const {addMessage, changeState, login, logout, removeMessage} =
  authSlice.actions;
export default authSlice.reducer;
