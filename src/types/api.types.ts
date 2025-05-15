export type PaginationResponse = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type ApiResponse<T, ShouldPaginate extends boolean = false> = {
  status: 'success' | 'error';
  data: ShouldPaginate extends true ? T[] : T;
} & (ShouldPaginate extends true ? PaginationResponse : {});

export type SortOrder = 'asc' | 'desc';
export type PaginationQuery = Partial<{
  page: number;
  pageSize: number;
  sortOrder: SortOrder;
}>;
