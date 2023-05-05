import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {Producto} from '../interfaces/Producto';
import {
  agregarAcarrito,
  compraEfectuada,
  eliminarDeCarrito,
  prepararProducto,
} from '../store/CartStore/CartSlice';
import {Compra} from '../interfaces/Compra';

export const useCartStore = () => {
  const productoStore = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const onPrepararProducto = (model: Producto) =>
    dispatch(prepararProducto(model));

  const onAgregarAcarrito = (model: Compra) => dispatch(agregarAcarrito(model));

  const onCompraEfectuada = () => dispatch(compraEfectuada);

  const onEliminarDeCarrito = (id: number) => dispatch(eliminarDeCarrito(id));

  return {
    productoStore,
    ...productoStore,
    onAgregarAcarrito,
    onCompraEfectuada,
    onEliminarDeCarrito,
    onPrepararProducto,
  };
};
