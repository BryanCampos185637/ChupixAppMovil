import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {loginService, registerService} from '../services/authServices';
import {LoginRequest, RegisterAccount} from '../interfaces/LoginResponse';
import {login, logout} from '../store/AuthStore/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {transformResgisterAccountToFormData} from '../helpers/transformResgisterAccountToFormData';
import {handlerError} from '../helpers/handlerError';

export const useAuthStore = () => {
  const state = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onLogin = async (model: LoginRequest) => {
    try {
      const user = await loginService(model);
      console.log(user);
      dispatch(login({...user}));
      await AsyncStorage.setItem('token', user.token);
      await AsyncStorage.setItem('refreshToken', user.refreshToken);
    } catch (error) {
      handlerError(error);
    }
  };

  const onRegister = async (model: RegisterAccount) => {
    try {
      const form = transformResgisterAccountToFormData(model);
      const user = await registerService(form);
      console.log(user);
      dispatch(login({...user}));
      await AsyncStorage.setItem('token', user.token);
      await AsyncStorage.setItem('refreshToken', user.refreshToken);
    } catch (error) {
      handlerError(error);
    }
  };

  const onLogout=async()=>{
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    dispatch(logout())
  }

  return {
    ...state,
    state,
    onLogin,
    onRegister,
    onLogout,
  };
};
