import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {endLoading, startLoading} from '../store/ChupixAppStore/ChupixAppSlice';

export const useAppStore = () => {
  const {stateApp} = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const onStartLoading = () => dispatch(startLoading());

  const onEndLoading = () => dispatch(endLoading());

  return {
    stateApp,
    onStartLoading,
    onEndLoading,
  };
};
