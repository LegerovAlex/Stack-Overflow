import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetQuestionsInfiniteQuery } from '../api/questions.api';
import { transformQuestions } from '../api/questions.transform';
import { useAuth } from '@/hooks/useAuth';

export const useQuestions = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetQuestionsInfiniteQuery();

  const { account } = useAuth();

  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  const lockRef = useRef(false);

  useEffect(() => {
    if (inView && hasNextPage && !lockRef.current) {
      lockRef.current = true;
      fetchNextPage().finally(() => {
        lockRef.current = false;
      });
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const questions = transformQuestions(data?.pages.flatMap((page) => page.data) ?? [], account?.id);

  return {
    questions,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    lastElementRef: ref,
  };
};
