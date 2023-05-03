// Generated by https://quicktype.io

export interface PaginationResponse<T> {
  count: number;
  pageIndex: number;
  pageSize: number;
  data: T[];
  pageCount: number;
  search: string;
}

export interface PaginationRequest {
  search?: string;
  sort?: string;
  pageIndex: number;
  pageSize: number;
}
