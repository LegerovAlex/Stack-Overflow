import { useCallback, useRef, useState } from 'react';

export const useInfiniteScroll = (isLoading: boolean, totalPages?: number) => {
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
