export interface PaginationProps {
  onPageChange?: (page: number | string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  itemClassName?: string;
}
