import {PaginationRequest} from '../interfaces/Paginacion';

export const getUrlPagination = (model: PaginationRequest) => {
  let urlBase = `?PageIndex=${model.pageIndex}&PageSize=${model.pageSize}`;
  if (model.sort) urlBase += `&sort=${model.sort}`;
  if (model.search) urlBase += `&search=${model.search}`;
  return urlBase;
};
