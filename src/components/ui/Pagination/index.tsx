'use client';

import { useMemo } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { useUpdateQueryParams } from '@/hooks/common/use-update-query-params';

import { paginationItemStyles } from './Pagination.styles';
import { PaginationProps } from './Pagination.types';

export const DOTS = '...';

export const getRange = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export function Pagination(props: PaginationProps) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    itemClassName,
  } = props;

  const { updateQueryParams } = useUpdateQueryParams();

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return getRange(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = getRange(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  if (currentPage <= 0 || paginationRange.length < 2) {
    return null;
  }

  const handlePageChange = (page: number) => {
    updateQueryParams([
      {
        key: 'page',
        value: String(page),
      },
    ]);
  };

  const onNext = () => {
    const nextPage = currentPage + 1;
    if (onPageChange) {
      onPageChange?.(nextPage);
    } else {
      handlePageChange(nextPage);
    }
  };
  const onPrevious = () => {
    const prevPage = currentPage - 1;
    if (onPageChange) {
      onPageChange?.(prevPage);
    } else {
      handlePageChange(prevPage);
    }
  };
  const onClickPage = (pageNumber: string | number) => () => {
    if (onPageChange) {
      onPageChange?.(pageNumber);
    } else {
      handlePageChange(pageNumber as number);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  const isAtFirstPage = currentPage <= 1;
  const isAtLastPage = currentPage >= Number(lastPage);

  return (
    <ul className={twMerge('flex items-center gap-2', className)}>
      <li>
        <button
          className={paginationItemStyles({
            selected: false,
            className: itemClassName,
          })}
          disabled={isAtFirstPage}
          type="button"
          onClick={onPrevious}
          aria-label="previous page"
        >
          <ArrowLeftIcon size={16} />
        </button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`${pageNumber}-${index}`} className="flex w-6 h-6 items-center justify-center">
              &#8230;
            </li>
          );
        }

        const isActivePage = pageNumber === currentPage;

        return (
          <li key={pageNumber}>
            <button
              className={paginationItemStyles({
                selected: isActivePage,
                className: itemClassName,
              })}
              onClick={onClickPage(pageNumber)}
              type="button"
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li>
        <button
          className={paginationItemStyles({
            selected: false,
            className: itemClassName,
          })}
          disabled={isAtLastPage}
          type="button"
          onClick={onNext}
          aria-label="next page"
        >
          <ArrowRightIcon size={16} />
        </button>
      </li>
    </ul>
  );
}
