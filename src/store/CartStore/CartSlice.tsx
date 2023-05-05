import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Producto} from '../../interfaces/Producto';
import {Compra} from '../../interfaces/Compra';

export interface CartState {
  productoSeleccionado: Producto | null;
  listaProductosAcomprar: Compra[];
}

const initialState: CartState = {
  productoSeleccionado: null,
  listaProductosAcomprar: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    prepararProducto: (state, {payload}: PayloadAction<Producto>) => {
      state.productoSeleccionado = payload;
    },
    agregarAcarrito: (state, {payload}: PayloadAction<Compra>) => {
      state.productoSeleccionado = null;
      state.listaProductosAcomprar = [
        ...state.listaProductosAcomprar.filter(
          item => item.idProducto !== payload.idProducto,
        ),
        payload,
      ];
    },
    eliminarDeCarrito: (state, {payload}: PayloadAction<number>) => {
      state.listaProductosAcomprar = state.listaProductosAcomprar.filter(
        product => product.idProducto !== payload,
      );
    },
    compraEfectuada: state => {
      state.listaProductosAcomprar = [];
      state.productoSeleccionado = null;
    },
  },
});

export const {
  prepararProducto,
  agregarAcarrito,
  compraEfectuada,
  eliminarDeCarrito,
} = cartSlice.actions;
export default cartSlice.reducer;
