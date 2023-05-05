import React, {useRef, useState} from 'react';
import {Producto} from '../interfaces/Producto';
import {handlerError} from '../helpers/handlerError';
import {
  getProductosEnPromocionService,
  getProductosFavoritosService,
  getProductsService,
} from '../services/productoServices';

export const useProductos = () => {
  const paginaActualBebidas = useRef(1);
  const totalPaginasBebidas = useRef(0);

  const paginaActual = useRef(1);
  const totalPaginas = useRef(0);

  const paginaActualfavorito = useRef(1);
  const totalPaginasFavorito = useRef(0);

  const [bebidas, setBebidas] = useState<Producto[]>([]);
  const [promociones, setPromociones] = useState<Producto[]>([]);
  const [favoritos, setFavoritos] = useState<Producto[]>([]);

  const peticionSimultanea = async () => {
    try {
      await Promise.all([
        obtenerProductosEnPromocion,
        obtenerBebidas,
        obtenerProductosFavoritos,
      ]);
    } catch (error) {
      handlerError(error);
    }
  };

  const obtenerBebidas = async () => {
    try {
      if (paginaActualBebidas.current === totalPaginasBebidas.current) return;
      const {data, pageCount, pageIndex} = await getProductsService({
        pageIndex: paginaActualBebidas.current,
        pageSize: 10,
      });
      const nextPage = pageIndex + 1;
      paginaActualBebidas.current = nextPage > pageCount ? pageCount : nextPage;
      totalPaginasBebidas.current = pageCount;
      const transform: Producto[] = data.map(item => {
        return {...item};
      });
      setBebidas([...bebidas, ...transform]);
    } catch (error) {
      handlerError(error);
    }
  };

  const obtenerProductosEnPromocion = async () => {
    try {
      if (paginaActualBebidas.current === totalPaginasBebidas.current) return;
      const {data, pageCount, pageIndex} = await getProductosEnPromocionService({
        pageIndex: paginaActual.current,
        pageSize: 10,
      });
      const nextPage = pageIndex + 1;
      paginaActual.current = nextPage > pageCount ? pageCount : nextPage;
      totalPaginas.current = pageCount;
      const transform: Producto[] = data
        .filter(p => p.enOferta === true)
        .map(item => {
          return {...item};
        });
      setPromociones([...promociones, ...transform]);
    } catch (error) {
      handlerError(error);
    }
  };

  const obtenerProductosFavoritos = async () => {
    try {
      if (paginaActualfavorito.current === totalPaginasFavorito.current) return;
      const {data, pageCount, pageIndex} = await getProductosFavoritosService({
        pageIndex: paginaActualfavorito.current,
        pageSize: 10,
      });
      const nextPage = pageIndex + 1;
      paginaActualfavorito.current =
        nextPage > pageCount ? pageCount : nextPage;
      totalPaginasFavorito.current = pageCount;
      const transform: Producto[] = data.map(item => {
        return {...item};
      });
      setFavoritos([...favoritos, ...transform]);
    } catch (error) {
      handlerError(error);
    }
  };

  return {
    promociones,
    bebidas,
    favoritos,
    paginaActual,
    totalPaginas,
    paginaActualfavorito,
    totalPaginasFavorito,
    totalPaginasBebidas,
    paginaActualBebidas,
    obtenerBebidas,
    peticionSimultanea,
    obtenerProductosEnPromocion,
    obtenerProductosFavoritos,
  };
};
