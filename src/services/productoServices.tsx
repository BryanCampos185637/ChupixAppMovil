import ChupixApi from '../api/ChupixApi';
import {getUrlPagination} from '../helpers/getUrlPagination';
import {PaginationRequest, PaginationResponse} from '../interfaces/Paginacion';
import {Producto} from '../interfaces/Producto';

export const getProductsService = async (model: PaginationRequest) => {
  console.log('Se ejecuto el servicio getProductsService');
  const {data} = await ChupixApi.get<PaginationResponse<Producto[]>>(
    `Producto/${getUrlPagination(model)}`,
  );
  return data;
}

export const getProductosEnPromocionService = async (model: PaginationRequest) => {
  console.log('Se ejecuto el servicio getProductosEnPromocionService');
  const {data} = await ChupixApi.get<PaginationResponse<Producto[]>>(
    `Producto/Promotions/${getUrlPagination(model)}`,
  );
  return data;
}

export const getProductosFavoritosService = async (model: PaginationRequest) => {
  console.log('Se ejecuto el servicio getProductosFavoritosService');
  const {data} = await ChupixApi.get<PaginationResponse<Producto[]>>(
    `ProductoFavorito/${getUrlPagination(model)}`,
  );
  return data;
}

export const marcarComoFavoritosService = async (idProducto: number) => {
  console.log('Se ejecuto el servicio marcarComoFavoritosService');
  await ChupixApi.post('ProductoFavorito', {idProducto});
}

