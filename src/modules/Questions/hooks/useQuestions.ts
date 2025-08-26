import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useGetQuestionsQuery } from '../api/questions.api';
import { useMemo } from 'react';
import { transformQuestions } from '../api/questions.transform';

export const useQuestions = () => {
  const { data, lastElementRef, isLoading, isFetching, error } = useInfiniteScroll({
    queryHook: useGetQuestionsQuery,
    queryArg: { limit: 5 },
  });

  const questions = useMemo(() => transformQuestions(data || []), [data]);

  return {
    questions,
    isLoading,
    isFetching,
    error,
    lastElementRef,
  };
};
