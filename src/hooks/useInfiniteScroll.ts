import { useCallback, useRef, useState } from 'react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  TypedUseQuery,
} from '@reduxjs/toolkit/query/react';

interface InfiniteScrollProps<TData> {
  queryHook: TypedUseQuery<
    TData[],
    { page: number; limit: number },
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, unknown, FetchBaseQueryMeta>
  >;
  queryArg: { limit: number };
}

export const useInfiniteScroll = <TData>({ queryHook, queryArg }: InfiniteScrollProps<TData>) => {
  const [pageNum, setPageNum] = useState<number>(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const { data, isLoading, isFetching, error, isError, isSuccess } = queryHook({
    ...queryArg,
    page: pageNum,
  });

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading || isFetching) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data && data.length > 0) {
          setPageNum((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetching, data],
  );

  const resetPageNum = useCallback(() => {
    setPageNum(1);
  }, []);

  return {
    pageNum,
    lastElementRef,
    resetPageNum,
    data,
    isError,
    isSuccess,
    isLoading,
    isFetching,
    error,
  };
};

export const useInfiniteScrollLocal = (isLoading: boolean, totalPages?: number) => {
  const [pageNum, setPageNum] = useState<number>(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: Element) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (totalPages && entries[0].isIntersecting && pageNum < totalPages) {
          setPageNum((prev) => prev + 1);
        }
        if (!totalPages && entries[0].isIntersecting && pageNum) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, totalPages],
  );

  const resetPageNum = useCallback(() => {
    setPageNum(1);
  }, []);

  return { pageNum, lastElementRef, resetPageNum };
};
