import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {useEffect} from 'react';
import {login, logout} from '../store/AuthStore/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {refreshTokenService} from '../services/authServices';

export const useVerifyToken = () => {
  const {stateLogin} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onVeriryToken();
  }, []);

  const onVeriryToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (token === null || refreshToken === null) return dispatch(logout());

    try {
      const user = await refreshTokenService({token, refreshToken});
      await AsyncStorage.setItem('token', user.token);
      await AsyncStorage.setItem('refreshToken', user.refreshToken);
      dispatch(login(user));
    } catch (error) {
      dispatch(logout());
    }
  };

  return stateLogin;
};
