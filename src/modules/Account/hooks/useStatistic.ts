import { useDispatch, useSelector } from 'react-redux';
import { selectAccountStatisitcProps } from '../api/account.selector';
import { useGetUserStatisticsQuery } from '@/store/Statistics/Statistics.api';
import { useEffect } from 'react';
import { accountAction } from '../api/accountSlice';

export const useStatistic = (id: string) => {
  const statistic = useSelector(selectAccountStatisitcProps);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetUserStatisticsQuery({ id });

  useEffect(() => {
    if (data) {
      dispatch(accountAction.setStatistic(data.data.statistic));
    }
  }, [data, dispatch]);

  return {
    statistic,
    isLoading,
    error,
  };
};
