import { useSelector } from 'react-redux';
import { selectAccountStatisitcProps } from '../api/account.selector';
import { useGetAccountStatisticQuery } from '../api/account.api';

export const useStatistic = (id: string) => {
  const statistic = useSelector(selectAccountStatisitcProps);

  const { isLoading, error } = useGetAccountStatisticQuery({ id });

  return {
    statistic,
    isLoading,
    error,
  };
};
