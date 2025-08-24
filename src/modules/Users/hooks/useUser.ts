import { useGetUserStatisticsQuery } from '@/store/Statistics/Statistics.api';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';

export const useUser = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: statisticsResponse,
    error: statisticsError,
    isLoading: isStatisticsLoading,
  } = useGetUserStatisticsQuery(id ? { id } : skipToken);

  const statistics = statisticsResponse?.data.statistic;
  const user = statisticsResponse?.data;

  return {
    user,
    statistics,
    statisticsError,
    isStatisticsLoading,
  };
};
