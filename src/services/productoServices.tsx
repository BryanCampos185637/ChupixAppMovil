import ChupixApi from '../api/ChupixApi';
import {getUrlPagination} from '../helpers/getUrlPagination';
import {PaginationRequest, PaginationResponse} from '../interfaces/Paginacion';

export async function getProducts<T>(model: PaginationRequest) {
  console.log('Se ejecuto el servicio getProducts');
  const {data} = await ChupixApi.get<PaginationResponse<T>>(
    `Producto/${getUrlPagination(model)}`,
  );
  return data;
}