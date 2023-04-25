import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  stateApp: 'cargando' | 'no-cargando';
}

const initialState: AppState = {
  stateApp: 'no-cargando',
};

const chupixAppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading: state => {
      state.stateApp = 'cargando';
    },
    endLoading: state => {
      state.stateApp = 'no-cargando';
    },
  },
});

export const {startLoading, endLoading} = chupixAppSlice.actions;
export default chupixAppSlice.reducer;
