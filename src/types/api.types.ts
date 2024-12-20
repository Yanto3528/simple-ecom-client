export type PaginationResponse = {
  total: number;
  count: number;
  totalPage: number;
  currentPage: number;
  limit: number;
};

export type ApiResponse<T, ShouldPaginate extends boolean = false> = {
  success: boolean;
  data: ShouldPaginate extends true ? T[] : T;
  pagination: ShouldPaginate extends true ? PaginationResponse : undefined;
};
